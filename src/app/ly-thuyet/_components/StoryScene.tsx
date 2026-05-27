'use client';

import { useRef, type ReactNode } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { Quote } from 'lucide-react';
import { IMAGES } from '@/shared/assets/images';
import { DetailButton } from '@/shared/components/feedback';
import { Counter } from '@/shared/components/motion';
import { cn } from '@/shared/utils';
import { DETAILS } from '../details';
import type { SceneEffect, SceneLayout, SceneTone, StoryScene as Scene } from '../scenes';
import { SceneAtmosphere } from './SceneAtmosphere';
import { sceneIconMap } from './sceneIcons';

interface StorySceneProps {
  scene: Scene;
  index: number;
  total: number;
}

const sceneTextRegister: Record<SceneTone, { fg: string; soft: string; muted: string }> = {
  dawn: { fg: 'text-ink', soft: 'text-ink-soft', muted: 'text-ink-mute' },
  storm: { fg: 'text-paper', soft: 'text-paper/80', muted: 'text-paper/55' },
  ember: { fg: 'text-paper', soft: 'text-paper/85', muted: 'text-paper/60' },
  ink: { fg: 'text-paper', soft: 'text-paper/85', muted: 'text-paper/55' },
  harvest: { fg: 'text-ink', soft: 'text-ink-soft', muted: 'text-ink-mute' },
  twilight: { fg: 'text-paper', soft: 'text-paper/80', muted: 'text-paper/55' },
  afterglow: { fg: 'text-ink', soft: 'text-ink-soft', muted: 'text-ink-mute' },
  paper: { fg: 'text-ink', soft: 'text-ink-soft', muted: 'text-ink-mute' },
};

function TitleReveal({ title, tone }: { title: string; tone: SceneTone }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 'some', once: true });
  const register = sceneTextRegister[tone];
  return (
    <h2
      className={cn(
        'font-display text-4xl font-black leading-[1.02] tracking-tight md:text-[3.4rem]',
        register.fg,
      )}
    >
      <span ref={ref} className="block overflow-hidden pb-[0.12em]">
        <motion.span
          className="block will-change-transform"
          initial={{ y: '115%' }}
          animate={{ y: inView ? '0%' : '115%' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.span>
      </span>
    </h2>
  );
}

/** Split [[keyword]] tokens out of a paragraph so we can highlight them. */
function parseHighlights(text: string): { text: string; isKeyword: boolean }[] {
  const parts: { text: string; isKeyword: boolean }[] = [];
  const re = /\[\[([^\]]+)]]/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push({ text: text.slice(last, m.index), isKeyword: false });
    parts.push({ text: m[1], isKeyword: true });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ text: text.slice(last), isKeyword: false });
  return parts;
}

function Paragraph({
  text,
  delay,
  tone,
  effects,
}: {
  text: string;
  delay: number;
  tone: SceneTone;
  effects: SceneEffect[];
}) {
  const register = sceneTextRegister[tone];
  const parts = parseHighlights(text);
  const highlightEnabled = effects.includes('keyword-highlight');

  return (
    <motion.p
      initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn('max-w-xl text-[16px] leading-relaxed md:text-[17px]', register.soft)}
    >
      {parts.map((p, i) =>
        p.isKeyword && highlightEnabled ? (
          <Highlight key={i} tone={tone}>
            {p.text}
          </Highlight>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </motion.p>
  );
}

function Highlight({ children, tone }: { children: ReactNode; tone: SceneTone }) {
  const dark = ['storm', 'ember', 'ink', 'twilight'].includes(tone);
  return (
    <span
      className={cn(
        'relative inline-block px-0.5 font-semibold',
        dark ? 'text-paper' : 'text-ink',
      )}
    >
      <motion.span
        aria-hidden
        className={cn(
          'absolute inset-x-0 bottom-[2px] -z-10 h-[42%] origin-left rounded-sm',
          dark ? 'bg-flame/55' : 'bg-flame/30',
        )}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </span>
  );
}

function ChipRow({ items, tone }: { items: string[]; tone: SceneTone }) {
  const dark = ['storm', 'ember', 'ink', 'twilight'].includes(tone);
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
      className="flex flex-wrap gap-2"
    >
      {items.map((it) => (
        <motion.li
          key={it}
          variants={{
            hidden: { opacity: 0, y: 8, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'rounded-full border px-3 py-1 font-display text-[11px] uppercase tracking-[0.22em]',
            dark
              ? 'border-paper/25 bg-paper/[0.08] text-paper/80'
              : 'border-ink/15 bg-paper/70 text-ink-soft',
          )}
        >
          {it}
        </motion.li>
      ))}
    </motion.ul>
  );
}

function BulletGrid({ scene, tone }: { scene: Scene; tone: SceneTone }) {
  const bullets = scene.bullets;
  if (!bullets?.length) return null;
  const dark = ['storm', 'ember', 'ink', 'twilight'].includes(tone);
  const burst = scene.effects.includes('card-burst');
  const cols =
    bullets.length === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : bullets.length === 3
        ? 'sm:grid-cols-3'
        : 'sm:grid-cols-2';
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } } }}
      className={cn('grid gap-4', cols)}
    >
      {bullets.map((b, i) => {
        const Icon = b.icon ? sceneIconMap[b.icon] : null;
        const detail = b.detailKey ? DETAILS[b.detailKey] : null;
        return (
          <motion.li
            key={b.title}
            variants={{
              hidden: { opacity: 0, y: burst ? 40 : 22, scale: burst ? 0.9 : 0.97, rotateX: burst ? -10 : 0 },
              visible: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 800 }}
          >
            <article
              className={cn(
                'lift group relative flex h-full flex-col overflow-hidden rounded-3xl border p-5 backdrop-blur-[2px]',
                dark
                  ? 'border-paper/12 bg-ink/35 text-paper'
                  : 'border-ink/10 bg-paper/85 text-ink',
              )}
            >
              <div className="flex items-center justify-between">
                {Icon && (
                  <span
                    className={cn(
                      'flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 ease-out-quart group-hover:-rotate-6 group-hover:scale-110',
                      dark ? 'bg-paper/[0.08] text-flame-soft' : 'bg-paper text-flame',
                      'border',
                      dark ? 'border-paper/15' : 'border-ink/12',
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                )}
                <span
                  className={cn(
                    'font-display text-2xl font-black',
                    dark ? 'text-paper/15' : 'text-flame/25',
                  )}
                >
                  0{i + 1}
                </span>
              </div>
              <h3
                className={cn(
                  'mt-3.5 font-display text-lg font-black leading-tight',
                  dark ? 'text-paper' : 'text-ink',
                )}
              >
                {b.title}
              </h3>
              <p
                className={cn(
                  'mt-1.5 text-[13.5px] leading-relaxed',
                  dark ? 'text-paper/75' : 'text-ink-soft',
                )}
              >
                {b.body}
              </p>
              {detail && (
                <div className="mt-auto pt-4">
                  <DetailButton
                    detail={detail}
                    tone={dark ? 'dark' : 'light'}
                    className={cn(
                      'w-full border-t pt-3.5',
                      dark ? 'border-paper/12' : 'border-ink/[0.08]',
                    )}
                  />
                </div>
              )}
            </article>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

function TimelineRail({ scene, tone }: { scene: Scene; tone: SceneTone }) {
  const steps = scene.timelineSteps;
  if (!steps?.length) return null;
  const dark = ['storm', 'ember', 'ink', 'twilight'].includes(tone);
  return (
    <div className="relative mt-10">
      {/* Desktop horizontal rail */}
      <div className="relative hidden md:block">
        <div
          className={cn(
            'absolute left-0 right-0 top-[34px] h-px',
            dark ? 'bg-paper/15' : 'bg-ink/15',
          )}
        />
        <motion.div
          className="absolute left-0 top-[34px] h-px origin-left bg-flame"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}
          className="relative grid grid-cols-5 gap-4"
        >
          {steps.map((s, i) => (
            <motion.li
              key={s.year}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center text-center"
            >
              <span
                className={cn(
                  'flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 font-display text-xs font-black uppercase tracking-[0.18em]',
                  dark
                    ? 'border-flame bg-ink text-flame-soft shadow-[0_0_0_6px_oklch(0.18_0.040_30_/_0.8)]'
                    : 'border-flame bg-paper text-flame shadow-[0_0_0_6px_oklch(0.964_0.018_78_/_0.9)]',
                )}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div
                className={cn(
                  'mt-4 font-display text-sm font-bold uppercase tracking-[0.18em]',
                  dark ? 'text-paper/65' : 'text-ink-soft',
                )}
              >
                {s.year}
              </div>
              <h3 className={cn('mt-1 font-display text-lg font-bold', dark ? 'text-paper' : 'text-ink')}>
                {s.title}
              </h3>
              <p
                className={cn(
                  'mt-1.5 max-w-[18ch] text-[13.5px] leading-relaxed',
                  dark ? 'text-paper/70' : 'text-ink-soft',
                )}
              >
                {s.body}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Mobile vertical rail */}
      <ol className="relative md:hidden">
        <div
          className={cn(
            'absolute left-[26px] top-0 bottom-0 w-px',
            dark ? 'bg-paper/15' : 'bg-ink/15',
          )}
        />
        {steps.map((s, i) => (
          <motion.li
            key={s.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-6 pl-16 last:mb-0"
          >
            <span
              className={cn(
                'absolute left-0 top-0 flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 font-display text-[11px] font-black',
                dark
                  ? 'border-flame bg-ink text-flame-soft'
                  : 'border-flame bg-paper text-flame',
              )}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div
              className={cn(
                'font-display text-xs font-bold uppercase tracking-[0.18em]',
                dark ? 'text-paper/65' : 'text-ink-soft',
              )}
            >
              {s.year}
            </div>
            <h3 className={cn('mt-0.5 font-display text-base font-bold', dark ? 'text-paper' : 'text-ink')}>
              {s.title}
            </h3>
            <p className={cn('mt-1 text-[13.5px] leading-relaxed', dark ? 'text-paper/70' : 'text-ink-soft')}>
              {s.body}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

function StatGrid({ scene, tone }: { scene: Scene; tone: SceneTone }) {
  const stats = scene.stats;
  if (!stats?.length) return null;
  const dark = ['storm', 'ember', 'ink', 'twilight'].includes(tone);
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((s) => (
        <motion.li
          key={s.label}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'lift rounded-3xl border p-6 backdrop-blur-[2px]',
            dark ? 'border-paper/12 bg-ink/30 text-paper' : 'border-ink/10 bg-paper/85 text-ink',
          )}
        >
          <div className="font-display text-[3.2rem] font-black leading-none tracking-tight text-flame">
            <Counter value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ''} />
          </div>
          <p
            className={cn(
              'mt-3 text-[14px] leading-snug',
              dark ? 'text-paper/75' : 'text-ink-soft',
            )}
          >
            {s.label}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function QuoteBlock({ scene, tone }: { scene: Scene; tone: SceneTone }) {
  const q = scene.quote;
  if (!q) return null;
  const dark = ['storm', 'ember', 'ink', 'twilight'].includes(tone);
  return (
    <div className="relative pl-7 md:pl-10">
      {/* Drawing pillar */}
      <motion.span
        aria-hidden
        className={cn('absolute left-0 top-1 w-[3px] origin-top rounded-full', dark ? 'bg-flame-soft' : 'bg-flame')}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ bottom: '0.25rem' }}
      />
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Quote
          className={cn('h-10 w-10', dark ? 'text-flame-soft' : 'text-flame')}
          strokeWidth={1.2}
        />
      </motion.div>
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'mt-4 font-display text-3xl font-medium italic leading-snug md:text-[2.6rem]',
          dark ? 'text-paper' : 'text-ink',
        )}
      >
        “{q.text}”
      </motion.blockquote>
      <motion.figcaption
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'mt-5 flex items-center gap-3 font-display text-sm uppercase tracking-[0.32em]',
          dark ? 'text-paper/70' : 'text-ink-soft',
        )}
      >
        <span className={cn('h-px w-12', dark ? 'bg-flame-soft' : 'bg-flame')} />
        {q.attrib}
      </motion.figcaption>
    </div>
  );
}

function FloatingIcons({ scene, tone }: { scene: Scene; tone: SceneTone }) {
  if (!scene.effects.includes('floating-icons') || !scene.bullets?.length) return null;
  const dark = ['storm', 'ember', 'ink', 'twilight'].includes(tone);

  // Position icons around the visual centre. Picked deterministic, theatrical spots.
  const positions = [
    { top: '14%', left: '4%', delay: 0 },
    { top: '20%', right: '6%', delay: 0.4 },
    { bottom: '18%', left: '6%', delay: 0.8 },
    { bottom: '14%', right: '8%', delay: 1.2 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {scene.bullets.slice(0, 4).map((b, i) => {
        const Icon = b.icon ? sceneIconMap[b.icon] : null;
        if (!Icon) return null;
        const p = positions[i] ?? positions[0];
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 18, scale: 0.7 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: p.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn(
              'floating-orbit absolute hidden h-12 w-12 items-center justify-center rounded-full border backdrop-blur-md md:flex',
              dark
                ? 'border-paper/15 bg-paper/[0.08] text-flame-soft'
                : 'border-ink/15 bg-paper/70 text-flame',
            )}
            style={{ ...p, animationDelay: `${p.delay + 0.6}s` }}
          >
            <Icon className="h-5 w-5" strokeWidth={1.4} />
          </motion.span>
        );
      })}
    </div>
  );
}

function VisualLayer({
  scene,
  tone,
  scrollY,
}: {
  scene: Scene;
  tone: SceneTone;
  scrollY: MotionValue<number>;
}) {
  const img = scene.image;
  if (!img) return null;
  const dark = ['storm', 'ember', 'ink', 'twilight'].includes(tone);
  const meta = IMAGES[img.key];

  return (
    <motion.figure
      style={{ y: scrollY }}
      className="group relative mx-auto w-full max-w-md"
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Halo behind image */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.2rem] opacity-70 blur-2xl"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 50%, oklch(0.82 0.150 78 / 0.45) 0%, transparent 70%)',
        }}
      />
      <div
        className={cn(
          'relative overflow-hidden rounded-[1.75rem] border p-1.5',
          dark ? 'border-paper/15 bg-ink/40' : 'border-ink/10 bg-paper-deep',
        )}
      >
        <div
          className={cn(
            'relative overflow-hidden rounded-[1.375rem] bg-storm',
            img.ratio ?? 'aspect-[4/5]',
          )}
        >
          <Image
            src={meta.src}
            alt={meta.alt}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className={cn(
              'object-cover transition-transform duration-1000 ease-out-quart group-hover:scale-[1.05]',
              img.focus ?? 'object-center',
            )}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-multiply"
            style={{
              background:
                'linear-gradient(180deg, oklch(0.52 0.196 26 / 0.10) 0%, oklch(0.22 0.030 50 / 0.45) 100%)',
            }}
          />
          <div className="grain pointer-events-none absolute inset-0 opacity-30" />
          {/* Slow sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-paper/30 to-transparent transition-transform duration-[1400ms] ease-out-quart group-hover:translate-x-full"
          />
          {/* Corner brackets */}
          <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-flame/70" />
          <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-flame/70" />
        </div>
      </div>
      {img.caption && (
        <figcaption
          className={cn(
            'mt-3 px-1 font-display text-sm italic',
            dark ? 'text-paper/70' : 'text-ink-soft',
          )}
        >
          {img.caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

export function StoryScene({ scene, index, total }: StorySceneProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Visual parallax: image drifts upward as the scene scrolls past.
  const visualY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  // Content drifts slightly slower for depth.
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const register = sceneTextRegister[scene.tone];
  const dark = ['storm', 'ember', 'ink', 'twilight'].includes(scene.tone);
  const detail = scene.detailKey ? DETAILS[scene.detailKey] : null;

  // Visual goes on the requested side (or hidden if the scene has no image).
  const hasVisual = !!scene.image;
  const layout: SceneLayout = scene.layout;

  const gridCols =
    layout === 'center' || !hasVisual
      ? 'grid-cols-1'
      : layout === 'left'
        ? 'lg:grid-cols-[1.05fr_0.95fr]'
        : 'lg:grid-cols-[0.95fr_1.05fr]';

  return (
    <section
      ref={ref}
      id={scene.id}
      className="story-scene relative isolate flex min-h-[100svh] w-full items-center overflow-hidden scroll-mt-20"
    >
      <SceneAtmosphere
        sceneId={scene.id}
        tone={scene.tone}
        effects={scene.effects}
        progress={scrollYProgress}
      />

      <FloatingIcons scene={scene} tone={scene.tone} />

      {/* Scene index badge — sits well below the floating header */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'pointer-events-none absolute right-6 bottom-6 hidden select-none font-display text-[18vw] font-black leading-none md:block md:text-[12rem]',
          dark ? 'text-paper/[0.05]' : 'text-ink/[0.05]',
        )}
      >
        {scene.index}
      </motion.span>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
        <motion.div
          style={{ y: contentY }}
          className={cn(
            'grid items-center gap-12 md:gap-14',
            gridCols,
          )}
        >
          {/* Visual on left if layout=left */}
          {hasVisual && layout === 'left' && (
            <VisualLayer scene={scene} tone={scene.tone} scrollY={visualY} />
          )}

          {/* Content column */}
          <div
            className={cn(
              'relative flex flex-col gap-6',
              layout === 'center' && 'mx-auto max-w-3xl text-center items-center',
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={cn('flex items-center gap-3 font-display text-[11px] uppercase tracking-[0.4em]', register.muted)}
            >
              <span className={cn('h-px w-10', dark ? 'bg-flame-soft' : 'bg-flame')} />
              <span className={cn('font-semibold', dark ? 'text-flame-soft' : 'text-flame')}>
                {scene.chapter}
              </span>
              <span>·</span>
              <span>
                {scene.eyebrow} · {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </motion.div>

            <TitleReveal title={scene.title} tone={scene.tone} />

            <div className="flex flex-col gap-3.5">
              {scene.paragraphs.map((para, i) => (
                <Paragraph
                  key={i}
                  text={para}
                  delay={0.15 + i * 0.12}
                  tone={scene.tone}
                  effects={scene.effects}
                />
              ))}
            </div>

            {scene.highlights && scene.highlights.length > 0 && (
              <ChipRow items={scene.highlights} tone={scene.tone} />
            )}

            {scene.quote && <QuoteBlock scene={scene} tone={scene.tone} />}

            {detail && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-2"
              >
                <DetailButton
                  detail={detail}
                  tone={dark ? 'dark' : 'light'}
                  variant="pill"
                  label="Đọc lý thuyết chi tiết"
                />
              </motion.div>
            )}
          </div>

          {/* Visual on right if layout=right */}
          {hasVisual && layout === 'right' && (
            <VisualLayer scene={scene} tone={scene.tone} scrollY={visualY} />
          )}
        </motion.div>

        {/* Stat grid sits below the headline grid when present */}
        {scene.stats && scene.stats.length > 0 && (
          <div className="mt-8">
            <StatGrid scene={scene} tone={scene.tone} />
          </div>
        )}

        {/* Bullet grid (for crisis / principles / policies / lessons) */}
        {scene.bullets && scene.bullets.length > 0 && (
          <div className="mt-8">
            <BulletGrid scene={scene} tone={scene.tone} />
          </div>
        )}

        {/* Timeline */}
        {scene.timelineSteps && scene.timelineSteps.length > 0 && (
          <TimelineRail scene={scene} tone={scene.tone} />
        )}
      </div>
    </section>
  );
}
