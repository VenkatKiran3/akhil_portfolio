import { motion } from "framer-motion";
import { useState } from "react";

const vp = { once: false, margin: "-60px" as const };

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: "#000000", padding: "8rem 0" }}>
      {/* Background */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: "600px", height: "600px", border: "1px solid rgba(255,255,255,0.02)", borderRadius: "50%", top: "20%", right: "-15%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ inset: 0 }}
      />
      {[
        { left: "5%", top: "30%", delay: 0, dur: 8 },
        { left: "70%", top: "60%", delay: 3, dur: 10 },
        { left: "85%", top: "20%", delay: 5, dur: 7 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ width: 3, height: 3, left: p.left, top: p.top, background: "rgba(255,255,255,0.1)" }}
          animate={{ y: [0, -25, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="mx-auto max-w-6xl px-8 lg:px-16 relative z-10">
        {/* Header */}
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
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            viewport={vp}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 8vw, 90px)", fontWeight: 400, color: "#ffffff", letterSpacing: "0.04em", lineHeight: 1 }}
          >
            LET'S CONNECT
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50px" }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ height: "1px", background: "#ffffff", marginTop: "24px", opacity: 0.3 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 400, color: "#bbbbbb", marginTop: "24px", maxWidth: "480px", lineHeight: 1.8 }}
          >
            Open to UI/UX roles, freelance projects, and collaborations. Based in Chennai — available remotely too.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ delay: 0.5 }}
            animate={{
              boxShadow: ["0 0 0 0 rgba(16,185,129,0)", "0 0 12px 2px rgba(16,185,129,0.15)", "0 0 0 0 rgba(16,185,129,0)"]
            }}
            className="mt-6 inline-flex items-center gap-2"
            style={{ border: "1px solid rgba(255,255,255,0.15)", padding: "10px 18px" }}
          >
            <span className="block h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 500, color: "#ffffff", letterSpacing: "0.2em", textTransform: "uppercase" }}>Available for hire</span>
          </motion.div>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {[
              { name: "name", label: "YOUR NAME", type: "text" },
              { name: "email", label: "YOUR EMAIL", type: "email" },
            ].map((field, fi) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: 0.3 + fi * 0.1 }}
              >
                <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 500, color: focusedField === field.name ? "#ffffff" : "#888888", letterSpacing: "0.3em", textTransform: "uppercase", display: "block", marginBottom: "12px", transition: "color 0.3s" }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField(null)}
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 400, color: "#ffffff", width: "100%", borderBottom: focusedField === field.name ? "1px solid #ffffff" : "1px solid rgba(255,255,255,0.15)", background: "transparent", padding: "14px 0", outline: "none", transition: "border-color 0.3s" }}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: 0.5 }}
            >
              <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 500, color: focusedField === "message" ? "#ffffff" : "#888888", letterSpacing: "0.3em", textTransform: "uppercase", display: "block", marginBottom: "12px", transition: "color 0.3s" }}>
                YOUR MESSAGE
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 400, color: "#ffffff", width: "100%", borderBottom: focusedField === "message" ? "1px solid #ffffff" : "1px solid rgba(255,255,255,0.15)", background: "transparent", padding: "14px 0", outline: "none", resize: "none", transition: "border-color 0.3s" }}
              />
            </motion.div>
            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.03, backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 transition-all duration-400"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 500, color: "#ffffff", letterSpacing: "0.3em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 44px", marginTop: "16px", cursor: "pointer", background: "transparent" }}
            >
              SEND MESSAGE
              <i className="fa-solid fa-arrow-right text-[12px] transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.form>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center space-y-10"
          >
            {[
              { icon: "fa-regular fa-envelope", label: "Email", value: "akhiludimudi66@gmail.com", href: "mailto:akhiludimudi66@gmail.com" },
              { icon: "fa-solid fa-phone", label: "Phone", value: "+91 8520851284", href: "tel:+918520851284" },
              { icon: "fa-brands fa-linkedin-in", label: "LinkedIn", value: "linkedin.com/in/akhil-udimudi", href: "https://www.linkedin.com/in/akhil-udimudi-425595199" },
            ].map(({ icon, label, value, href }, idx) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.4, delay: 0.35 + idx * 0.12 }}
                whileHover={{ x: 10 }}
                className="group flex items-center gap-5 transition-all"
                style={{ textDecoration: "none" }}
              >
                <motion.div
                  whileHover={{ borderColor: "#ffffff", boxShadow: "0 0 15px rgba(255,255,255,0.08)" }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center transition-all duration-300"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <i className={`${icon} text-white text-lg`} />
                </motion.div>
                <div>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 500, color: "#888888", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 400, color: "#ffffff", transition: "opacity 0.3s" }} className="group-hover:opacity-70">{value}</p>
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
