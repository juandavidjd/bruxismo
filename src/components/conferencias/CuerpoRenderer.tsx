import type { CuerpoBloque } from "../../data/exposiciones/bruxismo";

export function CuerpoRenderer({ cuerpo }: { cuerpo: CuerpoBloque[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {cuerpo.map((b, i) => {
        if (b.tipo === "parrafo") {
          return (
            <p
              key={i}
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "15px",
                lineHeight: 1.65,
                color: "var(--covers-text)",
                margin: 0,
              }}
            >
              {b.texto}
            </p>
          );
        }
        if (b.tipo === "subtitulo") {
          return (
            <h3
              key={i}
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--covers-primary)",
                margin: "4px 0 -8px",
                letterSpacing: "-0.005em",
              }}
            >
              {b.texto}
            </h3>
          );
        }
        if (b.tipo === "destacado") {
          const isAlerta = b.variante === "alerta";
          return (
            <div
              key={i}
              style={{
                padding: "16px 20px",
                borderRadius: "8px",
                background: isAlerta ? "#FDF0F2" : "var(--covers-bg-soft)",
                borderLeft: `3px solid ${isAlerta ? "var(--covers-alert)" : "var(--covers-secondary)"}`,
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "var(--covers-text)",
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {b.texto}
              </p>
            </div>
          );
        }
        if (b.tipo === "lista") {
          return (
            <ul
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                margin: 0,
                padding: 0,
                listStyle: "none",
              }}
            >
              {b.items.map((it, j) => (
                <li
                  key={j}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    paddingLeft: it.titulo ? 0 : "12px",
                    position: "relative",
                  }}
                >
                  {it.titulo ? (
                    <>
                      <span
                        style={{
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontSize: "11px",
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: "var(--covers-secondary)",
                          fontWeight: 700,
                          minWidth: "130px",
                          maxWidth: "180px",
                          lineHeight: 1.4,
                          paddingTop: "2px",
                          flexShrink: 0,
                        }}
                      >
                        {it.titulo}
                      </span>
                      <span
                        style={{
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontSize: "14px",
                          lineHeight: 1.6,
                          color: "var(--covers-text)",
                          flex: 1,
                        }}
                      >
                        {it.texto}
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        aria-hidden
                        style={{
                          display: "inline-block",
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: "var(--covers-accent)",
                          marginTop: "10px",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontSize: "14px",
                          lineHeight: 1.6,
                          color: "var(--covers-text)",
                          flex: 1,
                        }}
                      >
                        {it.texto}
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}
