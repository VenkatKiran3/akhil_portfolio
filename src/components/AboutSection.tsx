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

const vp = { once: false, margin: "-60px" as const };

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden" style={{ background: "#000000", padding: "8rem 0" }}>
      {/* Background animations */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: "500px", height: "500px", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "50%", top: "10%", right: "-10%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: "300px", height: "300px", border: "1px solid rgba(255,255,255,0.02)", borderRadius: "50%", bottom: "15%", left: "-5%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)",
            "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)",
            "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ inset: 0 }}
      />
      {/* Floating dots */}
      {[
        { left: "10%", top: "20%", delay: 0, dur: 7 },
        { left: "80%", top: "40%", delay: 2, dur: 9 },
        { left: "50%", top: "70%", delay: 4, dur: 8 },
        { left: "90%", top: "15%", delay: 1, dur: 10 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ width: 3, height: 3, left: p.left, top: p.top, background: "rgba(255,255,255,0.1)" }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="mx-auto max-w-6xl px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 500, color: "#aaaaaa", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "20px" }}
          >
            About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            viewport={vp}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 8vw, 90px)", fontWeight: 400, color: "#ffffff", letterSpacing: "0.04em", lineHeight: 1 }}
          >
            ABOUT ME
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50px" }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ height: "1px", background: "#ffffff", marginTop: "24px", opacity: 0.3 }}
          />
        </motion.div>

        {/* Photo + Bio */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Photo with parallax */}
          <motion.div style={{ y: photoY }} className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: 0.15 }}
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
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={vp}
              transition={{ delay: 0.6 }}
              className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-white/20"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={vp}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-white/20"
            />
          </motion.div>

          {/* Bio text with parallax */}
          <motion.div style={{ y: textY }} className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 400, color: "#bbbbbb", lineHeight: 2, marginBottom: "24px" }}
            >
              Hi, I'm Akhil — a UI/UX Designer based in Chennai, passionate about designing digital products that are both beautiful and functional. I work primarily in Figma to craft user flows, wireframes, and high-fidelity prototypes that solve real problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 400, color: "#bbbbbb", lineHeight: 2, marginBottom: "40px" }}
            >
              My work spans mobile app design and creative web UI concepts. I bring a sharp eye for visual hierarchy, a love for dark luxury aesthetics, and a deep commitment to user-centered thinking.
            </motion.p>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ x: 8 }}
              className="flex items-start gap-5 group cursor-default mb-8"
              style={{ borderLeft: "2px solid rgba(255,255,255,0.2)", paddingLeft: "20px" }}
            >
              <GraduationCap className="mt-1 shrink-0 group-hover:scale-110 transition-transform" style={{ color: "#ffffff" }} size={22} />
              <div>
                <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 600, color: "#ffffff", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "6px" }}>
                  Bharath Institute of Higher Education
                </h4>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 400, color: "#aaaaaa" }}>
                  B.E. Computer Science + AI · GPA 8.7 · 2021–2025
                </p>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ x: 8 }}
              className="flex items-start gap-5 group cursor-default"
              style={{ borderLeft: "2px solid rgba(255,255,255,0.2)", paddingLeft: "20px" }}
            >
              <Globe className="mt-1 shrink-0 group-hover:scale-110 transition-transform" style={{ color: "#ffffff" }} size={22} />
              <div>
                <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 600, color: "#ffffff", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "6px" }}>
                  Languages
                </h4>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 400, color: "#aaaaaa" }}>
                  English · Telugu · Hindi · Tamil
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-24"
        >
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 500, color: "#aaaaaa", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "30px" }}>
            Skills & Tools
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 15, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={vp}
                transition={{ delay: i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -8,
                  scale: 1.08,
                  borderColor: "#ffffff",
                  color: "#ffffff",
                  boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
                }}
                className="cursor-default transition-all duration-300"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#aaaaaa",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(255,255,255,0.15)",
                  padding: "12px 22px",
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
