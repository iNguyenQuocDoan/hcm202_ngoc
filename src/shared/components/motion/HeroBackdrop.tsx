'use client';

import { useEffect } from 'react';
import { motion, type MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';
import { cn } from '@/shared/utils';

interface OrbSpec {
  drift: string;
  color: string;
  size: string;
  pos: string;
  /** Pixels the orb shifts with the cursor. */
  depth: number;
}

const ORBS: OrbSpec[] = [
  {
    drift: 'orb-1',
    color: 'oklch(0.55 0.20 28 / 0.32)',
    size: '46vw',
    pos: '-left-[12vw] -top-[16vh]',
    depth: 32,
  },
  {
    drift: 'orb-2',
    color: 'oklch(0.84 0.15 80 / 0.34)',
    size: '38vw',
    pos: '-right-[10vw] top-[6vh]',
    depth: -44,
  },
  {
    drift: 'orb-3',
    color: 'oklch(0.32 0.07 250 / 0.22)',
    size: '42vw',
    pos: 'left-[26vw] -bottom-[22vh]',
    depth: 24,
  },
];

function Orb({ orb, mx, my }: { orb: OrbSpec; mx: MotionValue<number>; my: MotionValue<number> }) {
  const x = useTransform(mx, (v) => v * orb.depth);
  const y = useTransform(my, (v) => v * orb.depth);
  return (
    <motion.div className={cn('absolute', orb.pos)} style={{ x, y }}>
      <div
        className={cn('rounded-full blur-3xl', orb.drift)}
        style={{
          width: orb.size,
          height: orb.size,
          background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}

/**
 * Animated hero background: warm ambient orbs that drift on their own and
 * parallax gently toward the cursor. Static under reduced motion.
 */
export function HeroBackdrop({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 45, damping: 18 });
  const my = useSpring(myRaw, { stiffness: 45, damping: 18 });

  useEffect(() => {
    if (reduce) return;
    function onMove(e: PointerEvent) {
      mxRaw.set((e.clientX / window.innerWidth - 0.5) * 2);
      myRaw.set((e.clientY / window.innerHeight - 0.5) * 2);
    }
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, mxRaw, myRaw]);

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {ORBS.map((orb) => (
        <Orb key={orb.drift} orb={orb} mx={mx} my={my} />
      ))}
      <div className="grain absolute inset-0 opacity-40" />
    </div>
  );
}
