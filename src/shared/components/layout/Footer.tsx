export function Footer() {
  return (
    <footer className="mt-20 border-t border-ink/15 bg-paper-deep">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-display text-2xl font-black tracking-tight text-ink">
              Vượt Bão <span className="italic text-flame">1991</span>
            </div>
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              Bài tập học phần Tư tưởng Hồ Chí Minh, học kỳ 8. Chủ đề khủng hoảng và đổi mới năm
              1991.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-right font-display text-xs uppercase tracking-[0.25em] text-ink-soft md:text-sm">
            <span>Phần I · Lý thuyết</span>
            <span>Phần II · Video (sắp ra mắt)</span>
            <span>Phần III · Game (sắp ra mắt)</span>
          </div>
        </div>
        <div className="mt-10 border-t border-ink/10 pt-6 text-center text-xs text-ink-soft">
          &copy; {new Date().getFullYear()} · Soạn cho mục đích học thuật.
        </div>
      </div>
    </footer>
  );
}
