import { cn } from '@/shared/utils';

interface SectionProps {
  id: string;
  eyebrow?: string;
  number?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, number, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-16 md:py-20', className)}>
      <div className="mb-10 grid gap-4 md:grid-cols-[auto_1fr] md:items-end md:gap-10">
        {number && (
          <div className="font-display text-[5.5rem] font-black leading-none text-flame/15 md:text-[7rem]">
            {number}
          </div>
        )}
        <div className="flex flex-col gap-2">
          {eyebrow && (
            <span className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-flame">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-4xl font-black leading-tight tracking-tight text-ink md:text-5xl">
            {title}
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-[17.5px] leading-[1.75] text-ink/85 md:text-lg">
        {children}
      </div>
    </section>
  );
}
