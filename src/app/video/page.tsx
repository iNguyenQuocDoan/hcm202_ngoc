'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Volume1,
  Maximize,
  Minimize,
  Clapperboard,
  ArrowUpRight,
  Clock,
  Sparkles,
  RotateCcw,
  Activity,
  Bookmark,
  ExternalLink,
} from 'lucide-react';
import { Footer } from '@/shared/components/layout';
import { Reveal, ScrollProgress, TiltCard, Stagger, StaggerItem } from '@/shared/components/motion';
import { cn } from '@/shared/utils';

// Helper to format seconds to MM:SS
function formatTime(sec: number) {
  if (isNaN(sec)) return '00:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

interface Chapter {
  id: string;
  title: string;
  start: number; // in seconds
  end: number;
  description: string;
}

const CHAPTERS: Chapter[] = [
  {
    id: 'mo-dau',
    title: 'Giới thiệu: Khủng hoảng & Đổi mới',
    start: 0,
    end: 40,
    description:
      'Tổng quan bối cảnh khủng hoảng kinh tế năm 1991 và bước ngoặt đổi mới của Việt Nam.',
  },
  {
    id: 'chuong-1',
    title: 'Chương 1: Sụp đổ khối COMECON',
    start: 40,
    end: 100,
    description:
      'Cú sốc ngoại sinh khi Liên Xô tan rã, cắt đứt hoàn toàn viện trợ và 80% thị trường xuất nhập khẩu.',
  },
  {
    id: 'chuong-2',
    title: 'Chương 2: Khủng hoảng Lạm phát',
    start: 100,
    end: 159,
    description:
      'Điểm đứt gãy bên trong với siêu lạm phát 67.5% và sự đổ vỡ của các hợp tác xã tín dụng.',
  },
  {
    id: 'chuong-3',
    title: 'Chương 3: Cởi trói Kinh tế',
    start: 159,
    end: 230,
    description:
      'Áp dụng Khoán 10 nông nghiệp, Luật Doanh nghiệp tư nhân 1990 và xóa bao cấp quốc doanh.',
  },
  {
    id: 'chuong-4',
    title: 'Chương 4: Phá thế Cô lập',
    start: 230,
    end: 290,
    description:
      'Xoay trục ngoại giao, bình thường hóa quan hệ Việt - Trung và mở rộng thị trường sang ASEAN, Đông Á.',
  },
  {
    id: 'chuong-5',
    title: 'Chương 5: Trái ngọt & Bài học',
    start: 290,
    end: 356,
    description:
      'GDP tăng trưởng bình quân 8.2% (1991-1995) và bài học về tự lực tự cường, lấy dân làm gốc.',
  },
];

const TAKEAWAYS = [
  {
    title: 'Khơi dậy Sức dân',
    desc: 'Lấy dân làm gốc và đặt lợi ích của nhân dân lên trên hết là chìa khóa để giải quyết mọi khủng hoảng kinh tế, xã hội.',
    icon: Sparkles,
  },
  {
    title: 'Tự lực Tự cường',
    desc: 'Khi ngoại lực bị cắt đứt, việc khơi thông và phát huy tối đa nguồn lực nội tại là yếu tố tiên quyết để sinh tồn và vươn lên.',
    icon: Activity,
  },
  {
    title: 'Kiên định Mục tiêu',
    desc: 'Giữ vững nguyên tắc cốt lõi về chủ quyền và định hướng, đồng thời linh hoạt, sáng tạo trong cách làm và giải pháp.',
    icon: Bookmark,
  },
  {
    title: 'Chủ động Hội nhập',
    desc: 'Mở cửa đối ngoại trên tinh thần tôn trọng lẫn nhau, đa phương hóa quan hệ quốc tế để tạo môi trường hòa bình phát triển.',
    icon: ExternalLink,
  },
];

const HERO_SIGNAL_DOTS = Array.from({ length: 12 }, (_, index) => index);
const FILM_EDGE_FRAMES = Array.from({ length: 20 }, (_, index) => index);

export default function VideoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(356); // Default fallback to 356s (new video duration)
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  // Timeline hover coordinates for tooltip
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverX, setHoverX] = useState<number>(0);
  const [hoverChapter, setHoverChapter] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

  // Format dynamic buffered range percentage
  const [bufferedPercent, setBufferedPercent] = useState(0);

  // Active indices based on time
  const activeChapter = useMemo(() => {
    const current = CHAPTERS.find((ch) => currentTime >= ch.start && currentTime < ch.end);
    return current ? current.id : CHAPTERS[0].id;
  }, [currentTime]);

  const activeChapterIndex = useMemo(
    () =>
      Math.max(
        0,
        CHAPTERS.findIndex((ch) => ch.id === activeChapter),
      ),
    [activeChapter],
  );
  const activeChapterData = CHAPTERS[activeChapterIndex] ?? CHAPTERS[0];
  const nextChapter = CHAPTERS[activeChapterIndex + 1];
  const chapterProgressPercent = useMemo(() => {
    const chapterDuration = activeChapterData.end - activeChapterData.start;
    if (chapterDuration <= 0) return 0;

    return Math.max(
      0,
      Math.min(100, ((currentTime - activeChapterData.start) / chapterDuration) * 100),
    );
  }, [activeChapterData, currentTime]);

  // Sync volume state to actual HTML5 video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = isMuted ? 0 : volume;
      videoRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  // Sync playback rate
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Monitor fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Keyboard controls listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid hotkey conflict when focused on fields
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case ' ': // Space: toggle play
          e.preventDefault();
          togglePlay();
          break;
        case 'm': // M: toggle mute
          e.preventDefault();
          setIsMuted((prev) => !prev);
          break;
        case 'f': // F: toggle fullscreen
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'arrowleft': // Left Arrow: Rewind 10s
          e.preventDefault();
          seekDelta(-10);
          break;
        case 'arrowright': // Right Arrow: Forward 10s
          e.preventDefault();
          seekDelta(10);
          break;
        case 'arrowup': // Up Arrow: Vol up
          e.preventDefault();
          setVolume((prev) => {
            const v = Math.min(1, prev + 0.1);
            setIsMuted(v === 0);
            return v;
          });
          break;
        case 'arrowdown': // Down Arrow: Vol down
          e.preventDefault();
          setVolume((prev) => {
            const v = Math.max(0, prev - 0.1);
            setIsMuted(v === 0);
            return v;
          });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlaying, volume, isMuted, isFullscreen, duration]);

  // Video event handlers
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);

      // Update buffered percent
      if (videoRef.current.buffered.length > 0) {
        const bufferedEnd = videoRef.current.buffered.end(videoRef.current.buffered.length - 1);
        setBufferedPercent((bufferedEnd / videoRef.current.duration) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handlePlayState = (playing: boolean) => {
    setIsPlaying(playing);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => {
        console.error('Play request interrupted:', err);
      });
    }
  };

  const seekTo = (seconds: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = seconds;
    setCurrentTime(seconds);
    if (!isPlaying) {
      videoRef.current.play().catch(() => {});
    }
  };

  const seekDelta = (seconds: number) => {
    if (!videoRef.current) return;
    let newTime = videoRef.current.currentTime + seconds;
    newTime = Math.max(0, Math.min(duration, newTime));
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleRateChange = (rate: number) => {
    setPlaybackRate(rate);
  };

  // Fullscreen controller
  const toggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!isFullscreen) {
      playerContainerRef.current.requestFullscreen().catch((err) => {
        console.error('Failed to request fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Timeline seeking by clicking
  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickRatio = Math.max(0, Math.min(1, clickX / rect.width));
    seekTo(clickRatio * duration);
  };

  // Scrub dragging mechanism
  const handleTimelineMouseDown = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!timelineRef.current || !videoRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const dragX = e.clientX - rect.left;
      const dragRatio = Math.max(0, Math.min(1, dragX / rect.width));
      const targetTime = dragRatio * duration;
      videoRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, duration]);

  // Timeline hover tooltip info
  const handleTimelineMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const hoverXPos = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, hoverXPos / rect.width));
    const time = ratio * duration;
    setHoverTime(time);
    setHoverX(hoverXPos);

    const chapter = CHAPTERS.find((ch) => time >= ch.start && time < ch.end);
    setHoverChapter(chapter ? chapter.title : null);
  };

  const handleTimelineMouseLeave = () => {
    setHoverTime(null);
    setHoverChapter(null);
  };

  // Hide control overlay on mouse idle in fullscreen or standard view
  const handleMouseMovePlayer = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2800);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <ScrollProgress />

      <main className="flex flex-1 flex-col pt-28 md:pt-32">
        {/* Intro Hero Section */}
        <section className="border-ink/10 relative overflow-hidden border-b pt-6 pb-12">
          {/* Animated decorative backdrop orbs */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="orb-1 absolute top-20 -right-20 h-[36rem] w-[36rem] rounded-full opacity-10 blur-[100px]"
              style={{ background: 'oklch(0.52 0.196 26)' }}
            />
            <div
              className="orb-2 absolute bottom-10 -left-20 h-[30rem] w-[30rem] rounded-full opacity-10 blur-[100px]"
              style={{ background: 'oklch(0.82 0.150 78)' }}
            />
            <div className="projector-sweep from-sun/20 via-flame/10 absolute top-[-24%] left-[18%] h-[140%] w-44 bg-linear-to-b to-transparent blur-3xl md:w-64" />
            <div className="absolute inset-x-8 top-7 hidden items-center justify-between md:flex">
              {HERO_SIGNAL_DOTS.map((dot) => (
                <span
                  key={dot}
                  className="signal-dot bg-flame/20 h-1.5 w-8 rounded-full"
                  style={{ animationDelay: `${dot * 120}ms` }}
                />
              ))}
            </div>
            <div className="grain absolute inset-0 opacity-20" />
          </div>

          <div className="relative mx-auto w-full max-w-6xl px-4 text-center">
            <Reveal>
              <span className="border-ink/12 bg-paper/80 font-display text-flame inline-flex items-center gap-2 rounded-full border px-4.5 py-1.5 text-[10px] tracking-[0.35em] uppercase shadow-sm">
                <Clapperboard className="h-3.5 w-3.5" strokeWidth={1.8} />
                Phần II · Tư liệu Video
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-display text-ink mt-6 text-[10vw] leading-[1.05] font-black tracking-tight sm:text-[4rem]">
                Vượt Bão <span className="text-flame italic">1991</span> — Bài Học Đổi Mới
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-ink-soft mx-auto mt-5 max-w-2xl text-[15.5px] leading-relaxed sm:text-[17px]">
                Phim tư liệu ngắn tái hiện bối cảnh lịch sử đầy biến động năm 1991, phân tích cách
                thức Việt Nam vận dụng sáng tạo Tư tưởng Hồ Chí Minh để tự lực tự cường vượt qua
                khủng hoảng kinh tế và bài học định hình phát triển cho đất nước hôm nay.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="text-ink-soft mt-6 flex flex-wrap justify-center gap-4 text-xs font-semibold tracking-wider uppercase">
                <span className="press border-ink/5 bg-paper-deep hover:border-flame/20 hover:text-flame flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 transition-colors duration-300">
                  <Clock className="text-flame h-3.5 w-3.5" />
                  Thời lượng: 05:56
                </span>
                <span className="press border-ink/5 bg-paper-deep hover:border-flame/20 hover:text-flame flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 transition-colors duration-300">
                  <Sparkles className="text-flame h-3.5 w-3.5" />
                  Định dạng: Full HD
                </span>
                <span className="press border-ink/5 bg-paper-deep hover:border-flame/20 hover:text-flame flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 transition-colors duration-300">
                  <Activity className="text-flame h-3.5 w-3.5" />
                  Học phần: Tư tưởng Hồ Chí Minh
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <div
                aria-hidden
                className="mx-auto mt-7 flex max-w-2xl items-center justify-center gap-1.5 overflow-hidden"
              >
                {HERO_SIGNAL_DOTS.map((dot) => (
                  <span
                    key={dot}
                    className="signal-dot bg-flame/25 h-1 w-7 rounded-full"
                    style={{ animationDelay: `${dot * 90}ms` }}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Video Player + Chapters Layout Grid */}
        <section className="bg-paper-deep/45 relative overflow-hidden py-12 md:py-16">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="via-flame/25 absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent" />
            <div className="projector-sweep from-sun/18 via-flame/8 absolute top-[-24%] right-[-12%] h-[132%] w-56 bg-linear-to-b to-transparent blur-3xl md:w-80" />
            <div className="border-paper/10 bg-storm/90 absolute top-0 left-0 hidden h-full w-12 overflow-hidden border-r md:block">
              <div className="reel-advance flex flex-col gap-3 px-3 py-3">
                {[...FILM_EDGE_FRAMES, ...FILM_EDGE_FRAMES].map((frame, index) => (
                  <span
                    key={`left-${frame}-${index}`}
                    className="border-paper/10 bg-paper/12 h-5 rounded-[4px] border"
                  />
                ))}
              </div>
            </div>
            <div className="border-paper/10 bg-storm/90 absolute top-0 right-0 hidden h-full w-12 overflow-hidden border-l md:block">
              <div className="reel-advance flex flex-col gap-3 px-3 py-3 [animation-direction:reverse]">
                {[...FILM_EDGE_FRAMES, ...FILM_EDGE_FRAMES].map((frame, index) => (
                  <span
                    key={`right-${frame}-${index}`}
                    className="border-paper/10 bg-paper/12 h-5 rounded-[4px] border"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-8">
            {/* 1. Video Player Container */}
            <div className="relative mx-auto w-full max-w-6xl">
              <div
                aria-hidden
                className={cn(
                  'video-aura absolute -inset-4 rounded-[2rem] blur-2xl transition-opacity duration-700 md:-inset-6',
                  isPlaying ? 'opacity-80' : 'opacity-35',
                )}
                style={{
                  background:
                    'radial-gradient(circle at 50% 45%, oklch(0.52 0.196 26 / 0.45), oklch(0.82 0.150 78 / 0.16) 42%, transparent 72%)',
                }}
              />
              <div
                aria-hidden
                className="border-paper/15 bg-storm text-paper absolute -top-3 -left-3 z-10 hidden items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.24em] uppercase shadow-xl md:flex"
              >
                <span
                  className={cn(
                    'h-1.5 w-1.5 rounded-full',
                    isPlaying ? 'signal-live bg-flame' : 'bg-paper/35',
                  )}
                />
                DOC 1991
              </div>
              <div
                ref={playerContainerRef}
                onMouseMove={handleMouseMovePlayer}
                onMouseLeave={() => isPlaying && setShowControls(false)}
                className={cn(
                  'group/player bg-storm relative w-full overflow-hidden transition-all duration-500 select-none',
                  isFullscreen
                    ? 'flex h-screen w-screen items-center justify-center'
                    : cn(
                        'aspect-video rounded-3xl border shadow-[0_30px_60px_-15px_oklch(0.20_0.038_250/0.3)]',
                        isPlaying
                          ? 'border-flame/35 shadow-[0_42px_90px_-24px_oklch(0.52_0.196_26/0.55)]'
                          : 'border-ink/12 hover:shadow-[0_40px_85px_-20px_oklch(0.20_0.038_250/0.45)]',
                      ),
                )}
              >
                <video
                  ref={videoRef}
                  src="/video/Project 2.mp4"
                  poster="/images/video-poster-1991.png"
                  preload="metadata"
                  onClick={togglePlay}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onPlay={() => handlePlayState(true)}
                  onPause={() => handlePlayState(false)}
                  onWaiting={() => setIsLoading(true)}
                  onPlaying={() => setIsLoading(false)}
                  className={cn(
                    'h-full w-full object-contain transition duration-700',
                    isPlaying
                      ? 'brightness-105 contrast-[1.03] saturate-[1.04]'
                      : 'brightness-[0.9]',
                  )}
                />

                {/* Grain filter over video to match historical aesthetic */}
                <div className="grain pointer-events-none absolute inset-0 opacity-15" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.055] mix-blend-soft-light"
                  style={{
                    background:
                      'repeating-linear-gradient(0deg, transparent 0 7px, oklch(0.964 0.018 78 / 0.8) 7px 8px)',
                  }}
                />
                <div
                  aria-hidden
                  className={cn(
                    'cinema-scanline pointer-events-none absolute inset-x-0 top-0 h-24 transition-opacity duration-500',
                    isPlaying ? 'opacity-100' : 'opacity-40',
                  )}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 50%, transparent 48%, oklch(0.20 0.038 250 / 0.72) 100%)',
                  }}
                />

                <div
                  className={cn(
                    'text-paper absolute top-3 right-3 left-3 z-10 flex items-start justify-between gap-3 transition-all duration-300 sm:top-4 sm:right-4 sm:left-4',
                    showControls || !isPlaying
                      ? 'translate-y-0 opacity-100'
                      : 'pointer-events-none -translate-y-2 opacity-0',
                  )}
                >
                  <div className="border-paper/10 bg-storm/58 max-w-[74%] rounded-2xl border px-3.5 py-3 shadow-2xl backdrop-blur-md sm:max-w-md sm:px-4">
                    <div className="font-display text-flame-soft flex items-center gap-2 text-[9px] font-semibold tracking-[0.28em] uppercase">
                      <span
                        className={cn(
                          'h-1.5 w-1.5 rounded-full',
                          isPlaying ? 'signal-live bg-flame' : 'bg-paper/35',
                        )}
                      />
                      Đang xem
                    </div>
                    <h3 className="font-display text-paper mt-1 text-xs leading-snug font-bold sm:text-sm">
                      {activeChapterData.title}
                    </h3>
                    <div className="bg-paper/12 mt-2 h-1 overflow-hidden rounded-full">
                      <div
                        className="from-flame via-sun to-flame-soft h-full rounded-full bg-linear-to-r transition-all duration-300"
                        style={{ width: `${chapterProgressPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="border-paper/12 bg-paper/10 text-paper hidden shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.24em] uppercase backdrop-blur-md sm:flex">
                    <span
                      className={cn(
                        'h-1.5 w-1.5 rounded-full',
                        isPlaying ? 'signal-live bg-flame' : 'bg-paper/35',
                      )}
                    />
                    {isPlaying ? 'REC' : 'READY'}
                  </div>
                </div>

                {/* Loading spinner overlay */}
                {isLoading && (
                  <div className="bg-storm/60 absolute inset-0 z-20 flex items-center justify-center backdrop-blur-xs">
                    <div className="border-paper/20 border-t-flame h-10 w-10 animate-spin rounded-full border-4" />
                  </div>
                )}

                {/* Big Play Button Overlay on Pause */}
                {!isPlaying && !isLoading && (
                  <button
                    onClick={togglePlay}
                    aria-label="Phát video"
                    className="press border-paper/15 bg-storm/75 text-paper hover:border-flame hover:text-flame absolute top-1/2 left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:scale-110"
                  >
                    <span
                      aria-hidden
                      className="play-ripple border-flame/50 absolute inset-0 rounded-full border"
                    />
                    <Play className="ml-1 h-8 w-8 fill-current" />
                  </button>
                )}

                {/* Custom Controls Bar */}
                <div
                  className={cn(
                    'from-storm/95 via-storm/85 absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 bg-linear-to-t to-transparent px-4 pt-10 pb-4 transition-all duration-300',
                    showControls
                      ? 'translate-y-0 opacity-100'
                      : 'pointer-events-none translate-y-2 opacity-0',
                  )}
                >
                  {/* Timeline Slider Track */}
                  <div className="group/timeline relative flex h-4 items-center">
                    <div
                      ref={timelineRef}
                      onClick={handleTimelineClick}
                      onMouseDown={handleTimelineMouseDown}
                      onMouseMove={handleTimelineMouseMove}
                      onMouseLeave={handleTimelineMouseLeave}
                      className="bg-paper/20 relative h-1.5 w-full cursor-pointer rounded-full transition-all duration-200 group-hover/timeline:h-2.5"
                    >
                      {/* Buffered Bar */}
                      <div
                        className="bg-paper/15 absolute inset-y-0 left-0 rounded-full"
                        style={{ width: `${bufferedPercent}%` }}
                      />
                      {/* Current Progress bar */}
                      <div
                        className="bg-flame absolute inset-y-0 left-0 overflow-hidden rounded-full"
                        style={{ width: `${progressPercent}%` }}
                      >
                        <span
                          aria-hidden
                          className={cn(
                            'timeline-shimmer via-paper/70 absolute inset-y-0 -left-12 w-12 bg-linear-to-r from-transparent to-transparent',
                            isPlaying ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                      </div>
                      {/* Progress Scrubber Knob */}
                      <div
                        className="bg-paper border-flame absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 opacity-0 shadow-lg transition-opacity duration-150 group-hover/timeline:opacity-100"
                        style={{ left: `calc(${progressPercent}% - 7px)` }}
                      />

                      {/* Chapter Markers Ticks */}
                      {CHAPTERS.map((ch) => {
                        const isMarkerActive = activeChapter === ch.id;
                        return (
                          <div
                            key={ch.id}
                            className={cn(
                              'absolute top-0 bottom-0 w-0.5 transition-all duration-300',
                              isMarkerActive
                                ? 'bg-paper shadow-[0_0_12px_oklch(0.82_0.150_78/0.8)]'
                                : 'bg-storm/80',
                            )}
                            style={{ left: `${(ch.start / duration) * 100}%` }}
                          />
                        );
                      })}
                    </div>

                    {/* Timeline Tooltip */}
                    {hoverTime !== null && (
                      <div
                        className="border-paper/10 bg-storm/95 text-paper pointer-events-none absolute bottom-6 z-30 flex -translate-x-1/2 flex-col items-center gap-1 rounded-xl border px-3 py-2 text-[11px] whitespace-nowrap shadow-2xl"
                        style={{ left: `${hoverX}px` }}
                      >
                        <span className="font-display text-flame-soft font-bold">
                          {hoverChapter}
                        </span>
                        <span className="text-paper/70 font-mono">{formatTime(hoverTime)}</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Row */}
                  <div className="text-paper flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {/* Play/Pause icon */}
                      <button
                        onClick={togglePlay}
                        aria-label={isPlaying ? 'Tạm dừng' : 'Phát'}
                        className="press hover:bg-paper/10 flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="h-5 w-5 fill-current" />
                        ) : (
                          <Play className="ml-0.5 h-5 w-5 fill-current" />
                        )}
                      </button>

                      {/* Rewind */}
                      <button
                        onClick={() => seekDelta(-10)}
                        aria-label="Tua lùi 10 giây"
                        className="press hover:bg-paper/10 hidden h-9 w-9 items-center justify-center rounded-full transition-colors sm:flex"
                      >
                        <RotateCcw className="h-4.5 w-4.5" />
                      </button>

                      {/* Time display */}
                      <div className="text-paper/80 font-mono text-xs select-none">
                        {formatTime(currentTime)} <span className="opacity-40">/</span>{' '}
                        {formatTime(duration)}
                      </div>
                    </div>

                    {/* Right controls: Playback rate, volume, fullscreen */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      {/* Playback speed menu */}
                      <div className="group/speed relative">
                        <button
                          aria-label="Tốc độ phát"
                          className="press border-paper/10 bg-paper/5 hover:bg-paper/10 hover:border-paper/20 rounded-md border px-2 py-1 font-mono text-xs font-bold transition-all"
                        >
                          {playbackRate === 1 ? 'Tốc độ' : `${playbackRate}x`}
                        </button>
                        <div className="pointer-events-none absolute right-0 bottom-full flex w-20 translate-y-2 scale-95 flex-col pb-2.5 text-center opacity-0 shadow-2xl transition-all duration-200 group-hover/speed:pointer-events-auto group-hover/speed:translate-y-0 group-hover/speed:scale-100 group-hover/speed:opacity-100">
                          <div className="border-paper/10 bg-storm/95 flex flex-col overflow-hidden rounded-xl border">
                            {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                              <button
                                key={rate}
                                onClick={() => handleRateChange(rate)}
                                className={cn(
                                  'hover:bg-paper/10 py-1.5 font-mono text-xs transition-colors',
                                  playbackRate === rate
                                    ? 'bg-flame text-paper font-bold'
                                    : 'text-paper/70',
                                )}
                              >
                                {rate}x
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Volume controls */}
                      <div className="group/volume flex items-center gap-1.5">
                        <button
                          onClick={toggleMute}
                          aria-label={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
                          className="press hover:bg-paper/10 flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                        >
                          {isMuted ? (
                            <VolumeX className="h-5 w-5" />
                          ) : volume < 0.4 ? (
                            <Volume1 className="h-5 w-5" />
                          ) : (
                            <Volume2 className="h-5 w-5" />
                          )}
                        </button>

                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={isMuted ? 0 : volume}
                          onChange={handleVolumeChange}
                          className="accent-flame bg-paper/20 h-1 w-0 origin-right scale-x-0 cursor-pointer rounded-lg opacity-0 transition-all duration-300 group-hover/volume:w-16 group-hover/volume:scale-x-100 group-hover/volume:opacity-100"
                        />
                      </div>

                      {/* Fullscreen icon */}
                      <button
                        onClick={toggleFullscreen}
                        aria-label={isFullscreen ? 'Thoát toàn màn hình' : 'Mở toàn màn hình'}
                        className="press hover:bg-paper/10 flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                      >
                        {isFullscreen ? (
                          <Minimize className="h-5 w-5" />
                        ) : (
                          <Maximize className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Interactive Chapters List Grid */}
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="font-display text-ink flex items-center gap-2 text-base font-black tracking-tight uppercase">
                  <Bookmark className="text-flame h-4.5 w-4.5" />
                  Phân cảnh bài học
                </h2>
                <div className="border-ink/8 bg-paper/65 flex max-w-full items-center gap-2 overflow-hidden rounded-full border px-3.5 py-2 text-[11px] shadow-sm backdrop-blur-sm">
                  <span className="signal-live bg-flame h-1.5 w-1.5 shrink-0 rounded-full" />
                  <span className="font-display text-flame shrink-0 font-bold tracking-[0.22em] uppercase">
                    Đang chiếu
                  </span>
                  <span className="text-ink-soft shrink-0 font-mono">
                    {formatTime(activeChapterData.start)}
                  </span>
                  {nextChapter && (
                    <span className="text-ink-mute hidden truncate md:inline">
                      Tiếp: {nextChapter.title}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {CHAPTERS.map((ch, idx) => {
                  const isActive = activeChapter === ch.id;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => seekTo(ch.start)}
                      className={cn(
                        'press group/chapter relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 md:p-6',
                        isActive
                          ? 'chapter-glow border-flame bg-paper scale-[1.01] shadow-[inset_0_1px_0_oklch(1_0_0/0.45),0_15px_30px_-15px_oklch(0.52_0.196_26/0.25)]'
                          : 'bg-paper/40 border-ink/8 hover:border-ink/15 hover:bg-paper/60 hover:shadow-[0_10px_20px_-10px_oklch(0_0_0/0.05)]',
                      )}
                    >
                      <div
                        aria-hidden
                        className={cn(
                          'pointer-events-none absolute inset-0 transition-opacity duration-500',
                          isActive ? 'opacity-100' : 'opacity-0',
                        )}
                      >
                        <span className="chapter-sweep via-flame/[0.08] absolute inset-y-0 -left-1/2 w-1/2 bg-linear-to-r from-transparent to-transparent" />
                        <span className="via-flame/50 absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent" />
                      </div>

                      <div className="relative z-10 flex gap-3.5">
                        <span
                          className={cn(
                            'font-display shrink-0 text-xl font-black transition-colors duration-300 select-none',
                            isActive ? 'text-flame' : 'text-ink-mute',
                          )}
                        >
                          0{idx + 1}
                        </span>
                        <div>
                          <h3
                            className={cn(
                              'font-display text-sm leading-tight font-bold tracking-tight',
                              isActive ? 'text-flame' : 'text-ink',
                            )}
                          >
                            {ch.title}
                          </h3>
                          <p className="text-ink-soft mt-1.5 text-[12.5px] leading-relaxed">
                            {ch.description}
                          </p>
                        </div>
                      </div>

                      {/* Time tag / Pulse Indicator */}
                      <div className="relative z-10 mt-auto flex items-center gap-2 self-end pt-2">
                        {isActive && (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="bg-flame/75 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                            <span className="bg-flame relative inline-flex h-1.5 w-1.5 rounded-full" />
                          </span>
                        )}
                        <span
                          className={cn(
                            'rounded-full border px-2.5 py-0.5 font-mono text-[10px]',
                            isActive
                              ? 'bg-flame/[0.06] border-flame/20 text-flame font-semibold'
                              : 'bg-paper-deep/60 border-ink/8 text-ink-soft',
                          )}
                        >
                          {formatTime(ch.start)}
                        </span>
                      </div>
                      {isActive && (
                        <div className="bg-flame/12 absolute inset-x-0 bottom-0 h-1">
                          <div
                            className="from-flame via-sun to-flame-soft h-full rounded-r-full bg-linear-to-r transition-all duration-300"
                            style={{ width: `${chapterProgressPercent}%` }}
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Takeaway Lessons Section */}
        <section className="bg-paper relative overflow-hidden py-16">
          <div className="grain pointer-events-none absolute inset-0 opacity-25" />
          <div className="relative mx-auto max-w-6xl px-4">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <div className="flex items-center gap-3">
                <span className="bg-flame h-px w-8" />
                <span className="font-display text-flame text-[10px] font-semibold tracking-[0.32em] uppercase">
                  Đúc kết tư liệu
                </span>
                <span className="bg-flame h-px w-8" />
              </div>
              <h2 className="font-display text-ink md:text-3.5xl text-2xl leading-tight font-black tracking-tight">
                Bốn Điểm Nhấn Vượt Bão
              </h2>
            </div>

            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TAKEAWAYS.map((takeaway, i) => {
                const Icon = takeaway.icon;
                return (
                  <StaggerItem key={takeaway.title} className="h-full">
                    <TiltCard className="lift group/card border-ink/10 bg-paper-deep/60 flex h-full flex-col rounded-3xl border p-6">
                      <div className="border-ink/12 bg-paper text-flame ease-out-quart group-hover/card:bg-flame group-hover/card:text-paper flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 group-hover/card:scale-110">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </div>

                      <h3 className="font-display text-ink mt-5 text-base font-bold tracking-tight">
                        {takeaway.title}
                      </h3>
                      <p className="text-ink-soft mt-2 text-[13.5px] leading-relaxed">
                        {takeaway.desc}
                      </p>
                    </TiltCard>
                  </StaggerItem>
                );
              })}
            </Stagger>

            {/* Link back to Theory page */}
            <Reveal delay={0.2} className="mt-12 text-center">
              <div className="inline-flex flex-col items-center gap-4">
                <p className="text-ink-soft text-sm">
                  Để tìm hiểu sâu hơn về bối cảnh lịch sử và 5 luận điểm của Tư tưởng Hồ Chí Minh:
                </p>
                <Link
                  href="/ly-thuyet"
                  className="press group bg-ink font-display text-paper hover:bg-flame inline-flex items-center gap-2 rounded-full py-2 pr-2 pl-6 text-xs font-semibold tracking-[0.2em] uppercase"
                >
                  Đọc phần lý thuyết chi tiết
                  <span className="bg-paper/15 flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowUpRight className="text-paper h-3.5 w-3.5" strokeWidth={1.6} />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
