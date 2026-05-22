'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/shared/utils';
import { DetailModal, type Detail } from './DetailModal';

interface DetailButtonProps {
  detail: Detail;
  /** Visual register of the surface the trigger sits on. */
  tone?: 'light' | 'dark';
  /** Trigger style: inline link inside a card, or a standalone pill. */
  variant?: 'link' | 'pill';
  label?: string;
  className?: string;
}

/**
 * Self-contained trigger + modal pair. Each instance owns its own open state,
 * so sections stay server-rendered and only the trigger is a client island.
 */
export function DetailButton({
  detail,
  tone = 'light',
  variant = 'link',
  label = 'Đọc chi tiết',
  className,
}: DetailButtonProps) {
  const [open, setOpen] = useState(false);

  const base =
    'press group/dt inline-flex items-center gap-1.5 font-display uppercase transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame';

  const styles =
    variant === 'pill'
      ? cn(
          'rounded-full border px-4 py-2 text-[11px] tracking-[0.22em]',
          tone === 'dark'
            ? 'border-paper/25 text-paper/80 hover:border-flame-soft hover:text-flame-soft'
            : 'border-ink/20 bg-paper text-ink hover:border-flame hover:text-flame',
        )
      : cn(
          'text-[11px] tracking-[0.2em]',
          tone === 'dark'
            ? 'text-paper/55 hover:text-flame-soft'
            : 'text-ink-mute hover:text-flame',
        );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={cn(base, styles, className)}
      >
        <span
          className={cn(
            'flex items-center justify-center rounded-full transition-transform duration-300 ease-out-quart group-hover/dt:rotate-90',
            variant === 'pill' ? 'h-4 w-4' : 'h-4 w-4',
            tone === 'dark' ? 'bg-paper/10' : 'bg-ink/[0.07]',
          )}
        >
          <Plus className="h-3 w-3" strokeWidth={2} />
        </span>
        {label}
      </button>
      <DetailModal open={open} onClose={() => setOpen(false)} detail={detail} />
    </>
  );
}
