'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/shared/utils';
import type { StoryScene as Scene } from '../scenes';

interface StoryProgressProps {
  scenes: Scene[];
}

/**
 * Vertical chapter rail that:
 *  – draws a fill line representing total page progress;
 *  – marks each scene with a dot that lights up while in view;
 *  – lets the user jump between scenes.
 */
export function StoryProgress({ scenes }: StoryProgressProps) {
  const { scrollYProgress } = useScroll();
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 22, mass: 0.4 });
  const [active, setActive] = useState(scenes[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );
    for (const s of scenes) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [scenes]);

  return (
    <aside
      aria-label="Tiến trình câu chuyện"
      className="pointer-events-none fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
    >
      <div className="relative h-[60vh] w-7">
        {/* Track */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink/12" />
        {/* Fill */}
        <motion.div
          aria-hidden
          style={{ scaleY: fill, transformOrigin: 'top' }}
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-linear-to-b from-flame via-sun to-flame"
        />
        {/* Dots */}
        <ul className="pointer-events-auto relative flex h-full flex-col justify-between">
          {scenes.map((s, i) => {
            const isActive = active === s.id;
            return (
              <li key={s.id} className="relative">
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  aria-label={`${i + 1}. ${s.eyebrow} — ${s.title}`}
                  className="group flex items-center"
                >
                  <span
                    className={cn(
                      'relative z-10 block rounded-full border bg-paper transition-all duration-500 ease-out-quart',
                      isActive
                        ? 'h-3.5 w-3.5 -translate-x-[3px] border-flame bg-flame shadow-[0_0_0_5px_oklch(0.964_0.018_78_/_0.85)]'
                        : 'h-2.5 w-2.5 border-ink/30 group-hover:border-flame',
                    )}
                  />
                  <span
                    className={cn(
                      'ml-3 whitespace-nowrap rounded-full bg-paper/90 px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.22em] text-ink-soft shadow-sm transition-all duration-300',
                      isActive
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100',
                    )}
                  >
                    <span className="font-semibold text-flame">{s.chapter}</span>
                    <span className="mx-1.5 text-ink-mute">·</span>
                    {s.eyebrow}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
