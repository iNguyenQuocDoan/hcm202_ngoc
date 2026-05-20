'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  body: string;
}

const events: TimelineEvent[] = [
  {
    year: '1986',
    title: 'Khởi xướng Đổi mới',
    body: 'Đại hội VI mở ra công cuộc đổi mới toàn diện, đặt nền móng cho những chuyển biến lớn.',
  },
  {
    year: '1989',
    title: 'Khủng hoảng Đông Âu',
    body: 'Sự sụp đổ của các chế độ XHCN Đông Âu đặt Việt Nam vào thế biệt lập về thị trường truyền thống.',
  },
  {
    year: '1991',
    title: 'Liên Xô tan rã',
    body: 'Nguồn viện trợ và bạn hàng lớn nhất chấm dứt. Lạm phát, thiếu thốn bủa vây trong nước.',
  },
  {
    year: '1991',
    title: 'Đại hội VII của Đảng',
    body: 'Kiên định độc lập dân tộc gắn với CNXH, khẳng định vận dụng sáng tạo tư tưởng Hồ Chí Minh.',
  },
  {
    year: '1992 →',
    title: 'Mở cửa, hội nhập',
    body: 'Bình thường hóa quan hệ, đa phương hóa đối ngoại, kinh tế nhiều thành phần đi vào ổn định.',
  },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 30%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 22 });

  return (
    <div ref={containerRef} className="relative pl-8 md:pl-12">
      {/* Vertical track */}
      <div className="absolute left-2 top-0 h-full w-px bg-ink/15 md:left-4" aria-hidden />
      <motion.div
        aria-hidden
        style={{ scaleY, transformOrigin: 'top' }}
        className="absolute left-2 top-0 h-full w-px bg-linear-to-b from-flame via-flame to-sun md:left-4"
      />

      <ol className="flex flex-col gap-10">
        {events.map((e, i) => (
          <motion.li
            key={`${e.year}-${e.title}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Dot */}
            <span
              aria-hidden
              className="absolute -left-7 top-2 h-3 w-3 rounded-full border-2 border-flame bg-paper md:left-[-2.6rem]"
            />
            <div className="font-display text-sm font-bold uppercase tracking-[0.2em] text-flame">
              {e.year}
            </div>
            <h3 className="mt-1 font-display text-2xl font-bold text-ink">{e.title}</h3>
            <p className="mt-2 max-w-xl text-[16px] leading-relaxed text-ink-soft">{e.body}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
