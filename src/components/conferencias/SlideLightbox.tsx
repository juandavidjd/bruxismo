import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FocusTrap } from "focus-trap-react";
import type { Slide } from "../../data/exposiciones/bruxismo";
import { CuerpoRenderer } from "./CuerpoRenderer";
import imagesManifest from "../../data/exposiciones/bruxismo-images.json";

const images = imagesManifest as Record<string, { url: string; alt: string }>;

type Props = {
  slide: Slide | null;
  total: number;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

function EditorialLightboxImage({ slide }: { slide: Slide }) {
  const bgIdx = (slide.orden - 1) % 5;
  return (
    <div
      className={`cv-slide-bg-${bgIdx} relative w-full h-full flex flex-col items-start justify-end`}
      style={{ padding: "32px 28px 28px" }}
    >
      <div
        style={{
          position: "absolute",
          top: "28px",
          left: "28px",
          fontSize: "11px",
          letterSpacing: "2.5px",
          color: "rgba(255,255,255,0.78)",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          textTransform: "uppercase",
        }}
      >
        {slide.eyebrow}
      </div>
      <div
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "128px",
          fontWeight: 700,
          color: "#FFFFFF",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginBottom: "12px",
        }}
      >
        {String(slide.orden).padStart(2, "0")}
      </div>
      <div className="cv-rule w-full" style={{ marginBottom: "16px" }} />
      <div
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "22px",
          lineHeight: 1.25,
          color: "#FFFFFF",
          fontWeight: 500,
          maxWidth: "100%",
        }}
      >
        {slide.title}
      </div>
      {slide.subtitle && (
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            color: "rgba(255,255,255,0.82)",
            marginTop: "6px",
          }}
        >
          {slide.subtitle}
        </div>
      )}
    </div>
  );
}

export function SlideLightbox({ slide, total, currentIndex, onClose, onPrev, onNext }: Props) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slide) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [slide, onClose, onPrev, onNext]);

  // Scroll body to top on slide change
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [slide?.id]);

  return (
    <AnimatePresence>
      {slide && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--covers-overlay)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: "24px",
            overflow: "auto",
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`lightbox-title-${slide.id}`}
        >
          <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true, escapeDeactivates: false }}>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "min(1200px, 92vw)",
                maxHeight: "90vh",
                background: "var(--covers-bg)",
                borderRadius: "12px",
                boxShadow: "var(--shadow-modal)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="cv-focus"
                style={{
                  position: "absolute",
                  top: "-18px",
                  right: "-18px",
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  background: "#FFFFFF",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--covers-primary)",
                  zIndex: 2,
                }}
              >
                <X size={18} strokeWidth={2.2} />
              </button>

              {/* Body: scroll vertical, hidden scrollbar */}
              <div
                ref={bodyRef}
                className="lightbox-body"
                style={{ overflowY: "auto", flex: 1 }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "55% 45%",
                    gap: "32px",
                    padding: "48px",
                    minHeight: "100%",
                  }}
                  data-responsive
                >
                  {/* Image column */}
                  <div
                    style={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      aspectRatio: "1 / 1",
                      background: "var(--covers-bg-soft)",
                    }}
                  >
                    {images[slide.id] ? (
                      <img
                        src={images[slide.id].url}
                        alt={images[slide.id].alt}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <EditorialLightboxImage slide={slide} />
                    )}
                  </div>

                  {/* Text column */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "8px" }}>
                    <span
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "11px",
                        letterSpacing: "2.5px",
                        textTransform: "uppercase",
                        color: "var(--covers-secondary)",
                        fontWeight: 600,
                      }}
                    >
                      {slide.eyebrow}
                    </span>
                    <h2
                      id={`lightbox-title-${slide.id}`}
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "32px",
                        lineHeight: 1.15,
                        color: "var(--covers-primary)",
                        fontWeight: 700,
                        margin: 0,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {slide.title}
                    </h2>
                    {slide.subtitle && (
                      <p
                        style={{
                          fontFamily: "Georgia, serif",
                          fontSize: "18px",
                          color: "var(--covers-muted)",
                          margin: 0,
                          fontStyle: "italic",
                        }}
                      >
                        {slide.subtitle}
                      </p>
                    )}
                    <p
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "16px",
                        lineHeight: 1.6,
                        color: "var(--covers-muted)",
                        margin: 0,
                      }}
                    >
                      {slide.resumen}
                    </p>
                    <div
                      style={{
                        height: "1px",
                        background: "var(--covers-rule)",
                        margin: "4px 0",
                      }}
                    />
                    <CuerpoRenderer cuerpo={slide.cuerpo} />
                  </div>
                </div>
              </div>

              {/* Footer nav */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 48px",
                  borderTop: "1px solid var(--covers-rule)",
                  background: "var(--covers-bg-soft)",
                }}
              >
                <button
                  onClick={onPrev}
                  aria-label="Anterior"
                  disabled={currentIndex === 0}
                  className="cv-focus"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    background: "transparent",
                    border: "none",
                    cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                    color: currentIndex === 0 ? "var(--covers-soft-muted)" : "var(--covers-primary)",
                    fontSize: "13px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  <ChevronLeft size={16} /> Anterior
                </button>
                <span
                  style={{
                    fontSize: "13px",
                    fontFamily: "Inter, sans-serif",
                    color: "var(--covers-muted)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <button
                  onClick={onNext}
                  aria-label="Siguiente"
                  disabled={currentIndex === total - 1}
                  className="cv-focus"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    background: "transparent",
                    border: "none",
                    cursor: currentIndex === total - 1 ? "not-allowed" : "pointer",
                    color: currentIndex === total - 1 ? "var(--covers-soft-muted)" : "var(--covers-primary)",
                    fontSize: "13px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Siguiente <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </FocusTrap>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
