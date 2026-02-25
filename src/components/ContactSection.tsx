import { motion } from "framer-motion";
import { useState } from "react";

const vp = { once: false, margin: "-50px" as const };

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: "#000000", paddingTop: "4rem", paddingBottom: "5rem" }}>
      {/* Background */}
      <motion.div className="absolute pointer-events-none" style={{ width: "600px", height: "600px", border: "1px solid rgba(255,255,255,0.02)", borderRadius: "50%", top: "20%", right: "-15%" }} animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute pointer-events-none" animate={{ background: ["radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)", "radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)", "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)"] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} style={{ inset: 0 }} />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#aaaaaa", letterSpacing: "0.4em", textTransform: "uppercase" }}
          >
            Contact
          </p>
          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, color: "#ffffff", letterSpacing: "0.04em", lineHeight: 1 }}
          >
            LET'S
            <br className="sm:hidden" />
            {" "}CONNECT
          </h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "50px" }} viewport={vp} transition={{ duration: 0.5, delay: 0.3 }} className="h-px bg-white/30 mt-6" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.3 }}
            className="text-sm sm:text-base mt-5 max-w-md"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#bbbbbb", lineHeight: 1.8 }}
          >
            Open to UI/UX roles, freelance projects, and collaborations. Based in Chennai — available remotely too.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ delay: 0.4 }}
            animate={{ boxShadow: ["0 0 0 0 rgba(16,185,129,0)", "0 0 12px 2px rgba(16,185,129,0.15)", "0 0 0 0 rgba(16,185,129,0)"] }}
            className="mt-5 inline-flex items-center gap-2"
            style={{ border: "1px solid rgba(255,255,255,0.15)", padding: "8px 16px" }}
          >
            <span className="block h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
            <span className="text-[11px] sm:text-xs" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#ffffff", letterSpacing: "0.2em", textTransform: "uppercase" }}>Available for hire</span>
          </motion.div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {[
              { name: "name", label: "YOUR NAME", type: "text" },
              { name: "email", label: "YOUR EMAIL", type: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-[11px] sm:text-xs block mb-3" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: focusedField === field.name ? "#ffffff" : "#888888", letterSpacing: "0.25em", textTransform: "uppercase", transition: "color 0.3s" }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField(null)}
                  className="text-base sm:text-lg w-full bg-transparent outline-none"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#ffffff", borderBottom: focusedField === field.name ? "1px solid #ffffff" : "1px solid rgba(255,255,255,0.15)", padding: "12px 0", transition: "border-color 0.3s" }}
                />
              </div>
            ))}
            <div>
              <label className="text-[11px] sm:text-xs block mb-3" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: focusedField === "message" ? "#ffffff" : "#888888", letterSpacing: "0.25em", textTransform: "uppercase", transition: "color 0.3s" }}>
                YOUR MESSAGE
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="text-base sm:text-lg w-full bg-transparent outline-none resize-none"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#ffffff", borderBottom: focusedField === "message" ? "1px solid #ffffff" : "1px solid rgba(255,255,255,0.15)", padding: "12px 0", transition: "border-color 0.3s" }}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 text-xs sm:text-sm mt-2"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#ffffff", letterSpacing: "0.25em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.3)", padding: "14px 32px", cursor: "pointer", background: "transparent", transition: "all 0.3s" }}
            >
              SEND MESSAGE
              <i className="fa-solid fa-arrow-right text-[11px] transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.form>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-7 sm:space-y-9"
          >
            {[
              { icon: "fa-regular fa-envelope", label: "Email", value: "akhiludimudi66@gmail.com", href: "mailto:akhiludimudi66@gmail.com" },
              { icon: "fa-solid fa-phone", label: "Phone", value: "+91 8520851284", href: "tel:+918520851284" },
              { icon: "fa-brands fa-linkedin-in", label: "LinkedIn", value: "linkedin.com/in/akhil-udimudi", href: "https://www.linkedin.com/in/akhil-udimudi-425595199" },
            ].map(({ icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4"
                style={{ textDecoration: "none" }}
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center transition-all duration-300 group-hover:border-white" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                  <i className={`${icon} text-white text-sm sm:text-lg`} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-[11px] mb-1" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, color: "#888888", letterSpacing: "0.25em", textTransform: "uppercase" }}>{label}</p>
                  <p className="text-sm sm:text-base truncate" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: "#ffffff" }}>{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
