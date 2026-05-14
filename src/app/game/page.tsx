import { Header, Footer, PageWrapper } from '@/shared/components/layout';

export default function GamePage() {
  return (
    <>
      <Header />
      <PageWrapper>
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
          <span className="inline-block rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-700">
            Game
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Đang phát triển
          </h1>
          <p className="max-w-md text-stone-600">
            Trò chơi tương tác giúp ôn tập kiến thức sẽ được bổ sung trong các phiên bản tới.
          </p>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
