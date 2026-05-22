'use client';

import { type ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';
import { cn } from '@/shared/utils';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees. */
  intensity?: number;
  /** Cursor-following spotlight glow. */
  glow?: boolean;
}

/**
 * Card that tilts in 3D toward the cursor with a soft spotlight that tracks
 * the pointer. Falls back to a plain static card under reduced motion.
 */
export function TiltCard({ children, className, intensity = 7, glow = true }: TiltCardProps) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const config = { stiffness: 200, damping: 22, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), config);
  const rotateY = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), config);
  const glowX = useTransform(px, (v) => `${v * 100}%`);
  const glowY = useTransform(py, (v) => `${v * 100}%`);
  const glowBg = useMotionTemplate`radial-gradient(280px circle at ${glowX} ${glowY}, oklch(0.66 0.155 30 / 0.22), transparent 70%)`;

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={cn('group/tilt relative overflow-hidden transform-3d', className)}
    >
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          style={{ background: glowBg }}
        />
      )}
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.div>
  );
}
