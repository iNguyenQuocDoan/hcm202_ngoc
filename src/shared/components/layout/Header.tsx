'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Tổng quan' },
  { href: '/ly-thuyet', label: 'Lý thuyết' },
  { href: '/video', label: 'Video' },
  { href: '/game', label: 'Game' },
];

function isNavItemActive(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-stone-50/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-red-600" />
          <span>Vượt Bão 1991</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm md:gap-2">
          {navItems.map((item) => {
            const active = isNavItemActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'rounded-md bg-red-100 px-3 py-1.5 font-medium text-red-800'
                    : 'rounded-md px-3 py-1.5 text-stone-600 transition-colors hover:bg-stone-200/60 hover:text-stone-900'
                }
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
