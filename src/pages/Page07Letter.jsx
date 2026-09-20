import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell, Eyebrow } from "../components/UI.jsx";
import Botanical from "../components/Botanical.jsx";
import PhotoFrame from "../components/PhotoFrame.jsx";
import loveData from "../data/loveData.js";
import { Mail, Heart, Sparkles, Send, Check, RefreshCw } from "lucide-react";

export default function Page07Letter({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loveMeter, setLoveMeter] = useState(100);
  const [responseChoice, setResponseChoice] = useState(null);
  const paragraphs = loveData.letter.split("\n\n");

  const handleHeartPump = () => {
    setLoveMeter((prev) => prev + 50);
  };

  return (
    <PageShell bg="beige" className="!py-16 sm:!py-24">
      {/* Decorative floral accents */}
      <div className="absolute top-8 left-8 opacity-30 pointer-events-none hidden md:block">
        <Botanical variant="corner" className="w-16 h-16" color="var(--rose)" />
      </div>
      <div className="absolute bottom-8 right-8 opacity-30 pointer-events-none hidden md:block">
        <Botanical variant="corner" className="w-16 h-16 -scale-100" color="var(--softpurple)" />
      </div>

      <div className="max-w-4xl w-full flex flex-col items-center">
        <Eyebrow className="text-pink-600 font-medium">page seven &bull; confidential & for your eyes only</Eyebrow>

        <h2 className="mt-2 text-3xl sm:text-5xl font-serif text-brown text-center">
          A Letter For You, <span className="script text-rose font-normal">my love</span>
        </h2>

        {/* Envelope / Letter Container */}
        <div className="w-full max-w-2xl mt-8">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* CLOSED ENVELOPE WITH WAX SEAL */
              <motion.div
                key="envelope"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-br from-pink-100/90 via-blush/80 to-purple-100/90 border-2 border-pink-300 rounded-3xl p-8 sm:p-14 text-center shadow-[0_20px_50px_-15px_rgba(255,133,161,0.4)] flex flex-col items-center justify-center cursor-pointer group"
                onClick={() => setIsOpen(true)}
              >
                {/* Envelope Flap styling */}
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-pink-200/50 to-transparent rounded-t-3xl pointer-events-none" />

                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-pinkglow via-rose to-purple-400 p-1 shadow-lg group-hover:scale-110 transition-transform duration-500 flex items-center justify-center mb-6">
                  <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center border border-pink-200">
                    <Mail size={28} className="text-deeprose mb-0.5" />
                    <span className="text-[9px] font-sans tracking-widest text-deeprose font-semibold uppercase">
                      sealed
                    </span>
                  </div>
                </div>

                <p className="script text-3xl sm:text-4xl text-brown mb-2">
                  Special Delivery for You
                </p>
                
                <p className="text-xs sm:text-sm text-brown/70 font-sans font-light max-w-md mb-8">
                  A handwritten love letter wrapped with all my sweetest thoughts from the past 5 months.
                </p>

                {/* Wax Seal Button */}
                <button
                  type="button"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pinkglow to-rose text-white font-sans text-xs tracking-widest uppercase font-medium shadow-md group-hover:shadow-lg group-hover:from-pink-600 group-hover:to-rose-600 transition-all flex items-center gap-2"
                >
                  <Sparkles size={14} /> Break Wax Seal & Open Letter
                </button>
              </motion.div>
            ) : (
              /* OPENED LETTER PARCHMENT */
              <motion.div
                key="letter"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white/95 backdrop-blur-md border border-pink-200/90 rounded-3xl p-8 sm:p-14 shadow-[0_20px_60px_-20px_rgba(216,180,226,0.5)]"
              >
                {/* Decorative Washi Tape on top corner */}
                <div className="absolute -top-3 left-10 w-24 h-7 bg-pink-200/70 rotate-[-4deg] rounded-sm backdrop-blur-sm shadow-sm border-dashed border border-pink-300 pointer-events-none" />
                <div className="absolute -top-3 right-10 w-24 h-7 bg-purple-200/70 rotate-[3deg] rounded-sm backdrop-blur-sm shadow-sm border-dashed border border-purple-300 pointer-events-none" />

                {/* Greeting */}
                <div className="flex items-center justify-between border-b border-pink-100 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-pink-600 font-sans">
                      to my darling
                    </span>
                    <p className="script text-3xl sm:text-4xl text-deeprose">Dearest,</p>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-1 text-[11px] font-sans text-brown/50 hover:text-brown border border-champagne/60 px-3 py-1 rounded-full transition-colors"
                  >
                    <RefreshCw size={11} /> Re-seal
                  </button>
                </div>

                {/* Main letter body */}
                <div className="space-y-4 my-6 text-brown/85 font-sans font-light leading-relaxed text-sm sm:text-base">
                  {paragraphs.map((p, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="whitespace-pre-line"
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>

                {/* Pinned polaroid souvenir note */}
                <div className="my-8 p-4 bg-gradient-to-r from-pink-50/70 via-purple-50/50 to-pink-50/70 border border-pink-200 rounded-2xl flex flex-col sm:flex-row items-center gap-4">
                  <PhotoFrame
                    src={loveData.finalPhoto}
                    alt="Us memory"
                    polaroid
                    rotate={-2}
                    caption="Forever & Always"
                    className="w-32 aspect-[4/5] shrink-0"
                  />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">
                      A promise from me
                    </span>
                    <p className="font-serif italic text-sm sm:text-base text-brown mt-1">
                      &ldquo;Every single day with you is my favorite day. So today is my new favorite day.&rdquo;
                    </p>
                    <p className="script text-2xl text-rose mt-2">
                      Always yours &mdash; {loveData.yourName}
                    </p>
                  </div>
                </div>

                {/* Interactive Love Meter */}
                <div className="mt-8 pt-6 border-t border-pink-100 flex flex-col items-center">
                  <p className="text-xs text-brown/60 font-sans mb-3 text-center">
                    {loveData.postscript}
                  </p>

                  <div className="w-full max-w-md flex flex-col items-center gap-2">
                    <div className="w-full bg-pink-100 rounded-full h-3.5 overflow-hidden p-0.5 border border-pink-200">
                      <motion.div
                        className="bg-gradient-to-r from-pinkglow via-rose to-purple-500 h-full rounded-full"
                        animate={{ width: `${Math.min(100, (loveMeter / 500) * 100)}%` }}
                        transition={{ type: "spring", stiffness: 100 }}
                      />
                    </div>

                    <div className="flex items-center justify-between w-full text-[11px] font-sans text-brown/60 px-1">
                      <span>Love Meter: <strong className="text-deeprose">{loveMeter}%</strong></span>
                      {loveMeter >= 500 && (
                        <span className="text-pinkglow font-semibold animate-pulse">
                          ✨ Maximum Love Achieved! ✨
                        </span>
                      )}
                    </div>

                    <button
                      onClick={handleHeartPump}
                      className="mt-2 flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pinkglow to-rose text-white text-xs font-sans font-medium shadow-md hover:scale-105 active:scale-95 transition-transform"
                    >
                      <Heart size={14} className="fill-white" /> Tap to send more love (+50%)
                    </button>
                  </div>

                  {/* Interactive Response choices */}
                  <div className="mt-8 text-center">
                    <p className="text-xs text-brown/50 font-sans mb-3">Send a sweet reply to this letter:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {[
                        "I love you more ❤️",
                        "You're my forever ♾️",
                        "Happy 5 Months Baby 🥂",
                        "You made me cry happy tears 🥹",
                      ].map((resp) => {
                        const isChosen = responseChoice === resp;
                        return (
                          <button
                            key={resp}
                            onClick={() => setResponseChoice(resp)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-sans transition-all border ${
                              isChosen
                                ? "bg-deeprose text-white border-deeprose shadow-sm"
                                : "bg-white text-brown/70 border-pink-200 hover:bg-pink-50"
                            }`}
                          >
                            {isChosen && <Check size={12} className="inline mr-1" />}
                            {resp}
                          </button>
                        );
                      })}
                    </div>

                    {responseChoice && (
                      <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 text-xs text-pink-600 font-sans italic"
                      >
                        💌 Sweet reply saved: &ldquo;{responseChoice}&rdquo;!
                      </motion.p>
                    )}

                    {onNext && (
                      <div className="mt-8">
                        <button
                          onClick={onNext}
                          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-pinkglow to-rose text-white font-sans text-xs tracking-widest uppercase font-medium shadow-[0_8px_25px_-5px_rgba(255,133,161,0.5)] hover:scale-105 active:scale-95 transition-all"
                        >
                          <Sparkles size={14} />
                          <span>Next: The Next Chapter</span>
                          &rarr;
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageShell>
  );
}
