import { motion } from "framer-motion";
import { PageShell, Eyebrow, Divider } from "../components/UI.jsx";
import loveData from "../data/loveData.js";

export default function Page08NextChapter({ onNext }) {
  return (
    <PageShell bg="sage" className="text-center !py-20">
      <motion.h2
        className="text-3xl sm:text-5xl font-serif text-brown"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        this isn&rsquo;t the end of the story.
      </motion.h2>
      <motion.p
        className="mt-3 text-lg sm:text-2xl italic text-rose font-serif"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        just the end of chapter five.
      </motion.p>

      <Divider className="my-8" />

      <div className="flex items-center gap-6 justify-center">
        <div className="text-center">
          <p className="text-[11px] tracking-widest2 uppercase text-sage font-sans">chapter</p>
          <p className="text-3xl font-serif text-brown font-medium">05</p>
          <p className="text-xs text-brown/50 mt-1 font-sans">{loveData.anniversaryLabel}</p>
        </div>
        <div className="h-10 w-[1px] bg-brown/20" />
        <p className="script text-3xl sm:text-4xl text-rose">chapter 06 &rarr;</p>
      </div>

      <Eyebrow className="mt-12 mb-5 text-deeprose font-medium">still to come &bull; our bucket list</Eyebrow>
      <div className="flex flex-wrap justify-center gap-2.5 max-w-lg mb-10">
        {loveData.nextChapter.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="px-4 py-2 bg-white/80 border border-pink-200 text-xs sm:text-sm text-brown/80 rounded-full font-sans shadow-sm"
          >
            {item}
          </motion.span>
        ))}
      </div>

      {onNext && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-pinkglow to-rose text-white font-sans text-xs tracking-widest uppercase font-medium shadow-[0_8px_25px_-5px_rgba(255,133,161,0.5)] hover:scale-105 active:scale-95 transition-all"
          >
            <span>To The Final Surprise</span>
            &rarr;
          </button>
        </div>
      )}
    </PageShell>
  );
}
