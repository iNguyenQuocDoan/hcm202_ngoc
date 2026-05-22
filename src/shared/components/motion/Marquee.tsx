'use client';

import type { ReactNode } from 'react';
import { cn } from '@/shared/utils';

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. */
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Infinite horizontal ticker. The track holds two identical copies of the
 * content and shifts by exactly one copy, so the loop has no visible seam.
 */
export function Marquee({
  children,
  speed = 40,
  reverse = false,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'group/mq relative flex overflow-hidden',
        '[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]',
        className,
      )}
    >
      <div
        className={cn(
          'marquee flex w-max shrink-0',
          pauseOnHover && 'group-hover/mq:[animation-play-state:paused]',
        )}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
