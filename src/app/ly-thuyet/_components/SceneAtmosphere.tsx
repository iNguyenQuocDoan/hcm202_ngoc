'use client';

import { useMemo } from 'react';
import { motion, type MotionValue, useTransform } from 'framer-motion';
import { cn } from '@/shared/utils';
import type { SceneEffect, SceneTone } from '../scenes';

function seededRand(seed: number) {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Hash a scene id into a stable seed so atmosphere stays the same across renders. */
function idSeed(id: string) {
  let h = 2166136261;
  for (let i = 0; i < id.length; i += 1) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Per-tone gradient stack. Each tone gets a primary radial wash, a secondary
 * accent, and a base ground colour. The whole stack is rendered as a single
 * absolutely-positioned div so we only animate transform/opacity.
 */
const toneStack: Record<
  SceneTone,
  { base: string; gradients: string[]; ground: string; glowColor: string; particleColor: string }
> = {
  dawn: {
    base: 'oklch(0.964 0.018 78)',
    gradients: [
      'radial-gradient(55% 70% at 22% 18%, oklch(0.82 0.150 78 / 0.55) 0%, transparent 65%)',
      'radial-gradient(45% 55% at 82% 30%, oklch(0.52 0.196 26 / 0.22) 0%, transparent 65%)',
      'radial-gradient(60% 55% at 55% 110%, oklch(0.90 0.085 80 / 0.5) 0%, transparent 60%)',
    ],
    ground: 'oklch(0.938 0.025 78)',
    glowColor: 'oklch(0.82 0.150 78 / 0.55)',
    particleColor: 'oklch(0.52 0.196 26 / 0.5)',
  },
  storm: {
    base: 'oklch(0.18 0.032 250)',
    gradients: [
      'radial-gradient(50% 60% at 18% 22%, oklch(0.30 0.075 250 / 0.85) 0%, transparent 65%)',
      'radial-gradient(45% 55% at 80% 70%, oklch(0.34 0.060 240 / 0.7) 0%, transparent 65%)',
      'radial-gradient(70% 60% at 50% 100%, oklch(0.10 0.020 250) 0%, transparent 60%)',
    ],
    ground: 'oklch(0.14 0.030 250)',
    glowColor: 'oklch(0.55 0.110 245 / 0.55)',
    particleColor: 'oklch(0.85 0.022 75 / 0.55)',
  },
  ember: {
    base: 'oklch(0.22 0.052 30)',
    gradients: [
      'radial-gradient(55% 60% at 25% 25%, oklch(0.52 0.196 26 / 0.65) 0%, transparent 65%)',
      'radial-gradient(50% 55% at 75% 70%, oklch(0.38 0.172 25 / 0.7) 0%, transparent 65%)',
      'radial-gradient(80% 60% at 50% 110%, oklch(0.18 0.040 30) 0%, transparent 60%)',
    ],
    ground: 'oklch(0.18 0.045 30)',
    glowColor: 'oklch(0.66 0.155 30 / 0.55)',
    particleColor: 'oklch(0.82 0.150 78 / 0.55)',
  },
  ink: {
    base: 'oklch(0.18 0.020 50)',
    gradients: [
      'radial-gradient(50% 55% at 78% 22%, oklch(0.52 0.196 26 / 0.45) 0%, transparent 65%)',
      'radial-gradient(45% 50% at 18% 78%, oklch(0.32 0.080 35 / 0.55) 0%, transparent 65%)',
      'radial-gradient(70% 60% at 50% 110%, oklch(0.10 0.015 50) 0%, transparent 60%)',
    ],
    ground: 'oklch(0.14 0.018 50)',
    glowColor: 'oklch(0.66 0.155 30 / 0.5)',
    particleColor: 'oklch(0.90 0.085 80 / 0.55)',
  },
  harvest: {
    base: 'oklch(0.938 0.025 78)',
    gradients: [
      'radial-gradient(55% 60% at 80% 20%, oklch(0.82 0.150 78 / 0.55) 0%, transparent 65%)',
      'radial-gradient(50% 55% at 18% 78%, oklch(0.90 0.085 80 / 0.55) 0%, transparent 65%)',
      'radial-gradient(70% 60% at 50% 110%, oklch(0.52 0.196 26 / 0.25) 0%, transparent 60%)',
    ],
    ground: 'oklch(0.92 0.030 80)',
    glowColor: 'oklch(0.82 0.150 78 / 0.6)',
    particleColor: 'oklch(0.52 0.196 26 / 0.4)',
  },
  twilight: {
    base: 'oklch(0.24 0.040 30)',
    gradients: [
      'radial-gradient(50% 60% at 20% 25%, oklch(0.38 0.172 25 / 0.55) 0%, transparent 65%)',
      'radial-gradient(50% 55% at 80% 75%, oklch(0.30 0.060 280 / 0.6) 0%, transparent 65%)',
      'radial-gradient(70% 60% at 50% 110%, oklch(0.16 0.030 30) 0%, transparent 60%)',
    ],
    ground: 'oklch(0.20 0.035 30)',
    glowColor: 'oklch(0.66 0.155 30 / 0.45)',
    particleColor: 'oklch(0.90 0.085 80 / 0.55)',
  },
  afterglow: {
    base: 'oklch(0.964 0.018 78)',
    gradients: [
      'radial-gradient(55% 65% at 50% 12%, oklch(0.82 0.150 78 / 0.75) 0%, transparent 65%)',
      'radial-gradient(45% 55% at 18% 78%, oklch(0.90 0.085 80 / 0.55) 0%, transparent 65%)',
      'radial-gradient(70% 60% at 80% 80%, oklch(0.52 0.196 26 / 0.18) 0%, transparent 60%)',
    ],
    ground: 'oklch(0.94 0.028 78)',
    glowColor: 'oklch(0.82 0.150 78 / 0.6)',
    particleColor: 'oklch(0.52 0.196 26 / 0.5)',
  },
  paper: {
    base: 'oklch(0.964 0.018 78)',
    gradients: [
      'radial-gradient(55% 65% at 22% 22%, oklch(0.82 0.150 78 / 0.35) 0%, transparent 65%)',
      'radial-gradient(50% 55% at 80% 70%, oklch(0.90 0.085 80 / 0.45) 0%, transparent 65%)',
      'radial-gradient(60% 50% at 50% 110%, oklch(0.52 0.196 26 / 0.15) 0%, transparent 60%)',
    ],
    ground: 'oklch(0.94 0.028 78)',
    glowColor: 'oklch(0.82 0.150 78 / 0.45)',
    particleColor: 'oklch(0.52 0.196 26 / 0.35)',
  },
};

interface SceneAtmosphereProps {
  sceneId: string;
  tone: SceneTone;
  effects: SceneEffect[];
  progress: MotionValue<number>;
  className?: string;
}

/**
 * Background + atmospheric layers for a scrollytelling scene.
 * All layers are pointer-events:none and rendered behind content.
 */
export function SceneAtmosphere({
  sceneId,
  tone,
  effects,
  progress,
  className,
}: SceneAtmosphereProps) {
  const palette = toneStack[tone];
  const seed = useMemo(() => idSeed(sceneId), [sceneId]);

  // Scroll-driven transforms — kept simple to stay on the compositor thread.
  const bgY = useTransform(progress, [0, 1], ['-6%', '6%']);
  const bgScale = useTransform(progress, [0, 0.5, 1], [1.04, 1, 1.04]);
  const overlayOpacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const particles = useMemo(() => {
    if (!effects.includes('particles')) return [];
    const rng = seededRand(seed);
    return Array.from({ length: 22 }, (_, i) => ({
      i,
      left: rng() * 100,
      top: rng() * 100,
      size: 1.4 + rng() * 3.6,
      delay: rng() * 6,
      duration: 9 + rng() * 8,
      opacity: 0.4 + rng() * 0.5,
    }));
  }, [effects, seed]);

  const orbs = useMemo(() => {
    if (!effects.includes('orb-drift')) return [];
    const rng = seededRand(seed + 13);
    return Array.from({ length: 3 }, (_, i) => ({
      i,
      left: 10 + rng() * 80,
      top: 10 + rng() * 70,
      size: 26 + rng() * 30,
      delay: rng() * 4,
      animClass: `orb-${(i % 3) + 1}` as const,
    }));
  }, [effects, seed]);

  const rainStreaks = useMemo(() => {
    if (!effects.includes('rain-streaks')) return [];
    const rng = seededRand(seed + 27);
    return Array.from({ length: 14 }, (_, i) => ({
      i,
      left: rng() * 100,
      delay: rng() * 4,
      duration: 4 + rng() * 3,
      height: 80 + rng() * 120,
    }));
  }, [effects, seed]);

  return (
    <motion.div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {/* Base ground colour — always present */}
      <div className="absolute inset-0" style={{ backgroundColor: palette.base }} />

      {/* Gradient wash — moves slowly with scroll */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: bgY,
          scale: bgScale,
          background: palette.gradients.join(','),
        }}
      />

      {/* Scene-entry overlay — soft tint that peaks while scene is centred */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: overlayOpacity,
          background: `radial-gradient(60% 50% at 50% 50%, ${palette.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Drifting orbs */}
      {orbs.map((o) => (
        <div
          key={o.i}
          className={cn('absolute rounded-full blur-3xl', o.animClass)}
          style={{
            left: `${o.left}%`,
            top: `${o.top}%`,
            width: `${o.size}rem`,
            height: `${o.size}rem`,
            background: palette.glowColor,
            animationDelay: `${o.delay}s`,
          }}
        />
      ))}

      {/* Soft halo when the scene's effects request a glow only */}
      {effects.includes('glow') && (
        <div
          className="absolute top-1/2 left-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
          style={{ background: palette.glowColor }}
        />
      )}

      {/* Rain streaks for storm */}
      {rainStreaks.map((r) => (
        <span
          key={r.i}
          className="rain-streak absolute top-[-20%] w-px"
          style={{
            left: `${r.left}%`,
            height: `${r.height}px`,
            background: `linear-gradient(to bottom, transparent, ${palette.particleColor})`,
            animationDelay: `${r.delay}s`,
            animationDuration: `${r.duration}s`,
          }}
        />
      ))}

      {/* Dust particles */}
      {particles.map((p) => (
        <span
          key={p.i}
          className="dust-particle absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: palette.particleColor,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Compass SVG behind content — only for the "vận dụng tư tưởng" scene */}
      {effects.includes('compass') && (
        <CompassRing color={palette.particleColor} progress={progress} />
      )}

      {/* Sun rays — radiating from top centre */}
      {effects.includes('sun-rays') && <SunRays color={palette.glowColor} />}

      {/* Tiny flag flutter accent */}
      {effects.includes('flag-flutter') && <FlagFlutter />}

      {/* Subtle noise grain to keep things film-like */}
      <div className="grain absolute inset-0 opacity-[0.18]" />
    </motion.div>
  );
}

function CompassRing({ color, progress }: { color: string; progress: MotionValue<number> }) {
  const rotate = useTransform(progress, [0, 1], [-20, 35]);
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="absolute top-1/2 left-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 opacity-30"
      style={{ rotate }}
    >
      <defs>
        <radialGradient id="compass-grad" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor={color} stopOpacity="0" />
          <stop offset="100%" stopColor={color} stopOpacity="0.55" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#compass-grad)" />
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke={color}
        strokeOpacity="0.3"
        strokeWidth="0.4"
      />
      <circle
        cx="100"
        cy="100"
        r="50"
        fill="none"
        stroke={color}
        strokeOpacity="0.5"
        strokeWidth="0.4"
      />
      {Array.from({ length: 32 }).map((_, i) => {
        const angle = (i / 32) * Math.PI * 2;
        const long = i % 4 === 0;
        const r1 = long ? 78 : 86;
        const r2 = 95;
        const x1 = Number((100 + Math.cos(angle) * r1).toFixed(4));
        const y1 = Number((100 + Math.sin(angle) * r1).toFixed(4));
        const x2 = Number((100 + Math.cos(angle) * r2).toFixed(4));
        const y2 = Number((100 + Math.sin(angle) * r2).toFixed(4));
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeOpacity={long ? 0.8 : 0.4}
            strokeWidth={long ? 0.8 : 0.4}
          />
        );
      })}
      <polygon points="100,30 96,100 100,30" fill={color} fillOpacity="0.7" />
      <polygon points="100,170 104,100 100,170" fill={color} fillOpacity="0.3" />
    </motion.svg>
  );
}

function SunRays({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
      className="absolute inset-x-0 top-0 h-[55vh] w-full opacity-50"
    >
      <defs>
        <radialGradient id="sun-glow" cx="50%" cy="0%" r="75%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="0" rx="220" ry="160" fill="url(#sun-glow)" />
      {Array.from({ length: 9 }).map((_, i) => {
        const t = (i - 4) * 14;
        const x = 200 + t;
        return (
          <line
            key={i}
            x1="200"
            y1="0"
            x2={x}
            y2="200"
            stroke={color}
            strokeOpacity={0.22 - Math.abs(i - 4) * 0.025}
            strokeWidth="0.8"
          />
        );
      })}
    </svg>
  );
}

function FlagFlutter() {
  return (
    <svg
      viewBox="0 0 120 80"
      className="absolute top-[10%] right-[4%] h-20 w-32 opacity-50 md:h-28 md:w-44"
    >
      <defs>
        <linearGradient id="flag-shade" x1="0%" x2="100%">
          <stop offset="0%" stopColor="oklch(0.52 0.196 26)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.38 0.172 25)" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <g className="flag-flutter origin-left">
        <path d="M0,4 Q30,0 60,8 T120,4 L120,72 Q90,80 60,68 T0,76 Z" fill="url(#flag-shade)" />
        <polygon
          points="60,28 65,42 80,42 68,50 73,64 60,56 47,64 52,50 40,42 55,42"
          fill="oklch(0.82 0.150 78)"
          fillOpacity="0.95"
        />
      </g>
    </svg>
  );
}
