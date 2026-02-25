import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Globe } from "lucide-react";
import akhilPhoto from "@/assets/akhil-photo.jpeg";

const skills = [
  "UI Design", "UX Flow Design", "Wireframing", "Prototyping",
  "Responsive Design", "Visual Hierarchy", "Layout Design",
  "Video Editing", "YouTube Thumbnail Design", "Basic Motion Graphics",
  "Social Media Visual Design", "Figma", "Photoshop", "Canva",
];

const vp = { once: false, margin: "-50px" as const };

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden" style={{ background: "#000000", paddingTop: "4rem", paddingBottom: "5rem" }}>
      {/* Background */}
      <motion.div className="absolute pointer-events-none" style={{ width: "500px", height: "500px", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "50%", top: "10%", right: "-10%" }} animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute pointer-events-none" animate={{ background: ["radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)", "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)", "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)"] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} style={{ inset: 0 }} />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#aaaaaa", letterSpacing: "0.4em", textTransform: "uppercase" }}
          >
            About
          </p>
          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, color: "#ffffff", letterSpacing: "0.04em", lineHeight: 1 }}
          >
            ABOUT ME
          </h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "50px" }} viewport={vp} transition={{ duration: 0.5, delay: 0.3 }} className="h-px bg-white/30 mt-6" />
        </motion.div>

        {/* Photo + Bio */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Photo */}
          <motion.div style={{ y: photoY }} className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <motion.img
                src={akhilPhoto}
                alt="Akhil Udimudi"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ aspectRatio: "4/5", filter: "grayscale(20%)" }}
                whileHover={{ filter: "grayscale(0%)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
            <div className="absolute -top-2 -left-2 w-10 h-10 border-t border-l border-white/20" />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b border-r border-white/20" />
          </motion.div>

          {/* Bio */}
          <motion.div style={{ y: textY }} className="flex flex-col justify-center">
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.15 }}
              className="text-sm sm:text-base lg:text-lg mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#bbbbbb", lineHeight: 1.9 }}
            >
              Hi, I'm Akhil — a UI/UX Designer passionate about designing digital products that are both beautiful and functional. I work primarily in Figma to craft user flows, wireframes, and high-fidelity prototypes that solve real problems.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.25 }}
              className="text-sm sm:text-base lg:text-lg mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#bbbbbb", lineHeight: 1.9 }}
            >
              My work spans mobile app design and creative web UI concepts. I bring a sharp eye for visual hierarchy, a love for dark luxury aesthetics, and a deep commitment to user-centered thinking.
            </motion.p>

            {/* Education */}
            <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ delay: 0.3 }}
              whileHover={{ x: 8 }}
              className="flex items-start gap-4 group cursor-default mb-6"
              style={{ borderLeft: "2px solid rgba(255,255,255,0.2)", paddingLeft: "16px" }}
            >
              <GraduationCap className="mt-0.5 shrink-0 group-hover:scale-110 transition-transform" style={{ color: "#ffffff" }} size={20} />
              <div>
                <h4 className="text-sm sm:text-base font-semibold mb-1" style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>
                  Bharath Institute of Higher Education
                </h4>
                <p className="text-xs sm:text-sm" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#aaaaaa" }}>
                  B.E. Computer Science + AI · GPA 8.7 · 2021–2025
                </p>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ delay: 0.4 }}
              whileHover={{ x: 8 }}
              className="flex items-start gap-4 group cursor-default"
              style={{ borderLeft: "2px solid rgba(255,255,255,0.2)", paddingLeft: "16px" }}
            >
              <Globe className="mt-0.5 shrink-0 group-hover:scale-110 transition-transform" style={{ color: "#ffffff" }} size={20} />
              <div>
                <h4 className="text-sm sm:text-base font-semibold mb-1" style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>
                  Languages
                </h4>
                <p className="text-xs sm:text-sm" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#aaaaaa" }}>
                  English · Telugu · Hindi · Tamil
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5 }} className="mt-14 sm:mt-20">
          <p className="text-xs sm:text-sm mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#aaaaaa", letterSpacing: "0.4em", textTransform: "uppercase" }}
          >
            Skills & Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                whileHover={{ y: -6, scale: 1.05, borderColor: "#ffffff", color: "#ffffff" }}
                className="cursor-default text-[11px] sm:text-xs"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  color: "#aaaaaa",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(255,255,255,0.15)",
                  padding: "8px 14px",
                  transition: "all 0.3s",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
