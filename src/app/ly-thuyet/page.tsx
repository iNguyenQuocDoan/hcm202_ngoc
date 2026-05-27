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
import { DetailButton } from '@/shared/components/feedback';
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
import { DETAILS } from './details';

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
    title: 'Đứt gãy nguồn viện trợ',
    body: 'Liên Xô cắt đứt hoàn toàn khoản viện trợ 1 tỷ USD hằng năm cùng 90% lượng phân bón, xăng dầu thiết yếu cung cấp cho nước ta.',
  },
  {
    icon: CloudLightning,
    title: 'Mất thị trường COMECON',
    body: 'Khối Đông Âu sụp đổ đột ngột, xóa sổ thị trường xuất nhập khẩu truyền thống vốn chiếm tới 80% tổng kim ngạch thương mại.',
  },
  {
    icon: Network,
    title: 'Cơn bão lạm phát 67.5%',
    body: 'Đồng tiền mất giá phi mã, người dân đổ xô trữ vàng/USD kéo theo khủng hoảng tín dụng tự phát đổ vỡ nghiêm trọng.',
  },
  {
    icon: ScrollText,
    title: 'Bao vây cấm vận của Mỹ',
    body: 'Mỹ tiếp tục siết chặt cấm vận, ngăn chặn hoàn toàn khả năng tiếp cận các nguồn vốn vay ưu đãi quốc tế từ IMF và WB.',
  },
];

const timeline = [
  { year: '1986', title: 'Đại hội VI', body: 'Khởi xướng đường lối Đổi mới, chuyển đổi tư duy kinh tế.' },
  { year: '1989', title: 'Cột mốc xuất khẩu', body: 'Việt Nam tự chủ lương thực, bắt đầu xuất khẩu gạo lớn lần đầu tiên.' },
  { year: '6 · 1991', title: 'Đại hội VII', body: 'Họp tại Hà Nội ngày 24 – 27/6, kiên định định hướng, thúc đẩy thị trường.' },
  { year: '11 · 1991', title: 'Bình thường hóa quan hệ', body: 'Việt - Trung bình thường hóa ngoại giao, khai thông mậu dịch biên giới.' },
  { year: '1991 – 95', title: 'Vượt bão kinh tế', body: 'Kiên trì cải cách tiền tệ và cởi trói tư nhân, kéo lạm phát về một con số.' },
];

const principles = [
  {
    icon: HandHeart,
    key: 'dan-lam-goc',
    title: 'Giải phóng sức sản xuất',
    body: 'Lấy lợi ích thực chất của dân làm gốc. Việc giao quyền tự chủ ruộng đất lâu dài cho hộ nông dân qua Khoán 10 đã tạo động lực nông nghiệp khổng lồ.',
  },
  {
    icon: Users,
    key: 'doan-ket',
    title: 'Ổn định vĩ mô giữ lòng dân',
    body: 'Đồng thuận vượt khó. Kiểm soát lạm phát và ổn định đồng nội tệ là nền tảng sống còn để giữ vững lòng tin xã hội và củng cố khối đoàn kết.',
  },
  {
    icon: Mountain,
    key: 'tu-luc',
    title: 'Huy động nội lực tài chính',
    body: 'Tự lực cánh sinh. Khơi thông dòng vốn nhàn rỗi, vàng và ngoại tệ trữ trong dân bằng chính sách lãi suất thực dương cao để tự cứu mình.',
  },
  {
    icon: Compass,
    key: 'kien-dinh',
    title: 'Kiên định và linh hoạt',
    body: 'Giữ vững độc lập định hướng phát triển, nhưng linh hoạt tối đa áp dụng các quy luật thị trường khách quan và công cụ quản lý tiền tệ mới.',
  },
  {
    icon: Globe2,
    key: 'doc-lap-hop-tac',
    title: 'Tự chủ gắn với mở cửa',
    body: 'Mở rộng thị trường ngoại thương đa phương, xoay trục thương mại sang ASEAN, Nhật Bản để giải tỏa thế cấm vận bị cô lập.',
  },
];

const policies = [
  {
    icon: Sprout,
    key: 'kinh-te-nhieu-thanh-phan',
    title: 'Cởi trói kinh tế tư nhân',
    body: 'Luật Doanh nghiệp tư nhân và Luật Công ty 1990 (hiệu lực năm 1991) tạo hành lang pháp lý chính thức cho tư nhân bỏ vốn thành lập công ty.',
  },
  {
    icon: Globe2,
    key: 'co-che-thi-truong',
    title: 'Xóa bao cấp SOE & Giá cả',
    body: 'Xóa bỏ bù lỗ bao cấp cho quốc doanh (SOE), buộc tự hạch toán độc lập; áp dụng giá thị trường tự do và đẩy mạnh lãi suất thực dương.',
  },
  {
    icon: Handshake,
    key: 'mo-cua',
    title: 'Đa phương hóa thương mại',
    body: 'Tìm bạn hàng ngoại thương mới, thúc đẩy liên doanh đầu tư trực tiếp nước ngoài (FDI) bù đắp khoảng trống vốn và công nghệ.',
  },
  {
    icon: HeartHandshake,
    key: 'cham-lo-dan',
    title: 'Giải quyết việc làm thực chất',
    body: 'Giải quyết an sinh cho lao động dôi dư bằng cách khuyến khích tự doanh, lập quỹ vốn vay nhỏ quốc gia và phát triển tiểu thủ công nghiệp.',
  },
];

const results = [
  { value: 8.2, decimals: 1, label: 'Tăng trưởng GDP bình quân mỗi năm (1991-1995)' },
  { value: 13.3, decimals: 1, label: 'Tăng bình quân sản xuất công nghiệp' },
  { value: 4.5, decimals: 1, label: 'Tăng bình quân sản xuất nông nghiệp' },
  { value: 20, decimals: 0, label: 'Mức tăng kim ngạch xuất khẩu ngoại thương' },
];

const lessons = [
  {
    n: '01',
    key: 'bh-niem-tin',
    title: 'Kiềm lạm phát, ổn định vĩ mô',
    body: 'Trong mọi cuộc khủng hoảng kinh tế, ổn định đồng tiền và kiềm chế lạm phát là nền tảng cốt lõi để giữ lòng dân và duy trì sản xuất.',
  },
  {
    n: '02',
    key: 'bh-kien-dinh',
    title: 'Tôn trọng quy luật thị trường',
    body: 'Dũng cảm xóa bỏ cơ chế quản lý hành chính ép giá, để quy luật cung cầu điều tiết và cởi trói quyền tự do kinh doanh của nhân dân.',
  },
  {
    n: '03',
    key: 'bh-tu-luc',
    title: 'Xây dựng nền kinh tế tự chủ',
    body: 'Đa dạng hóa đối tác ngoại thương, tránh phụ thuộc vào một thị trường duy nhất để nâng cao khả năng chống chịu trước địa chính trị.',
  },
  {
    n: '04',
    key: 'bh-lay-dan',
    title: 'Dân giàu để nước mạnh',
    body: 'Giải phóng tiềm năng lao động sáng tạo và tài sản nhàn rỗi trong dân là cội nguồn động lực vượt qua mọi sóng gió phát triển.',
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
              <p className="mt-5 bg-paper/70 px-5 py-3.5 font-display text-[15px] italic leading-snug text-ink">
                “Việt Nam không vượt qua khó khăn bằng cách đứng yên, mà bằng cách kiên định mục
                tiêu nhưng linh hoạt trong phương pháp.”
              </p>
            </Reveal>
            <Reveal delay={0.34}>
              <div className="mt-6">
                <DetailButton
                  detail={DETAILS['mo-dau']}
                  variant="pill"
                  label="Đọc lý thuyết chi tiết"
                />
              </div>
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
        <Reveal delay={0.3}>
          <div className="mt-7">
            <DetailButton
              detail={DETAILS['boi-canh']}
              variant="pill"
              label="Đọc lý thuyết chi tiết"
            />
          </div>
        </Reveal>
      </Slide>

      {/* 04 — Trục thời gian */}
      <Slide id="truc-thoi-gian" tone="deep" grain>
        <SlideHeading
          eyebrow="Trục thời gian"
          index="01·b"
          title="Năm năm bản lề của Đổi mới"
        />
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {timeline.map((t, i) => (
            <StaggerItem key={t.year}>
              <article className="lift group relative h-full rounded-3xl border border-ink/10 bg-paper p-5">
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl font-black text-flame transition-transform duration-300 ease-out-quart group-hover:scale-110">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-ink/12" />
                </div>
                <div className="mt-3 font-display text-sm font-bold uppercase tracking-[0.18em] text-ink-soft">
                  {t.year}
                </div>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">{t.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{t.body}</p>
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
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft">
            Mỗi luận điểm là một thẻ riêng — chọn “Đọc chi tiết” để xem cách tư tưởng Hồ Chí Minh
            được vận dụng đầy đủ vào bối cảnh năm 1991.
          </p>
        </Reveal>
        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title}>
                <article className="lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-paper p-5">
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
                  <div className="mt-auto pt-4">
                    <DetailButton
                      detail={DETAILS[p.key]}
                      className="w-full border-t border-ink/[0.08] pt-3.5"
                    />
                  </div>
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
                <article className="lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-paper-deep/55 p-5">
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
                  <div className="mt-auto pt-4">
                    <DetailButton
                      detail={DETAILS[p.key]}
                      className="w-full border-t border-ink/[0.08] pt-3.5"
                    />
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
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
        <Reveal delay={0.28}>
          <div className="mt-6">
            <DetailButton
              detail={DETAILS['ket-qua']}
              variant="pill"
              label="Đọc lý thuyết chi tiết"
            />
          </div>
        </Reveal>
      </Slide>

      {/* 09 — Bài học */}
      <Slide id="bai-hoc" tone="deep" grain>
        <SlideHeading
          eyebrow="Bài học"
          index="05"
          title="Giá trị bền vững cho hiện tại"
        />
        <Stagger className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lessons.map((l) => (
            <StaggerItem key={l.n}>
              <article className="lift group relative flex h-full flex-col rounded-3xl border border-ink/10 bg-paper p-5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-flame">
                    Bài học {l.n}
                  </span>
                  <Lightbulb
                    className="h-5 w-5 text-flame transition-transform duration-300 ease-out-quart group-hover:scale-125 group-hover:rotate-12"
                    strokeWidth={1.3}
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-black leading-tight text-ink">
                  {l.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{l.body}</p>
                <div className="mt-auto pt-4">
                  <DetailButton
                    detail={DETAILS[l.key]}
                    className="w-full border-t border-ink/[0.08] pt-3.5"
                  />
                </div>
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
