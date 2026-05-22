'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';
import type { ReactNode } from 'react';
import { cn } from '@/shared/utils';

interface MaskRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  /** Animate on mount (hero) or when scrolled into view. */
  trigger?: 'mount' | 'view';
}

/**
 * Reveals a line of text by sliding it up from behind a mask —
 * a stronger, more cinematic entrance than a plain fade.
 */
export function MaskReveal({
  children,
  delay = 0,
  duration = 0.85,
  className,
  trigger = 'mount',
}: MaskRevealProps) {
  const reduce = useReducedMotion();

  const inner = {
    hidden: { y: reduce ? 0 : '115%' },
    visible: {
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const animateProps =
    trigger === 'mount'
      ? { initial: 'hidden' as const, animate: 'visible' as const }
      : {
          initial: 'hidden' as const,
          whileInView: 'visible' as const,
          viewport: { once: true, amount: 0.6 },
        };

  return (
    <span className={cn('block overflow-hidden pb-[0.12em]', className)}>
      <motion.span className="block will-change-transform" variants={inner} {...animateProps}>
        {children}
      </motion.span>
    </span>
  );
}
