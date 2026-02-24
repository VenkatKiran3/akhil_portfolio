import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

/* Generate stable random particles once */
const generateParticles = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 3,
    dx: Math.random() * 80 - 40,
    dy: -(Math.random() * 200 + 60),
  }));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const particles = useMemo(() => generateParticles(30), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav py-5" : "bg-transparent py-8"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 lg:px-16">
          {/* A.U serif monogram */}
          <a
            href="#home"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "30px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}
          >
            A.U
          </a>

          {/* Menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-3 group relative z-50"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              color: "#ffffff",
              letterSpacing: "0.05em",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span className="hidden sm:inline transition-opacity group-hover:opacity-70">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <div className="flex flex-col gap-[5px]">
              <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden"
            style={{ background: "rgba(0, 0, 0, 0.97)" }}
          >
            {/* Floating white dots background */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: p.size,
                  height: p.size,
                  left: p.left,
                  top: p.top,
                  background: "rgba(255, 255, 255, 0.3)",
                }}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 0.5, 0.3, 0],
                  x: [0, p.dx * 0.5, p.dx],
                  y: [0, p.dy * 0.5, p.dy],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Slow rotating ring */}
            <motion.div
              className="absolute pointer-events-none"
              style={{ width: "500px", height: "500px", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "50%" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* Menu links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="flex flex-col items-center gap-6 relative z-10"
            >
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 40, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.1,
                    letterSpacing: "0.25em",
                    textShadow: "0 0 30px rgba(255,255,255,0.15)",
                  }}
                  className="transition-all duration-300 hover:opacity-80"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(36px, 7vw, 64px)",
                    color: "#ffffff",
                    letterSpacing: "0.15em",
                    textDecoration: "none",
                    perspective: "600px",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Animated separator */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="h-px bg-white/20 mt-4"
              />

              {/* Social link */}
              <motion.a
                href="https://www.linkedin.com/in/akhil-udimudi-425595199"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="mt-2"
                style={{ textDecoration: "none" }}
              >
                <i className="fa-brands fa-linkedin-in text-white/50 text-xl hover:text-white transition-colors" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
