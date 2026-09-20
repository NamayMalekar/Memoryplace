import { useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PasswordGate from "./components/PasswordGate.jsx";
import Navigation from "./components/Navigation.jsx";
import MusicButton from "./components/MusicButton.jsx";
import FloatingHearts from "./components/FloatingHearts.jsx";

import Page01Opening from "./pages/Page01Opening.jsx";
import Page02Beginning from "./pages/Page02Beginning.jsx";
import Page03FiveMonths from "./pages/Page03FiveMonths.jsx";
import Page04Memories from "./pages/Page04Memories.jsx";
import Page05LittleThings from "./pages/Page05LittleThings.jsx";
import Page06Timeline from "./pages/Page06Timeline.jsx";
import Page07Letter from "./pages/Page07Letter.jsx";
import Page08NextChapter from "./pages/Page08NextChapter.jsx";
import Page09Final from "./pages/Page09Final.jsx";

const TOTAL_PAGES = 9;

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const go = useCallback((target) => {
    setIndex((prev) => {
      const nextIndex =
        typeof target === "function"
          ? target(prev)
          : Math.max(0, Math.min(TOTAL_PAGES - 1, target));
      window.scrollTo({ top: 0, behavior: "smooth" });
      return nextIndex;
    });
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 60) {
      if (delta < 0) go((prev) => Math.min(TOTAL_PAGES - 1, prev + 1));
      else go((prev) => Math.max(0, prev - 1));
    }
    touchStartX.current = null;
  };

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div
      className="relative w-full min-h-[100dvh] bg-gradient-to-b from-ivory via-warm-white to-beige overflow-x-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <FloatingHearts count={16} />
      <MusicButton />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {index === 0 && <Page01Opening onNext={() => go(1)} />}
          {index === 1 && <Page02Beginning onNext={() => go(2)} onPrev={() => go(0)} />}
          {index === 2 && <Page03FiveMonths onNext={() => go(3)} onPrev={() => go(1)} />}
          {index === 3 && <Page04Memories onNext={() => go(4)} onPrev={() => go(2)} />}
          {index === 4 && <Page05LittleThings onNext={() => go(5)} onPrev={() => go(3)} />}
          {index === 5 && <Page06Timeline onNext={() => go(6)} onPrev={() => go(4)} />}
          {index === 6 && <Page07Letter onNext={() => go(7)} onPrev={() => go(5)} />}
          {index === 7 && <Page08NextChapter onNext={() => go(8)} onPrev={() => go(6)} />}
          {index === 8 && <Page09Final onRestart={() => go(0)} onPrev={() => go(7)} />}
        </motion.div>
      </AnimatePresence>

      <Navigation
        index={index}
        total={TOTAL_PAGES}
        onNext={() => go((prev) => Math.min(TOTAL_PAGES - 1, prev + 1))}
        onPrev={() => go((prev) => Math.max(0, prev - 1))}
        onHome={() => go(0)}
      />
    </div>
  );
}
