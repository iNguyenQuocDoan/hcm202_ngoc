'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Gamepad2,
  ArrowUpRight,
  Coins,
  ShieldCheck,
  Cpu,
  Users,
  RotateCcw,
  Sparkles,
  Award,
  AlertTriangle,
  Play,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { Footer } from '@/shared/components/layout';
import { Reveal, ScrollProgress, TiltCard } from '@/shared/components/motion';
import { cn } from '@/shared/utils';
import { QUESTIONS, Question, Choice, StatEffects } from './questions';

// Game Status Enum
type GameState = 'START' | 'PLAYING' | 'FEEDBACK' | 'GAMEOVER' | 'VICTORY';

function getRandomStartValue() {
  // Returns a random integer between 15 and 29 inclusive (always under 30 to represent a severe starting crisis)
  return Math.floor(Math.random() * 15) + 15;
}

export default function GamePage() {
  const [gameState, setGameState] = useState<GameState>('START');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);

  // Indicators state (0 - 100), initialized to 60 (randomized on game start)
  const [economy, setEconomy] = useState(60);
  const [confidence, setConfidence] = useState(60);
  const [adaptability, setAdaptability] = useState(60);
  const [solidarity, setSolidarity] = useState(60);

  // Storing initial start values to calculate perfect incremental gains
  const [startEconomy, setStartEconomy] = useState(20);
  const [startConfidence, setStartConfidence] = useState(20);
  const [startAdaptability, setStartAdaptability] = useState(20);
  const [startSolidarity, setStartSolidarity] = useState(20);

  // Floating delta tracking
  const [deltas, setDeltas] = useState<StatEffects | null>(null);

  // Active choice consequence state
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);

  // Secret cheat clicks to set all stats to 100%
  const [cheatClicks, setCheatClicks] = useState(0);

  // 1% Jackpot win state
  const [isJackpotWin, setIsJackpotWin] = useState(false);

  const handleCheatClick = () => {
    setCheatClicks(prev => {
      const next = prev + 1;
      if (next >= 5) {
        setEconomy(100);
        setConfidence(100);
        setAdaptability(100);
        setSolidarity(100);
        setDeltas({ economy: 100, confidence: 100, adaptability: 100, solidarity: 100 });
        return 0;
      }
      return next;
    });
  };

  // Animate indicator colors dynamically based on value
  const getIndicatorColor = (val: number) => {
    const roundedVal = Math.round(val);
    if (roundedVal > 60) return 'bg-emerald-500 text-emerald-500';
    if (roundedVal > 25) return 'bg-amber-500 text-amber-500';
    return 'bg-flame text-flame animate-pulse';
  };

  const getIndicatorBorder = (val: number) => {
    const roundedVal = Math.round(val);
    if (roundedVal > 60) return 'border-emerald-500/20 bg-emerald-500/[0.03]';
    if (roundedVal > 25) return 'border-amber-500/20 bg-amber-500/[0.03]';
    return 'border-flame/30 bg-flame/[0.05]';
  };

  // Run initial state reset with randomized values and shuffle 20 out of 50 questions
  const handleResetGame = () => {
    const shuffled = [...QUESTIONS]
      .sort(() => 0.5 - Math.random())
      .slice(0, 20)
      .map(q => ({
        ...q,
        choices: [...q.choices].sort(() => 0.5 - Math.random())
      }));
    setSessionQuestions(shuffled);

    const startEco = getRandomStartValue();
    const startConf = getRandomStartValue();
    const startAdap = getRandomStartValue();
    const startSol = getRandomStartValue();

    setEconomy(startEco);
    setConfidence(startConf);
    setAdaptability(startAdap);
    setSolidarity(startSol);

    setStartEconomy(startEco);
    setStartConfidence(startConf);
    setStartAdaptability(startAdap);
    setStartSolidarity(startSol);

    setCurrentQuestionIndex(0);
    setDeltas(null);
    setSelectedChoice(null);
    setCheatClicks(0);
    setIsJackpotWin(false);
    setGameState('PLAYING');
  };

  // Choice click handler
  const handleChoiceSelect = (choice: Choice) => {
    setSelectedChoice(choice);
    
    // Check if the choice is the correct one (Choice 0 in the static QUESTIONS database)
    const originalQuestion = QUESTIONS.find(q => q.id === currentQuestion.id);
    const isCorrect = originalQuestion ? choice.text === originalQuestion.choices[0].text : false;

    // 1% chance of random perfect jackpot
    const isJackpot = Math.random() < 0.01;

    if (isJackpot) {
      setEconomy(100);
      setConfidence(100);
      setAdaptability(100);
      setSolidarity(100);
      setDeltas({ economy: 100 - economy, confidence: 100 - confidence, adaptability: 100 - adaptability, solidarity: 100 - solidarity });
      setIsJackpotWin(true);
    } else if (isCorrect) {
      // Calculate exact float increment to reach 100% in 20 questions
      const incEco = (100 - startEconomy) / 20;
      const incConf = (100 - startConfidence) / 20;
      const incAdap = (100 - startAdaptability) / 20;
      const incSol = (100 - startSolidarity) / 20;

      const newEconomy = Math.min(100, economy + incEco);
      const newConfidence = Math.min(100, confidence + incConf);
      const newAdaptability = Math.min(100, adaptability + incAdap);
      const newSolidarity = Math.min(100, solidarity + incSol);

      setEconomy(newEconomy);
      setConfidence(newConfidence);
      setAdaptability(newAdaptability);
      setSolidarity(newSolidarity);

      setDeltas({
        economy: Math.round(newEconomy) - Math.round(economy),
        confidence: Math.round(newConfidence) - Math.round(confidence),
        adaptability: Math.round(newAdaptability) - Math.round(adaptability),
        solidarity: Math.round(newSolidarity) - Math.round(solidarity)
      });
      setIsJackpotWin(false);
    } else {
      // Apply negative changes from choice.effects (or positive if any, scaled by tiered diminishing returns)
      const getNewValue = (current: number, delta: number) => {
        if (delta <= 0) {
          // Scale down negative impact so a single mistake doesn't cause instant game over
          const scaledPenalty = Math.round(delta * 0.4);
          return Math.max(0, current + scaledPenalty);
        }
        // Positive delta (if any in incorrect choices) has tiered diminishing returns
        let gain = delta;
        if (current >= 90) {
          gain = delta * 0.25;
        } else if (current >= 75) {
          gain = delta * 0.45;
        } else if (current >= 50) {
          gain = delta * 0.7;
        }
        return Math.min(100, current + gain);
      };

      const newEconomy = getNewValue(economy, choice.effects.economy);
      const newConfidence = getNewValue(confidence, choice.effects.confidence);
      const newAdaptability = getNewValue(adaptability, choice.effects.adaptability);
      const newSolidarity = getNewValue(solidarity, choice.effects.solidarity);

      setEconomy(newEconomy);
      setConfidence(newConfidence);
      setAdaptability(newAdaptability);
      setSolidarity(newSolidarity);

      setDeltas({
        economy: Math.round(newEconomy) - Math.round(economy),
        confidence: Math.round(newConfidence) - Math.round(confidence),
        adaptability: Math.round(newAdaptability) - Math.round(adaptability),
        solidarity: Math.round(newSolidarity) - Math.round(solidarity)
      });
      setIsJackpotWin(false);
    }
    setGameState('FEEDBACK');
  };

  // Continue to next question or end game
  const handleNextStep = () => {
    // Check lose condition (if any index hits or drops below 10%)
    if (economy < 10 || confidence < 10 || adaptability < 10 || solidarity < 10) {
      setGameState('GAMEOVER');
      return;
    }

    // Check perfect win condition (all indices reach 100%)
    if (Math.round(economy) === 100 && Math.round(confidence) === 100 && Math.round(adaptability) === 100 && Math.round(solidarity) === 100) {
      setGameState('VICTORY');
      return;
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex >= sessionQuestions.length) {
      setGameState('VICTORY');
    } else {
      // Dynamically shuffle the next question's choices on the fly
      setSessionQuestions(prev => {
        const copy = [...prev];
        const nextQ = copy[nextIndex];
        if (nextQ) {
          copy[nextIndex] = {
            ...nextQ,
            choices: [...nextQ.choices].sort(() => 0.5 - Math.random())
          };
        }
        return copy;
      });

      setCurrentQuestionIndex(nextIndex);
      setDeltas(null);
      setSelectedChoice(null);
      setGameState('PLAYING');
    }
  };

  // Evaluation title based on final stats
  const getVictoryTitle = () => {
    if (Math.round(economy) === 100 && Math.round(confidence) === 100 && Math.round(adaptability) === 100 && Math.round(solidarity) === 100) {
      return 'Kỷ Nguyên Vàng - Kiến Tạo Thịnh Vượng Tuyệt Đối';
    }
    const average = (economy + confidence + adaptability + solidarity) / 4;
    if (average >= 75) return 'Nhà Hoạch Định Kinh Tế Xuất Chúng';
    
    const maxVal = Math.max(economy, confidence, adaptability, solidarity);
    if (maxVal === adaptability) return 'Nhà Cải Cách Cơ Chế Linh Hoạt';
    if (maxVal === solidarity) return 'Nhà Lãnh Đạo Đại Đoàn Kết Toàn Dân';
    if (maxVal === economy) return 'Nhà Thực Tiễn Kinh Tế Vững Vàng';
    return 'Nhà Hành Động Cân Bằng';
  };

  // Identify which stat caused Game Over (under 10% threshold)
  const getCrashedStatName = () => {
    if (economy < 10) return 'Kinh Tế (GDP)';
    if (confidence < 10) return 'Niềm Tin (Lòng Dân)';
    if (adaptability < 10) return 'Tư Duy Đổi Mới';
    if (solidarity < 10) return 'Đoàn Kết (Đồng Thuận)';
    return '';
  };

  const getCrashedStatLesson = () => {
    if (economy < 10) {
      return 'Chỉ số Kinh tế đã giảm xuống dưới mức an toàn (dưới 10%). Sản xuất công-nông nghiệp sụt giảm nghiêm trọng, ngân sách kiệt quệ dẫn đến nguy cơ tê liệt toàn hệ thống. Hãy nhớ bài học 1991: Phải cởi trói cho tư nhân sản xuất và đổi mới cơ cấu kinh tế để khơi thông nguồn lực phát triển.';
    }
    if (confidence < 10) {
      return 'Chỉ số Niềm tin lòng dân đã rơi xuống dưới mức an toàn (dưới 10%). Siêu lạm phát và đổ vỡ tài chính tự phát tàn phá lòng tin của người dân vào đồng nội tệ và cơ chế. Hãy nhớ bài học 1991: Lợi ích của người dân và tính thực chất, công khai của chính sách là điểm tựa vững chắc nhất của chính quyền.';
    }
    if (adaptability < 10) {
      return 'Chỉ số Tư duy đổi mới đã giảm sâu xuống dưới mức an toàn (dưới 10%). Việc bảo thủ bám giữ các cơ chế chỉ huy bao cấp cũ, e ngại rủi ro và thiếu nhạy bén trước biến động thị trường đã đẩy nền kinh tế vào ngõ cụt. Hãy nhớ bài học 1991: Phải bám sát thực tiễn khách quan, kiên định mục tiêu nhưng cực kỳ linh hoạt về cách làm.';
    }
    if (solidarity < 10) {
      return 'Chỉ số Đoàn kết đồng thuận xã hội suy yếu nghiêm trọng (dưới 10%), gây ra sự chia rẽ lợi ích gay gắt giữa các tầng lớp nhân dân. Hãy nhớ bài học 1991: Phát huy tinh thần đại đoàn kết toàn dân tộc, chăm lo cuộc sống của người nghèo để cùng chung sức vượt qua cơn hoạn nạn.';
    }
    return '';
  };

  // Floating delta formatter helper
  const renderDelta = (statName: keyof StatEffects) => {
    if (!deltas || deltas[statName] === 0) return null;
    const isPositive = deltas[statName] > 0;
    return (
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: [0, 1, 1, 0], y: -12 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, times: [0, 0.15, 0.8, 1], ease: 'easeOut' }}
        className={cn(
          'absolute right-0 -top-5 font-mono text-[10px] font-bold z-10',
          isPositive ? 'text-emerald-600' : 'text-flame'
        )}
      >
        {isPositive ? `+${deltas[statName]}` : deltas[statName]}%
      </motion.span>
    );
  };

  const currentQuestion = sessionQuestions[currentQuestionIndex] || QUESTIONS[0];

  return (
    <>
      <ScrollProgress />

      <main className="flex flex-1 flex-col pt-28 md:pt-32 min-h-svh">
        
        {/* Main interactive area wrapper */}
        <section className="relative flex-1 flex flex-col justify-center overflow-hidden pb-16 pt-4">
          
          {/* Animated decorative orbs background */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="orb-1 absolute -left-28 top-10 h-[32rem] w-[32rem] rounded-full opacity-8 blur-[100px]"
              style={{ background: 'oklch(0.82 0.150 78)' }}
            />
            <div
              className="orb-2 absolute -right-28 bottom-5 h-[34rem] w-[34rem] rounded-full opacity-8 blur-[100px]"
              style={{ background: 'oklch(0.52 0.196 26)' }}
            />
            <div className="grain absolute inset-0 opacity-20" />
          </div>

          <div className="relative mx-auto w-full max-w-4xl px-4 flex-1 flex flex-col justify-center">
            
            {/* Top Eyebrow Section */}
            <div className="text-center mb-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-paper/80 px-4 py-1.5 font-display text-[10px] uppercase tracking-[0.35em] text-flame shadow-sm">
                  <Gamepad2 className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Game tương tác · Giả lập Vượt bão Kinh tế 1991
                </span>
              </Reveal>
            </div>

            {/* Main Interactive Stage Switcher */}
            <div className="flex-1 flex flex-col justify-center items-center">
              <AnimatePresence mode="wait">
                
                {/* 1. START SCREEN */}
                {gameState === 'START' && (
                  <motion.div
                    key="start-screen"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full max-w-2xl"
                  >
                    <TiltCard className="bezel-inner rounded-[2rem] border border-ink/10 bg-paper p-8 text-center shadow-[0_32px_64px_-24px_oklch(0.20_0.038_250/0.25)]">
                      <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-ink sm:text-4.5xl">
                        VƯỢT BÃO KINH TẾ <span className="italic text-flame">1991</span>
                      </h2>
                      <p className="mt-4.5 text-[15.5px] leading-relaxed text-ink-soft font-sans">
                        Chào mừng bạn đến với mô phỏng lịch sử vượt bão kinh tế 1991. Bạn sẽ nhập vai nhà hoạch định kinh tế vĩ mô đưa ra các quyết định sinh tồn để chèo lái đất nước vượt qua khủng hoảng.
                      </p>
                      <p className="mt-3.5 text-[15.5px] leading-relaxed text-ink/85 font-medium font-sans">
                        ⚠️ <strong className="font-extrabold text-flame">Luật Đánh Đổi Kinh Tế (Trade-off)</strong>: Mọi sự lựa chọn đều mang lại cả lợi ích lẫn cái giá phải trả. Bạn không thể có một quyết định hoàn hảo không đánh đổi. Hãy khéo léo vận dụng <strong className="font-semibold text-flame-soft">tư duy đổi mới kinh tế 1991</strong> để giữ thăng bằng.
                      </p>

                      {/* Rule instruction grid */}
                      <div className="mt-8 grid gap-4 grid-cols-2 text-left text-xs uppercase tracking-wider border-t border-ink/8 pt-6">
                        <div className="flex items-start gap-2.5">
                          <CheckIcon className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-ink block font-display">Mục tiêu</span>
                            <span className="normal-case text-ink-soft text-[12.5px] tracking-normal leading-snug mt-0.5 block font-sans">Vượt qua trọn vẹn 20 tình huống thử thách kinh tế lịch sử.</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <AlertIcon className="h-4 w-4 text-flame shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-ink block font-display">Luật Sinh Tồn</span>
                            <span className="normal-case text-ink-soft text-[12.5px] tracking-normal leading-snug mt-0.5 block font-sans">Giữ cả 4 chỉ số từ 10% trở lên (thua ngay nếu bất kỳ chỉ số nào dưới 10%).</span>
                          </div>
                        </div>
                      </div>

                      {/* Start button */}
                      <button
                        onClick={handleResetGame}
                        className="press group mt-8 inline-flex items-center gap-3.5 rounded-full bg-ink px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.25em] text-paper hover:bg-flame hover:text-paper shadow-lg"
                      >
                        Bắt đầu hành trình (20 Câu)
                        <Play className="h-4 w-4 fill-current" />
                      </button>
                    </TiltCard>
                  </motion.div>
                )}

                {/* 2. GAMEPLAY OR FEEDBACK SCREEN */}
                {(gameState === 'PLAYING' || gameState === 'FEEDBACK') && (
                  <motion.div
                    key="gameplay-stage"
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full grid grid-cols-1 gap-6 lg:grid-cols-12"
                  >
                    
                    {/* Left side: Stats Dashboard Panel (col-span-4) */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                      <div className="rounded-3xl border border-ink/10 bg-paper/70 p-5 shadow-sm flex flex-col gap-4.5 backdrop-blur-md">
                        <div className="font-display text-[11px] uppercase tracking-[0.28em] text-ink-soft border-b border-ink/8 pb-2.5 flex items-center justify-between">
                          <span 
                            onClick={handleCheatClick}
                            className="cursor-pointer select-none active:text-flame hover:text-flame transition-colors duration-200"
                            title="Cheat code: Nhấn 5 lần để đạt 100% tất cả chỉ số"
                          >
                            Chỉ số sinh tồn
                          </span>
                          <span className="font-mono font-bold text-flame">
                            Q.{currentQuestionIndex + 1} / {sessionQuestions.length}
                          </span>
                        </div>

                        {/* Stats items stack */}
                        <div className="space-y-4">
                          
                          {/* 1. Economy */}
                          <div className={cn('relative rounded-2xl border p-3.5 transition-all duration-300', getIndicatorBorder(economy))}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="flex items-center gap-2 font-display text-sm font-bold text-ink">
                                <Coins className="h-4.5 w-4.5 text-flame" />
                                Kinh Tế (GDP)
                              </span>
                              <div className="relative">
                                <span className="font-mono text-sm font-black text-ink">{Math.round(economy)}%</span>
                                {renderDelta('economy')}
                              </div>
                            </div>
                            <div className="h-2 w-full bg-ink/8 rounded-full overflow-hidden">
                              <div
                                className={cn('h-full rounded-full transition-all duration-500 ease-out-quart', getIndicatorColor(economy))}
                                style={{ width: `${Math.round(economy)}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-ink-mute mt-1.5 block leading-none">Sản xuất công-nông nghiệp, ngân sách</span>
                          </div>

                          {/* 2. Confidence */}
                          <div className={cn('relative rounded-2xl border p-3.5 transition-all duration-300', getIndicatorBorder(confidence))}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="flex items-center gap-2 font-display text-sm font-bold text-ink">
                                <ShieldCheck className="h-4.5 w-4.5 text-flame" />
                                Niềm Tin (Lòng Dân)
                              </span>
                              <div className="relative">
                                <span className="font-mono text-sm font-black text-ink">{Math.round(confidence)}%</span>
                                {renderDelta('confidence')}
                              </div>
                            </div>
                            <div className="h-2 w-full bg-ink/8 rounded-full overflow-hidden">
                              <div
                                className={cn('h-full rounded-full transition-all duration-500 ease-out-quart', getIndicatorColor(confidence))}
                                style={{ width: `${Math.round(confidence)}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-ink-mute mt-1.5 block leading-none">Lòng tin tiền tệ, ổn định xã hội</span>
                          </div>

                          {/* 3. Adaptability */}
                          <div className={cn('relative rounded-2xl border p-3.5 transition-all duration-300', getIndicatorBorder(adaptability))}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="flex items-center gap-2 font-display text-sm font-bold text-ink">
                                <Cpu className="h-4.5 w-4.5 text-flame" />
                                Tư Duy Đổi Mới
                              </span>
                              <div className="relative">
                                <span className="font-mono text-sm font-black text-ink">{Math.round(adaptability)}%</span>
                                {renderDelta('adaptability')}
                              </div>
                            </div>
                            <div className="h-2 w-full bg-ink/8 rounded-full overflow-hidden">
                              <div
                                className={cn('h-full rounded-full transition-all duration-500 ease-out-quart', getIndicatorColor(adaptability))}
                                style={{ width: `${Math.round(adaptability)}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-ink-mute mt-1.5 block leading-none">Nhạy bén chính sách, cải cách cơ chế</span>
                          </div>

                          {/* 4. Solidarity */}
                          <div className={cn('relative rounded-2xl border p-3.5 transition-all duration-300', getIndicatorBorder(solidarity))}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="flex items-center gap-2 font-display text-sm font-bold text-ink">
                                <Users className="h-4.5 w-4.5 text-flame" />
                                Đoàn Kết (Đồng Thuận)
                              </span>
                              <div className="relative">
                                <span className="font-mono text-sm font-black text-ink">{Math.round(solidarity)}%</span>
                                {renderDelta('solidarity')}
                              </div>
                            </div>
                            <div className="h-2 w-full bg-ink/8 rounded-full overflow-hidden">
                              <div
                                className={cn('h-full rounded-full transition-all duration-500 ease-out-quart', getIndicatorColor(solidarity))}
                                style={{ width: `${Math.round(solidarity)}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-ink-mute mt-1.5 block leading-none">Sự chia sẻ, đồng thuận toàn dân</span>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* Right side: Situation description and decision block (col-span-8) */}
                    <div className="lg:col-span-8 flex flex-col">
                      <div className="rounded-3xl border border-ink/10 bg-paper p-6 sm:p-8 flex-1 flex flex-col justify-between shadow-[0_22px_44px_-24px_oklch(0.20_0.038_250/0.18)]">
                        
                        <AnimatePresence mode="wait">
                          
                          {/* 2a. Gameplay: Active Choice Step */}
                          {gameState === 'PLAYING' && (
                            <motion.div
                              key="active-question"
                              initial={{ opacity: 0, x: 12 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -12 }}
                              transition={{ duration: 0.3, ease: 'easeOut' }}
                              className="flex-1 flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center gap-2.5 mb-3.5">
                                  <span className="h-px w-6 bg-flame" />
                                  <span className="font-display text-[10.5px] font-bold uppercase tracking-widest text-flame">
                                    Tình huống {currentQuestionIndex + 1} / {sessionQuestions.length}
                                  </span>
                                </div>
                                <h3 className="font-display text-xl font-black leading-tight tracking-tight text-ink sm:text-2xl mb-4.5">
                                  {currentQuestion.title}
                                </h3>
                                <p className="text-[15px] sm:text-[16px] leading-relaxed text-ink-soft bg-paper-deep/45 p-5 rounded-2xl border border-ink/5 font-sans">
                                  {currentQuestion.situation}
                                </p>
                              </div>

                              {/* Choices buttons stack */}
                              <div className="mt-8 space-y-3">
                                {currentQuestion.choices.map((choice, i) => (
                                  <button
                                    key={i}
                                    onClick={() => handleChoiceSelect(choice)}
                                    className="text-left w-full p-4 rounded-2xl border border-ink/10 bg-paper/50 hover:bg-paper-deep hover:border-flame transition-all duration-300 flex items-center justify-between gap-4 group/btn press"
                                  >
                                    <div className="flex gap-3">
                                      <span className="font-display font-black text-flame/30 group-hover/btn:text-flame transition-colors select-none">
                                        {String.fromCharCode(65 + i)}
                                      </span>
                                      <span className="text-[13.5px] sm:text-[14.5px] font-sans font-medium text-ink group-hover/btn:text-ink leading-snug">
                                        {choice.text}
                                      </span>
                                    </div>
                                    <ArrowRight className="h-4 w-4 shrink-0 text-ink-soft opacity-0 -translate-x-2 transition-all group-hover/btn:opacity-100 group-hover/btn:translate-x-0 group-hover/btn:text-flame" />
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {/* 2b. Gameplay: Outcome / Lesson Feedback Step */}
                          {gameState === 'FEEDBACK' && selectedChoice && (
                            <motion.div
                              key="consequence-feedback"
                              initial={{ opacity: 0, x: 12 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -12 }}
                              transition={{ duration: 0.3, ease: 'easeOut' }}
                              className="flex-1 flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center gap-2.5 mb-3">
                                  <span className="h-px w-6 bg-flame" />
                                  <span className="font-display text-[10.5px] font-bold uppercase tracking-widest text-flame">
                                    Hệ quả & Phân tích liên hệ lịch sử
                                  </span>
                                </div>
                                <h3 className="font-display text-xl font-black leading-tight tracking-tight text-ink sm:text-2xl mb-4.5">
                                  {currentQuestion.title}
                                </h3>

                                <div className="space-y-4">
                                  {/* Consequence description */}
                                  <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.03] p-5">
                                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5 flex items-center gap-1.5">
                                      <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                                      Hệ quả quyết định
                                    </h4>
                                    
                                    {isJackpotWin && (
                                      <div className="mb-3.5 px-3.5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-[12.5px] text-amber-800 font-bold flex items-center gap-2 animate-pulse">
                                        <Award className="h-4.5 w-4.5 text-amber-600 shrink-0" />
                                        <span>🎉 VẬN MAY THỜI ĐẠI (Tỷ lệ 1%): Quyết định của bạn đã tạo ra cơ duyên "Thiên thời - Địa lợi - Nhân hòa" ngoài mong đợi! Tất cả chỉ số lập tức đạt 100%!</span>
                                      </div>
                                    )}

                                    <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-ink font-sans">
                                      {selectedChoice.outcome}
                                    </p>
                                    
                                    {/* Small visual of the effects changed */}
                                    {!isJackpotWin && deltas && (
                                      <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-mono font-bold">
                                        {Object.entries(deltas).map(([key, val]) => {
                                          if (val === 0) return null;
                                          const labels: Record<string, string> = {
                                            economy: 'Kinh Tế (GDP)',
                                            confidence: 'Niềm Tin (Lòng Dân)',
                                            adaptability: 'Tư Duy Đổi Mới',
                                            solidarity: 'Đoàn Kết (Đồng Thuận)',
                                          };
                                          return (
                                            <span
                                              key={key}
                                              className={cn(
                                                'px-2 py-0.5 rounded-md border',
                                                val > 0
                                                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                                                  : 'bg-rose-50 border-rose-200 text-rose-700'
                                              )}
                                            >
                                              {labels[key]}: {val > 0 ? `+${val}` : val}%
                                            </span>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>

                                  {/* 1991 mindset connection */}
                                  <div className="rounded-2xl border border-flame/15 bg-flame/[0.04] p-5">
                                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-flame-deep mb-1.5 flex items-center gap-1.5">
                                      <HelpCircle className="h-3.5 w-3.5 text-flame" />
                                      Bài học Đổi mới Kinh tế 1991
                                    </h4>
                                    <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-ink-soft italic font-sans">
                                      {selectedChoice.lesson1991}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Continue button */}
                              <div className="mt-8 flex justify-end">
                                <button
                                  onClick={handleNextStep}
                                  className="press group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-paper hover:bg-flame"
                                >
                                  Tình huống tiếp theo
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </button>
                              </div>
                            </motion.div>
                          )}

                        </AnimatePresence>

                      </div>
                    </div>

                  </motion.div>
                )}

                {/* 3. GAME OVER SCREEN */}
                {gameState === 'GAMEOVER' && (
                  <motion.div
                    key="gameover-screen"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full max-w-xl"
                  >
                    <TiltCard className="bezel-inner rounded-[2rem] border border-flame/20 bg-paper p-8 text-center shadow-[0_32px_64px_-24px_oklch(0.52_0.196_26/0.25)]">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-flame/10 text-flame mb-5 animate-pulse">
                        <AlertTriangle className="h-6 w-6" strokeWidth={1.8} />
                      </div>
                      
                      <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-ink">
                        TRÒ CHƠI <span className="italic text-flame">KẾT THÚC</span>
                      </h2>
                      
                      <p className="mt-4.5 text-[15px] leading-relaxed text-flame-deep font-semibold">
                        Chỉ số {getCrashedStatName()} của bạn đã giảm xuống dưới mức an toàn (dưới 10%).
                      </p>
                      
                      <p className="mt-3.5 text-[14.5px] leading-relaxed text-ink-soft bg-paper-deep/65 p-5 rounded-2xl border border-ink/8 font-sans">
                        {getCrashedStatLesson()}
                      </p>

                      <div className="mt-8 border-t border-ink/8 pt-6 flex flex-col sm:flex-row justify-center gap-4">
                        <button
                          onClick={handleResetGame}
                          className="press group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-paper hover:bg-flame shadow-md"
                        >
                          <RotateCcw className="h-4.5 w-4.5" />
                          Thử lại cuộc chơi mới
                        </button>
                        <Link
                          href="/ly-thuyet"
                          className="press inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-paper px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink hover:border-ink/40"
                        >
                          Đọc lại lý thuyết
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </TiltCard>
                  </motion.div>
                )}

                {/* 4. VICTORY SCREEN */}
                {gameState === 'VICTORY' && (
                  <motion.div
                    key="victory-screen"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full max-w-2xl"
                  >
                    <TiltCard className="bezel-inner rounded-[2rem] border border-emerald-500/20 bg-paper p-8 text-center shadow-[0_32px_64px_-24px_oklch(0.60_0.15_150/0.25)]">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 mb-5">
                        <Award className="h-8 w-8" strokeWidth={1.6} />
                      </div>

                      <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">
                        {Math.round(economy) === 100 && Math.round(confidence) === 100 && Math.round(adaptability) === 100 && Math.round(solidarity) === 100
                          ? 'CHIẾN THẮNG TUYỆT ĐỐI!'
                          : 'VƯỢT BÃO THÀNH CÔNG!'}
                      </h2>
                      
                      <div className="mt-4 flex flex-col items-center">
                        <span className="font-display text-[10px] uppercase tracking-[0.25em] text-ink-soft">Danh hiệu đạt được</span>
                        <span className="mt-1.5 rounded-full bg-emerald-500/[0.07] border border-emerald-500/25 px-5 py-2 font-display text-lg font-black text-emerald-800 tracking-tight">
                          {getVictoryTitle()}
                        </span>
                      </div>

                      {/* Display final scores */}
                      <div className="mt-8 grid grid-cols-4 gap-3 bg-paper-deep/60 p-4.5 rounded-2xl border border-ink/8">
                        {[
                          { k: 'Kinh Tế', v: Math.round(economy), icon: Coins },
                          { k: 'Niềm Tin', v: Math.round(confidence), icon: ShieldCheck },
                          { k: 'Đổi Mới', v: Math.round(adaptability), icon: Cpu },
                          { k: 'Đoàn Kết', v: Math.round(solidarity), icon: Users },
                        ].map(stat => {
                          const Icon = stat.icon;
                          return (
                            <div key={stat.k} className="flex flex-col items-center">
                              <Icon className="h-4.5 w-4.5 text-flame mb-1" />
                              <span className="font-display text-[9.5px] uppercase tracking-wider text-ink-soft">{stat.k}</span>
                              <span className="font-mono text-base font-black text-ink mt-0.5">{stat.v}%</span>
                            </div>
                          );
                        })}
                      </div>

                      <p className="mt-6 text-[15px] leading-relaxed text-ink-soft font-sans">
                        {Math.round(economy) === 100 && Math.round(confidence) === 100 && Math.round(adaptability) === 100 && Math.round(solidarity) === 100 ? (
                          <>
                            <strong className="font-semibold text-emerald-800">Chiến thắng tuyệt đối!</strong> Bạn đã xuất sắc đưa tất cả các chỉ số (Kinh tế, Niềm tin, Đổi mới, Đoàn kết) đạt mức tối đa <strong className="font-semibold text-emerald-800">100%</strong>. Đây là một thành tựu hoàn hảo phi thường, thể hiện khả năng hoạch định tài tình, tối ưu hóa mọi nguồn lực và kiến tạo một kỷ nguyên phát triển hoàng kim cho đất nước!
                          </>
                        ) : (
                          <>
                            Xuất sắc! Bạn đã vượt qua trọn vẹn <strong className="font-semibold text-emerald-800">20 tình huống thử thách kinh tế lịch sử</strong>. Cơ chế đánh đổi buộc bạn phải cân nhắc thiệt hơn giữa Tăng trưởng (Kinh tế), Lòng dân (Niềm tin), Thể chế (Đổi mới) và Đồng thuận xã hội (Đoàn kết). Bằng việc vận dụng linh hoạt tư duy Đổi mới năm 1991, bạn đã chèo lái đất nước thoát khỏi khủng hoảng thành công!
                          </>
                        )}
                      </p>

                      <div className="mt-8 border-t border-ink/8 pt-6 flex flex-col sm:flex-row justify-center gap-4">
                        <button
                          onClick={handleResetGame}
                          className="press group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-paper hover:bg-flame shadow-md"
                        >
                          <RotateCcw className="h-4.5 w-4.5" />
                          Chơi lại game mới
                        </button>
                        <Link
                          href="/"
                          className="press inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-paper px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink hover:border-ink/40"
                        >
                          Về trang chủ
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </TiltCard>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

// Decorative micro icons
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function AlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}
