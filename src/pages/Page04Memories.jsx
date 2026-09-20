import { useState } from "react";
import { PageShell, SectionReveal, Eyebrow } from "../components/UI.jsx";
import PhotoFrame from "../components/PhotoFrame.jsx";
import Lightbox from "../components/Lightbox.jsx";
import loveData from "../data/loveData.js";
import { Sparkles, ArrowRight, Heart } from "lucide-react";

// Editorial-style layout: mix of sizes/rotations per index.
const LAYOUT = [
  "col-span-2 row-span-2 rotate-[-1deg]",
  "col-span-2 rotate-[1.5deg] translate-y-3",
  "col-span-2 rotate-[-1deg]",
  "col-span-2 row-span-2 rotate-[1deg] translate-y-2",
  "col-span-2 rotate-[-1.5deg]",
  "col-span-2 rotate-[1deg] translate-y-3",
];

export default function Page04Memories({ onNext }) {
  const [selected, setSelected] = useState(null);

  return (
    <PageShell bg="ivory" className="!py-16 sm:!py-24">
      <div className="max-w-5xl w-full flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 border border-pink-200 text-deeprose text-xs font-sans font-medium mb-3">
          <Sparkles size={12} className="text-pinkglow" />
          <span>Chapter 4 &bull; Photo Memories</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif text-brown text-center mb-2">
          Little Pieces of Us <span className="script text-rose font-normal">&mdash; captured in time</span>
        </h2>

        <p className="text-xs sm:text-sm text-brown/60 text-center max-w-md font-sans mb-10">
          Every photo is a quiet reminder of how lucky I am to have you by my side
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-4 gap-4 sm:gap-6 max-w-4xl w-full auto-rows-[120px] sm:auto-rows-[150px] mb-12">
          {loveData.memories.map((item, i) => (
            <SectionReveal
              key={i}
              delay={i * 0.08}
              className={`${LAYOUT[i % LAYOUT.length]} flex flex-col`}
            >
              <PhotoFrame
                src={item.image}
                alt={item.caption}
                polaroid
                rotate={0}
                caption={item.caption}
                onClick={() => setSelected(item)}
                className="w-full h-full cursor-pointer hover:shadow-xl hover:scale-102 transition-all duration-300"
              />
            </SectionReveal>
          ))}
        </div>

        {/* Next Step CTA */}
        {onNext && (
          <div className="flex justify-center">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-pinkglow to-rose text-white font-sans text-xs tracking-widest uppercase font-medium shadow-[0_8px_25px_-5px_rgba(255,133,161,0.5)] hover:scale-105 active:scale-95 transition-all"
            >
              <Heart size={14} className="fill-white" />
              <span>Next: Little Things I Love</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </PageShell>
  );
}
