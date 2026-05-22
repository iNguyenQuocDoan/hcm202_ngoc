'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';
import { cn } from '@/shared/utils';

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  /** Aspect ratio utility, e.g. 'aspect-[4/3]'. */
  ratio?: string;
  /** Crop focus, e.g. 'object-top'. */
  focus?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export function Figure({
  src,
  alt,
  caption,
  credit,
  ratio = 'aspect-[4/3]',
  focus = 'object-center',
  sizes = '(max-width: 768px) 100vw, 768px',
  priority = false,
  className,
}: FigureProps) {
  const reduce = useReducedMotion();

  return (
    <figure className={cn('group', className)}>
      <div className="relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper-deep p-1.5">
        <div className={cn('relative overflow-hidden rounded-[1.375rem] bg-storm', ratio)}>
          {/* Clip-path wipe + slow zoom-out as the image enters the viewport */}
          <motion.div
            className="absolute inset-0"
            initial={
              reduce
                ? { clipPath: 'inset(0 0 0% 0)' }
                : { clipPath: 'inset(0 0 100% 0)', scale: 1.12 }
            }
            whileInView={{ clipPath: 'inset(0 0 0% 0)', scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className={cn(
                'object-cover transition-transform duration-900 ease-out-quart group-hover:scale-[1.05]',
                focus,
              )}
            />
          </motion.div>
          {/* Warm editorial wash keeps photos cohesive with the paper palette */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-multiply"
            style={{
              background:
                'linear-gradient(180deg, oklch(0.52 0.196 26 / 0.05) 0%, oklch(0.22 0.030 50 / 0.32) 100%)',
            }}
          />
          <div className="grain pointer-events-none absolute inset-0 opacity-30" />
          {/* Sheen sweep on hover */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-paper/25 to-transparent transition-transform duration-1100 ease-out-quart group-hover:translate-x-full"
          />
        </div>
      </div>
      {(caption || credit) && (
        <figcaption className="mt-3 flex items-baseline justify-between gap-4 px-1">
          {caption && (
            <span className="font-display text-sm italic text-ink-soft">{caption}</span>
          )}
          {credit && (
            <span className="shrink-0 font-display text-[10px] uppercase tracking-[0.25em] text-ink-mute">
              {credit}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
