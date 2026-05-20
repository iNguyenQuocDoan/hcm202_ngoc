'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/utils';

const navItems = [
  { href: '/', label: 'Tổng quan' },
  { href: '/ly-thuyet', label: 'Lý thuyết' },
  { href: '/video', label: 'Video' },
  { href: '/game', label: 'Game' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <div
        className={cn(
          'flex w-full max-w-3xl items-center justify-between gap-3',
          'rounded-full border border-ink/10 bg-paper/75 px-2.5 py-2 backdrop-blur-xl',
          'shadow-[inset_0_1px_0_oklch(1_0_0/0.45),0_22px_44px_-28px_oklch(0.38_0.172_25/0.28)]',
        )}
      >
        <Link
          href="/"
          className="press flex items-center gap-2.5 rounded-full px-3 py-1.5 font-display text-[15px] font-bold tracking-tight text-ink"
        >
          <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-flame/60" />
            <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-flame" />
          </span>
          <span className="hidden sm:inline">
            Vượt Bão <span className="italic text-flame">1991</span>
          </span>
          <span className="sm:hidden">
            VB <span className="italic text-flame">91</span>
          </span>
        </Link>

        <nav className="flex items-center gap-0.5">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'press relative rounded-full px-3 py-1.5 font-display text-[11px] uppercase tracking-[0.2em] transition-colors duration-200',
                  active
                    ? 'bg-ink text-paper'
                    : 'text-ink-soft hover:bg-ink/5 hover:text-ink',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
