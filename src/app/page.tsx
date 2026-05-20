import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Bot, Brain, Code2, NotebookPen } from 'lucide-react';
import { SiGithubcopilot, SiGooglegemini, SiOpenai } from 'react-icons/si';
import { IMAGES } from '@/shared/assets/images';
import { Footer, Slide, SlideHeading } from '@/shared/components/layout';
import { Figure } from '@/shared/components/media';
import {
  MaskReveal,
  Reveal,
  ScrollProgress,
  SlideNav,
  Stagger,
  StaggerItem,
} from '@/shared/components/motion';

const slideNav = [
  { id: 'gioi-thieu', label: 'Giới thiệu' },
  { id: 'thanh-vien', label: 'Nhóm tác giả' },
  { id: 'noi-dung', label: 'Nội dung' },
  { id: 'cong-cu-ai', label: 'Công cụ AI' },
  { id: 'bat-dau', label: 'Bắt đầu' },
];

const lecturer = { name: 'Hoàng Thắng', role: 'Giảng viên hướng dẫn' };

const groupMembers = [
  { name: 'Nguyễn Thành Ngọc', id: 'SE180279', role: 'Lý thuyết & giao diện' },
  { name: 'Nguyễn Quốc Đoàn', id: 'SE180466', role: 'Nội dung & nghiên cứu' },
  { name: '[Thành viên 3]', id: '—', role: 'Hình ảnh & video' },
  { name: '[Thành viên 4]', id: '—', role: 'Trò chơi & tương tác' },
];

const outline = [
  {
    n: '01',
    title: 'Bối cảnh lịch sử năm 1991',
    body: 'Khủng hoảng kinh tế trong nước và biến động quốc tế.',
  },
  {
    n: '02',
    title: 'Vận dụng tư tưởng Hồ Chí Minh',
    body: 'Tự lực, đoàn kết và lấy nhân dân làm trung tâm.',
  },
  {
    n: '03',
    title: 'Đường lối đổi mới và chính sách',
    body: 'Mở cửa có nguyên tắc, kinh tế nhiều thành phần.',
  },
  {
    n: '04',
    title: 'Bài học cho giai đoạn hiện nay',
    body: 'Kiên định nguyên tắc, đổi mới liên tục từ sức dân.',
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

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <SlideNav items={slideNav} />

      {/* 01 — Hero */}
      <Slide id="gioi-thieu" tone="paper" grain>
        <div
          aria-hidden
          className="storm-drift pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 70% at 12% 5%, oklch(0.52 0.196 26 / 0.18) 0%, transparent 60%),' +
              'radial-gradient(50% 60% at 92% 25%, oklch(0.82 0.150 78 / 0.20) 0%, transparent 60%)',
          }}
        />
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
                Bài học từ khủng hoảng và tư duy Đổi mới.
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
              <div className="relative rounded-[2rem] border border-ink/10 bg-paper-deep/70 p-2 backdrop-blur-sm">
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
              </div>
            </Reveal>
          </div>
        </div>
      </Slide>

      {/* 02 — Thành viên */}
      <Slide id="thanh-vien" tone="deep">
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <div>
            <SlideHeading
              eyebrow="Nhóm tác giả"
              index="01"
              title={
                <>
                  Bốn cây bút, một <span className="italic text-flame">câu chuyện</span>
                </>
              }
            />
            <Stagger className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
              {groupMembers.map((m, i) => (
                <StaggerItem key={m.name + i}>
                  <article className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3.5">
                    <span className="font-display text-2xl font-black text-flame">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                        {m.name}
                      </h3>
                      <p className="text-[13.5px] text-ink-soft">{m.role}</p>
                    </div>
                    <span className="rounded-full border border-ink/15 bg-paper px-2.5 py-1 font-mono text-[11px] tracking-wider text-ink">
                      {m.id}
                    </span>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.16}>
            <Figure
              src={IMAGES.hanoiCity.src}
              alt={IMAGES.hanoiCity.alt}
              caption="Hà Nội — trung tâm những quyết sách của đất nước."
              credit={IMAGES.hanoiCity.credit}
              ratio="aspect-[4/3]"
              priority
            />
          </Reveal>
        </div>
      </Slide>

      {/* 03 — Nội dung */}
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
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
          {outline.map((o) => (
            <StaggerItem key={o.n}>
              <article className="lift group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-paper-deep/55 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-[11px] uppercase tracking-[0.3em] text-flame">
                      Phần {o.n}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-black leading-tight tracking-tight text-ink">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{o.body}</p>
                  </div>
                  <span className="select-none font-display text-5xl font-black leading-none text-flame/12 transition-all duration-300 ease-out-quart group-hover:scale-110 group-hover:text-flame/25">
                    {o.n}
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Slide>

      {/* 04 — Công cụ AI */}
      <Slide id="cong-cu-ai" tone="deep">
        <SlideHeading
          eyebrow="Công cụ hỗ trợ"
          index="03"
          title={
            <>
              Đồng hành cùng các trợ lý <span className="italic text-flame">AI</span>
            </>
          }
        />
        <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
          {aiSupports.map(({ name, purpose, Icon, Accent }) => (
            <StaggerItem key={name}>
              <article className="lift group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-paper p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-paper-deep/60 transition-transform duration-300 ease-out-quart group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-ink" aria-hidden />
                  </div>
                  <Accent
                    className="h-4 w-4 text-flame/60 transition-transform duration-300 ease-out-quart group-hover:scale-125"
                    strokeWidth={1.4}
                    aria-hidden
                  />
                </div>
                <h3 className="mt-6 font-display text-xl font-black tracking-tight text-ink">
                  {name}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{purpose}</p>
              </article>
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

      {/* 05 — CTA */}
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
