import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const totalSegments = 12;
  const activeSegments = Math.round(scrollProgress * totalSegments);

  return (
    <div className="fixed right-3 bottom-4 md:top-1/2 md:-translate-y-1/2 z-50">
      <div className="flex flex-row md:flex-col gap-1 px-1 py-2 bg-black/70 backdrop-blur-sm rounded-full border border-orange-500/10 shadow-md">
        {[...Array(totalSegments)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-4 md:w-2 md:h-6 rounded-sm transition-all duration-300 ease-in-out border ${
              i < activeSegments
                ? "bg-gradient-to-r from-orange-500 to-orange-400 border-orange-600"
                : "bg-transparent border-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
