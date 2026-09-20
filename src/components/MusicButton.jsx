import { useEffect, useRef, useState } from "react";
import { Music2, Pause } from "lucide-react";
import loveData from "../data/loveData.js";

export default function MusicButton() {
  const audioRef = useRef(null);
  const [available, setAvailable] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(loveData.musicSrc);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const handleError = () => setAvailable(false);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("error", handleError);
      audio.pause();
    };
  }, []);

  if (!available) return null;

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => setAvailable(false));
      setPlaying(true);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause our song" : "Play our song"}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-3 py-2 bg-warm-white/80 backdrop-blur-sm border border-champagne/50 text-brown/70 hover:text-brown transition-colors duration-500"
    >
      {playing ? <Pause size={13} strokeWidth={1.25} /> : <Music2 size={13} strokeWidth={1.25} />}
      <span className="text-[10px] tracking-widest2 uppercase font-sans hidden sm:inline">
        {loveData.musicLabel}
      </span>
    </button>
  );
}
