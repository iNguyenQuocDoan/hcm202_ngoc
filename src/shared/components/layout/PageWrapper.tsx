import { cn } from '@/shared/utils';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <main className={cn('mx-auto w-full max-w-3xl px-4 py-12', className)}>{children}</main>
  );
}
