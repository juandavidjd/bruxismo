import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ExposicionCarousel } from "../components/conferencias/ExposicionCarousel";
import "../styles/conferencias.css";

export default function Conferencias() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--covers-bg)" }}>
      <header
        style={{
          padding: "20px 32px",
          borderBottom: "1px solid var(--covers-rule)",
          background: "#FFFFFF",
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
            className="cv-focus"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--covers-primary)",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            <ArrowLeft size={16} />
            COVER'S
          </Link>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--covers-muted)",
              fontWeight: 600,
            }}
          >
            Conferencias y talleres
          </div>
        </div>
      </header>

      <ExposicionCarousel />

      <footer
        style={{
          padding: "32px",
          borderTop: "1px solid var(--covers-rule)",
          background: "var(--covers-bg-soft)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            color: "var(--covers-muted)",
            margin: 0,
          }}
        >
          COVER'S Lab · my-covers.com · @covers_colombiaa
        </p>
      </footer>
    </div>
  );
}
