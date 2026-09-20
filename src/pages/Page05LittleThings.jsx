import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell, Eyebrow } from "../components/UI.jsx";
import Botanical from "../components/Botanical.jsx";
import loveData from "../data/loveData.js";
import { Heart, Sparkles, RefreshCw, Layers, CheckCircle2, ArrowRight } from "lucide-react";

export default function Page05LittleThings({ onNext }) {
  const cards = loveData.littleThingsCards;
  const [flippedMap, setFlippedMap] = useState({});
  const [heartsMap, setHeartsMap] = useState(() => {
    const initial = {};
    cards.forEach((c) => {
      initial[c.id] = c.defaultHearts;
    });
    return initial;
  });
  const [likedMap, setLikedMap] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");
  const [surpriseMsg, setSurpriseMsg] = useState(null);

  const categories = ["All", ...new Set(cards.map((c) => c.category))];

  const filteredCards =
    activeCategory === "All"
      ? cards
      : cards.filter((c) => c.category === activeCategory);

  const toggleFlip = (id) => {
    setFlippedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleHeartClick = (e, id) => {
    e.stopPropagation();
    setHeartsMap((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setLikedMap((prev) => ({ ...prev, [id]: true }));
  };

  const flipAll = (state) => {
    const next = {};
    cards.forEach((c) => {
      next[c.id] = state;
    });
    setFlippedMap(next);
  };

  const pickSurprise = () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setFlippedMap((prev) => ({ ...prev, [randomCard.id]: true }));
    setSurpriseMsg(`Card #${randomCard.number}: "${randomCard.title}" has been revealed! 💖`);
    setTimeout(() => setSurpriseMsg(null), 4000);
  };

  const totalHeartsGiven = Object.values(heartsMap).reduce((a, b) => a + b, 0);

  return (
    <PageShell bg="beige" className="!py-16 sm:!py-24">
      {/* Botanical ambient decorations */}
      <div className="absolute top-10 left-10 opacity-30 pointer-events-none hidden md:block">
        <Botanical variant="sprig" className="w-14 h-24" color="var(--rose)" />
      </div>
      <div className="absolute top-10 right-10 opacity-30 pointer-events-none hidden md:block">
        <Botanical variant="sprig" className="w-14 h-24 -scale-x-100" color="var(--softpurple)" />
      </div>

      <div className="max-w-5xl w-full flex flex-col items-center">
        <Eyebrow className="text-pink-600 font-medium">page five &bull; secret love notes</Eyebrow>
        
        <h2 className="mt-2 text-3xl sm:text-5xl font-serif text-brown text-center">
          Little Things I Love <span className="script text-rose font-normal">about you</span>
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-brown/60 text-center max-w-lg font-sans">
          Tap any card to flip it over and discover the deeper reason why you make my heart skip a beat
        </p>

        {/* Action bar with category filters & helper buttons */}
        <div className="mt-8 mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-pink-200 to-purple-200 text-deeprose font-medium border-pink-300 shadow-sm"
                  : "bg-white/70 hover:bg-white text-brown/70 border-pink-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-xs font-sans">
          <button
            onClick={() => flipAll(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 border border-pink-200 text-brown/80 hover:text-deeprose hover:border-pink-300 transition-colors shadow-sm"
          >
            <Layers size={13} /> Reveal All Cards
          </button>
          
          <button
            onClick={() => flipAll(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 border border-pink-200 text-brown/80 hover:text-deeprose hover:border-pink-300 transition-colors shadow-sm"
          >
            <RefreshCw size={13} /> Flip Back
          </button>

          <button
            onClick={pickSurprise}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-pink-100 via-rose-100 to-purple-100 border border-pink-300 text-deeprose font-medium hover:shadow-md transition-all"
          >
            <Sparkles size={13} className="text-pinkglow" /> Surprise Reason Jar ✨
          </button>

          <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-rose-50/80 border border-rose-200 text-rose font-medium">
            <Heart size={13} className="fill-rose" /> {totalHeartsGiven} Hearts Sent
          </div>
        </div>

        {/* Surprise alert toast */}
        <AnimatePresence>
          {surpriseMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full shadow-lg flex items-center gap-2 font-sans"
            >
              <Sparkles size={14} /> {surpriseMsg}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {filteredCards.map((card) => {
            const isFlipped = !!flippedMap[card.id];
            const isLiked = !!likedMap[card.id];

            return (
              <div
                key={card.id}
                className="perspective-1000 h-64 sm:h-72 cursor-pointer select-none"
                onClick={() => toggleFlip(card.id)}
              >
                <div
                  className={`relative w-full h-full duration-700 preserve-3d transition-transform rounded-2xl ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-white via-pink-50/40 to-purple-50/50 border border-pink-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-[0_10px_25px_-8px_rgba(216,180,226,0.35)] hover:shadow-[0_15px_30px_-5px_rgba(255,133,161,0.35)] transition-all">
                    {/* Top Row: Number & Category */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-serif font-semibold tracking-wider text-gold bg-amber-50/80 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                        #{card.number}
                      </span>
                      <span
                        className={`text-[11px] font-sans px-2.5 py-0.5 rounded-full border ${card.badgeColor}`}
                      >
                        {card.category}
                      </span>
                    </div>

                    {/* Middle: Icon & Title */}
                    <div className="my-auto text-center flex flex-col items-center">
                      <span className="text-3xl sm:text-4xl mb-2 animate-float-slow">
                        {card.icon}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-brown font-medium leading-snug">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-xs text-brown/60 italic font-serif">
                        &ldquo;{card.frontSnippet}&rdquo;
                      </p>
                    </div>

                    {/* Bottom: Tap Prompt */}
                    <div className="pt-2 border-t border-pink-100/80 flex items-center justify-between text-[11px] text-pink-600/80 font-sans">
                      <span className="flex items-center gap-1">
                        <Sparkles size={11} /> Tap to reveal note
                      </span>
                      <span className="script text-base text-rose">click me &rarr;</span>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-pink-50 via-white to-purple-50 border-2 border-pink-300 rounded-2xl p-6 flex flex-col justify-between shadow-[0_12px_30px_-5px_rgba(255,133,161,0.35)]">
                    {/* Top Row: Header */}
                    <div className="flex items-center justify-between border-b border-pink-100 pb-2">
                      <span className="text-[11px] font-sans font-medium text-deeprose flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-pinkglow" /> Why I Adore This
                      </span>
                      <span className="text-xs font-serif text-brown/50">#{card.number}</span>
                    </div>

                    {/* Middle: Heartfelt Description */}
                    <div className="my-auto py-2">
                      <p className="text-xs sm:text-sm text-brown/90 font-sans font-light leading-relaxed">
                        {card.backNote}
                      </p>
                    </div>

                    {/* Bottom: Interactive Heart Like Button */}
                    <div className="pt-2 border-t border-pink-100 flex items-center justify-between">
                      <button
                        onClick={(e) => handleHeartClick(e, card.id)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans transition-all duration-300 ${
                          isLiked
                            ? "bg-pinkglow text-white shadow-sm scale-105"
                            : "bg-white border border-pink-200 text-rose hover:bg-pink-50"
                        }`}
                      >
                        <Heart
                          size={12}
                          className={isLiked ? "fill-white" : "fill-rose/30"}
                        />
                        <span>{heartsMap[card.id] || 0}</span>
                      </button>

                      <span className="text-[10px] text-brown/40 font-sans underline decoration-dotted">
                        tap to flip back
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Timeline */}
        {onNext && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-pinkglow to-rose text-white font-sans text-xs tracking-widest uppercase font-medium shadow-[0_8px_25px_-5px_rgba(255,133,161,0.5)] hover:scale-105 active:scale-95 transition-all"
            >
              <Heart size={14} className="fill-white" />
              <span>Next: Our Romantic Timeline</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </PageShell>
  );
}
