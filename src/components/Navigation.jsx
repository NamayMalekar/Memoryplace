import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

export default function Navigation({ index, total, onNext, onPrev, onHome }) {
  const progress = ((index + 1) / total) * 100;

  return (
    <>
      {/* Desktop indicator */}
      <div className="hidden sm:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-40 items-center gap-4 font-sans text-brown/70">
        <button
          aria-label="Previous page"
          onClick={onPrev}
          disabled={index === 0}
          className="disabled:opacity-20 hover:text-brown transition-colors"
        >
          <ChevronLeft size={16} strokeWidth={1.25} />
        </button>

        <div className="flex items-center gap-3">
          <span className="text-[11px] tracking-widest2">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="w-24 h-[1px] bg-brown/15 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gold"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        <button
          aria-label="Next page"
          onClick={onNext}
          disabled={index === total - 1}
          className="disabled:opacity-20 hover:text-brown transition-colors"
        >
          <ChevronRight size={16} strokeWidth={1.25} />
        </button>

        <button
          aria-label="Return to start"
          onClick={onHome}
          className="ml-2 hover:text-brown transition-colors opacity-60 hover:opacity-100"
        >
          <Home size={14} strokeWidth={1.25} />
        </button>
      </div>

      {/* Mobile bottom bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-gradient-to-t from-ivory/95 to-transparent">
        <button
          aria-label="Previous page"
          onClick={onPrev}
          disabled={index === 0}
          className="disabled:opacity-20 text-brown/70 p-2"
        >
          <ChevronLeft size={20} strokeWidth={1.25} />
        </button>
        <div className="flex-1 mx-4 h-[1px] bg-brown/15 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gold"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <button
          aria-label="Next page"
          onClick={onNext}
          disabled={index === total - 1}
          className="disabled:opacity-20 text-brown/70 p-2"
        >
          <ChevronRight size={20} strokeWidth={1.25} />
        </button>
      </div>
    </>
  );
}
