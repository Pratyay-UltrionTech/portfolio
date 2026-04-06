import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const AUTOPLAY_MS = 5000;

export function LinkedInCommunitySlider({ posts }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 28,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
    setSnapCount(api.scrollSnapList().length);
  }, []);

  useEffect(() => {
    if (!emblaApi) return undefined;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || isPaused) return undefined;
    const id = window.setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [emblaApi, isPaused]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  if (!posts?.length) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden px-1" ref={emblaRef}>
        <div className="flex touch-pan-y gap-6 [-webkit-tap-highlight-color:transparent]">
          {posts.map((post, i) => (
            <div
              key={i}
              className="min-w-0 shrink-0 grow-0 basis-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]"
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md shadow-[#111827]/[0.06] ring-1 ring-[#E5E7EB]/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2563EB]/10 hover:ring-[#2563EB]/25"
              >
                <div className="relative h-48 overflow-hidden bg-white">
                  <img
                    src={post.image}
                    alt={post.title}
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.12] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
                <div className="p-5">
                  <h4 className="mb-2 line-clamp-2 text-lg font-bold text-[#111827]">
                    {post.title}
                  </h4>
                  <p className="mb-4 line-clamp-2 text-sm text-[#4B5563]">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition-colors group-hover:text-[#1D4ED8]">
                    View on LinkedIn
                    <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-0 top-24 z-20 flex h-11 w-11 -translate-x-1 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#374151] shadow-lg shadow-[#111827]/10 ring-1 ring-[#E5E7EB] backdrop-blur-sm transition hover:bg-white hover:text-[#2563EB] md:h-12 md:w-12 md:-translate-x-3 lg:-translate-x-4"
        aria-label="Previous slides"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-0 top-24 z-20 flex h-11 w-11 translate-x-1 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#374151] shadow-lg shadow-[#111827]/10 ring-1 ring-[#E5E7EB] backdrop-blur-sm transition hover:bg-white hover:text-[#2563EB] md:h-12 md:w-12 md:translate-x-3 lg:translate-x-4"
        aria-label="Next slides"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: snapCount || posts.length }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ease-out ${
              i === selectedIndex
                ? "w-8 bg-[#2563EB]"
                : "w-1.5 bg-[#D1D5DB] hover:bg-[#9CA3AF]"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === selectedIndex ? true : undefined}
          />
        ))}
      </div>
    </div>
  );
}
