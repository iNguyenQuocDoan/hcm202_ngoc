import { cn } from '@/shared/utils';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-20 py-12 md:py-16', className)}>
      <div className="mb-8 flex flex-col gap-2">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-widest text-red-700">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="prose-content flex flex-col gap-5 text-[17px] leading-relaxed text-stone-700">
        {children}
      </div>
    </section>
  );
}
