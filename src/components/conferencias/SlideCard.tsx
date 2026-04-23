import type { Slide } from "../../data/exposiciones/bruxismo";
import imagesManifest from "../../data/exposiciones/bruxismo-images.json";

const images = imagesManifest as Record<string, { url: string; alt: string }>;

type Props = {
  slide: Slide;
  onOpen: () => void;
  sizeClass?: string;
};

// Editorial fallback when image is not available (Nano Banana billing pending)
function EditorialSlide({ slide }: { slide: Slide }) {
  const bgIdx = (slide.orden - 1) % 5;
  return (
    <div
      className={`w-full h-full cv-slide-bg-${bgIdx} relative flex flex-col items-start justify-end`}
      style={{
        padding: "20px 18px 18px",
        borderRadius: "8px 8px 0 0",
      }}
    >
      {/* Eyebrow */}
      <div
        className="absolute"
        style={{
          top: "16px",
          left: "18px",
          fontSize: "9px",
          letterSpacing: "2px",
          color: "rgba(255,255,255,0.72)",
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 600,
          textTransform: "uppercase",
        }}
      >
        {slide.eyebrow.split("·")[0].trim()}
      </div>
      {/* Number — editorial focal point */}
      <div
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "68px",
          fontWeight: 700,
          color: "#FFFFFF",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginBottom: "6px",
        }}
      >
        {String(slide.orden).padStart(2, "0")}
      </div>
      <div className="cv-rule w-full" style={{ marginBottom: "8px" }} />
      {/* Short title preview */}
      <div
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "14px",
          lineHeight: 1.3,
          color: "rgba(255,255,255,0.92)",
          fontWeight: 500,
          maxWidth: "100%",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {slide.title}
      </div>
    </div>
  );
}

export function SlideCard({ slide, onOpen, sizeClass = "w-[280px] h-[380px]" }: Props) {
  const img = images[slide.id];

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Abrir diapositiva ${slide.orden}: ${slide.title}`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className={`cv-focus ${sizeClass} group cursor-pointer overflow-hidden flex flex-col`}
      style={{
        background: "#FFFFFF",
        borderRadius: "8px",
        boxShadow: "var(--shadow-card)",
        transition: "transform 250ms ease-out, box-shadow 250ms ease-out",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)";
      }}
    >
      {/* Image area — 65% height */}
      <div style={{ height: "65%", width: "100%", overflow: "hidden" }}>
        {img ? (
          <img
            src={img.url}
            alt={img.alt || slide.imageAltText}
            loading={slide.orden <= 3 ? "eager" : "lazy"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <EditorialSlide slide={slide} />
        )}
      </div>

      {/* Text area — 35% */}
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
        <span
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--covers-muted)",
            fontWeight: 600,
          }}
        >
          {slide.eyebrow.length > 32 ? slide.eyebrow.slice(0, 30) + "…" : slide.eyebrow}
        </span>
        <h3
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--covers-primary)",
            lineHeight: 1.25,
            margin: 0,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {slide.title}
        </h3>
      </div>
    </article>
  );
}
