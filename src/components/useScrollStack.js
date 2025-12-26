import { useEffect, useState, useRef } from "react";

export const useScrollStack = (cardsLength) => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;

    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      setProgress(Math.min(el.scrollTop / max, 1));
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const activeIndex = Math.round(progress * (cardsLength - 1));

  return { containerRef, progress, activeIndex };
};
