import { motion } from "framer-motion";

const skills = [
  { label: "UI Design", category: "core" },
  { label: "UX Flow Design", category: "core" },
  { label: "Wireframing", category: "core" },
  { label: "Prototyping", category: "core" },
  { label: "Responsive Design", category: "visual" },
  { label: "Visual Hierarchy", category: "visual" },
  { label: "Layout Design", category: "visual" },
  { label: "Video Editing", category: "visual" },
  { label: "YouTube Thumbnail Design", category: "visual" },
  { label: "Basic Motion Graphics", category: "visual" },
  { label: "Social Media Visual Design", category: "visual" },
  { label: "Figma", category: "tool" },
  { label: "Photoshop", category: "tool" },
  { label: "Canva", category: "tool" },
];

const vp = { once: true, margin: "-50px" as const };

const SkillsSection = () => {
  return (
    <section className="relative bg-background py-28 lg:py-36 overflow-hidden">
      {/* Background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="font-nav text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Expertise</p>
          <h2 className="font-display text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Skills & Tools
          </h2>
          <motion.div
            className="mx-auto mt-4 h-px bg-gold"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={vp}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill.label}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={vp}
              transition={{
                delay: 0.15 + i * 0.02,
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0 10px 25px -5px hsla(37, 38%, 61%, 0.3)",
                borderColor: "hsl(37, 38%, 61%)",
                color: "hsl(37, 38%, 61%)",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className={`cursor-default rounded-none border px-6 py-3 font-nav text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${skill.category === "tool"
                ? "border-gold/40 text-gold"
                : "border-border text-muted-foreground"
                }`}
            >
              {skill.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
