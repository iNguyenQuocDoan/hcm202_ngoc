'use client';

import { motion, type Variants } from 'framer-motion';
import { useReducedMotion } from '@/shared/hooks/useReducedMotion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  as?: 'div' | 'section' | 'article' | 'header' | 'li';
}

export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  once = true,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y, filter: reduce ? 'none' : 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </Tag>
  );
}
