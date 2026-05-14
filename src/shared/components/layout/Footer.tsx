export function Footer() {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-stone-600">
        <p className="font-medium text-stone-900">
          Tư tưởng Hồ Chí Minh · Học kỳ 8
        </p>
        <p className="mt-1">
          Chủ đề: Vượt Bão 1991 — Bài Học Từ Khủng Hoảng Và Tư Duy Đổi Mới
        </p>
        <p className="mt-3 text-xs text-stone-500">
          &copy; {new Date().getFullYear()} — Bài tập học phần.
        </p>
      </div>
    </footer>
  );
}
