import { motion } from "framer-motion";
import { PageShell, Eyebrow } from "../components/UI.jsx";
import Botanical from "../components/Botanical.jsx";
import loveData from "../data/loveData.js";
import { Heart, Sparkles, ArrowRight } from "lucide-react";

export default function Page01Opening({ onNext }) {
  return (
    <PageShell bg="ivory" className="!py-20">
      <motion.div
        className="absolute top-8 sm:top-12"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Botanical variant="sprig" className="w-16 h-20 opacity-70" color="var(--rose)" />
      </motion.div>

      <div className="max-w-2xl text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 text-deeprose text-[11px] tracking-widest2 uppercase font-sans font-medium mb-6 shadow-sm"
        >
          <Sparkles size={12} className="text-pinkglow" />
          <span>{loveData.relationshipDateLabel} &mdash; {loveData.anniversaryLabel}</span>
        </motion.div>

        <motion.h1
          className="text-6xl sm:text-8xl font-serif text-brown tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Five Months <span className="script text-rose block sm:inline font-normal">&mdash; of us</span>
        </motion.h1>

        <motion.p
          className="mt-8 text-lg sm:text-2xl leading-relaxed text-brown/80 font-sans font-light max-w-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          and somehow,
          <br />
          <span className="font-serif italic text-2xl sm:text-3xl text-deeprose">
            you&rsquo;ve become my favorite part of every single day.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12"
        >
          <button
            onClick={onNext}
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-pinkglow via-rose to-purple-400 text-white font-sans text-xs tracking-widest uppercase font-medium shadow-[0_10px_30px_-8px_rgba(255,133,161,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(255,133,161,0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Heart size={15} className="fill-white group-hover:scale-125 transition-transform" />
            <span>Begin Our Story</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </PageShell>
  );
}
