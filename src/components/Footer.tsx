const Footer = () => {
  return (
    <footer style={{ background: "#000000", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "40px 0" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-8 sm:flex-row lg:px-16">
        <div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, color: "#ffffff", letterSpacing: "0.05em" }}>
            A.U
          </span>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, color: "#666666", marginTop: "4px" }}>
            © 2026 Akhil Udimudi
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/akhil-udimudi-425595199"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-60"
        >
          <i className="fa-brands fa-linkedin-in text-white text-lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
