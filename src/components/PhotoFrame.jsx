import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Image as ImageIcon } from "lucide-react";

/**
 * Displays a photo if it exists at `src`; otherwise shows a beautiful,
 * romantic aesthetic polaroid with pastel gradients and loving icons.
 */
export default function PhotoFrame({
  src,
  alt = "",
  className = "",
  rotate = 0,
  polaroid = false,
  onClick,
  caption,
  icon = "🌸",
}) {
  const [failed, setFailed] = useState(false);

  const frameClasses = polaroid
    ? "bg-white p-2.5 pb-9 sm:p-3 sm:pb-10 rounded-xl border border-pink-200 shadow-[0_10px_25px_-8px_rgba(255,133,161,0.3)]"
    : "bg-white p-2 rounded-lg border border-pink-100 shadow-[0_8px_20px_-8px_rgba(81,69,54,0.25)]";

  return (
    <motion.figure
      className={`relative ${frameClasses} ${className} select-none`}
      style={{ rotate: `${rotate}deg` }}
      whileHover={{ scale: 1.025, rotate: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
    >
      <div className="relative w-full h-full overflow-hidden rounded-md bg-gradient-to-br from-pink-100/60 via-purple-50/50 to-pink-50 border border-pink-100 flex items-center justify-center">
        {!failed && src ? (
          <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full min-h-[140px] flex flex-col items-center justify-center p-3 text-center bg-gradient-to-tr from-pink-100/80 via-blush/60 to-purple-100/80 relative overflow-hidden">
            {/* Soft decorative background circles */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/40 rounded-full blur-sm pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-200/40 rounded-full blur-sm pointer-events-none" />

            <span className="text-3xl sm:text-4xl mb-2 drop-shadow-sm select-none animate-bounce-gentle">
              {icon}
            </span>

            <span className="text-[10px] tracking-widest uppercase font-sans font-medium text-deeprose/80 px-2 py-0.5 rounded-full bg-white/70 border border-pink-200/60 shadow-xs">
              Sweet Memory
            </span>
          </div>
        )}
      </div>

      {polaroid && caption && (
        <figcaption className="absolute bottom-1.5 sm:bottom-2 left-1 right-1 text-center script text-base sm:text-lg text-deeprose font-normal truncate px-1">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
