import { motion } from "framer-motion";
import { PageShell, Eyebrow } from "../components/UI.jsx";
import PhotoFrame from "../components/PhotoFrame.jsx";
import Botanical from "../components/Botanical.jsx";
import loveData from "../data/loveData.js";

export default function Page06Timeline({ onNext }) {
  return (
    <PageShell bg="warm" className="!py-24">
      <Eyebrow>page seven</Eyebrow>
      <h2 className="mt-4 mb-16 text-4xl sm:text-5xl font-serif text-brown text-center">
        Our timeline
      </h2>

      <div className="relative max-w-2xl w-full">
        <motion.div
          className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-brown/15 sm:-translate-x-1/2 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="flex flex-col gap-14">
          {loveData.timeline.map((event, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 items-center`}
              >
                <div className="absolute left-4 sm:left-1/2 top-1 -translate-x-1/2 z-10">
                  <Botanical variant="flower" className="w-6 h-9" />
                </div>

                <div className={isEven ? "sm:text-right sm:pr-10" : "sm:col-start-2 sm:pl-10"}>
                  <p className="text-[11px] tracking-widest2 uppercase text-gold font-sans mb-1">
                    {event.date}
                  </p>
                  <h3 className="text-2xl font-serif text-brown">{event.title}</h3>
                  <p className="mt-2 text-sm text-brown/70 font-sans font-light leading-relaxed">
                    {event.description}
                  </p>
                  <p className="mt-2 script text-xl text-rose">{event.tag}</p>
                </div>

                <div className={`${isEven ? "sm:col-start-2 sm:pl-10" : "sm:pr-10 sm:text-right sm:flex sm:justify-end"} mt-4 sm:mt-0`}>
                  <PhotoFrame
                    src={event.photo}
                    alt={event.title}
                    className="w-32 aspect-[4/5]"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {onNext && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-pinkglow to-rose text-white font-sans text-xs tracking-widest uppercase font-medium shadow-[0_8px_25px_-5px_rgba(255,133,161,0.5)] hover:scale-105 active:scale-95 transition-all"
            >
              <span>Next: A Letter For You</span>
              &rarr;
            </button>
          </div>
        )}
      </div>
    </PageShell>
  );
}
