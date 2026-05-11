// Top navigation + footer

const Nav = ({ page, onNavigate, onQuote }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Portfolio" },
    { id: "materials", label: "Materials" },
    { id: "how", label: "How it works" },
    { id: "about", label: "About" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(251, 247, 241, 0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px) saturate(140%)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      transition: "all .2s ease",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px" }}>
        <button onClick={() => onNavigate("home")} style={{ background: "none", border: 0, padding: 0, cursor: "pointer" }}>
          <Logo height={32} />
        </button>

        <div className="nav-links" style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {links.map(l => (
            <button key={l.id} onClick={() => onNavigate(l.id)}
              style={{
                background: "none", border: 0,
                padding: "8px 14px", borderRadius: "var(--r-pill)",
                fontSize: 14, fontWeight: 500,
                color: page === l.id ? "var(--ink)" : "var(--ink-2)",
                position: "relative",
              }}>
              {l.label}
              {page === l.id && <span style={{
                position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
                width: 4, height: 4, borderRadius: "50%", background: "var(--coral)",
              }}/>}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button className="btn btn-ghost btn-sm hide-mobile" onClick={() => onNavigate("contact")}>Contact</button>
          <button className="btn btn-coral btn-sm" onClick={onQuote}>
            Get a quote <Icon name="arrow" size={16} />
          </button>
          <button className="show-mobile menu-btn" onClick={() => setMobileOpen(true)}
            style={{ background: "none", border: 0, padding: 6 }}>
            <Icon name="menu" size={26} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "var(--bg)", zIndex: 100,
          display: "flex", flexDirection: "column", padding: 24,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Logo height={32} />
            <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: 0, padding: 8 }}>
              <Icon name="x" size={26} />
            </button>
          </div>
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 4 }}>
            {links.map(l => (
              <button key={l.id} onClick={() => { onNavigate(l.id); setMobileOpen(false); }}
                style={{
                  background: "none", border: 0, textAlign: "left",
                  padding: "16px 0", fontSize: 28, fontFamily: "var(--font-display)",
                  fontWeight: 500, color: "var(--ink)",
                  borderBottom: "1px solid var(--line)",
                }}>
                {l.label}
              </button>
            ))}
            <button className="btn btn-coral" style={{ marginTop: 20, justifyContent: "center" }}
              onClick={() => { onQuote(); setMobileOpen(false); }}>
              Get a quote <Icon name="arrow" size={16} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .hide-mobile { display: none !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

const Footer = ({ onNavigate, onQuote }) => (
  <footer style={{ background: "var(--ink)", color: "#cdcce8", paddingTop: 64, marginTop: 80 }}>
    <div className="container">
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr",
        gap: 40,
        paddingBottom: 48,
      }} className="footer-grid">
        <div>
          <div style={{ background: "#fff", display: "inline-block", padding: "10px 14px", borderRadius: 12 }}>
            <Logo height={32} />
          </div>
          <p style={{ marginTop: 18, maxWidth: 360, color: "#a4a3c7", lineHeight: 1.6 }}>
            A small, friendly 3D-printing studio shipping custom parts and creative pieces all over the country. Send us your idea — we'll handle the rest.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 22 }}>
            {["ig", "tt", "yt"].map(n => (
              <a key={n} href="#" style={{
                width: 40, height: 40, borderRadius: 10,
                background: "rgba(255,255,255,.07)",
                display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
              }}><Icon name={n} size={18} /></a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ color: "#fff", fontWeight: 600, marginBottom: 14, fontSize: 14 }}>Explore</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {[["Portfolio","portfolio"],["Materials","materials"],["How it works","how"],["Pricing","pricing"]].map(([l,id])=>(
              <li key={id}><button onClick={() => onNavigate(id)} style={{ background:"none",border:0,padding:0,color:"#a4a3c7",fontSize:14,cursor:"pointer" }}>{l}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{ color: "#fff", fontWeight: 600, marginBottom: 14, fontSize: 14 }}>Studio</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {[["About","about"],["FAQ","faq"],["Contact","contact"]].map(([l,id])=>(
              <li key={id}><button onClick={() => onNavigate(id)} style={{ background:"none",border:0,padding:0,color:"#a4a3c7",fontSize:14,cursor:"pointer" }}>{l}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{ color: "#fff", fontWeight: 600, marginBottom: 14, fontSize: 14 }}>Get started</div>
          <p style={{ color: "#a4a3c7", fontSize: 14, marginTop: 0 }}>Have a project? Send us your idea — most quotes back in 48 hours.</p>
          <button className="btn btn-coral btn-sm" onClick={onQuote} style={{ marginTop: 8 }}>
            Request a quote <Icon name="arrow" size={14} />
          </button>
        </div>
      </div>
      <div style={{
        borderTop: "1px solid rgba(255,255,255,.08)",
        padding: "22px 0",
        display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
        fontSize: 13, color: "#7c7ba0",
      }}>
        <div>© 2026 Yoh Maker. Printed with love in the USA.</div>
        <div style={{ display: "flex", gap: 22 }}>
          <a href="#">Privacy</a><a href="#">Terms</a><a href="#">hello@yohmaker.com</a>
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) {
        .footer-grid { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 540px) {
        .footer-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </footer>
);

Object.assign(window, { Nav, Footer });
