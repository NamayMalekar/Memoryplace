import { motion } from "framer-motion";
import Botanical from "./Botanical.jsx";

export function EleganceButton({ children, onClick, className = "", type = "button", ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative inline-flex items-center gap-2 px-8 py-3 text-[11px] tracking-widest2 uppercase font-sans text-brown border border-brown/40 hover:border-brown transition-colors duration-500 ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span className="absolute left-1/2 -bottom-[1px] h-[1px] w-0 -translate-x-1/2 bg-brown transition-all duration-500 group-hover:w-2/3" />
    </button>
  );
}

export function SectionReveal({ children, className = "", delay = 0, y = 24 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Divider({ className = "" }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Botanical variant="divider" className="w-24 h-4" />
    </div>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`text-[11px] tracking-widest2 uppercase text-sage font-sans ${className}`}>
      {children}
    </p>
  );
}

export function PageShell({ children, className = "", bg = "ivory" }) {
  const bgMap = {
    ivory: "bg-ivory",
    warm: "bg-warm-white",
    beige: "bg-beige",
    sage: "bg-[#EDEFE8]",
  };
  return (
    <div
      className={`relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-6 py-16 sm:px-10 overflow-hidden ${bgMap[bg]} ${className}`}
    >
      {children}
    </div>
  );
}
