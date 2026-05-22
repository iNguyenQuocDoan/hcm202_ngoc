'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Pixels of vertical travel. Positive drifts up as the page scrolls down. */
  distance?: number;
}

/**
 * Moves its children vertically as the element passes through the viewport,
 * creating depth against content scrolling at the normal rate.
 */
export function Parallax({ children, className, distance = 70 }: ParallaxProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div className="relative h-full w-full" style={reduce ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}
