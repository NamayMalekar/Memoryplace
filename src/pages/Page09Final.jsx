import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PageShell } from "../components/UI.jsx";
import PhotoFrame from "../components/PhotoFrame.jsx";
import Botanical from "../components/Botanical.jsx";
import loveData from "../data/loveData.js";
import { Heart, Sparkles, RotateCcw } from "lucide-react";

export default function Page09Final({ onRestart }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1400);
    const t2 = setTimeout(() => setStage(2), 2600);
    const t3 = setTimeout(() => setStage(3), 3800);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  return (
    <PageShell bg="ivory" className="text-center !py-20 sm:!py-28">
      <div className="max-w-2xl w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 text-deeprose text-xs font-sans font-medium mb-6 shadow-sm"
        >
          <Sparkles size={12} className="text-pinkglow" />
          <span>Chapter 5 Complete &bull; To Eternity</span>
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-7xl font-serif text-brown tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Five months down.
        </motion.h2>

        {stage >= 1 && (
          <motion.p
            className="mt-4 text-xl sm:text-3xl italic text-rose font-serif"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            and a lifetime of love still left to go.
          </motion.p>
        )}

        {stage >= 2 && (
          <motion.div
            className="mt-6 flex items-center justify-center gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-2xl sm:text-3xl font-serif text-brown">Happy 5 months, my love</span>
            <Heart size={22} className="text-pinkglow fill-pinkglow" />
          </motion.div>
        )}

        {stage >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center w-full"
          >
            <div className="p-2 bg-gradient-to-tr from-pink-200 via-purple-100 to-rose-200 rounded-3xl shadow-xl">
              <PhotoFrame
                src={loveData.finalPhoto}
                alt="Us Forever"
                polaroid
                caption="You & Me &bull; Forever"
                className="w-56 sm:w-64 aspect-[4/5]"
              />
            </div>

            <p className="mt-6 tracking-widest2 uppercase text-xs font-semibold text-deeprose font-sans bg-pink-50 border border-pink-200 px-4 py-1.5 rounded-full">
              {loveData.finalDateRange}
            </p>

            <p className="mt-8 text-sm text-brown/60 italic font-serif">
              {loveData.signature}
            </p>

            <div className="mt-8">
              <button
                onClick={onRestart}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/90 border border-pink-300 text-deeprose hover:bg-pink-50 font-sans text-xs tracking-widest uppercase font-medium shadow-sm hover:shadow-md transition-all"
              >
                <RotateCcw size={13} />
                <span>Experience It Again</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </PageShell>
  );
}
