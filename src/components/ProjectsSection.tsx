import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import radiancePreview from "@/assets/radiance-preview.jpg.jpeg";
import marvelPreview from "@/assets/marvel-slider-preview.jpg.png";

const projects = [
  {
    title: "RADIANCE",
    subtitle: "Salon Booking App & Website",
    role: "UI/UX Designer",
    tool: "Figma",
    tags: ["APP DESIGN", "WEB DESIGN"],
    image: radiancePreview,
    description:
      "End-to-end Figma design for a premium salon experience — dark luxury theme, intuitive booking flow, responsive layout across mobile and web.",
    highlights: [
      "End-to-end mobile app for salon appointment booking",
      "Intuitive date & time slot selection to reduce friction",
      "Responsive website for service discovery and conversion",
      "Authentication, service listing, and booking confirmation flows",
      "Luxury branding with dark theme and consistent visuals",
    ],
    links: [
      { label: "View in Figma (App)", href: "https://www.figma.com/design/6Rao4MfdIy3fqB8XbSejjh/Untitled?node-id=0-1&t=wgyyvCIH5B5CN2Td-1" },
      { label: "View in Figma (Web)", href: "https://www.figma.com/design/huWY0VTVQiMbY3KmmnzPce/Untitled?node-id=0-1&t=q1nGJ44tZP8m3a7s-1" },
    ],
  },
  {
    title: "MARVEL SLIDER",
    subtitle: "Web UI Animation Concept",
    role: "UI Designer",
    tool: "Figma",
    tags: ["WEB UI", "ANIMATION"],
    image: marvelPreview,
    description:
      "Animated character transition slider with dynamic visual hierarchy, bold color blocking, and diagonal composition for an immersive superhero experience.",
    highlights: [
      "Character transition slider for a superhero website concept",
      "Smooth slide navigation with left & right interaction",
      "Bold color blocking and diagonal layout composition",
      "Dynamic hero presentation with visual hierarchy",
    ],
    links: [
      { label: "View in Figma", href: "https://www.figma.com/design/0uTinwcTSzcPn9sA1pfKwi/Untitled?node-id=0-1&t=QC2kMaESOVzMpFNd-1" },
    ],
  },
];

const vp = { once: false, margin: "-60px" as const };

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 items-start"
    >
      {/* Project image with parallax */}
      <motion.div
        style={{ y: imgY }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-[4/3] overflow-hidden group cursor-default"
      >
        <div className="absolute inset-0 overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(24px, 5vw, 32px)", color: "#ffffff", letterSpacing: "0.15em" }}>
              {project.title}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.5 }} className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-white/15" />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.6 }} className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-white/15" />
      </motion.div>

      {/* Content */}
      <div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 flex flex-wrap gap-2"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] sm:text-xs"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#aaaaaa", letterSpacing: "0.15em", border: "1px solid rgba(255,255,255,0.2)", padding: "5px 12px", textTransform: "uppercase" }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          viewport={vp}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px, 5vw, 48px)", color: "#ffffff", letterSpacing: "0.04em", marginBottom: "6px" }}
        >
          {project.title}
        </motion.h3>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.35 }}
          className="text-xs sm:text-sm"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#888888", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}
        >
          {project.role} · {project.tool}
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.4 }}
          className="text-sm sm:text-base"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#aaaaaa", marginBottom: "16px" }}
        >
          {project.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-sm sm:text-base"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#bbbbbb", lineHeight: 1.9, marginBottom: "20px" }}
        >
          {project.description}
        </motion.p>

        <ul className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
          {project.highlights.map((point, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.35, delay: 0.5 + j * 0.06, ease: "easeOut" }}
              className="flex items-start gap-3 text-sm sm:text-base"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#bbbbbb", lineHeight: 1.7 }}
            >
              <span className="mt-2 block h-1 w-1 shrink-0 rounded-full" style={{ background: "#ffffff", opacity: 0.5 }} />
              {point}
            </motion.li>
          ))}
        </ul>

        {/* Figma links */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {project.links.map((link, li) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ delay: 0.7 + li * 0.1 }}
              whileHover={{ x: 8, letterSpacing: "0.25em" }}
              className="inline-flex items-center gap-2 transition-all duration-300 text-xs sm:text-sm"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#ffffff", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}
            >
              {link.label}
              <ExternalLink size={14} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative overflow-hidden" style={{ background: "#050505", padding: "5rem 0" }}>
      {/* Background */}
      <motion.div className="absolute pointer-events-none" style={{ width: "700px", height: "700px", border: "1px solid rgba(255,255,255,0.02)", borderRadius: "50%", bottom: "-20%", left: "-15%" }} animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute pointer-events-none" style={{ width: "400px", height: "400px", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "50%", top: "10%", right: "-8%" }} animate={{ rotate: -360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute pointer-events-none" animate={{ background: ["radial-gradient(ellipse at 70% 80%, rgba(255,255,255,0.02) 0%, transparent 50%)", "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)", "radial-gradient(ellipse at 70% 80%, rgba(255,255,255,0.02) 0%, transparent 50%)"] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} style={{ inset: 0 }} />
      <motion.div className="absolute pointer-events-none hidden sm:block" style={{ left: "50%", top: 0, bottom: 0, width: "1px", background: "rgba(255,255,255,0.03)" }} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6 }} className="mb-12 sm:mb-20">
          <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-[13px]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#aaaaaa", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "20px" }}
          >
            Work
          </motion.p>
          <motion.h2 initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }} whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }} viewport={vp} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 10vw, 90px)", fontWeight: 400, color: "#ffffff", letterSpacing: "0.04em", lineHeight: 1 }}
          >
            SELECTED PROJECTS
          </motion.h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "50px" }} viewport={vp} transition={{ duration: 0.5, delay: 0.5 }} style={{ height: "1px", background: "#ffffff", marginTop: "24px", opacity: 0.3 }} />
        </motion.div>

        <div className="space-y-20 sm:space-y-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
