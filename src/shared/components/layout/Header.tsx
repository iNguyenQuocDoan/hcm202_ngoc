import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Lý thuyết' },
  { href: '/video', label: 'Video' },
  { href: '/game', label: 'Game' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-stone-50/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-red-600" />
          <span>Vượt Bão 1991</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm md:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-stone-600 transition-colors hover:bg-stone-200/60 hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
