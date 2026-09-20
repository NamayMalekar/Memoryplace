import { useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "../components/UI.jsx";
import PhotoFrame from "../components/PhotoFrame.jsx";
import Lightbox from "../components/Lightbox.jsx";
import Botanical from "../components/Botanical.jsx";
import loveData from "../data/loveData.js";
import {
  Sparkles,
  Calendar,
  Heart,
  ArrowRight,
  ArrowLeft,
  Check,
} from "lucide-react";

export default function Page03FiveMonths({ onNext, onPrev }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const months = loveData.monthlyJourney;
  const current = months[activeIdx] || months[0];
  const isFirstMonth = activeIdx === 0;
  const isLastMonth = activeIdx === months.length - 1;

  const handlePrevMonth = () => {
    if (activeIdx > 0) {
      setActiveIdx((prev) => prev - 1);
    } else if (onPrev) {
      onPrev();
    }
  };

  const handleNextMonth = () => {
    if (activeIdx < months.length - 1) {
      setActiveIdx((prev) => prev + 1);
    } else if (onNext) {
      onNext();
    }
  };

  return (
    <PageShell bg="warm" className="!py-12 sm:!py-16">
      {/* Decorative corner botanicals */}
      <div className="absolute top-6 left-6 opacity-30 pointer-events-none hidden sm:block">
        <Botanical variant="corner" className="w-16 h-16" color="var(--rose)" />
      </div>
      <div className="absolute top-6 right-6 opacity-30 pointer-events-none hidden sm:block">
        <Botanical variant="corner" className="w-16 h-16 -scale-x-100" color="var(--softpurple)" />
      </div>

      <div className="max-w-5xl w-full flex flex-col items-center">
        {/* Step counter pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-100 via-blush to-purple-100 border border-pink-200 text-deeprose text-xs font-sans font-medium mb-3 shadow-xs">
          <Sparkles size={12} className="text-pinkglow" />
          <span>Chapter 3 &bull; Month {activeIdx + 1} of {months.length}: {current.monthName}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif text-brown text-center">
          Our Five Months, <span className="script text-rose font-normal">Month by Month</span>
        </h2>

        <p className="mt-1 text-xs sm:text-sm text-brown/60 text-center max-w-lg font-sans">
          Click any month below or follow the step-by-step path from April to September
        </p>

        {/* Progress Bar & Month Tabs */}
        <div className="w-full max-w-3xl mt-6 mb-6 px-1">
          {/* Progress track */}
          <div className="w-full bg-pink-100/80 h-1.5 rounded-full mb-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pinkglow via-rose to-purple-500 transition-all duration-300"
              style={{ width: `${((activeIdx + 1) / months.length) * 100}%` }}
            />
          </div>

          {/* Month Tabs */}
          <div className="grid grid-cols-6 gap-1.5 sm:gap-2.5">
            {months.map((m, i) => {
              const isActive = i === activeIdx;
              const isPast = i < activeIdx;

              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className={`relative flex flex-col items-center justify-center py-2 sm:py-3 px-1 rounded-2xl transition-all duration-200 border ${
                    isActive
                      ? "bg-white border-2 border-pink-400 text-deeprose shadow-[0_8px_20px_-4px_rgba(255,133,161,0.4)] scale-105 z-10"
                      : isPast
                      ? "bg-pink-50/70 border-pink-200 text-brown/80 hover:bg-pink-100/70"
                      : "bg-white/60 border-champagne/40 hover:bg-white text-brown/60"
                  }`}
                >
                  <span className="text-lg sm:text-2xl mb-0.5">{m.icon}</span>
                  <span className="font-serif text-xs sm:text-sm font-semibold tracking-wide">
                    {m.monthShort}
                  </span>
                  <span className="text-[9px] text-brown/40 font-sans hidden sm:inline">
                    {m.number}
                  </span>

                  {isPast && (
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white shadow-xs">
                      <Check size={8} strokeWidth={3} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Month Card */}
        <div className="w-full">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/95 backdrop-blur-md border border-pink-200 rounded-3xl p-6 sm:p-9 shadow-[0_20px_50px_-15px_rgba(216,180,226,0.4)]"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-pink-100 pb-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-3 py-0.5 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 text-deeprose text-xs rounded-full font-sans font-medium flex items-center gap-1.5">
                    <Sparkles size={11} className="text-pinkglow" /> Month {current.number} &bull; {current.monthName}
                  </span>
                  <span className="px-3 py-0.5 bg-rose-50 border border-rose-200 text-brown/70 text-xs rounded-full font-sans flex items-center gap-1">
                    <Calendar size={11} className="text-rose" /> {current.date}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-brown font-semibold">
                  {current.phaseTitle}
                </h3>
                <p className="mt-0.5 script text-xl sm:text-2xl text-rose">
                  {current.subtitle}
                </p>
              </div>

              <div className="text-xs text-deeprose font-sans font-medium self-end sm:self-center bg-pink-50 px-3 py-1 rounded-full border border-pink-200">
                Step {activeIdx + 1} of {months.length}
              </div>
            </div>

            {/* Content & Photos Grid */}
            <div className="mt-6 grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Story & Tags */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                <p className="text-sm sm:text-base text-brown/85 font-sans font-light leading-relaxed">
                  {current.story}
                </p>

                {/* Milestone Tags */}
                <div>
                  <p className="text-[10px] tracking-widest uppercase font-sans text-brown/40 mb-2">
                    Key Milestones & Moments
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 text-brown/80 rounded-xl text-xs font-sans shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Romantic Quote Pill */}
                <div className="p-3.5 bg-gradient-to-r from-pink-50 via-purple-50/40 to-pink-50 border border-pink-200 rounded-2xl flex items-center gap-3">
                  <Heart size={16} className="text-pinkglow shrink-0 fill-pinkglow/20" />
                  <p className="font-serif italic text-xs sm:text-sm text-brown/90 leading-snug">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column: Month Photo Gallery */}
              <div className="lg:col-span-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] tracking-widest uppercase font-sans text-brown/40 font-medium">
                    {current.monthName} Memories Gallery
                  </p>
                  <span className="text-[10px] text-pink-600 font-sans italic">
                    tap photo to zoom 🔍
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {current.memories.map((mem, mi) => (
                    <div
                      key={mi}
                      onClick={() => setSelectedPhoto(mem)}
                      className="cursor-pointer"
                    >
                      <PhotoFrame
                        src={mem.image}
                        alt={mem.caption}
                        polaroid={true}
                        icon={current.icon}
                        caption={mem.caption}
                        rotate={mi === 0 ? -1.5 : mi === 1 ? 1.5 : 0}
                        className="w-full aspect-[4/5] hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step-by-Step Bottom Action Bar */}
            <div className="mt-8 pt-5 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrevMonth}
                disabled={isFirstMonth}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-medium transition-all ${
                  isFirstMonth
                    ? "opacity-30 cursor-not-allowed text-brown/40 border border-transparent"
                    : "bg-white hover:bg-pink-50 text-brown/80 border border-pink-200 shadow-xs"
                }`}
              >
                <ArrowLeft size={14} />
                <span>Previous Month</span>
              </button>

              <div className="flex items-center gap-1.5">
                {months.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Go to month ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIdx
                        ? "w-6 bg-pinkglow"
                        : i < activeIdx
                        ? "w-2 bg-purple-300"
                        : "w-2 bg-pink-100"
                    }`}
                  />
                ))}
              </div>

              {!isLastMonth ? (
                <button
                  type="button"
                  onClick={handleNextMonth}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-pinkglow to-rose text-white text-xs font-sans font-medium tracking-wide uppercase shadow-[0_8px_25px_-5px_rgba(255,133,161,0.5)] hover:shadow-[0_12px_30px_-5px_rgba(255,133,161,0.7)] hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Next: Month {activeIdx + 2} ({months[activeIdx + 1].monthName})</span>
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onNext}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-pinkglow via-rose to-purple-500 text-white text-xs font-sans font-semibold tracking-wider uppercase shadow-[0_10px_30px_-5px_rgba(255,133,161,0.6)] hover:scale-105 active:scale-95 transition-all"
                >
                  <Sparkles size={14} />
                  <span>Continue to Little Pieces of Us (Page 4)</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox for zooming */}
      <Lightbox item={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </PageShell>
  );
}
