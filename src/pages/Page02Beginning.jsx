import { motion } from "framer-motion";
import { PageShell, SectionReveal, Divider } from "../components/UI.jsx";
import PhotoFrame from "../components/PhotoFrame.jsx";
import Botanical from "../components/Botanical.jsx";
import loveData from "../data/loveData.js";

export default function Page02Beginning() {
  const { beginning } = loveData;
  return (
    <PageShell bg="warm">
      <div className="absolute top-6 left-6 opacity-60 rotate-180">
        <Botanical variant="corner" className="w-14 h-14" />
      </div>
      <div className="absolute bottom-6 right-6 opacity-60">
        <Botanical variant="corner" className="w-14 h-14" />
      </div>

      <div className="max-w-3xl w-full grid sm:grid-cols-2 gap-10 sm:gap-16 items-center">
        <SectionReveal className="order-2 sm:order-1 text-center sm:text-left">
          <p className="text-[11px] tracking-widest2 uppercase text-sage font-sans mb-4">
            Where it all began
          </p>
          <p className="text-lg leading-relaxed text-brown/80 font-sans font-light">
            {beginning.paragraph}
          </p>
          <motion.p
            className="mt-8 text-5xl font-serif text-brown"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {beginning.dateDisplay}
          </motion.p>
          <p className="mt-2 script text-2xl text-rose">{beginning.annotation}</p>
        </SectionReveal>

        <SectionReveal delay={0.2} className="order-1 sm:order-2 flex justify-center">
          <PhotoFrame
            src={beginning.photo}
            alt="Where our story began"
            className="w-56 sm:w-64 aspect-[4/5]"
          />
        </SectionReveal>
      </div>

      <Divider className="mt-14" />
    </PageShell>
  );
}
