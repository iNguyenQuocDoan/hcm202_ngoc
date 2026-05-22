'use client';

import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';
import { X } from 'lucide-react';
import { cn } from '@/shared/utils';

/** One block of detail content rendered inside the modal body. */
export type DetailBlock =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'callout'; text: string };

/** The full detail entry behind a single trigger. */
export interface Detail {
  /** Small tracked label above the title, e.g. "Phần 03 · Vận dụng tư tưởng". */
  eyebrow: string;
  title: string;
  blocks: DetailBlock[];
  sources?: string[];
}

interface DetailModalProps {
  open: boolean;
  onClose: () => void;
  detail: Detail;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Accessible reading dialog for optional deep-dive theory content.
 * Portals to <body>, traps focus, locks scroll, closes on Esc / backdrop.
 */
export function DetailModal({ open, onClose, detail }: DetailModalProps) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    restoreRef.current = document.activeElement as HTMLElement | null;
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    document.addEventListener('keydown', handleKeyDown);
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60);

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      document.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(focusTimer);
      restoreRef.current?.focus?.();
    };
  }, [open, handleKeyDown]);

  // Portals need document.body; on the server render nothing in place.
  if (typeof document === 'undefined') return null;

  const titleId = 'detail-modal-title';

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-3 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Đóng"
            tabIndex={-1}
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-storm/55 backdrop-blur-[3px]"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.99 }}
            transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
            className={cn(
              'relative flex max-h-[88svh] w-full max-w-2xl flex-col overflow-hidden',
              'rounded-[1.75rem] border border-ink/12 bg-paper text-ink',
              'shadow-[0_2px_0_oklch(1_0_0/0.5)_inset,0_40px_80px_-32px_oklch(0.20_0.038_250/0.55)]',
            )}
          >
            {/* Header */}
            <div className="relative flex items-start justify-between gap-4 border-b border-ink/10 bg-paper-deep/60 px-6 py-5 sm:px-8">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="h-px w-7 bg-flame" />
                  <span className="font-display text-[10.5px] font-semibold uppercase tracking-[0.3em] text-flame">
                    {detail.eyebrow}
                  </span>
                </div>
                <h2
                  id={titleId}
                  className="mt-2 font-display text-2xl font-black leading-tight tracking-tight text-ink sm:text-[1.7rem]"
                >
                  {detail.title}
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Đóng phần chi tiết"
                className="press -mr-1 -mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-paper text-ink-soft transition-colors duration-200 hover:border-flame hover:text-flame focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
              >
                <X className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
              {detail.blocks.map((block, i) => {
                if (block.type === 'h') {
                  return (
                    <h3
                      key={i}
                      className={cn(
                        'font-display text-lg font-bold tracking-tight text-ink',
                        i > 0 && 'mt-7',
                      )}
                    >
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === 'callout') {
                  return (
                    <p
                      key={i}
                      className={cn(
                        'rounded-2xl border border-flame/20 bg-flame/[0.06] px-5 py-4',
                        'font-display text-[15px] italic leading-snug text-flame-deep',
                        i > 0 && 'mt-5',
                      )}
                    >
                      {block.text}
                    </p>
                  );
                }
                return (
                  <p
                    key={i}
                    className={cn(
                      'max-w-[68ch] text-[15px] leading-relaxed text-ink-soft',
                      i > 0 && 'mt-3.5',
                    )}
                  >
                    {block.text}
                  </p>
                );
              })}

              {detail.sources && detail.sources.length > 0 && (
                <div className="mt-8 border-t border-ink/10 pt-4">
                  <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.28em] text-ink-mute">
                    Nguồn tham khảo
                  </div>
                  <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    {detail.sources.map((s) => (
                      <li key={s} className="text-[12.5px] italic text-ink-mute">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
