'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/shared/utils';

interface SlideNavItem {
  id: string;
  label: string;
}

interface SlideNavProps {
  items: SlideNavItem[];
}

/** Vertical dot navigation — tracks the slide in view, lets you jump between frames. */
export function SlideNav({ items }: SlideNavProps) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Điều hướng slide"
      className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
    >
      {items.map((item, i) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-label={`${i + 1}. ${item.label}`}
            aria-current={isActive ? 'true' : undefined}
            className="group relative flex items-center justify-end"
          >
            <span
              className={cn(
                'mr-3 whitespace-nowrap rounded-full border border-ink/10 bg-paper/90 px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.2em] text-ink-soft opacity-0 shadow-sm transition-opacity duration-200',
                'group-hover:opacity-100',
                isActive && 'opacity-100',
              )}
            >
              {item.label}
            </span>
            <span
              className={cn(
                'block rounded-full border transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]',
                isActive
                  ? 'h-3 w-3 border-flame bg-flame'
                  : 'h-2.5 w-2.5 border-ink/25 bg-transparent group-hover:border-flame',
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
