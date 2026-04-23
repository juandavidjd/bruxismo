import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { exposicionBruxismo } from "../../data/exposiciones/bruxismo";
import { SlideCard } from "./SlideCard";
import { CarouselControls } from "./CarouselControls";
import { SlideLightbox } from "./SlideLightbox";

type CardSize = { w: number; h: number };

function useCardSize(): CardSize {
  const [size, setSize] = useState<CardSize>({ w: 280, h: 380 });
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1280) setSize({ w: 280, h: 380 });
      else if (w >= 1024) setSize({ w: 240, h: 340 });
      else if (w >= 768) setSize({ w: 200, h: 280 });
      else if (w >= 480) setSize({ w: 180, h: 260 });
      else setSize({ w: 160, h: 220 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

export function ExposicionCarousel() {
  const slides = exposicionBruxismo.slides;
  const cardSize = useCardSize();

  // Detect reduced motion ONCE at init — so we decide if plugin runs at all.
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // Plugin instance stable across renders. playOnInit false when reduced motion.
  const autoplayRef = useRef(
    Autoplay({
      delay: 5000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
      playOnInit: !prefersReducedMotion,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false, containScroll: "trimSnaps" },
    [autoplayRef.current]
  );

  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // Helper: safely access autoplay plugin ONLY after emblaApi is ready.
  const getAutoplay = useCallback(() => {
    if (!emblaApi) return null;
    try {
      const plugins = emblaApi.plugins?.();
      return plugins?.autoplay ?? null;
    } catch {
      return null;
    }
  }, [emblaApi]);

  const togglePlay = useCallback(() => {
    const ap = getAutoplay();
    if (!ap) return;
    if (isPlaying) {
      ap.stop();
      setIsPlaying(false);
    } else {
      ap.play();
      setIsPlaying(true);
    }
  }, [isPlaying, getAutoplay]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Pause when tab hidden — guard on emblaApi readiness
  useEffect(() => {
    if (!emblaApi) return;
    const onVis = () => {
      const ap = getAutoplay();
      if (!ap) return;
      if (document.hidden) ap.stop();
      else if (isPlaying) ap.play();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [emblaApi, getAutoplay, isPlaying]);

  // Pause when lightbox open
  useEffect(() => {
    const ap = getAutoplay();
    if (!ap) return;
    if (lightboxIdx !== null) ap.stop();
    else if (isPlaying) ap.play();
  }, [lightboxIdx, isPlaying, getAutoplay]);

  // Sync carousel to lightbox nav
  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    emblaApi?.scrollTo(idx);
  };
  const closeLightbox = () => setLightboxIdx(null);
  const lightboxPrev = () => {
    if (lightboxIdx === null) return;
    const next = Math.max(0, lightboxIdx - 1);
    setLightboxIdx(next);
    emblaApi?.scrollTo(next);
  };
  const lightboxNext = () => {
    if (lightboxIdx === null) return;
    const next = Math.min(slides.length - 1, lightboxIdx + 1);
    setLightboxIdx(next);
    emblaApi?.scrollTo(next);
  };

  return (
    <section
      aria-label={`Exposición ${exposicionBruxismo.titulo}`}
      style={{ padding: "32px 0 48px", background: "var(--covers-bg)" }}
    >
      {/* Header */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px 24px" }}>
        <div
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "11px",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "var(--covers-secondary)",
            fontWeight: 600,
            marginBottom: "8px",
          }}
        >
          Exposición 01 · {exposicionBruxismo.linea}
        </div>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            color: "var(--covers-primary)",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          {exposicionBruxismo.titulo}
        </h1>
        <p
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            color: "var(--covers-muted)",
            marginTop: "8px",
          }}
        >
          {exposicionBruxismo.totalSlides} diapositivas · {exposicionBruxismo.equipoMedico.join(" · ")}
        </p>
      </div>

      {/* Carousel */}
      <div className="embla" ref={emblaRef} aria-label="Carrusel de diapositivas">
        <div className="embla__container">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="embla__slide"
              style={{ width: `${cardSize.w}px`, height: `${cardSize.h}px`, flex: "0 0 auto" }}
            >
              <SlideCard slide={slide} onOpen={() => openLightbox(i)} sizeClass="w-full h-full" />
            </div>
          ))}
        </div>
      </div>

      <CarouselControls
        onPrev={scrollPrev}
        onNext={scrollNext}
        onToggle={togglePlay}
        isPlaying={isPlaying}
      />

      <SlideLightbox
        slide={lightboxIdx !== null ? slides[lightboxIdx] : null}
        total={slides.length}
        currentIndex={lightboxIdx ?? 0}
        onClose={closeLightbox}
        onPrev={lightboxPrev}
        onNext={lightboxNext}
      />
    </section>
  );
}
