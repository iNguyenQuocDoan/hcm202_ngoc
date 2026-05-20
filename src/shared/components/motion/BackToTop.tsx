'use client';

import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTop() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (y) => setShow(y > 600));
  }, [scrollY]);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="btt"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          aria-label="Lên đầu trang"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-paper text-ink shadow-lg hover:bg-flame hover:text-paper"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
