import {
  CloudLightning,
  Compass,
  Globe2,
  HandHeart,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Mountain,
  Network,
  Quote,
  ScrollText,
  ShieldAlert,
  Sprout,
  Users,
} from 'lucide-react';
import { IMAGES } from '@/shared/assets/images';
import { Footer, Slide, SlideHeading } from '@/shared/components/layout';
import { Figure } from '@/shared/components/media';
import {
  Counter,
  MaskReveal,
  Reveal,
  ScrollProgress,
  SlideNav,
  Stagger,
  StaggerItem,
} from '@/shared/components/motion';

const slideNav = [
  { id: 'mo-1', label: 'Mở đầu' },
  { id: 'mo-dau', label: 'Giới thiệu' },
  { id: 'boi-canh', label: 'Bối cảnh' },
  { id: 'truc-thoi-gian', label: 'Trục thời gian' },
  { id: 'van-dung', label: 'Vận dụng tư tưởng' },
  { id: 'chinh-sach', label: 'Chính sách' },
  { id: 'loi-day', label: 'Lời dạy' },
  { id: 'ket-qua', label: 'Kết quả' },
  { id: 'bai-hoc', label: 'Bài học' },
  { id: 'ket-luan', label: 'Kết luận' },
];

const crisisFacets = [
  {
    icon: ShieldAlert,
    title: 'Kinh tế bao cấp trì trệ',
    body: 'Sau 1975, sản xuất trì trệ, đời sống thiếu thốn; lạm phát năm 1986 từng được ghi nhận tới 774,7%.',
  },
  {
    icon: CloudLightning,
    title: 'Liên Xô, Đông Âu tan rã',
    body: 'Các đối tác truyền thống khủng hoảng, làm đảo lộn quan hệ kinh tế, thương mại và viện trợ.',
  },
  {
    icon: Network,
    title: 'Vẫn chịu bao vây, cấm vận',
    body: 'Mỹ tiếp tục cấm vận, khiến việc mở rộng quan hệ kinh tế quốc tế thêm khó khăn.',
  },
  {
    icon: ScrollText,
    title: 'Giữ vững ổn định và niềm tin',
    body: 'Biến động thế giới tác động tới tư tưởng của một bộ phận cán bộ, đảng viên và nhân dân.',
  },
];

const timeline = [
  { year: '1986', title: 'Đại hội VI', body: 'Khởi xướng đường lối Đổi mới toàn diện.' },
  { year: '1989', title: 'Biến động Đông Âu', body: 'Các nước XHCN Đông Âu rơi vào khủng hoảng.' },
  { year: '6 · 1991', title: 'Đại hội VII', body: 'Họp tại Hà Nội ngày 24 – 27/6, kiên định mục tiêu.' },
  { year: '12 · 1991', title: 'Liên Xô tan rã', body: 'Trật tự thế giới thay đổi, Việt Nam phải tự chủ.' },
  { year: '1991 – 95', title: 'Kiên trì Đổi mới', body: 'Từng bước ổn định và phục hồi nền kinh tế.' },
];

const principles = [
  {
    icon: HandHeart,
    title: 'Lấy dân làm gốc',
    body: 'Nhân dân là trung tâm của cách mạng và là nguồn sức mạnh quyết định. Mọi chính sách đổi mới đều hướng đến việc làm, lương thực, ổn định giá cả và quyền làm chủ của người dân.',
  },
  {
    icon: Users,
    title: 'Đại đoàn kết toàn dân',
    body: 'Đoàn kết là sức mạnh nền tảng của dân tộc. Giữ vững đồng thuận xã hội giúp ổn định chính trị và tạo môi trường cho đổi mới kinh tế.',
  },
  {
    icon: Mountain,
    title: 'Tự lực, tự cường',
    body: 'Khi nguồn lực bên ngoài đảo lộn, đất nước phải phát huy nội lực. Tự lực không phải tự cô lập, mà là có thực lực để chủ động hội nhập.',
  },
  {
    icon: Compass,
    title: 'Kiên định, linh hoạt',
    body: 'Giữ vững mục tiêu độc lập dân tộc gắn với chủ nghĩa xã hội, nhưng không bảo thủ với cơ chế cũ. Đổi mới là điều chỉnh phương pháp, không phải từ bỏ lý tưởng.',
  },
  {
    icon: Globe2,
    title: 'Độc lập gắn hợp tác',
    body: 'Việt Nam không khép kín mà đa phương hóa quan hệ. Tinh thần Đại hội VII: muốn là bạn của tất cả các nước, vì hòa bình và phát triển.',
  },
];

const policies = [
  {
    icon: Sprout,
    title: 'Kinh tế nhiều thành phần',
    body: 'Thừa nhận và phát triển nền kinh tế hàng hóa nhiều thành phần, giải phóng sức sản xuất. Người dân, hộ gia đình, doanh nghiệp tư nhân và nhà nước cùng tham gia phát triển.',
  },
  {
    icon: Globe2,
    title: 'Cơ chế thị trường có quản lý',
    body: 'Không phủ nhận thị trường nhưng không để vận hành tự phát. Nhà nước định hướng và điều tiết bằng pháp luật, kế hoạch và chính sách.',
  },
  {
    icon: Handshake,
    title: 'Mở cửa, tăng cường đối ngoại',
    body: 'Mở rộng quan hệ với các nước và tổ chức quốc tế, kết hợp sức mạnh dân tộc với sức mạnh thời đại — tự lực nhưng không tự cô lập.',
  },
  {
    icon: HeartHandshake,
    title: 'Chăm lo đời sống nhân dân',
    body: 'Đổi mới gắn với việc làm, giáo dục, văn hóa và sức khỏe. Cải thiện đời sống để giữ vững niềm tin xã hội.',
  },
];

const results = [
  { value: 8.2, decimals: 1, label: 'Tăng trưởng GDP bình quân mỗi năm' },
  { value: 13.3, decimals: 1, label: 'Tăng bình quân sản xuất công nghiệp' },
  { value: 4.5, decimals: 1, label: 'Tăng bình quân sản xuất nông nghiệp' },
  { value: 20, decimals: 0, label: 'Mức tăng kim ngạch xuất khẩu' },
];

const lessons = [
  {
    n: '01',
    accent: 'text-flame-soft',
    title: 'Giữ niềm tin và đoàn kết',
    body: 'Trong biến động, nguy hiểm lớn nhất là mất phương hướng. Đoàn kết và niềm tin xã hội là nền tảng để xử lý khủng hoảng.',
  },
  {
    n: '02',
    accent: 'text-sun',
    title: 'Kiên định, không bảo thủ',
    body: 'Giữ vững mục tiêu nhưng sẵn sàng đổi mới cách làm, với tư duy sáng tạo và bám sát thực tiễn.',
  },
  {
    n: '03',
    accent: 'text-emerald-300',
    title: 'Tự lực là nền của hội nhập',
    body: 'Hội nhập chỉ hiệu quả khi có nội lực về sản xuất, con người và thể chế; nếu không, dễ thành phụ thuộc.',
  },
  {
    n: '04',
    accent: 'text-sky-300',
    title: 'Lấy dân làm trung tâm',
    body: 'Nhân dân chịu ảnh hưởng trực tiếp nhất, nhưng cũng là nguồn lực quan trọng nhất để vượt qua khó khăn.',
  },
];

export default function LyThuyetPage() {
  return (
    <>
      <ScrollProgress />
      <SlideNav items={slideNav} />

      {/* 01 — Title */}
      <Slide id="mo-1" tone="paper" grain>
        <div
          aria-hidden
          className="storm-drift pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 75% at 18% 10%, oklch(0.52 0.196 26 / 0.20) 0%, transparent 60%),' +
              'radial-gradient(50% 60% at 88% 20%, oklch(0.20 0.038 250 / 0.26) 0%, transparent 60%),' +
              'radial-gradient(60% 55% at 50% 110%, oklch(0.82 0.150 78 / 0.22) 0%, transparent 60%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[14vh] right-[-3vw] select-none font-display text-[34vw] font-black leading-none text-flame/10"
        >
          1991
        </div>
        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-flame" />
              <span className="font-display text-[11px] uppercase tracking-[0.4em] text-flame">
                Phần I · Lý thuyết
              </span>
            </div>
          </Reveal>
          <h1 className="mt-5 font-display text-[16vw] font-black leading-[0.9] tracking-tight text-ink md:text-[8.5rem]">
            <MaskReveal delay={0.14}>Vượt Bão</MaskReveal>
            <MaskReveal delay={0.3} className="italic text-flame">
              1991
            </MaskReveal>
          </h1>
          <Reveal delay={0.22}>
            <p className="mt-6 max-w-2xl font-display text-2xl italic leading-snug text-ink-soft md:text-3xl">
              Bài học từ khủng hoảng và tư duy Đổi mới.
            </p>
          </Reveal>
          <Reveal delay={0.34}>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink/75">
              Việt Nam không vượt qua khó khăn bằng cách đứng yên, mà bằng cách kiên định mục tiêu
              và linh hoạt trong phương pháp.
            </p>
          </Reveal>
          <Reveal delay={0.46}>
            <a
              href="#mo-dau"
              className="press mt-8 inline-flex rounded-full bg-ink px-6 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-paper hover:bg-flame"
            >
              Bắt đầu trình bày
            </a>
          </Reveal>
        </div>
      </Slide>

      {/* 02 — Mở đầu */}
      <Slide id="mo-dau" tone="deep">
        <div className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
          <div>
            <SlideHeading eyebrow="Mở đầu" index="00" title="Một thời điểm đặc biệt của lịch sử" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[16px] leading-relaxed text-ink/85">
                Năm 1991 là thời điểm Việt Nam phải chứng minh bản lĩnh lựa chọn con đường phát
                triển giữa một thế giới biến động mạnh. Đại hội VII của Đảng họp tại Hà Nội từ
                ngày 24 đến 27 tháng 6 năm 1991, đúng lúc hệ thống xã hội chủ nghĩa ở Liên Xô và
                Đông Âu lâm vào khủng hoảng nghiêm trọng.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-3.5 text-[16px] leading-relaxed text-ink-soft">
                Vượt Bão 1991 là câu chuyện vận dụng tư tưởng Hồ Chí Minh để giữ vững mục tiêu độc
                lập dân tộc gắn với chủ nghĩa xã hội, đồng thời đổi mới tư duy, đổi mới cách làm và
                mở rộng quan hệ quốc tế.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-5 border-l-0 bg-paper/70 px-5 py-3.5 font-display text-[15px] italic leading-snug text-ink">
                “Việt Nam không vượt qua khó khăn bằng cách đứng yên, mà bằng cách kiên định mục
                tiêu nhưng linh hoạt trong phương pháp.”
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Figure
              src={IMAGES.baDinhSquare.src}
              alt={IMAGES.baDinhSquare.alt}
              caption="Quảng trường Ba Đình, Hà Nội."
              credit={IMAGES.baDinhSquare.credit}
              ratio="aspect-[4/3]"
              priority
            />
          </Reveal>
        </div>
      </Slide>

      {/* 03 — Bối cảnh */}
      <Slide id="boi-canh" tone="paper">
        <SlideHeading
          eyebrow="Bối cảnh"
          index="01"
          title="Khủng hoảng dồn dập trên nhiều mặt trận"
        />
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft">
            Đại hội VI năm 1986 đã mở ra đường lối Đổi mới — thay đổi cách quản lý chứ không từ bỏ
            mục tiêu xã hội chủ nghĩa. Nhưng đến năm 1991, đất nước lại đứng trước một cơn bão mới
            với nhiều thử thách cùng lúc.
          </p>
        </Reveal>
        <Stagger className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {crisisFacets.map((c) => {
            const Icon = c.icon;
            return (
              <StaggerItem key={c.title}>
                <article className="lift group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-paper-deep/55 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 bg-paper transition-transform duration-300 ease-out-quart group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-flame" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold leading-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{c.body}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Slide>

      {/* 04 — Trục thời gian */}
      <Slide id="truc-thoi-gian" tone="storm" grain>
        <SlideHeading
          eyebrow="Trục thời gian"
          index="01·b"
          title="Năm năm bản lề của Đổi mới"
          tone="dark"
        />
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {timeline.map((t, i) => (
            <StaggerItem key={t.year}>
              <article className="lift group relative h-full rounded-3xl border border-paper/12 bg-paper/4 p-5">
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl font-black text-flame-soft transition-transform duration-300 ease-out-quart group-hover:scale-110">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-paper/15" />
                </div>
                <div className="mt-3 font-display text-sm font-bold uppercase tracking-[0.18em] text-sun">
                  {t.year}
                </div>
                <h3 className="mt-1 font-display text-lg font-bold text-paper">{t.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-paper/65">{t.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Slide>

      {/* 05 — Vận dụng tư tưởng */}
      <Slide id="van-dung" tone="deep">
        <SlideHeading
          eyebrow="Vận dụng tư tưởng"
          index="02"
          title="Năm luận điểm dẫn đường vượt bão"
        />
        <Stagger className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title}>
                <article className="lift group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-paper p-5">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/12 bg-paper-deep/60 transition-transform duration-300 ease-out-quart group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-flame" strokeWidth={1.5} />
                    </span>
                    <span className="font-display text-2xl font-black text-flame/25">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-3.5 font-display text-lg font-black leading-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{p.body}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Slide>

      {/* 06 — Chính sách */}
      <Slide id="chinh-sach" tone="paper">
        <SlideHeading
          eyebrow="Chính sách"
          index="03"
          title="Đổi mới linh hoạt, mở cửa có nguyên tắc"
        />
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft">
            Từ những định hướng tư tưởng đó, bốn nhóm chính sách then chốt được triển khai, từng
            bước đưa Việt Nam thoát khỏi khủng hoảng.
          </p>
        </Reveal>
        <Stagger className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {policies.map((p, i) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title}>
                <article className="lift group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-paper-deep/55 p-5">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper transition-all duration-300 ease-out-quart group-hover:scale-110 group-hover:bg-flame">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className="font-display text-2xl font-black text-flame/25">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-3.5 font-display text-base font-bold leading-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{p.body}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
        <Reveal delay={0.2}>
          <p className="mt-5 font-display text-[15px] italic text-ink-soft">
            Kinh tế nhiều thành phần giúp biến sức dân thành động lực phát triển.
          </p>
        </Reveal>
      </Slide>

      {/* 07 — Lời dạy */}
      <Slide id="loi-day" tone="ink" grain>
        <div className="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <Reveal>
            <div className="mx-auto w-full max-w-72 md:mx-0">
              <Figure
                src={IMAGES.hoChiMinh.src}
                alt={IMAGES.hoChiMinh.alt}
                credit={IMAGES.hoChiMinh.credit}
                ratio="aspect-[4/5]"
                focus="object-top"
                sizes="(max-width: 768px) 100vw, 290px"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Quote className="h-11 w-11 text-flame-soft" strokeWidth={1.2} />
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="mt-5 font-display text-3xl font-medium italic leading-snug text-paper md:text-[2.7rem]">
                “Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.”
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <figcaption className="mt-6 flex items-center gap-3 font-display text-sm uppercase tracking-[0.32em] text-mist">
                <span className="h-px w-12 bg-flame-soft" />
                Hồ Chí Minh
              </figcaption>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/70">
                Lấy dân làm gốc là điểm tựa xuyên suốt: vượt qua khủng hoảng không chỉ là nhiệm vụ
                của Nhà nước, mà là quá trình khơi dậy sức dân, dựa vào dân và vì dân.
              </p>
            </Reveal>
          </div>
        </div>
      </Slide>

      {/* 08 — Kết quả */}
      <Slide id="ket-qua" tone="deep">
        <SlideHeading
          eyebrow="Kết quả"
          index="04"
          title="Những con số của giai đoạn 1991 – 1995"
        />
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft">
            Sau Đại hội VII, Việt Nam kiên trì đường lối đổi mới. Theo báo cáo tại Đại hội VIII,
            giai đoạn 1991 đến 1995 ghi nhận những kết quả quan trọng.
          </p>
        </Reveal>
        <Stagger className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((r) => (
            <StaggerItem key={r.label}>
              <article className="lift h-full rounded-3xl border border-ink/10 bg-paper p-6">
                <div className="font-display text-5xl font-black leading-none tracking-tight text-flame">
                  <Counter value={r.value} decimals={r.decimals} suffix="%" />
                </div>
                <p className="mt-3 text-[14px] leading-snug text-ink-soft">{r.label}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2}>
          <p className="mt-5 text-[14.5px] italic leading-relaxed text-ink-soft">
            Năm 1991 là điểm thử thách lớn; từ sau Đại hội VII, Việt Nam{' '}
            <strong className="not-italic text-ink">từng bước</strong> vượt qua khủng hoảng trong
            những năm đầu thập niên 1990, chứ không vượt qua hoàn toàn ngay trong năm đó.
          </p>
        </Reveal>
      </Slide>

      {/* 09 — Bài học */}
      <Slide id="bai-hoc" tone="storm" grain>
        <SlideHeading
          eyebrow="Bài học"
          index="05"
          title="Giá trị bền vững cho hiện tại"
          tone="dark"
        />
        <Stagger className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lessons.map((l) => (
            <StaggerItem key={l.n}>
              <article className="lift group relative h-full rounded-3xl border border-paper/12 bg-paper/4 p-5">
                <div className="flex items-center justify-between">
                  <span className={`font-display text-[11px] font-bold uppercase tracking-[0.28em] ${l.accent}`}>
                    Bài học {l.n}
                  </span>
                  <Lightbulb
                    className={`h-5 w-5 transition-transform duration-300 ease-out-quart group-hover:scale-125 group-hover:rotate-12 ${l.accent}`}
                    strokeWidth={1.3}
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-black leading-tight text-paper">
                  {l.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-paper/70">{l.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Slide>

      {/* 10 — Kết luận */}
      <Slide id="ket-luan" tone="paper" grain>
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <div>
            <SlideHeading eyebrow="Kết luận" index="06" title="Kiên định mục tiêu, đổi mới cách đi" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-xl leading-relaxed text-ink md:text-2xl">
                Kiên định không có nghĩa là bảo thủ; linh hoạt không có nghĩa là mất phương hướng.
                Việt Nam năm 1991 chọn cách giữ vững mục tiêu nhưng thay đổi cách đi.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                Trong khủng hoảng, một quốc gia cần bản lĩnh, đoàn kết, nội lực và tư duy đổi mới.
                Sức mạnh bền vững phải bắt đầu từ nhân dân — đó là sức sống của tư tưởng Hồ Chí
                Minh, còn nguyên giá trị cho hôm nay.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-7 flex items-center gap-3 font-display text-xs uppercase tracking-[0.3em] text-ink-soft">
                <span className="h-px w-12 bg-flame" />
                <span>Hết phần Lý thuyết</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Figure
              src={IMAGES.mausoleum.src}
              alt={IMAGES.mausoleum.alt}
              caption="Lăng Chủ tịch Hồ Chí Minh, Hà Nội."
              credit={IMAGES.mausoleum.credit}
              ratio="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </Slide>

      <Footer />
    </>
  );
}
