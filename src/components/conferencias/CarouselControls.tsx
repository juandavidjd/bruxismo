import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type Props = {
  onPrev: () => void;
  onNext: () => void;
  onToggle: () => void;
  isPlaying: boolean;
};

const btnBase: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(10, 77, 104, 0.08)",
  border: "none",
  cursor: "pointer",
  color: "var(--covers-primary)",
  transition: "background 150ms ease-out, transform 150ms ease-out",
  padding: 0,
};

function onHover(e: React.MouseEvent, on: boolean) {
  (e.currentTarget as HTMLElement).style.background = on
    ? "rgba(10, 77, 104, 0.16)"
    : "rgba(10, 77, 104, 0.08)";
}

export function CarouselControls({ onPrev, onNext, onToggle, isPlaying }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        marginTop: "16px",
      }}
    >
      <button
        onClick={onPrev}
        aria-label="Diapositiva anterior"
        onMouseEnter={(e) => onHover(e, true)}
        onMouseLeave={(e) => onHover(e, false)}
        className="cv-focus"
        style={{ ...btnBase, width: 40, height: 40, borderRadius: 999 }}
      >
        <ChevronLeft size={18} strokeWidth={2.2} />
      </button>
      <button
        onClick={onToggle}
        aria-label={isPlaying ? "Pausar" : "Reproducir"}
        onMouseEnter={(e) => onHover(e, true)}
        onMouseLeave={(e) => onHover(e, false)}
        className="cv-focus"
        style={{ ...btnBase, width: 48, height: 48, borderRadius: 999 }}
      >
        {isPlaying ? <Pause size={20} strokeWidth={2.2} /> : <Play size={20} strokeWidth={2.2} />}
      </button>
      <button
        onClick={onNext}
        aria-label="Siguiente diapositiva"
        onMouseEnter={(e) => onHover(e, true)}
        onMouseLeave={(e) => onHover(e, false)}
        className="cv-focus"
        style={{ ...btnBase, width: 40, height: 40, borderRadius: 999 }}
      >
        <ChevronRight size={18} strokeWidth={2.2} />
      </button>
    </div>
  );
}
