import { useEffect, useRef, useCallback } from "react";

interface UseExitIntentOptions {
  onExitIntent: () => void;
  threshold?: number;
  delay?: number;
}

export function useExitIntent({
  onExitIntent,
  threshold = 20,
  delay = 5000,
}: UseExitIntentOptions) {
  const triggered = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Keep a stable ref to the callback to avoid re-registering listeners
  const callbackRef = useRef(onExitIntent);
  useEffect(() => {
    callbackRef.current = onExitIntent;
  }, [onExitIntent]);

  useEffect(() => {
    timer.current = setTimeout(() => {
      const handleMouseLeave = (e: MouseEvent) => {
        if (triggered.current) return;
        if (e.clientY <= threshold) {
          triggered.current = true;
          callbackRef.current();
        }
      };

      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, delay);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [threshold, delay]);

  const resetTrigger = useCallback(() => {
    triggered.current = false;
  }, []);

  return { resetTrigger };
}
