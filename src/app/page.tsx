import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Bot, Brain, Code2, NotebookPen, Sunrise } from 'lucide-react';
import { SiGithubcopilot, SiGooglegemini, SiOpenai } from 'react-icons/si';
import { IMAGES } from '@/shared/assets/images';
import { Footer, Slide, SlideHeading } from '@/shared/components/layout';
import {
  HeroBackdrop,
  Marquee,
  MaskReveal,
  Parallax,
  Reveal,
  ScrollProgress,
  SlideNav,
  Stagger,
  StaggerItem,
  TiltCard,
} from '@/shared/components/motion';
import { cn } from '@/shared/utils';

const slideNav = [
  { id: 'gioi-thieu', label: 'Giới thiệu' },
  { id: 'thanh-vien', label: 'Nhóm tác giả' },
  { id: 'noi-dung', label: 'Nội dung' },
  { id: 'hanh-trinh', label: 'Hành trình' },
  { id: 'hinh-anh', label: 'Hình ảnh' },
  { id: 'cong-cu-ai', label: 'Công cụ AI' },
  { id: 'bat-dau', label: 'Bắt đầu' },
];

const lecturer = { name: 'Hoàng Thắng', role: 'Giảng viên hướng dẫn' };

const marqueeWords = [
  'Vượt Bão Kinh Tế 1991',
  'Đổi mới Kinh tế 1986',
  'Luật Doanh nghiệp 1990',
  'Khoán 10 Nông nghiệp',
  'Xóa bỏ bao cấp',
  'Kiềm chế siêu lạm phát',
  'Tự lực tự cường',
  'Cơ chế thị trường',
  'Đa phương hóa thương mại',
];

const groupMembers = [
  { name: 'Nguyễn Thành Ngọc', id: 'SE180279', role: 'Lý thuyết & giao diện' },
  { name: 'Nguyễn Quốc Đoàn', id: 'SE180466', role: 'Nội dung & nghiên cứu' },
  { name: '[Thành viên 3]', id: '—', role: 'Hình ảnh & video' },
  { name: '[Thành viên 4]', id: '—', role: 'Trò chơi & tương tác' },
];

const outline = [
  {
    n: '01',
    title: 'Bối cảnh Khủng hoảng & Cú sốc 1991',
    body: 'Mất nguồn viện trợ Liên Xô, sụp đổ thị trường COMECON và cơn bão siêu lạm phát 67.5%.',
  },
  {
    n: '02',
    title: 'Tư duy Đổi mới trong Kinh tế',
    body: 'Vận dụng tư tưởng Hồ Chí Minh về tự lực cánh sinh và giải phóng sức sản xuất trong dân.',
  },
  {
    n: '03',
    title: 'Cải cách Thể chế & Mở cửa Ngoại thương',
    body: 'Luật Doanh nghiệp tư nhân 1990, xóa bao cấp xí nghiệp nhà nước và đa phương hóa đối tác.',
  },
  {
    n: '04',
    title: 'Bài học Quản trị Kinh tế Vĩ mô',
    body: 'Kiềm chế lạm phát, tôn trọng quy luật thị trường và lấy sự thịnh vượng của dân làm gốc.',
  },
];

const aiSupports = [
  {
    name: 'ChatGPT',
    purpose: 'Lên dàn ý nội dung thuyết trình và tinh chỉnh câu chữ.',
    Icon: SiOpenai,
    Accent: NotebookPen,
  },
  {
    name: 'Gemini',
    purpose: 'Gợi ý hình ảnh và từ khóa hỗ trợ cho phần video.',
    Icon: SiGooglegemini,
    Accent: Brain,
  },
  {
    name: 'Copilot',
    purpose: 'Đồng hành khi viết và chỉnh sửa code giao diện.',
    Icon: SiGithubcopilot,
    Accent: Code2,
  },
];

const gallery = [
  { ...IMAGES.hanoiCity, label: 'Thành phố Hà Nội' },
  { ...IMAGES.hanoiSunset, label: 'Hoàng hôn sau mưa' },
  { ...IMAGES.ricePaddy, label: 'Mùa lúa Việt Nam' },
  { ...IMAGES.duckHerding, label: 'Đồng quê thanh bình' },
  { ...IMAGES.onePillarPagoda, label: 'Chùa Một Cột' },
  { ...IMAGES.mausoleum, label: 'Lăng Chủ tịch Hồ Chí Minh' },
];

function GalleryCard({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <figure className="group/ph relative mx-2 aspect-[4/3] w-[clamp(15rem,24vw,18rem)] shrink-0 overflow-hidden rounded-2xl border border-ink/10 bg-storm">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="18rem"
        className="object-cover transition-transform duration-[900ms] ease-out-quart group-hover/ph:scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent 42%, oklch(0.20 0.038 250 / 0.82) 100%)',
        }}
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-3.5 font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-paper">
        {label}
      </figcaption>
    </figure>
  );
}

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <SlideNav items={slideNav} />

      {/* 01 — Hero */}
      <Slide id="gioi-thieu" tone="paper" backdrop={<HeroBackdrop />}>
        <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-flame" />
                <span className="font-display text-[11px] uppercase tracking-[0.4em] text-flame">
                  Trang chính
                </span>
                <span className="font-display text-[11px] uppercase tracking-[0.3em] text-ink-soft">
                  Số 01 · 2026
                </span>
              </div>
            </Reveal>
            <h1 className="mt-6 font-display text-[14vw] font-black leading-[0.9] tracking-tight text-ink md:text-[7rem]">
              <MaskReveal delay={0.14}>Vượt Bão</MaskReveal>
              <MaskReveal delay={0.3} className="italic text-flame">
                1991
              </MaskReveal>
            </h1>
            <Reveal delay={0.22}>
              <p className="mt-6 max-w-xl font-display text-2xl italic leading-snug text-ink-soft md:text-3xl">
                Bài học tư duy và áp dụng đổi mới trong kinh tế.
              </p>
            </Reveal>
            <Reveal delay={0.34}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/ly-thuyet"
                  className="press group inline-flex items-center gap-2 rounded-full bg-ink py-2 pl-6 pr-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-paper hover:bg-flame"
                >
                  Đi đến lý thuyết
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/15 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4 text-paper" strokeWidth={1.6} />
                  </span>
                </Link>
                <Link
                  href="/video"
                  className="press rounded-full border border-ink/20 bg-paper/60 px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink hover:border-ink/40"
                >
                  Xem video
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.18}>
              <TiltCard
                intensity={6}
                className="rounded-[2rem] border border-ink/10 bg-paper-deep/80 p-2 backdrop-blur-sm"
              >
                <div className="bezel-inner rounded-3xl bg-paper p-6">
                  <div className="font-display text-[11px] uppercase tracking-[0.35em] text-flame">
                    Học phần
                  </div>
                  <div className="mt-1.5 font-display text-2xl font-black tracking-tight text-ink">
                    Tư tưởng Hồ Chí Minh
                  </div>
                  <div className="mt-0.5 text-sm text-ink-soft">Học kỳ 8</div>
                  <div className="mt-5 border-t border-ink/10 pt-4">
                    <div className="font-display text-[11px] uppercase tracking-[0.35em] text-ink-soft">
                      {lecturer.role}
                    </div>
                    <div className="mt-1.5 font-display text-xl font-bold tracking-tight text-ink">
                      {lecturer.name}
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    {[
                      { k: 'Phần', v: '03' },
                      { k: 'Bài học', v: '04' },
                      { k: 'Năm', v: '1991', flame: true },
                    ].map((s) => (
                      <div key={s.k}>
                        <div className="font-display text-[10px] uppercase tracking-[0.25em] text-ink-soft">
                          {s.k}
                        </div>
                        <div
                          className={`mt-1 font-display text-xl font-black ${s.flame ? 'text-flame' : 'text-ink'}`}
                        >
                          {s.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </Slide>

      {/* Marquee band */}
      <section className="relative overflow-hidden bg-flame py-3.5">
        <Marquee speed={46}>
          {marqueeWords.map((w) => (
            <span key={w} className="flex items-center gap-7 px-7">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.32em] text-paper">
                {w}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-paper/45" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* 02 — Thành viên */}
      <Slide id="thanh-vien" tone="deep">
        <SlideHeading
          eyebrow="Nhóm tác giả"
          index="01"
          title={
            <>
              Bốn cây bút, một <span className="italic text-flame">câu chuyện</span>
            </>
          }
        />
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
            Di chuột lên mỗi thẻ để xem nó nghiêng theo con trỏ.
          </p>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groupMembers.map((m, i) => (
            <StaggerItem key={m.name + i} className="h-full">
              <TiltCard className="lift h-full rounded-3xl border border-ink/10 bg-paper p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-black text-flame/25">0{i + 1}</span>
                  <span className="rounded-full border border-ink/15 bg-paper-deep px-2.5 py-1 font-mono text-[11px] tracking-wider text-ink">
                    {m.id}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-ink">
                  {m.name}
                </h3>
                <p className="mt-1 text-[13.5px] text-ink-soft">{m.role}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Slide>

      {/* 03 — Nội dung (bento) */}
      <Slide id="noi-dung" tone="paper">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <SlideHeading eyebrow="Nội dung thuyết trình" index="02" title="Mục lục buổi trình bày" />
          <Reveal delay={0.1}>
            <Link
              href="/ly-thuyet"
              className="press inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper px-4 py-2 font-display text-[11px] uppercase tracking-[0.25em] text-ink hover:border-flame hover:text-flame"
            >
              Đọc bản đầy đủ
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
            </Link>
          </Reveal>
        </div>
        <Stagger className="mt-8 grid gap-4 md:auto-rows-fr md:grid-cols-3">
          {outline.map((o, i) => (
            <StaggerItem
              key={o.n}
              className={cn('h-full', (i === 0 || i === 3) && 'md:col-span-2')}
            >
              <TiltCard className="lift h-full rounded-3xl border border-ink/10 bg-paper-deep/55 p-6">
                <div className="flex h-full items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-[11px] uppercase tracking-[0.3em] text-flame">
                      Phần {o.n}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-black leading-tight tracking-tight text-ink">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{o.body}</p>
                  </div>
                  <span className="select-none font-display text-6xl font-black leading-none text-flame/12 transition-all duration-300 ease-out-quart group-hover/tilt:scale-110 group-hover/tilt:text-flame/25">
                    {o.n}
                  </span>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Slide>

      {/* 04 — Hành trình (parallax showcase) */}
      <Slide id="hanh-trinh" tone="deep">
        <SlideHeading
          eyebrow="Hành trình"
          index="03"
          title={
            <>
              Sau cơn bão là <span className="italic text-flame">ngày mới</span>
            </>
          }
        />
        <div className="mt-8 grid items-center gap-6 md:grid-cols-12">
          <Reveal delay={0.14} className="md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-ink/10 bg-storm">
              <Parallax distance={64} className="absolute inset-x-0 -inset-y-[20%]">
                <Image
                  src={IMAGES.hanoiSunset.src}
                  alt={IMAGES.hanoiSunset.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </Parallax>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, oklch(0.22 0.030 50 / 0) 45%, oklch(0.20 0.038 250 / 0.78) 100%)',
                }}
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-2.5">
                <Sunrise className="h-4 w-4 text-sun" strokeWidth={1.6} />
                <span className="font-display text-[11px] uppercase tracking-[0.3em] text-paper/85">
                  Hoàng hôn sau mưa · Hà Nội
                </span>
              </div>
            </div>
          </Reveal>
          <div className="md:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-[16px] leading-relaxed text-ink/85">
                Hoàng hôn rực sáng sau cơn mưa cũng giống hành trình năm 1991: đi qua giông bão
                bằng bản lĩnh và sự kiên định, để mở ra một thời kỳ phát triển mới.
              </p>
            </Reveal>
            <Parallax distance={34} className="mt-6">
              <div className="lift rounded-3xl border border-ink/10 bg-paper p-6">
                <div className="font-display text-[11px] uppercase tracking-[0.3em] text-flame">
                  Giai đoạn 1991 – 1995
                </div>
                <div className="mt-2 font-display text-5xl font-black tracking-tight text-flame">
                  8,2%
                </div>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">
                  Tăng trưởng GDP bình quân mỗi năm sau khi kiên trì đường lối Đổi mới.
                </p>
              </div>
            </Parallax>
          </div>
        </div>
      </Slide>

      {/* 05 — Hình ảnh (gallery carousel) */}
      <Slide id="hinh-anh" tone="deep">
        <SlideHeading
          eyebrow="Tư liệu hình ảnh"
          index="04"
          title={
            <>
              Việt Nam qua <span className="italic text-flame">ống kính</span>
            </>
          }
        />
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
            Những khung hình về đất nước và con người Việt Nam — mạch nguồn của mọi đường lối đổi
            mới. Rê chuột để dừng băng ảnh.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-col gap-4">
          <Marquee speed={58}>
            {gallery.map((g) => (
              <GalleryCard key={g.label} src={g.src} alt={g.alt} label={g.label} />
            ))}
          </Marquee>
          <Marquee speed={58} reverse>
            {[...gallery].reverse().map((g) => (
              <GalleryCard key={g.label} src={g.src} alt={g.alt} label={g.label} />
            ))}
          </Marquee>
        </div>
      </Slide>

      {/* 06 — Công cụ AI */}
      <Slide id="cong-cu-ai" tone="paper">
        <SlideHeading
          eyebrow="Công cụ hỗ trợ"
          index="05"
          title={
            <>
              Đồng hành cùng các trợ lý <span className="italic text-flame">AI</span>
            </>
          }
        />
        <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
          {aiSupports.map(({ name, purpose, Icon, Accent }) => (
            <StaggerItem key={name} className="h-full">
              <TiltCard className="lift h-full rounded-3xl border border-ink/10 bg-paper-deep/55 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-paper transition-transform duration-300 ease-out-quart group-hover/tilt:-rotate-6 group-hover/tilt:scale-110">
                    <Icon className="h-5 w-5 text-ink" aria-hidden />
                  </div>
                  <Accent
                    className="h-4 w-4 text-flame/60 transition-transform duration-300 ease-out-quart group-hover/tilt:scale-125"
                    strokeWidth={1.4}
                    aria-hidden
                  />
                </div>
                <h3 className="mt-6 font-display text-xl font-black tracking-tight text-ink">
                  {name}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{purpose}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2}>
          <p className="mt-8 flex items-center gap-3 font-display text-[11px] uppercase tracking-[0.3em] text-ink-soft">
            <span className="h-px flex-1 bg-ink/15" />
            <Bot className="h-3.5 w-3.5" strokeWidth={1.6} />
            Có sự đồng hành của AI trong quá trình biên soạn
            <span className="h-px flex-1 bg-ink/15" />
          </p>
        </Reveal>
      </Slide>

      {/* 07 — CTA */}
      <Slide id="bat-dau" tone="ink" grain center>
        <Image
          src={IMAGES.mausoleum.src}
          alt={IMAGES.mausoleum.alt}
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, oklch(0.20 0.038 250 / 0.80) 0%, oklch(0.20 0.038 250 / 0.93) 100%)',
          }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="mx-auto mb-6 h-12 w-[4.5rem] overflow-hidden rounded-md border border-paper/20 shadow-[0_10px_24px_-12px_oklch(0_0_0/0.7)]">
              <Image
                src={IMAGES.flag.src}
                alt={IMAGES.flag.alt}
                width={72}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="font-display text-[11px] uppercase tracking-[0.35em] text-sun">
              Sẵn sàng bắt đầu
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] tracking-tight text-paper md:text-6xl">
              Đọc câu chuyện <span className="italic text-flame-soft">Vượt Bão</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-md text-[15.5px] leading-relaxed text-paper/70">
              Hành trình kiên định mục tiêu và đổi mới cách đi của Việt Nam năm 1991.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              href="/ly-thuyet"
              className="press group mt-8 inline-flex items-center gap-3 rounded-full bg-paper py-3 pl-7 pr-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink hover:bg-flame hover:text-paper"
            >
              Vào phần Lý thuyết
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/10 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
              </span>
            </Link>
          </Reveal>
        </div>
      </Slide>

      <Footer />
    </>
  );
}
