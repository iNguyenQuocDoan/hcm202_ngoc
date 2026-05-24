'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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
  FileText,
  Bookmark,
  ExternalLink,
} from 'lucide-react';
import { Footer } from '@/shared/components/layout';
import { Reveal, ScrollProgress, TiltCard, Stagger, StaggerItem } from '@/shared/components/motion';
import { IMAGES } from '@/shared/assets/images';
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
    title: 'Mở đầu & Bối cảnh Lịch sử',
    start: 0,
    end: 70, // 01:10
    description: 'Đại hội VII năm 1991 diễn ra giữa lúc hệ thống xã hội chủ nghĩa ở Liên Xô và Đông Âu khủng hoảng nghiêm trọng.',
  },
  {
    id: 'thu-thach',
    title: 'Thử thách & Khó khăn Chồng chất',
    start: 70,
    end: 160, // 02:40
    description: 'Mỹ cấm vận khắc nghiệt, nước ta mất đi nguồn viện trợ và thị trường truyền thống, đòi hỏi lối thoát tự chủ.',
  },
  {
    id: 'tu-tuong',
    title: 'Vận dụng Tư tưởng Hồ Chí Minh',
    start: 160,
    end: 270, // 04:30
    description: 'Khơi dậy sức mạnh của lòng dân qua tinh thần lấy dân làm gốc, tự lực tự cường và đại đoàn kết.',
  },
  {
    id: 'chinh-sach',
    title: 'Chính sách Đổi mới Thực tiễn',
    start: 270,
    end: 360, // 06:00
    description: 'Thừa nhận kinh tế nhiều thành phần, mở cửa ngoại giao và lấy hạnh phúc của dân làm thước đo phát triển.',
  },
  {
    id: 'bai-hoc',
    title: 'Kết quả & Bài học Hôm nay',
    start: 360,
    end: 419, // 06:59
    description: 'Thành tựu tăng trưởng GDP 8.2% (1991-1995) và bài học về bản lĩnh vượt bão trong kỷ nguyên hội nhập.',
  },
];

interface TranscriptItem {
  start: number;
  end: number;
  text: string;
  speaker: string;
}

const TRANSCRIPT: TranscriptItem[] = [
  {
    start: 0,
    end: 15,
    speaker: 'Thuyết minh',
    text: 'Năm 1991. Giữa lúc trật tự thế giới đang đảo lộn dữ dội với sự khủng hoảng và sụp đổ của Liên Xô và Đông Âu, đất nước Việt Nam đứng trước một cơn bão lớn chưa từng có.',
  },
  {
    start: 15,
    end: 35,
    speaker: 'Thuyết minh',
    text: 'Đại hội Đảng toàn quốc lần thứ VII diễn ra trong bầu không khí đầy thử thách. Khủng hoảng kinh tế trong nước cộng hưởng với những biến động dồn dập từ quốc tế đã đặt sự sinh tồn của chế độ và sự phát triển của quốc gia trước bước ngoặt sống còn.',
  },
  {
    start: 35,
    end: 55,
    speaker: 'Thuyết minh',
    text: 'Lạm phát phi mã kéo dài từ cuối những năm 1980 khiến đời sống nhân dân vô cùng chật vật. Nguồn lương thực, thực phẩm thiếu thốn, sản xuất công nghiệp và nông nghiệp bị đình trệ.',
  },
  {
    start: 55,
    end: 70,
    speaker: 'Thuyết minh',
    text: 'Trong cơn giông bão ấy, câu hỏi lớn đặt ra là: Việt Nam sẽ đi về đâu? Làm thế nào để giữ vững độc lập dân tộc và tiếp tục vững bước trên con đường xã hội chủ nghĩa?',
  },
  {
    start: 70,
    end: 95,
    speaker: 'Thuyết minh',
    text: 'Thử thách càng thêm khắc nghiệt khi Hoa Kỳ tiếp tục duy trì chính sách bao vây cấm vận. Việc mất đi nguồn viện trợ tài chính và các bạn hàng truyền thống từ khối Đông Âu đã cắt đứt mạch máu giao thương chủ yếu của nền kinh tế Việt Nam lúc bấy giờ.',
  },
  {
    start: 95,
    end: 120,
    speaker: 'Thuyết minh',
    text: 'Sự hoang mang về tư tưởng bắt đầu xuất hiện trong một bộ phận cán bộ và nhân dân trước sự sụp đổ của mô hình chủ nghĩa xã hội hiện thực ở châu Âu. Đây là lúc bản lĩnh và trí tuệ của một dân tộc kiên cường cần phải được chứng minh.',
  },
  {
    start: 120,
    end: 140,
    speaker: 'Thuyết minh',
    text: 'Đại hội VII của Đảng không chỉ là một kỳ đại hội chuyển giao thế hệ lãnh đạo, mà quan trọng hơn, đó là cột mốc khẳng định ý chí kiên quyết tự đứng trên đôi chân của mình, giữ vững định hướng đã chọn.',
  },
  {
    start: 140,
    end: 160,
    speaker: 'Thuyết minh',
    text: 'Việt Nam không lựa chọn đóng cửa hay thụ động chịu trận, mà quyết định tìm lối thoát bằng con đường mở rộng quan hệ đối ngoại và giải phóng triệt để nội lực quốc gia.',
  },
  {
    start: 160,
    end: 185,
    speaker: 'Thuyết minh',
    text: 'Điểm mấu chốt giúp Việt Nam đứng vững trong cơn bão chính là việc vận dụng sâu sắc và sáng tạo Tư tưởng Hồ Chí Minh. Bài học đầu tiên là "Lấy dân làm gốc". Trong tư tưởng của Người, nước lấy dân làm gốc, cách mạng là sự nghiệp của quần chúng nhân dân.',
  },
  {
    start: 185,
    end: 210,
    speaker: 'Thuyết minh',
    text: 'Thứ hai là bài học "Đại đoàn kết toàn dân". Để vượt qua hoang mang, Đảng và Nhà nước đã chú trọng củng cố niềm tin xã hội, tập hợp mọi tầng lớp nhân dân, biến sức mạnh đại đoàn kết thành động lực vượt qua khó khăn chung.',
  },
  {
    start: 210,
    end: 235,
    speaker: 'Thuyết minh',
    text: 'Đặc biệt, tinh thần "Tự lực, tự cường, tự lực cánh sinh" được khơi dậy mạnh mẽ. Khi viện trợ bên ngoài không còn, người Việt Nam đã tự tìm tòi, sáng tạo trong lao động sản xuất để tự cứu lấy mình.',
  },
  {
    start: 235,
    end: 255,
    speaker: 'Thuyết minh',
    text: 'Phương châm ngoại giao và hành động được xác định: "Kiên định mục tiêu, linh hoạt phương pháp". Chúng ta giữ vững định hướng độc lập dân tộc gắn liền với chủ nghĩa xã hội, nhưng thay đổi cách làm và biện pháp kinh tế cho phù hợp thực tiễn.',
  },
  {
    start: 255,
    end: 270,
    speaker: 'Thuyết minh',
    text: 'Chính sự kiên định trong nguyên tắc và uyển chuyển trong giải pháp đã tạo nên thế đứng vững chãi, đưa đất nước vượt qua hiểm nghèo mà không bị mất phương hướng.',
  },
  {
    start: 270,
    end: 295,
    speaker: 'Thuyết minh',
    text: 'Nhờ sự vận dụng sáng tạo ấy, các chính sách Đổi mới thực tiễn đã nhanh chóng đi vào cuộc sống. Việt Nam chính thức phát triển nền kinh tế hàng hóa nhiều thành phần vận động theo cơ chế thị trường có sự quản lý của Nhà nước.',
  },
  {
    start: 295,
    end: 320,
    speaker: 'Thuyết minh',
    text: 'Xóa bỏ hoàn toàn cơ chế quan liêu bao cấp, thừa nhận quyền tự do kinh doanh hợp pháp của người dân, hộ gia đình và các doanh nghiệp tư nhân. Sự cởi trói về mặt cơ chế đã kích hoạt năng lượng sản xuất vô tận của hàng triệu người dân Việt Nam.',
  },
  {
    start: 320,
    end: 340,
    speaker: 'Thuyết minh',
    text: 'Chính sách đối ngoại cũng có bước chuyển mình lịch sử. Việt Nam tuyên bố "muốn làm bạn với tất cả các nước trong cộng đồng thế giới", chủ động phá vỡ thế bao vây cô lập, từng bước bình thường hóa quan hệ đối ngoại và hội nhập quốc tế rộng rãi.',
  },
  {
    start: 340,
    end: 360,
    speaker: 'Thuyết minh',
    text: 'Đồng thời, mọi hoạt động phát triển kinh tế đều gắn liền với chính sách xã hội, chăm lo đời sống vật chất, tinh thần của nhân dân, lấy sự ấm no hạnh phúc của dân làm thước đo cao nhất cho thành công của Đổi mới.',
  },
  {
    start: 360,
    end: 380,
    speaker: 'Thuyết minh',
    text: 'Những nỗ lực bền bỉ ấy đã mang lại kết quả ngọt ngào. Giai đoạn 1991 - 1995 chứng kiến tốc độ tăng trưởng GDP bình quân hàng năm đạt 8.2%, một con số kỷ lục chứng minh sự đúng đắn của con đường Đổi mới.',
  },
  {
    start: 380,
    end: 400,
    speaker: 'Thuyết minh',
    text: 'Sản xuất công nghiệp tăng trưởng vượt bậc, nông nghiệp phát triển vững chắc giúp Việt Nam từ một nước thiếu đói trở thành nước xuất khẩu gạo lớn trên thế giới, đời sống nhân dân được cải thiện rõ rệt.',
  },
  {
    start: 400,
    end: 419,
    speaker: 'Thuyết minh',
    text: 'Hành trình vượt bão năm 1991 đã để lại những bài học quý báu cho hôm nay. Đó là bài học về niềm tin, về phát huy nội lực tự lực tự cường và lấy nhân dân làm trung tâm trong mọi quyết sách phát triển đất nước bền vững.',
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

export default function VideoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(419); // Default fallback to 419s
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
  const transcriptRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Format dynamic buffered range percentage
  const [bufferedPercent, setBufferedPercent] = useState(0);

  // Active indices based on time
  const activeChapter = useMemo(() => {
    const current = CHAPTERS.find(ch => currentTime >= ch.start && currentTime < ch.end);
    return current ? current.id : CHAPTERS[0].id;
  }, [currentTime]);

  const activeTranscriptIndex = useMemo(() => {
    const idx = TRANSCRIPT.findIndex(item => currentTime >= item.start && currentTime < item.end);
    return idx !== -1 ? idx : 0;
  }, [currentTime]);

  // Synchronize dynamic scrolling of the active transcript paragraph
  useEffect(() => {
    const activeEl = transcriptRefs.current[activeTranscriptIndex];
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeTranscriptIndex]);

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
          setIsMuted(prev => !prev);
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
          setVolume(prev => {
            const v = Math.min(1, prev + 0.1);
            setIsMuted(v === 0);
            return v;
          });
          break;
        case 'arrowdown': // Down Arrow: Vol down
          e.preventDefault();
          setVolume(prev => {
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
      videoRef.current.play().catch(err => {
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
    setIsMuted(prev => !prev);
  };

  const handleRateChange = (rate: number) => {
    setPlaybackRate(rate);
  };

  // Fullscreen controller
  const toggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!isFullscreen) {
      playerContainerRef.current.requestFullscreen().catch(err => {
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

    const chapter = CHAPTERS.find(ch => time >= ch.start && time < ch.end);
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
        <section className="relative overflow-hidden border-b border-ink/10 pb-12 pt-6">
          {/* Animated decorative backdrop orbs */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="orb-1 absolute -right-20 top-20 h-[36rem] w-[36rem] rounded-full opacity-10 blur-[100px]"
              style={{ background: 'oklch(0.52 0.196 26)' }}
            />
            <div
              className="orb-2 absolute -left-20 bottom-10 h-[30rem] w-[30rem] rounded-full opacity-10 blur-[100px]"
              style={{ background: 'oklch(0.82 0.150 78)' }}
            />
            <div className="grain absolute inset-0 opacity-20" />
          </div>

          <div className="relative mx-auto w-full max-w-6xl px-4 text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-paper/80 px-4.5 py-1.5 font-display text-[10px] uppercase tracking-[0.35em] text-flame shadow-sm">
                <Clapperboard className="h-3.5 w-3.5" strokeWidth={1.8} />
                Phần II · Tư liệu Video
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-[10vw] font-black leading-[1.05] tracking-tight text-ink sm:text-[4rem]">
                Vượt Bão <span className="italic text-flame">1991</span> — Bài Học Đổi Mới
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft sm:text-[17px]">
                Phim tư liệu ngắn tái hiện bối cảnh lịch sử đầy biến động năm 1991, phân tích cách thức
                Việt Nam vận dụng sáng tạo Tư tưởng Hồ Chí Minh để tự lực tự cường vượt qua khủng hoảng kinh tế
                và bài học định hình phát triển cho đất nước hôm nay.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-ink-soft">
                <span className="flex items-center gap-1.5 rounded-full bg-paper-deep px-3.5 py-1.5 border border-ink/5">
                  <Clock className="h-3.5 w-3.5 text-flame" />
                  Thời lượng: 06:59
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-paper-deep px-3.5 py-1.5 border border-ink/5">
                  <Sparkles className="h-3.5 w-3.5 text-flame" />
                  Định dạng: Full HD
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-paper-deep px-3.5 py-1.5 border border-ink/5">
                  <Activity className="h-3.5 w-3.5 text-flame" />
                  Học phần: Tư tưởng Hồ Chí Minh
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Video Player + Transcript Layout Grid */}
        <section className="relative bg-paper-deep/45 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              
              {/* Left Column: Player & Chapters */}
              <div className="flex flex-col gap-6 lg:col-span-8">
                
                {/* 1. Custom Player Container */}
                <div
                  ref={playerContainerRef}
                  onMouseMove={handleMouseMovePlayer}
                  onMouseLeave={() => isPlaying && setShowControls(false)}
                  className={cn(
                    'group/player relative overflow-hidden bg-storm select-none',
                    isFullscreen 
                      ? 'w-screen h-screen flex items-center justify-center'
                      : 'aspect-video rounded-3xl border border-ink/12 shadow-[0_22px_44px_-24px_oklch(0.20_0.038_250/0.45)]'
                  )}
                >
                  <video
                    ref={videoRef}
                    src="/video/Vượt_Bão_1991__Bài_Học_Đổi_Mới.mp4"
                    poster={IMAGES.hanoiCity.src}
                    preload="metadata"
                    onClick={togglePlay}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={() => handlePlayState(true)}
                    onPause={() => handlePlayState(false)}
                    onWaiting={() => setIsLoading(true)}
                    onPlaying={() => setIsLoading(false)}
                    className="h-full w-full object-contain"
                  />

                  {/* Grain filter over video to match historical aesthetic */}
                  <div className="grain pointer-events-none absolute inset-0 opacity-15" />

                  {/* Loading spinner overlay */}
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-storm/60 backdrop-blur-xs z-20">
                      <div className="h-10 w-10 animate-spin rounded-full border-4 border-paper/20 border-t-flame" />
                    </div>
                  )}

                  {/* Big Play Button Overlay on Pause */}
                  {!isPlaying && !isLoading && (
                    <button
                      onClick={togglePlay}
                      aria-label="Phát video"
                      className="press absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-full border border-paper/15 bg-storm/75 text-paper backdrop-blur-sm transition-transform duration-300 hover:scale-110 hover:border-flame hover:text-flame shadow-2xl z-10"
                    >
                      <Play className="ml-1 h-8 w-8 fill-current" />
                    </button>
                  )}

                  {/* Custom Controls Bar */}
                  <div
                    className={cn(
                      'absolute bottom-0 inset-x-0 bg-linear-to-t from-storm/95 via-storm/85 to-transparent px-4 pb-4 pt-10 transition-all duration-300 z-10 flex flex-col gap-3',
                      showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                    )}
                  >
                    
                    {/* Timeline Slider Track */}
                    <div className="relative group/timeline flex items-center h-4">
                      <div
                        ref={timelineRef}
                        onClick={handleTimelineClick}
                        onMouseDown={handleTimelineMouseDown}
                        onMouseMove={handleTimelineMouseMove}
                        onMouseLeave={handleTimelineMouseLeave}
                        className="relative h-1.5 w-full cursor-pointer rounded-full bg-paper/20 transition-all duration-200 group-hover/timeline:h-2.5"
                      >
                        {/* Buffered Bar */}
                        <div
                          className="absolute inset-y-0 left-0 bg-paper/15 rounded-full"
                          style={{ width: `${bufferedPercent}%` }}
                        />
                        {/* Current Progress bar */}
                        <div
                          className="absolute inset-y-0 left-0 bg-flame rounded-full"
                          style={{ width: `${progressPercent}%` }}
                        />
                        {/* Progress Scrubber Knob */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-paper border-2 border-flame shadow-lg opacity-0 transition-opacity duration-150 group-hover/timeline:opacity-100"
                          style={{ left: `calc(${progressPercent}% - 7px)` }}
                        />

                        {/* Chapter Markers Ticks */}
                        {CHAPTERS.map(ch => (
                          <div
                            key={ch.id}
                            className="absolute top-0 bottom-0 w-0.5 bg-storm/80"
                            style={{ left: `${(ch.start / duration) * 100}%` }}
                          />
                        ))}
                      </div>

                      {/* Timeline Tooltip */}
                      {hoverTime !== null && (
                        <div
                          className="absolute bottom-6 -translate-x-1/2 pointer-events-none rounded-xl border border-paper/10 bg-storm/95 px-3 py-2 text-[11px] text-paper shadow-2xl flex flex-col items-center gap-1 whitespace-nowrap z-30"
                          style={{ left: `${hoverX}px` }}
                        >
                          <span className="font-display font-bold text-flame-soft">{hoverChapter}</span>
                          <span className="font-mono text-paper/70">{formatTime(hoverTime)}</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Row */}
                    <div className="flex items-center justify-between gap-4 text-paper">
                      <div className="flex items-center gap-3">
                        {/* Play/Pause icon */}
                        <button
                          onClick={togglePlay}
                          aria-label={isPlaying ? 'Tạm dừng' : 'Phát'}
                          className="press flex h-9 w-9 items-center justify-center rounded-full hover:bg-paper/10 transition-colors"
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
                          className="press hidden sm:flex h-9 w-9 items-center justify-center rounded-full hover:bg-paper/10 transition-colors"
                        >
                          <RotateCcw className="h-4.5 w-4.5" />
                        </button>

                        {/* Time display */}
                        <div className="font-mono text-xs text-paper/80 select-none">
                          {formatTime(currentTime)} <span className="opacity-40">/</span> {formatTime(duration)}
                        </div>
                      </div>

                      {/* Right controls: Playback rate, volume, fullscreen */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        
                        {/* Playback speed menu */}
                        <div className="relative group/speed">
                          <button
                            aria-label="Tốc độ phát"
                            className="press rounded-md px-2 py-1 text-xs font-mono font-bold border border-paper/10 bg-paper/5 hover:bg-paper/10 hover:border-paper/20 transition-all"
                          >
                            {playbackRate === 1 ? 'Tốc độ' : `${playbackRate}x`}
                          </button>
                          <div className="absolute bottom-full right-0 pb-2.5 w-20 opacity-0 scale-95 translate-y-2 pointer-events-none group-hover/speed:opacity-100 group-hover/speed:scale-100 group-hover/speed:translate-y-0 group-hover/speed:pointer-events-auto transition-all duration-200 shadow-2xl flex flex-col text-center">
                            <div className="overflow-hidden rounded-xl border border-paper/10 bg-storm/95 flex flex-col">
                              {[0.5, 0.75, 1, 1.25, 1.5, 2].map(rate => (
                                <button
                                  key={rate}
                                  onClick={() => handleRateChange(rate)}
                                  className={cn(
                                    'py-1.5 text-xs font-mono transition-colors hover:bg-paper/10',
                                    playbackRate === rate ? 'bg-flame text-paper font-bold' : 'text-paper/70'
                                  )}
                                >
                                  {rate}x
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Volume controls */}
                        <div className="flex items-center gap-1.5 group/volume">
                          <button
                            onClick={toggleMute}
                            aria-label={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
                            className="press flex h-9 w-9 items-center justify-center rounded-full hover:bg-paper/10 transition-colors"
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
                            className="w-0 opacity-0 scale-x-0 origin-right transition-all duration-300 group-hover/volume:w-16 group-hover/volume:opacity-100 group-hover/volume:scale-x-100 h-1 accent-flame bg-paper/20 rounded-lg cursor-pointer"
                          />
                        </div>

                        {/* Fullscreen icon */}
                        <button
                          onClick={toggleFullscreen}
                          aria-label={isFullscreen ? 'Thoát toàn màn hình' : 'Mở toàn màn hình'}
                          className="press flex h-9 w-9 items-center justify-center rounded-full hover:bg-paper/10 transition-colors"
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

                {/* 2. Interactive Chapters List Section */}
                <div className="flex flex-col gap-4">
                  <h2 className="font-display text-lg font-black tracking-tight text-ink flex items-center gap-2">
                    <Bookmark className="h-4.5 w-4.5 text-flame" />
                    Phân cảnh bài học
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-1">
                    {CHAPTERS.map((ch, idx) => {
                      const isActive = activeChapter === ch.id;
                      return (
                        <button
                          key={ch.id}
                          onClick={() => seekTo(ch.start)}
                          className={cn(
                            'text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl border transition-all duration-300 press',
                            isActive
                              ? 'bg-paper border-flame shadow-[inset_0_1px_0_oklch(1_0_0/0.45),0_12px_24px_-18px_oklch(0.52_0.196_26/0.25)]'
                              : 'bg-paper/40 border-ink/8 hover:border-ink/15 hover:bg-paper/60'
                          )}
                        >
                          <div className="flex gap-3">
                            <span className={cn(
                              'font-display text-2xl font-black shrink-0 select-none transition-colors duration-300',
                              isActive ? 'text-flame' : 'text-ink-mute'
                            )}>
                              0{idx + 1}
                            </span>
                            <div>
                              <h3 className={cn(
                                'font-display font-bold leading-tight text-sm tracking-tight',
                                isActive ? 'text-flame' : 'text-ink'
                              )}>
                                {ch.title}
                              </h3>
                              <p className="mt-1 text-[13px] leading-snug text-ink-soft max-w-xl">
                                {ch.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* Time tag / Pulse Indicator */}
                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                            {isActive && (
                              <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame/75 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-flame" />
                              </span>
                            )}
                            <span className={cn(
                              'font-mono text-xs rounded-full px-2.5 py-1 border',
                              isActive
                                ? 'bg-flame/[0.06] border-flame/20 text-flame font-semibold'
                                : 'bg-paper-deep/60 border-ink/8 text-ink-soft'
                            )}>
                              {formatTime(ch.start)}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Synchronized Transcript */}
              <div className="flex flex-col lg:col-span-4 h-full">
                <div className={cn(
                  'flex flex-col h-[520px] lg:h-[630px] overflow-hidden rounded-3xl border border-ink/10 bg-paper/65 backdrop-blur-sm',
                  'shadow-[inset_0_1.5px_0_oklch(1_0_0/0.45),0_20px_40px_-28px_oklch(0.20_0.038_250/0.15)]'
                )}>
                  
                  {/* Transcript Header */}
                  <div className="flex items-center justify-between border-b border-ink/8 bg-paper-deep/45 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4.5 w-4.5 text-flame" />
                      <span className="font-display text-sm font-black uppercase tracking-wider text-ink">
                        Kịch bản thuyết minh
                      </span>
                    </div>
                    <span className="rounded-full bg-paper px-2 py-0.5 font-mono text-[10px] text-ink-soft border border-ink/5">
                      Đồng bộ
                    </span>
                  </div>

                  {/* Scrollable Transcript List */}
                  <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 scrollbar-thin">
                    {TRANSCRIPT.map((item, idx) => {
                      const isActive = activeTranscriptIndex === idx;
                      return (
                        <div
                          key={idx}
                          ref={el => {
                            transcriptRefs.current[idx] = el;
                          }}
                          onClick={() => seekTo(item.start)}
                          className={cn(
                            'group/item relative cursor-pointer p-3.5 rounded-2xl border transition-all duration-300',
                            isActive
                              ? 'bg-paper border-flame/20 shadow-sm'
                              : 'bg-transparent border-transparent hover:bg-paper/40 hover:border-ink/5'
                          )}
                        >
                          {/* Active highlight side indicator bar */}
                          <div className={cn(
                            'absolute left-0 top-3 bottom-3 w-0.75 rounded-r-md transition-all duration-300',
                            isActive ? 'bg-flame opacity-100 scale-y-100' : 'bg-ink-mute opacity-0 scale-y-50'
                          )} />

                          <div className="flex justify-between items-center gap-2 mb-1.5 pl-1.5">
                            <span className={cn(
                              'text-[10px] font-display uppercase tracking-widest px-2 py-0.5 rounded-md border font-semibold',
                              isActive
                                ? 'bg-flame/[0.06] border-flame/15 text-flame'
                                : 'bg-paper-deep/60 border-ink/8 text-ink-soft'
                            )}>
                              {item.speaker}
                            </span>
                            <span className={cn(
                              'font-mono text-[10.5px] transition-colors',
                              isActive ? 'text-flame font-semibold' : 'text-ink-mute group-hover/item:text-ink-soft'
                            )}>
                              {formatTime(item.start)}
                            </span>
                          </div>

                          <p className={cn(
                            'text-[13.5px] leading-relaxed pl-1.5 transition-colors duration-300 font-sans',
                            isActive ? 'text-ink font-medium' : 'text-ink-soft group-hover/item:text-ink'
                          )}>
                            {item.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Transcript Footer Helper */}
                  <div className="border-t border-ink/5 bg-paper-deep/20 px-5 py-3.5 text-center text-[11px] text-ink-soft select-none italic">
                    💡 Click vào bất cứ đoạn văn bản nào để tua video đến phân đoạn đó.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Takeaway Lessons Section */}
        <section className="relative overflow-hidden bg-paper py-16">
          <div className="grain absolute inset-0 opacity-25 pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-4">
            
            <div className="flex flex-col gap-2 items-center text-center mb-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-flame" />
                <span className="font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-flame">
                  Đúc kết tư liệu
                </span>
                <span className="h-px w-8 bg-flame" />
              </div>
              <h2 className="font-display text-2xl font-black leading-tight tracking-tight text-ink md:text-3.5xl">
                Bốn Điểm Nhấn Vượt Bão
              </h2>
            </div>

            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TAKEAWAYS.map((takeaway, i) => {
                const Icon = takeaway.icon;
                return (
                  <StaggerItem key={takeaway.title} className="h-full">
                    <TiltCard className="lift group/card h-full flex flex-col rounded-3xl border border-ink/10 bg-paper-deep/60 p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 bg-paper text-flame transition-all duration-300 ease-out-quart group-hover/card:scale-110 group-hover/card:bg-flame group-hover/card:text-paper">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </div>
                      
                      <h3 className="mt-5 font-display text-base font-bold tracking-tight text-ink">
                        {takeaway.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
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
                <p className="text-sm text-ink-soft">
                  Để tìm hiểu sâu hơn về bối cảnh lịch sử và 5 luận điểm của Tư tưởng Hồ Chí Minh:
                </p>
                <Link
                  href="/ly-thuyet"
                  className="press group inline-flex items-center gap-2 rounded-full bg-ink py-2 pl-6 pr-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-paper hover:bg-flame"
                >
                  Đọc phần lý thuyết chi tiết
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/15 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-3.5 w-3.5 text-paper" strokeWidth={1.6} />
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
