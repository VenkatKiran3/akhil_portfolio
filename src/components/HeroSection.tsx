import { motion } from "framer-motion";
import { useCallback, useRef, useState, useEffect } from "react";

/* ─── Typewriter effect ─── */
const useTypewriter = (words: string[], typingSpeed = 100, deletingSpeed = 60, pauseTime = 1500) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

/* ─── Letter component with jump animation ─── */
const HeroLetter = ({
  ch,
  index,
  containerRef,
}: {
  ch: string;
  index: number;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const handleMouseEnter = useCallback(() => {
    if (!containerRef.current) return;
    const letters = Array.from(
      containerRef.current.querySelectorAll<HTMLSpanElement>(".hero-letter-jump")
    );

    const el = letters[index];
    if (!el) return;
    el.classList.remove("jumping");
    void el.offsetWidth;
    el.classList.add("jumping");

    [index - 1, index + 1].forEach((ni) => {
      const nel = letters[ni];
      if (!nel) return;
      setTimeout(() => {
        nel.classList.remove("neighbor-jumping");
        void nel.offsetWidth;
        nel.classList.add("neighbor-jumping");
      }, 50);
    });
  }, [index, containerRef]);

  const handleAnimationEnd = useCallback((e: React.AnimationEvent) => {
    (e.currentTarget as HTMLSpanElement).classList.remove("jumping", "neighbor-jumping");
  }, []);

  return (
    <span
      className="hero-letter-jump"
      onMouseEnter={handleMouseEnter}
      onAnimationEnd={handleAnimationEnd}
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "8vw",
        fontWeight: 700,
        textTransform: "uppercase" as const,
        letterSpacing: "0.06em",
        lineHeight: 1,
      }}
    >
      {ch}
    </span>
  );
};

const LetterWord = ({
  word,
  offset,
  containerRef,
}: {
  word: string;
  offset: number;
  containerRef: React.RefObject<HTMLDivElement>;
}) => (
  <div className="flex items-center justify-center" style={{ gap: "0.06em" }}>
    {word.split("").map((ch, i) => (
      <HeroLetter
        key={`${ch}-${offset + i}`}
        ch={ch}
        index={offset + i}
        containerRef={containerRef}
      />
    ))}
  </div>
);

/* ─── Floating particle ─── */
const Particle = ({ delay, duration, left, size }: { delay: number; duration: number; left: string; size: number }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left,
      bottom: "-10%",
      background: `radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)`,
    }}
    animate={{
      y: [0, -window.innerHeight * 1.2],
      x: [0, Math.random() * 60 - 30],
      opacity: [0, 0.6, 0.6, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

/* ─── Hero Section ─── */
const HeroSection = () => {
  const nameRef = useRef<HTMLDivElement>(null);
  const typedText = useTypewriter(
    ["UI / UX Designer", "Figma Expert", "Visual Thinker", "Creative Designer"],
    100,
    60,
    1500
  );

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Animated radial gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)",
            "radial-gradient(ellipse at 40% 60%, rgba(255,255,255,0.04) 0%, transparent 55%)",
            "radial-gradient(ellipse at 60% 40%, rgba(255,255,255,0.03) 0%, transparent 65%)",
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating circles */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: "600px", height: "600px", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "50%", top: "50%", left: "50%", marginTop: "-300px", marginLeft: "-300px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: "800px", height: "800px", border: "1px solid rgba(255,255,255,0.02)", borderRadius: "50%", top: "50%", left: "50%", marginTop: "-400px", marginLeft: "-400px" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      <Particle delay={0} duration={8} left="15%" size={3} />
      <Particle delay={2} duration={10} left="75%" size={4} />
      <Particle delay={4} duration={9} left="40%" size={2} />
      <Particle delay={1} duration={11} left="85%" size={3} />
      <Particle delay={3} duration={7} left="25%" size={2} />
      <Particle delay={5} duration={12} left="60%" size={3} />
      <Particle delay={6} duration={9} left="50%" size={2} />

      {/* Horizontal lines */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ top: "30%", left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.03)" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{ top: "70%", left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.03)" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        {/* Typewriter subheading */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="mb-14"
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              color: "#aaaaaa",
              letterSpacing: "0.4em",
              textTransform: "uppercase" as const,
            }}
          >
            {typedText}
          </span>
          <span
            className="inline-block w-[2px] h-[18px] bg-white/60 ml-1 align-middle"
            style={{ animation: "blink-cursor 0.8s steps(1) infinite" }}
          />
        </motion.div>

        {/* Name — AKHIL (top) + UDIMUDI (bottom) */}
        <div ref={nameRef}>
          <motion.div
            initial={{ opacity: 0, y: 50, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
            transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <LetterWord word="AKHIL" offset={0} containerRef={nameRef as React.RefObject<HTMLDivElement>} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
            transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-1"
          >
            <LetterWord word="UDIMUDI" offset={5} containerRef={nameRef as React.RefObject<HTMLDivElement>} />
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            color: "#aaaaaa",
            letterSpacing: "0.08em",
            lineHeight: 1.7,
          }}
          className="mt-12 max-w-lg mx-auto"
        >
          Crafting digital experiences that feel effortless, look stunning, and solve real problems.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.6 }}
          className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03, backgroundColor: "#ffffff", color: "#000000" }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 border border-white/40 px-10 py-4 transition-all duration-400"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 500, color: "#ffffff", letterSpacing: "0.3em", textTransform: "uppercase" as const, textDecoration: "none" }}
          >
            VIEW MY WORK
            <i className="fa-solid fa-arrow-right text-[12px] transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ opacity: 0.7 }}
            className="inline-flex items-center gap-3 px-10 py-4"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 400, color: "#aaaaaa", letterSpacing: "0.3em", textTransform: "uppercase" as const, textDecoration: "none" }}
          >
            GET IN TOUCH
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "60px" }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 h-px bg-white/20"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#whoiam" className="animate-bounce-arrow inline-block">
          <i className="fa-solid fa-chevron-down text-white/30 text-lg" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
