import Link from 'next/link';
import { ArrowUpRight, Clapperboard } from 'lucide-react';
import { Footer } from '@/shared/components/layout';
import { Reveal, ScrollProgress } from '@/shared/components/motion';

export default function VideoPage() {
  return (
    <>
      <ScrollProgress />

      <main className="flex flex-1 flex-col pt-28 md:pt-32">
        <section className="relative flex flex-1 items-center overflow-hidden border-b border-ink/10">
          <div
            aria-hidden
            className="storm-drift pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(50% 60% at 50% 25%, oklch(0.52 0.196 26 / 0.16) 0%, transparent 60%),' +
                'radial-gradient(50% 55% at 50% 90%, oklch(0.82 0.150 78 / 0.18) 0%, transparent 60%)',
            }}
          />
          <div className="grain pointer-events-none absolute inset-0" />

          <div className="relative mx-auto w-full max-w-3xl px-4 py-24 text-center md:py-32">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/70 px-4 py-1.5 font-display text-[11px] uppercase tracking-[0.35em] text-flame">
                <Clapperboard className="h-3.5 w-3.5" strokeWidth={1.6} />
                Phần II · Video
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-8 font-display text-[14vw] font-black leading-[0.92] tracking-tight text-ink md:text-[6rem]">
                Sắp <span className="italic text-flame">ra mắt</span>
              </h1>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mx-auto mt-7 max-w-lg text-[17px] leading-relaxed text-ink-soft md:text-lg">
                Video minh họa cho chủ đề Vượt Bão 1991 đang được hoàn thiện. Trong lúc chờ đợi,
                bạn có thể đọc trước phần lý thuyết.
              </p>
            </Reveal>
            <Reveal delay={0.34}>
              <Link
                href="/ly-thuyet"
                className="press group mt-10 inline-flex items-center gap-2 rounded-full bg-ink py-2 pl-6 pr-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-paper hover:bg-flame"
              >
                Đọc phần lý thuyết
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
