'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Forces motion on for the whole app, even when the operating system requests
 * reduced motion. This is a deliberate project choice: the presentation relies
 * on its animated sections. Every `useReducedMotion()` call below this returns
 * false as a result.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
