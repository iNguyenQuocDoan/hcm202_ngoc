import { Footer, Slide } from '@/shared/components/layout';
import { MaskReveal, Reveal, ScrollProgress } from '@/shared/components/motion';
import { StoryStage } from './_components/StoryStage';

export default function LyThuyetPage() {
  return (
    <>
      <ScrollProgress />

      {/* Opening title — kept as a one-frame snap slide before the cinematic stage */}
      <Slide id="mo-1" tone="paper" grain>
        <div
          aria-hidden
          className="storm-drift pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 75% at 18% 10%, oklch(0.52 0.196 26 / 0.20) 0%, transparent 60%),' +
              'radial-gradient(50% 60% at 88% 20%, oklch(0.20 0.038 250 / 0.26) 0%, transparent 60%),' +
              'radial-gradient(60% 55% at 50% 110%, oklch(0.82 0.150 78 / 0.22) 0%, transparent 60%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[14vh] right-[-3vw] select-none font-display text-[34vw] font-black leading-none text-flame/10"
        >
          1991
        </div>
        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-flame" />
              <span className="font-display text-[11px] uppercase tracking-[0.4em] text-flame">
                Phần I · Lý thuyết
              </span>
            </div>
          </Reveal>
          <h1 className="mt-5 font-display text-[16vw] font-black leading-[0.9] tracking-tight text-ink md:text-[8.5rem]">
            <MaskReveal delay={0.14}>Vượt Bão</MaskReveal>
            <MaskReveal delay={0.3} className="italic text-flame">
              1991
            </MaskReveal>
          </h1>
          <Reveal delay={0.22}>
            <p className="mt-6 max-w-2xl font-display text-2xl italic leading-snug text-ink-soft md:text-3xl">
              Một hành trình kể chuyện về Đổi mới — cuộn xuống để mở từng cảnh.
            </p>
          </Reveal>
          <Reveal delay={0.34}>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink/75">
              Đổi mới không bắt đầu từ 1991 mà từ Đại hội VI năm 1986. Năm 1991 là mốc Việt Nam
              tiếp tục kiểm nghiệm, củng cố và phát triển đường lối Đổi mới giữa biến động lớn.
            </p>
          </Reveal>
          <Reveal delay={0.46}>
            <a
              href="#mo-dau"
              className="press mt-8 inline-flex rounded-full bg-ink px-6 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-paper hover:bg-flame"
            >
              Bắt đầu trình bày
            </a>
          </Reveal>
        </div>
      </Slide>

      <StoryStage />

      <Footer />
    </>
  );
}
