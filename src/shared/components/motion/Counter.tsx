'use client';

import { animate, useInView } from 'framer-motion';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

function formatVi(n: number, decimals: number) {
  return n.toLocaleString('vi-VN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/** Counts up to `value` when scrolled into view. */
export function Counter({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1.7,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(() => formatVi(0, decimals));

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(formatVi(value, decimals));
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (latest) => setDisplay(formatVi(latest, decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
