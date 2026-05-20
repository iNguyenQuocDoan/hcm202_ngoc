import type { ReactNode } from 'react';
import { cn } from '@/shared/utils';

const tones = {
  paper: 'bg-paper text-ink',
  deep: 'bg-paper-deep text-ink',
  ink: 'bg-ink text-paper',
  storm: 'bg-storm text-paper',
} as const;

interface SlideProps {
  id?: string;
  tone?: keyof typeof tones;
  children: ReactNode;
  className?: string;
  grain?: boolean;
  /** Centre content both axes (title slides). */
  center?: boolean;
}

/**
 * One presentation frame. Fills exactly one viewport and snap-aligns,
 * so each section can be shown on its own when presenting.
 */
export function Slide({ id, tone = 'paper', children, className, grain, center }: SlideProps) {
  return (
    <section
      id={id}
      className={cn(
        'slide relative flex min-h-svh w-full flex-col overflow-hidden',
        'px-4 pb-14 pt-24 md:pb-16 md:pt-28',
        center ? 'justify-center' : 'justify-center',
        tones[tone],
      )}
    >
      {grain && <div className="grain pointer-events-none absolute inset-0 opacity-40" />}
      <div className={cn('relative mx-auto w-full max-w-6xl', className)}>{children}</div>
    </section>
  );
}

interface SlideHeadingProps {
  eyebrow: string;
  title: ReactNode;
  index?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}

/** Consistent section header used across every slide. */
export function SlideHeading({
  eyebrow,
  title,
  index,
  align = 'left',
  tone = 'light',
  className,
}: SlideHeadingProps) {
  const muted = tone === 'dark' ? 'text-paper/55' : 'text-ink-soft';
  const heading = tone === 'dark' ? 'text-paper' : 'text-ink';
  return (
    <div
      className={cn(
        'flex flex-col gap-2',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-flame" />
        <span className="font-display text-[11px] font-semibold uppercase tracking-[0.32em] text-flame">
          {eyebrow}
        </span>
        {index && (
          <span className={cn('font-display text-[11px] uppercase tracking-[0.3em]', muted)}>
            {index}
          </span>
        )}
      </div>
      <h2
        className={cn(
          'font-display text-3xl font-black leading-[1.05] tracking-tight md:text-[2.6rem]',
          heading,
        )}
      >
        {title}
      </h2>
    </div>
  );
}
