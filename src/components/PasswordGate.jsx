import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Botanical from "./Botanical.jsx";
import FloatingHearts from "./FloatingHearts.jsx";
import loveData from "../data/loveData.js";
import { Heart, Sparkles, Lock, Delete, Mail } from "lucide-react";

export default function PasswordGate({ onUnlock }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  const checkPin = (entered) => {
    const cleaned = entered.replace(/[.\-\s]/g, "");
    if (cleaned === loveData.password || cleaned === "1804" || cleaned === "18042026") {
      setUnlocking(true);
      setTimeout(onUnlock, 1000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
        setPin("");
      }, 1200);
    }
  };

  const handleDigit = (digit) => {
    if (pin.length < 8 && !unlocking) {
      const next = pin + digit;
      setPin(next);
      if (next.length === 4 || next.length === 8) {
        checkPin(next);
      }
    }
  };

  const handleDelete = () => {
    if (pin.length > 0 && !unlocking) {
      setPin(pin.slice(0, -1));
    }
  };

  // Keyboard support for desktop
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (unlocking) return;
      if (e.key >= "0" && e.key <= "9") {
        handleDigit(e.key);
      } else if (e.key === "Backspace") {
        handleDelete();
      } else if (e.key === "Enter" && pin.length > 0) {
        checkPin(pin);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pin, unlocking]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#FCEFF3] via-[#FDF5F8] to-[#F5EAF5] px-4 py-6 overflow-y-auto"
      animate={unlocking ? { opacity: 0, scale: 1.05 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <FloatingHearts count={16} />

      <div className="w-full max-w-sm flex flex-col items-center text-center relative z-10 my-auto">
        {/* Cute Letter Header */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-12 h-12 rounded-2xl bg-white/90 border border-pink-200 shadow-sm flex items-center justify-center mb-3 text-2xl"
        >
          💌
        </motion.div>

        {/* Title for Her */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-serif text-[#843B62] font-semibold tracking-tight"
        >
          For {loveData.herName || "My Tanudiii"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-1 text-xs sm:text-sm script text-rose text-base sm:text-lg"
        >
          A little surprise, made with love 💕
        </motion.p>

        {/* Card Frame */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={
            error
              ? { x: [-8, 8, -6, 6, -3, 3, 0], opacity: 1 }
              : { scale: 1, opacity: 1 }
          }
          transition={{ duration: error ? 0.5 : 0.7, delay: 0.2 }}
          className="w-full mt-6 bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-pink-200/90 shadow-[0_15px_40px_-10px_rgba(255,133,161,0.3)] flex flex-col items-center"
        >
          <span className="text-[11px] tracking-widest uppercase font-sans text-brown/50 mb-4 flex items-center gap-1">
            <Lock size={12} className="text-pinkglow" /> Enter Secret PIN
          </span>

          {/* PIN Bubble Dots */}
          <div className="flex items-center gap-4 mb-6">
            {[0, 1, 2, 3].map((index) => {
              const isFilled = pin.length > index;
              return (
                <motion.div
                  key={index}
                  animate={
                    isFilled
                      ? { scale: [1, 1.3, 1], backgroundColor: "#FF85A1" }
                      : { scale: 1, backgroundColor: "rgba(255, 214, 224, 0.4)" }
                  }
                  transition={{ duration: 0.2 }}
                  className={`w-4 h-4 rounded-full border border-pink-300 flex items-center justify-center transition-colors ${isFilled ? "bg-pinkglow shadow-[0_0_10px_rgba(255,133,161,0.7)]" : ""
                    }`}
                >
                  {isFilled && <Heart size={8} className="text-white fill-white" />}
                </motion.div>
              );
            })}
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-[240px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handleDigit(String(num))}
                className="w-16 h-16 rounded-full bg-pink-50/60 hover:bg-pink-100/90 active:scale-95 border border-pink-200/80 text-brown font-serif text-2xl font-medium transition-all shadow-sm flex items-center justify-center mx-auto"
              >
                {num}
              </button>
            ))}

            <div className="flex items-center justify-center">
              <span className="text-pink-300 text-lg">🌸</span>
            </div>

            <button
              type="button"
              onClick={() => handleDigit("0")}
              className="w-16 h-16 rounded-full bg-pink-50/60 hover:bg-pink-100/90 active:scale-95 border border-pink-200/80 text-brown font-serif text-2xl font-medium transition-all shadow-sm flex items-center justify-center mx-auto"
            >
              0
            </button>

            <button
              type="button"
              onClick={handleDelete}
              aria-label="Delete digit"
              className="w-16 h-16 rounded-full bg-pink-50/40 hover:bg-pink-100/80 active:scale-95 border border-pink-200/60 text-brown/70 transition-all shadow-sm flex items-center justify-center mx-auto"
            >
              <Delete size={18} />
            </button>
          </div>

          {/* Feedback message */}
          <div className="h-6 mt-4 flex items-center justify-center">
            <AnimatePresence>
              {error ? (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-rose font-serif italic"
                >
                  Oops! Incorrect PIN. Try our DOA 💕
                </motion.p>
              ) : (
                <p className="text-[11px] text-brown/40 font-sans">
                  Best on a phone &bull; unlock with PIN
                </p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
