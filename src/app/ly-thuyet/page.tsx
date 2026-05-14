import { Footer, Header, PageWrapper, Section } from '@/shared/components/layout';

export default function LyThuyetPage() {
  return (
    <>
      <Header />

      <section className="border-b border-stone-200 bg-gradient-to-b from-red-50 via-amber-50 to-stone-50">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center md:py-28">
          <span className="inline-block rounded-full border border-red-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-700">
            Lý thuyết
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl">
            Vượt Bão 1991
          </h1>
          <p className="mt-3 text-lg font-medium text-stone-600 md:text-xl">
            Bài học từ khủng hoảng và tư duy đổi mới
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-relaxed text-stone-700">
            Trang này tổng hợp phần nền tảng lý thuyết của dự án: bối cảnh lịch sử, cách vận dụng tư
            tưởng Hồ Chí Minh và các bài học còn giá trị cho hiện tại.
          </p>
          <div className="mt-8 flex justify-center gap-3 text-sm">
            <a
              href="#boi-canh"
              className="rounded-md bg-red-700 px-5 py-2.5 font-medium text-white shadow-sm hover:bg-red-800"
            >
              Bắt đầu đọc
            </a>
            <a
              href="#bai-hoc"
              className="rounded-md border border-stone-300 bg-white px-5 py-2.5 font-medium text-stone-700 hover:border-stone-400"
            >
              Bài học rút ra
            </a>
          </div>
        </div>
      </section>

      <PageWrapper>
        <Section id="mo-dau" eyebrow="Mở đầu" title="Một giai đoạn đầy thử thách">
          <p>
            Năm 1991 là một mốc nhiều biến động với Việt Nam. Khó khăn kinh tế trong nước cộng với thay
            đổi lớn của cục diện quốc tế đã đặt tiến trình đổi mới trước áp lực rất cao.
          </p>
          <p>
            Trong bối cảnh đó, tư tưởng Hồ Chí Minh tiếp tục là nền tảng định hướng để giữ vững mục tiêu
            chiến lược, đồng thời linh hoạt trong cách làm để thích ứng với thực tiễn.
          </p>
        </Section>

        <hr className="border-stone-200" />

        <Section id="boi-canh" eyebrow="01 · Bối cảnh" title="Khủng hoảng dồn dập trên nhiều mặt trận">
          <ul className="ml-1 grid gap-3 md:grid-cols-2">
            <li className="rounded-lg border border-stone-200 bg-white p-4">
              <h3 className="font-semibold text-stone-900">Kinh tế suy giảm</h3>
              <p className="mt-1 text-sm text-stone-600">
                Lạm phát cao, sản xuất đình trệ, đời sống người dân còn nhiều khó khăn.
              </p>
            </li>
            <li className="rounded-lg border border-stone-200 bg-white p-4">
              <h3 className="font-semibold text-stone-900">Biến động quốc tế</h3>
              <p className="mt-1 text-sm text-stone-600">
                Liên Xô và Đông Âu tan rã khiến nguồn hỗ trợ truyền thống suy giảm mạnh.
              </p>
            </li>
            <li className="rounded-lg border border-stone-200 bg-white p-4">
              <h3 className="font-semibold text-stone-900">Bao vây, cấm vận</h3>
              <p className="mt-1 text-sm text-stone-600">
                Khả năng tiếp cận vốn, công nghệ và thị trường quốc tế bị hạn chế.
              </p>
            </li>
            <li className="rounded-lg border border-stone-200 bg-white p-4">
              <h3 className="font-semibold text-stone-900">Áp lực cải cách</h3>
              <p className="mt-1 text-sm text-stone-600">
                Mô hình quản lý cũ bộc lộ nhiều điểm nghẽn, buộc phải đổi mới quyết liệt hơn.
              </p>
            </li>
          </ul>
        </Section>

        <hr className="border-stone-200" />

        <Section
          id="van-dung"
          eyebrow="02 · Vận dụng tư tưởng"
          title="Kim chỉ nam để vượt qua khủng hoảng"
        >
          <p>
            Tư tưởng Hồ Chí Minh được vận dụng thông qua tinh thần tự lực, tự cường, phát huy đoàn kết
            toàn dân và đặt lợi ích của nhân dân ở vị trí trung tâm.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-lg border border-red-200 bg-red-50/50 p-5">
              <h3 className="font-semibold text-stone-900">Đoàn kết toàn dân</h3>
              <p className="mt-1 text-sm text-stone-700">
                Quy tụ các nguồn lực xã hội, tạo đồng thuận trong giai đoạn nhiều thử thách.
              </p>
            </article>
            <article className="rounded-lg border border-amber-200 bg-amber-50/60 p-5">
              <h3 className="font-semibold text-stone-900">Tự lực, tự cường</h3>
              <p className="mt-1 text-sm text-stone-700">
                Chủ động dựa vào nội lực khi điều kiện bên ngoài không thuận lợi.
              </p>
            </article>
            <article className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-5">
              <h3 className="font-semibold text-stone-900">Lấy dân làm gốc</h3>
              <p className="mt-1 text-sm text-stone-700">
                Chính sách cần gắn với ổn định đời sống và củng cố niềm tin của nhân dân.
              </p>
            </article>
          </div>
        </Section>

        <hr className="border-stone-200" />

        <Section
          id="chinh-sach"
          eyebrow="03 · Chính sách"
          title="Đổi mới linh hoạt, mở cửa có nguyên tắc"
        >
          <ol className="space-y-4">
            <li className="rounded-lg border-l-4 border-red-600 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-stone-900">Mở rộng quan hệ đối ngoại</h3>
              <p className="mt-1 text-sm text-stone-700">
                Đa dạng hóa, đa phương hóa để mở thêm không gian phát triển cho nền kinh tế.
              </p>
            </li>
            <li className="rounded-lg border-l-4 border-amber-600 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-stone-900">Phát triển kinh tế nhiều thành phần</h3>
              <p className="mt-1 text-sm text-stone-700">
                Vận hành theo cơ chế thị trường có quản lý của Nhà nước, theo định hướng xã hội chủ nghĩa.
              </p>
            </li>
            <li className="rounded-lg border-l-4 border-emerald-600 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-stone-900">Ưu tiên ổn định đời sống</h3>
              <p className="mt-1 text-sm text-stone-700">
                Kiểm soát lạm phát, thúc đẩy an sinh và giữ ổn định xã hội.
              </p>
            </li>
          </ol>
        </Section>

        <hr className="border-stone-200" />

        <Section id="bai-hoc" eyebrow="04 · Bài học" title="Giá trị bền vững cho hiện tại">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-stone-900 p-5 text-stone-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-300">Bài học 1</p>
              <h3 className="mt-2 text-lg font-semibold">Kiên định mục tiêu, linh hoạt phương pháp</h3>
              <p className="mt-2 text-sm text-stone-300">
                Giữ vững nguyên tắc chiến lược nhưng cần thay đổi cách triển khai theo bối cảnh thực tế.
              </p>
            </div>
            <div className="rounded-lg bg-stone-900 p-5 text-stone-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-300">Bài học 2</p>
              <h3 className="mt-2 text-lg font-semibold">Sức mạnh lớn nhất đến từ nhân dân</h3>
              <p className="mt-2 text-sm text-stone-300">
                Mọi đường lối chỉ bền vững khi xuất phát từ lợi ích và niềm tin của người dân.
              </p>
            </div>
            <div className="rounded-lg bg-stone-900 p-5 text-stone-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                Bài học 3
              </p>
              <h3 className="mt-2 text-lg font-semibold">Tự lực là nền, hội nhập là động lực</h3>
              <p className="mt-2 text-sm text-stone-300">
                Chủ động nội lực đi cùng hội nhập có chọn lọc giúp tăng sức chống chịu dài hạn.
              </p>
            </div>
            <div className="rounded-lg bg-stone-900 p-5 text-stone-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">Bài học 4</p>
              <h3 className="mt-2 text-lg font-semibold">Đổi mới là quá trình liên tục</h3>
              <p className="mt-2 text-sm text-stone-300">
                Không có một công thức cố định cho mọi giai đoạn, cần thường xuyên tự điều chỉnh.
              </p>
            </div>
          </div>
        </Section>
      </PageWrapper>

      <Footer />
    </>
  );
}
