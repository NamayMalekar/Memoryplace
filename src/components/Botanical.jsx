import { motion } from "framer-motion";

/**
 * A set of thin, delicate botanical line-art SVGs inspired by the
 * invitation reference. `variant` chooses the illustration,
 * `className` controls size/position, `float` adds a gentle drift.
 */
const paths = {
  sprig: (
    <>
      <path d="M60 4 C 58 40, 62 90, 60 150" />
      <path d="M60 30 C 45 24, 30 26, 20 18" />
      <path d="M60 30 C 75 24, 90 26, 100 18" />
      <path d="M60 55 C 44 50, 28 54, 16 46" />
      <path d="M60 55 C 76 50, 92 54, 104 46" />
      <path d="M60 82 C 46 78, 34 82, 24 76" />
      <path d="M60 82 C 74 78, 86 82, 96 76" />
      <ellipse cx="19" cy="17" rx="7" ry="4" transform="rotate(-25 19 17)" />
      <ellipse cx="101" cy="17" rx="7" ry="4" transform="rotate(25 101 17)" />
      <ellipse cx="15" cy="45" rx="7" ry="4" transform="rotate(-15 15 45)" />
      <ellipse cx="105" cy="45" rx="7" ry="4" transform="rotate(15 105 45)" />
      <ellipse cx="23" cy="75" rx="6" ry="3.5" transform="rotate(-10 23 75)" />
      <ellipse cx="97" cy="75" rx="6" ry="3.5" transform="rotate(10 97 75)" />
    </>
  ),
  corner: (
    <>
      <path d="M4 4 C 30 10, 55 30, 60 60" />
      <path d="M14 8 C 20 18, 18 26, 10 30" />
      <path d="M28 16 C 34 24, 32 32, 24 36" />
      <path d="M42 30 C 48 38, 46 46, 38 50" />
      <ellipse cx="9" cy="29" rx="5" ry="3" transform="rotate(40 9 29)" />
      <ellipse cx="23" cy="35" rx="5" ry="3" transform="rotate(40 23 35)" />
      <ellipse cx="37" cy="49" rx="5" ry="3" transform="rotate(40 37 49)" />
    </>
  ),
  flower: (
    <>
      <circle cx="30" cy="30" r="5.5" />
      <ellipse cx="30" cy="16" rx="6" ry="10" transform="rotate(0 30 16)" />
      <ellipse cx="42" cy="24" rx="6" ry="10" transform="rotate(72 42 24)" />
      <ellipse cx="38" cy="42" rx="6" ry="10" transform="rotate(144 38 42)" />
      <ellipse cx="22" cy="42" rx="6" ry="10" transform="rotate(216 22 42)" />
      <ellipse cx="18" cy="24" rx="6" ry="10" transform="rotate(288 18 24)" />
      <path d="M30 46 C 28 60, 26 70, 20 80" />
    </>
  ),
  divider: (
    <>
      <path d="M2 10 C 40 2, 80 2, 118 10" />
      <ellipse cx="60" cy="10" rx="4" ry="2.5" />
    </>
  ),
};

export default function Botanical({
  variant = "sprig",
  className = "",
  color = "var(--sage)",
  strokeWidth = 1,
  float = false,
}) {
  const content = (
    <svg
      viewBox={variant === "divider" ? "0 0 120 20" : variant === "flower" ? "0 0 60 90" : variant === "corner" ? "0 0 60 60" : "0 0 120 155"}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      {paths[variant]}
    </svg>
  );

  if (!float) return content;

  return (
    <motion.div
      className="inline-block"
      animate={{ y: [0, -6, 0], rotate: [0, 1, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      {content}
    </motion.div>
  );
}
