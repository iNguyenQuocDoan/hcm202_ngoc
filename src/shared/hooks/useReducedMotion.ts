/**
 * Project override of framer-motion's `useReducedMotion`.
 *
 * This presentation deliberately keeps motion on for every visitor (the user
 * chose "always animate"), even when the operating system requests reduced
 * motion. Components keep their `reduce ? static : animated` branches; this
 * simply makes every one of them take the animated path.
 *
 * To restore OS-respecting behaviour, re-export framer-motion's hook here.
 */
export function useReducedMotion(): boolean {
  return false;
}
