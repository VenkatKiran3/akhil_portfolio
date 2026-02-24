import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const identityItems = [
    { label: "AKHIL UDIMUDI", sub: "The Person", icon: "fa-solid fa-user" },
    { label: "UI/UX DESIGNER", sub: "The Craft", icon: "fa-solid fa-pen-nib" },
    { label: "FIGMA", sub: "Primary Tool", icon: "fa-brands fa-figma" },
    { label: "PHOTOSHOP", sub: "Creative Suite", icon: "fa-solid fa-wand-magic-sparkles" },
    { label: "CANVA", sub: "Quick Design", icon: "fa-solid fa-palette" },
    { label: "WIREFRAMING", sub: "Foundation", icon: "fa-solid fa-layer-group" },
    { label: "PROTOTYPING", sub: "Interaction", icon: "fa-solid fa-play" },
    { label: "VISUAL HIERARCHY", sub: "Design Thinking", icon: "fa-solid fa-eye" },
];

const vp = { once: false, margin: "-60px" as const };

const WhoIAmSection = () => {
    const [revealed, setRevealed] = useState(false);

    return (
        <section id="whoiam" className="relative overflow-hidden" style={{ background: "#030303", padding: "6rem 0" }}>
            {/* Background */}
            <motion.div
                className="absolute pointer-events-none"
                style={{ width: "500px", height: "500px", border: "1px solid rgba(255,255,255,0.02)", borderRadius: "50%", top: "50%", left: "50%", marginTop: "-250px", marginLeft: "-250px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute pointer-events-none"
                animate={{
                    background: [
                        "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.015) 0%, transparent 50%)",
                        "radial-gradient(ellipse at 30% 70%, rgba(255,255,255,0.025) 0%, transparent 50%)",
                        "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.015) 0%, transparent 50%)",
                    ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ inset: 0 }}
            />

            <div className="mx-auto max-w-6xl px-8 lg:px-16 relative z-10">
                {/* Clickable heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.button
                        onClick={() => setRevealed(!revealed)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="group cursor-pointer border-none bg-transparent inline-flex flex-col items-center gap-6"
                    >
                        <motion.h2
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "clamp(48px, 8vw, 100px)",
                                fontWeight: 400,
                                color: "#ffffff",
                                letterSpacing: "0.06em",
                                lineHeight: 1,
                            }}
                            animate={revealed ? {} : {
                                textShadow: [
                                    "0 0 0px rgba(255,255,255,0)",
                                    "0 0 20px rgba(255,255,255,0.1)",
                                    "0 0 0px rgba(255,255,255,0)",
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            WHO I AM
                        </motion.h2>
                        <div className="flex items-center gap-3">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "30px" }}
                                viewport={vp}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="h-px bg-white/20"
                            />
                            <motion.span
                                animate={{ rotate: revealed ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 500, color: "#aaaaaa", letterSpacing: "0.3em", textTransform: "uppercase" }}
                            >
                                {revealed ? "COLLAPSE" : "CLICK TO REVEAL"}
                            </motion.span>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "30px" }}
                                viewport={vp}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="h-px bg-white/20"
                            />
                        </div>
                        <motion.i
                            animate={{ rotate: revealed ? 180 : 0, y: revealed ? 0 : [0, 5, 0] }}
                            transition={revealed ? { duration: 0.3 } : { duration: 1.5, repeat: Infinity }}
                            className="fa-solid fa-chevron-down text-white/40 text-sm"
                        />
                    </motion.button>
                </motion.div>

                {/* Revealed identity grid */}
                <AnimatePresence>
                    {revealed && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
                                {identityItems.map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{
                                            delay: i * 0.08,
                                            duration: 0.5,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        whileHover={{
                                            y: -8,
                                            borderColor: "rgba(255,255,255,0.3)",
                                            boxShadow: "0 12px 30px rgba(255,255,255,0.06)",
                                        }}
                                        className="p-6 text-center cursor-default transition-all duration-300"
                                        style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
                                    >
                                        <motion.i
                                            className={`${item.icon} text-white/70 text-2xl mb-4 block`}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.15 + i * 0.08, type: "spring", stiffness: 200 }}
                                        />
                                        <h3
                                            style={{
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: "clamp(16px, 2vw, 22px)",
                                                color: "#ffffff",
                                                letterSpacing: "0.08em",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            {item.label}
                                        </h3>
                                        <p
                                            style={{
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontSize: "11px",
                                                fontWeight: 400,
                                                color: "#888888",
                                                letterSpacing: "0.15em",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {item.sub}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default WhoIAmSection;
