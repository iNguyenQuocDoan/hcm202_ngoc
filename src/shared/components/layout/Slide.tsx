'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';
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
  /** Full-bleed layer rendered behind the content, edge to edge. */
  backdrop?: ReactNode;
  /** Centre content both axes (title slides). */
  center?: boolean;
}

/**
 * One presentation frame. Fills exactly one viewport and snap-aligns, so each
 * section shows on its own. Content fades in whenever the frame enters view,
 * giving every jump between sections a clear arrival cue.
 */
export function Slide({
  id,
  tone = 'paper',
  children,
  className,
  grain,
  backdrop,
  center,
}: SlideProps) {
  const reduce = useReducedMotion();
  return (
    <section
      id={id}
      className={cn(
        'slide relative flex min-h-svh w-full flex-col justify-center overflow-hidden',
        'px-4 pb-14 pt-24 md:pb-16 md:pt-28',
        tones[tone],
      )}
      data-center={center ? '' : undefined}
    >
      {backdrop}
      {grain && <div className="grain pointer-events-none absolute inset-0 opacity-40" />}
      <motion.div
        className={cn('relative mx-auto w-full max-w-6xl', className)}
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
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
