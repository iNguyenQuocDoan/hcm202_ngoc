import { Header, Footer, PageWrapper, Section } from '@/shared/components/layout';

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="border-b border-stone-200 bg-gradient-to-b from-red-50 via-amber-50 to-stone-50">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center md:py-28">
          <span className="inline-block rounded-full border border-red-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-700">
            Tư tưởng Hồ Chí Minh
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl">
            Vượt Bão 1991
          </h1>
          <p className="mt-3 text-lg font-medium text-stone-600 md:text-xl">
            Bài Học Từ Khủng Hoảng Và Tư Duy Đổi Mới
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-relaxed text-stone-700">
            Năm 1991 — đất nước đứng trước nhiều khó khăn chồng chất. Vận dụng tư tưởng Hồ Chí Minh
            đã trở thành nền tảng để Việt Nam vượt qua khủng hoảng và mở ra con đường phát triển
            mới.
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
        {/* Intro */}
        <Section id="mo-dau" eyebrow="Mở đầu" title="Một giai đoạn đầy thử thách">
          <p>
            Năm 1991 là giai đoạn đất nước gặp nhiều khó khăn do{' '}
            <strong className="text-stone-900">khủng hoảng kinh tế</strong>, sự tan rã của Liên Xô
            và các nước xã hội chủ nghĩa Đông Âu, cùng với những thách thức trong quá trình đổi
            mới. Trong bối cảnh đó, việc vận dụng tư tưởng Hồ Chí Minh đã trở thành nền tảng quan
            trọng giúp Việt Nam vượt qua khó khăn và tiếp tục phát triển.
          </p>
        </Section>

        <hr className="border-stone-200" />

        {/* Bối cảnh */}
        <Section id="boi-canh" eyebrow="01 · Bối cảnh" title="Khủng hoảng dồn dập trên nhiều mặt trận">
          <p>
            Cuối những năm 1980 – đầu 1990, Việt Nam phải đối mặt với một cuộc khủng hoảng nhiều
            chiều, đặt sự nghiệp đổi mới trước những phép thử lớn nhất:
          </p>
          <ul className="ml-1 grid gap-3 md:grid-cols-2">
            <li className="rounded-lg border border-stone-200 bg-white p-4">
              <h3 className="font-semibold text-stone-900">Kinh tế suy giảm</h3>
              <p className="mt-1 text-sm text-stone-600">
                Lạm phát phi mã, sản xuất đình trệ, đời sống nhân dân khó khăn.
              </p>
            </li>
            <li className="rounded-lg border border-stone-200 bg-white p-4">
              <h3 className="font-semibold text-stone-900">Liên Xô và Đông Âu tan rã</h3>
              <p className="mt-1 text-sm text-stone-600">
                Mất nguồn viện trợ truyền thống, thị trường xuất khẩu thu hẹp đột ngột.
              </p>
            </li>
            <li className="rounded-lg border border-stone-200 bg-white p-4">
              <h3 className="font-semibold text-stone-900">Bao vây – cấm vận</h3>
              <p className="mt-1 text-sm text-stone-600">
                Cản trở quan hệ kinh tế quốc tế và khả năng tiếp cận vốn, công nghệ.
              </p>
            </li>
            <li className="rounded-lg border border-stone-200 bg-white p-4">
              <h3 className="font-semibold text-stone-900">Thách thức nội tại</h3>
              <p className="mt-1 text-sm text-stone-600">
                Mô hình quản lý cũ chưa được tháo gỡ triệt để; tư duy đổi mới còn phải tiếp tục
                hoàn thiện.
              </p>
            </li>
          </ul>
        </Section>

        <hr className="border-stone-200" />

        {/* Vận dụng tư tưởng */}
        <Section
          id="van-dung"
          eyebrow="02 · Vận dụng tư tưởng"
          title="Tư tưởng Hồ Chí Minh — kim chỉ nam vượt bão"
        >
          <p>
            Tư tưởng Hồ Chí Minh được áp dụng thông qua việc phát huy{' '}
            <strong className="text-stone-900">tinh thần tự lực, tự cường</strong>,{' '}
            <strong className="text-stone-900">đoàn kết toàn dân</strong> và lấy{' '}
            <strong className="text-stone-900">nhân dân làm trung tâm</strong>. Đảng và Nhà nước
            kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội, đồng thời linh hoạt
            đổi mới về kinh tế để phù hợp với tình hình thực tiễn.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-lg border border-red-200 bg-red-50/50 p-5">
              <div className="text-2xl">🤝</div>
              <h3 className="mt-2 font-semibold text-stone-900">Đoàn kết toàn dân</h3>
              <p className="mt-1 text-sm text-stone-700">
                Quy tụ sức mạnh dân tộc, tạo đồng thuận xã hội trong giai đoạn khó khăn nhất.
              </p>
            </article>
            <article className="rounded-lg border border-amber-200 bg-amber-50/60 p-5">
              <div className="text-2xl">🪨</div>
              <h3 className="mt-2 font-semibold text-stone-900">Tự lực, tự cường</h3>
              <p className="mt-1 text-sm text-stone-700">
                Dựa vào sức mình là chính khi nguồn lực bên ngoài sụt giảm đột ngột.
              </p>
            </article>
            <article className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-5">
              <div className="text-2xl">👥</div>
              <h3 className="mt-2 font-semibold text-stone-900">Lấy dân làm gốc</h3>
              <p className="mt-1 text-sm text-stone-700">
                Mọi chính sách hướng tới ổn định và chăm lo đời sống nhân dân.
              </p>
            </article>
          </div>
        </Section>

        <hr className="border-stone-200" />

        {/* Chính sách */}
        <Section
          id="chinh-sach"
          eyebrow="03 · Chính sách"
          title="Đổi mới linh hoạt, mở cửa có nguyên tắc"
        >
          <p>
            Trên nền tảng tư tưởng đó, một loạt chính sách then chốt được triển khai, từng bước đưa
            Việt Nam thoát khỏi khủng hoảng:
          </p>

          <ol className="space-y-4">
            <li className="rounded-lg border-l-4 border-red-600 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-stone-900">Chính sách mở cửa</h3>
              <p className="mt-1 text-sm text-stone-700">
                Đa dạng hóa, đa phương hóa quan hệ đối ngoại; chủ động hội nhập kinh tế quốc tế.
              </p>
            </li>
            <li className="rounded-lg border-l-4 border-amber-600 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-stone-900">Kinh tế nhiều thành phần</h3>
              <p className="mt-1 text-sm text-stone-700">
                Phát triển kinh tế nhiều thành phần vận hành theo cơ chế thị trường, có sự quản lý
                của Nhà nước, theo định hướng xã hội chủ nghĩa.
              </p>
            </li>
            <li className="rounded-lg border-l-4 border-emerald-600 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-stone-900">Tăng cường quan hệ đối ngoại</h3>
              <p className="mt-1 text-sm text-stone-700">
                Bình thường hóa, mở rộng quan hệ với các nước; tạo môi trường hòa bình, ổn định để
                phát triển.
              </p>
            </li>
            <li className="rounded-lg border-l-4 border-sky-600 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-stone-900">Chăm lo đời sống nhân dân</h3>
              <p className="mt-1 text-sm text-stone-700">
                Ưu tiên ổn định đời sống, giảm lạm phát, bảo đảm an sinh — giữ vững niềm tin của
                nhân dân vào sự nghiệp đổi mới.
              </p>
            </li>
          </ol>

          <blockquote className="mt-2 border-l-4 border-red-600 bg-stone-100 px-5 py-4 italic text-stone-800">
            “Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.”
            <span className="mt-1 block text-sm not-italic text-stone-500">— Hồ Chí Minh</span>
          </blockquote>
        </Section>

        <hr className="border-stone-200" />

        {/* Bài học */}
        <Section id="bai-hoc" eyebrow="04 · Bài học" title="Giá trị bền vững cho hôm nay">
          <p>
            Việc vận dụng tư tưởng Hồ Chí Minh năm 1991 cho thấy giá trị to lớn của tư tưởng này
            trong việc định hướng con đường phát triển của đất nước, đặc biệt trong những giai đoạn
            khó khăn và thử thách.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-stone-900 p-5 text-stone-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-300">
                Bài học 1
              </p>
              <h3 className="mt-2 text-lg font-semibold">Kiên định nguyên tắc, linh hoạt chiến lược</h3>
              <p className="mt-2 text-sm text-stone-300">
                Giữ vững mục tiêu độc lập dân tộc – chủ nghĩa xã hội; đồng thời sẵn sàng đổi mới
                cách làm để phù hợp với thực tiễn.
              </p>
            </div>
            <div className="rounded-lg bg-stone-900 p-5 text-stone-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                Bài học 2
              </p>
              <h3 className="mt-2 text-lg font-semibold">Sức mạnh từ nhân dân</h3>
              <p className="mt-2 text-sm text-stone-300">
                Mọi đường lối chỉ phát huy hiệu quả khi xuất phát từ lợi ích, niềm tin và sức sáng
                tạo của nhân dân.
              </p>
            </div>
            <div className="rounded-lg bg-stone-900 p-5 text-stone-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                Bài học 3
              </p>
              <h3 className="mt-2 text-lg font-semibold">Tự lực là gốc, hội nhập là cánh</h3>
              <p className="mt-2 text-sm text-stone-300">
                Chủ động dựa vào nội lực, đồng thời tận dụng nguồn lực bên ngoài thông qua hội nhập
                quốc tế có chọn lọc.
              </p>
            </div>
            <div className="rounded-lg bg-stone-900 p-5 text-stone-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                Bài học 4
              </p>
              <h3 className="mt-2 text-lg font-semibold">Tư duy đổi mới — không một lần là đủ</h3>
              <p className="mt-2 text-sm text-stone-300">
                Đổi mới phải là quá trình liên tục, phù hợp với bối cảnh trong nước và thế giới
                luôn biến động.
              </p>
            </div>
          </div>
        </Section>

        <hr className="border-stone-200" />

        {/* Kết luận */}
        <Section id="ket-luan" eyebrow="Kết luận" title="Một di sản tư tưởng còn nguyên giá trị">
          <p>
            Vượt qua cơn bão 1991, đất nước không chỉ đứng vững mà còn chuyển mình mạnh mẽ. Đó là
            minh chứng sinh động cho sức sống của tư tưởng Hồ Chí Minh — một di sản tư tưởng giúp
            mỗi thế hệ Việt Nam tìm thấy hướng đi khi đối diện với khủng hoảng và thử thách của
            thời đại.
          </p>
        </Section>
      </PageWrapper>

      <Footer />
    </>
  );
}
