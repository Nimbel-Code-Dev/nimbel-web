import { loadFont as loadLocalFont } from "@remotion/fonts";
import { loadFont as loadInstrumentSans } from "@remotion/google-fonts/InstrumentSans";
import type { ReactNode } from "react";
import { AbsoluteFill, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

// Colores y fuentes de nimbel.net (src/styles/global.css)
const C = {
  bg: "#0c1414",
  accent: "#fe4819",
  text: "#f5f5f5",
  muted: "#e9e9e9",
  stats: "#277380",
};
const { fontFamily: sans } = loadInstrumentSans("normal", { weights: ["500", "600"], subsets: ["latin"] });
loadLocalFont({ family: "Mortend", url: staticFile("fonts/mortend-mortend-regular-400.woff2"), weight: "400" });
const display = "Mortend, sans-serif";

// 4 pasos de 60 frames; luego todo encendido y, al final, vuelta al estado inicial para que el bucle no salte
const STEP = 60;
const HOLD_END = 270;
export const RAG_FLOW_DURATION = 300;

const STEPS = ["Tus datos", "Vectores", "Búsqueda en PostgreSQL", "La IA responde"];

// Cuadrícula 2×2: posición de cada panel
const PANEL_W = 525;
const PANEL_H = 375;
const POS = [
  [60, 60],
  [615, 60],
  [60, 465],
  [615, 465],
];

export const RagFlow = () => {
  const frame = useCurrentFrame();
  // Desvanecido final común: el contenido vuelve a 0 antes de reiniciar
  const outro = interpolate(frame, [HOLD_END, RAG_FLOW_DURATION - 5], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: C.bg, fontFamily: sans }}>
      {STEPS.map((label, i) => (
        <Panel key={label} index={i} label={label} outro={outro}>
          {[<Data />, <Vectors />, <Search />, <Answer />][i]}
        </Panel>
      ))}
    </AbsoluteFill>
  );
};

// Progreso 0→1 de la entrada del paso `index`, con un retraso opcional dentro del paso
const useStepIn = (index: number, delay = 0) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({ frame: frame - index * STEP - delay, fps, config: { damping: 200 } });
};

const Panel = ({ index, label, outro, children }: { index: number; label: string; outro: number; children: ReactNode }) => {
  const frame = useCurrentFrame();
  const [x, y] = POS[index];
  // Borde en acento mientras el paso está activo
  const active = interpolate(
    frame,
    [index * STEP, index * STEP + 8, (index + 1) * STEP, (index + 1) * STEP + 8],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const lit = useStepIn(index) * outro;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: PANEL_W,
        height: PANEL_H,
        borderRadius: 24,
        padding: 36,
        boxSizing: "border-box",
        backgroundColor: "rgba(245,245,245,0.04)",
        border: `3px solid ${active > 0.01 ? `rgba(254,72,25,${active})` : "rgba(245,245,245,0.12)"}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
        <span style={{ fontFamily: display, fontSize: 40, color: C.accent, opacity: 0.35 + 0.65 * lit }}>
          0{index + 1}
        </span>
        <span style={{ fontSize: 44, fontWeight: 600, color: C.text, lineHeight: 1.1, opacity: 0.45 + 0.55 * lit }}>
          {label}
        </span>
      </div>
      <div style={{ position: "absolute", left: 36, right: 36, bottom: 36, height: 200, opacity: outro }}>
        {children}
      </div>
    </div>
  );
};

// 01 · Documentos e imágenes que aparecen escalonados
const Data = () => {
  const cards = [0, 1, 2, 3].map((i) => useStepIn(0, i * 6));
  return (
    <div style={{ display: "flex", gap: 22, alignItems: "flex-end", height: "100%" }}>
      {cards.map((p, i) => (
        <div
          key={i}
          style={{
            width: 96,
            height: 130,
            borderRadius: 12,
            backgroundColor: C.muted,
            padding: 14,
            boxSizing: "border-box",
            opacity: p,
            transform: `translateY(${(1 - p) * 40}px)`,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: i === 3 ? "flex-end" : "flex-start",
          }}
        >
          {i === 3 ? (
            // Imagen: sol y montaña
            <svg viewBox="0 0 68 60" width="68" height="60">
              <circle cx="50" cy="14" r="8" fill={C.accent} />
              <path d="M0 60 L24 22 L44 48 L54 36 L68 60 Z" fill={C.stats} />
            </svg>
          ) : (
            [1, 0.8, 1, 0.6, 0.9].map((w, j) => (
              <div key={j} style={{ height: 8, width: `${w * 100}%`, borderRadius: 4, backgroundColor: "#0c141440" }} />
            ))
          )}
        </div>
      ))}
    </div>
  );
};

// 02 · Cada contenido se escribe como una lista de números
const VECTORS = ["[0.12, -0.84, 0.33, …]", "[0.09, -0.79, 0.41, …]", "[-0.67, 0.25, 0.08, …]"];
const Vectors = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 18, height: "100%" }}>
      {VECTORS.map((v, i) => {
        const start = STEP + 6 + i * 10;
        const chars = Math.round(interpolate(frame, [start, start + 24], [0, v.length], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }));
        return (
          <div key={v} style={{ fontSize: 40, fontWeight: 500, color: i === 2 ? C.muted : C.stats, fontVariantNumeric: "tabular-nums" }}>
            {v.slice(0, chars)}
          </div>
        );
      })}
    </div>
  );
};

// 03 · Nube de puntos: la pregunta (acento) se une a sus vecinos más cercanos
const DOTS = [
  [30, 30], [110, 170], [60, 110], [150, 60], [320, 70], [250, 180],
  [420, 40], [400, 160], [90, 20], [350, 190], [20, 190], [440, 100],
];
const QUERY = [226, 100];
const NEAREST = [3, 4, 5];
const Search = () => {
  const q = useStepIn(2);
  const link = useStepIn(2, 18);
  return (
    <svg viewBox="0 0 453 200" width="100%" height="100%">
      {NEAREST.map((d) => (
        <line
          key={d}
          x1={QUERY[0]}
          y1={QUERY[1]}
          x2={QUERY[0] + (DOTS[d][0] - QUERY[0]) * link}
          y2={QUERY[1] + (DOTS[d][1] - QUERY[1]) * link}
          stroke={C.accent}
          strokeWidth={4}
        />
      ))}
      {DOTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={11} fill={NEAREST.includes(i) && link > 0.5 ? C.accent : C.stats} opacity={q} />
      ))}
      <circle cx={QUERY[0]} cy={QUERY[1]} r={18 * q} fill={C.text} stroke={C.accent} strokeWidth={6} />
    </svg>
  );
};

// 04 · Los fragmentos encontrados entran en la respuesta de la IA
const Answer = () => {
  const chips = [0, 1, 2].map((i) => useStepIn(3, i * 5));
  const lines = [0, 1, 2].map((i) => useStepIn(3, 24 + i * 6));
  return (
    <div style={{ display: "flex", gap: 24, height: "100%", alignItems: "flex-end" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, width: 120 }}>
        {chips.map((p, i) => (
          <div
            key={i}
            style={{
              height: 38,
              borderRadius: 10,
              backgroundColor: C.accent,
              opacity: p,
              transform: `translateX(${(1 - p) * -40}px)`,
            }}
          />
        ))}
      </div>
      <div
        style={{
          flex: 1,
          height: 180,
          borderRadius: 20,
          borderBottomLeftRadius: 4,
          backgroundColor: C.muted,
          padding: 26,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          opacity: chips[0],
        }}
      >
        {lines.map((p, i) => (
          <div key={i} style={{ height: 14, borderRadius: 7, width: `${[90, 100, 65][i] * p}%`, backgroundColor: C.bg }} />
        ))}
      </div>
    </div>
  );
};
