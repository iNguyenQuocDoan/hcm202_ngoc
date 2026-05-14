import { Footer, Header, PageWrapper, Section } from '@/shared/components/layout';
import type { IconType } from 'react-icons';
import { SiGithubcopilot, SiGooglegemini, SiOpenai } from 'react-icons/si';

const lecturerName = 'Hoàng Thắng';

const groupMembers = [
  'Nguyễn Thành Ngọc - SE180279',
  '[Thành viên 2]',
  '[Thành viên 3]',
  '[Thành viên 4]',
];

const presentationHeaders = [
  'Bối cảnh lịch sử năm 1991',
  'Vận dụng tư tưởng Hồ Chí Minh',
  'Đường lối đổi mới và chính sách trọng tâm',
  'Bài học rút ra cho giai đoạn hiện nay',
];

const aiSupports = [
  {
    name: 'ChatGPT',
    purpose: 'Lên dàn ý nội dung thuyết trình và chuẩn hóa câu chữ.',
    icon: SiOpenai,
  },
  {
    name: 'Gemini',
    purpose: 'Gợi ý hướng triển khai hình ảnh và từ khóa hỗ trợ phần video.',
    icon: SiGooglegemini,
  },
  {
    name: 'Copilot',
    purpose: 'Hỗ trợ viết và chỉnh sửa code giao diện cho các trang trong dự án.',
    icon: SiGithubcopilot,
  },
] as const satisfies ReadonlyArray<{
  name: string;
  purpose: string;
  icon: IconType;
}>;

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="border-b border-stone-200 bg-gradient-to-b from-red-50 via-amber-50 to-stone-50">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center md:py-18">
          <span className="inline-block rounded-full border border-red-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-700">
            Trang chính · Tổng quan
          </span>
          <h1 className="mx-auto mt-5 max-w-5xl text-3xl font-bold leading-[1.12] tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
            <span className="text-balance md:hidden">
              Vượt Bão 1991 – Bài Học Từ Khủng Hoảng Và Tư Duy Đổi Mới
            </span>
            <span className="hidden md:block">Vượt Bão 1991 – Bài Học Từ</span>
            <span className="hidden md:block">Khủng Hoảng Và Tư Duy Đổi Mới</span>
          </h1>
          <p className="mt-4 text-base text-stone-600 md:text-lg">
            Giảng viên hướng dẫn: <span className="font-semibold text-stone-900">{lecturerName}</span>
          </p>
        </div>
      </section>

      <PageWrapper className="max-w-6xl">
        <section className="grid gap-6 py-12 lg:grid-cols-2">
          <article
            id="thanh-vien"
            className="rounded-[2rem] border border-stone-200 bg-stone-100/80 p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">Thành viên nhóm</h2>
            <ul className="mt-6 space-y-4">
              {groupMembers.map((member, index) => (
                <li
                  key={member}
                  className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white px-5 py-4"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-base font-bold text-red-700">
                    {index + 1}
                  </span>
                  <span className="text-lg font-semibold text-stone-700">{member}</span>
                </li>
              ))}
            </ul>
          </article>

          <article
            id="noi-dung-thuyet"
            className="rounded-[2rem] border border-stone-200 bg-stone-100/80 p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">
              Nội dung thuyết trình
            </h2>
            <ol className="mt-6 space-y-4">
              {presentationHeaders.map((header, index) => (
                <li
                  key={header}
                  className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white px-5 py-4"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-base font-bold text-red-700">
                    {index + 1}
                  </span>
                  <span className="text-lg font-medium text-stone-700">{header}</span>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <hr className="border-stone-200" />

        <Section
          id="ai-ho-tro"
          title="Công cụ AI và mục đích sử dụng"
          className="[&>div]:items-center [&>div]:text-center"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {aiSupports.map((ai) => (
              <article
                key={ai.name}
                className="rounded-xl border border-stone-200 bg-white p-5 text-center shadow-sm"
              >
                <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-700">
                  <ai.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="mt-4">
                  <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-semibold text-red-800">
                    {ai.name}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">{ai.purpose}</p>
              </article>
            ))}
          </div>
        </Section>
      </PageWrapper>

      <Footer />
    </>
  );
}
