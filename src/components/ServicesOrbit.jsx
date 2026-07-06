// Eight satellites orbiting the center at varied angle/radius/size —
// deliberately not a uniform ring of eight, which would read as a clock
// face rather than an organic "practice areas around one firm" cluster.
const SATELLITES = [
  { angle: 12, r: 108, size: 9 },
  { angle: 54, r: 90, size: 6 },
  { angle: 97, r: 116, size: 8 },
  { angle: 141, r: 96, size: 7 },
  { angle: 183, r: 112, size: 10 },
  { angle: 224, r: 94, size: 6 },
  { angle: 267, r: 109, size: 8 },
  { angle: 312, r: 99, size: 7 },
];

const CENTER = 150;

function pointOn(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) };
}

/**
 * "One firm, eight practice areas" as a hub-and-spoke illustration for
 * the Services landing hero — the logo's own ring-and-monogram
 * construction at the center, with eight satellite marks radiating out
 * for the eight categories. Abstract on purpose: it isn't a literal
 * diagram of any specific category, just a visual echo of the page's own
 * "one firm for every number" line. Purely decorative — aria-hidden.
 */
export default function ServicesOrbit({ size = 320, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 300 300" className={className} aria-hidden="true">
      {SATELLITES.map((s, i) => {
        const { x, y } = pointOn(s.angle, s.r);
        return (
          <line
            key={`line-${i}`}
            x1={CENTER}
            y1={CENTER}
            x2={x}
            y2={y}
            className="stroke-gold-500"
            strokeWidth="1"
            opacity="0.18"
          />
        );
      })}
      {SATELLITES.map((s, i) => {
        const { x, y } = pointOn(s.angle, s.r);
        return <circle key={`dot-${i}`} cx={x} cy={y} r={s.size} className="fill-gold-500" opacity="0.35" />;
      })}
      <circle cx={CENTER} cy={CENTER} r="70" fill="none" className="stroke-gold-500" strokeWidth="0.75" opacity="0.25" />
      <circle cx={CENTER} cy={CENTER} r="42" className="fill-navy-900 stroke-gold-500" strokeWidth="2" />
      <text
        x={CENTER}
        y={CENTER + 9}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="26"
        fontWeight="600"
        className="fill-gold-400"
      >
        ASA
      </text>
    </svg>
  );
}
