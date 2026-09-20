import { useMemo } from "react";
import { motion } from "framer-motion";

export default function FloatingHearts({ count = 15 }) {
  const elements = useMemo(() => {
    const symbols = ["🌸", "✨", "🤍", "💖", "🌷", "🎀", "⭐", "💜"];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol: symbols[i % symbols.length],
      left: `${Math.random() * 95 + 2}%`,
      delay: Math.random() * 8,
      duration: Math.random() * 8 + 10,
      size: Math.random() * 10 + 14,
      opacity: Math.random() * 0.35 + 0.15,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {elements.map((el) => (
        <motion.span
          key={el.id}
          className="absolute select-none will-change-transform"
          style={{
            left: el.left,
            fontSize: `${el.size}px`,
            opacity: el.opacity,
          }}
          initial={{ y: "110vh", rotate: -15, scale: 0.8 }}
          animate={{
            y: "-15vh",
            rotate: [0, 25, -20, 15, 0],
            x: [0, 20, -15, 10, 0],
            scale: [0.8, 1.1, 0.9, 1.05],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          {el.symbol}
        </motion.span>
      ))}
    </div>
  );
}
