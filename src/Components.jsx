// Shared components: Logo, Icon, ImagePh, Pill, Stars, etc.

const Logo = ({ variant = "horizontal", height = 36 }) => {
  const src = variant === "mark" ? "assets/logo-mark.png" : "assets/logo-horizontal.png";
  return <img src={src} alt="Yoh Maker" style={{ height, width: "auto", display: "block" }} />;
};

// Icon set — line icons drawn inline (consistent stroke 1.6, friendly rounded)
const Icon = ({ name, size = 22, color = "currentColor", strokeWidth = 1.7 }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: color, strokeWidth,
    strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "cube":   return <svg {...props}><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/></svg>;
    case "drop":   return <svg {...props}><path d="M12 3s6 7 6 11a6 6 0 11-12 0c0-4 6-11 6-11z"/></svg>;
    case "palette":return <svg {...props}><path d="M12 3a9 9 0 109 9 4 4 0 01-4 4h-2a2 2 0 00-2 2 3 3 0 01-1 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="9.5" cy="6.5" r="1"/><circle cx="14.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/></svg>;
    case "compass":return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/></svg>;
    case "stack":  return <svg {...props}><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 18l9 5 9-5"/></svg>;
    case "wrench": return <svg {...props}><path d="M14.7 6.3a4 4 0 005.6 5.6l-9.5 9.5a2.4 2.4 0 01-3.4-3.4z"/><path d="M14.7 6.3l-2-2a4 4 0 00-5.6 5.6l2 2"/></svg>;
    case "upload": return <svg {...props}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>;
    case "check":  return <svg {...props}><path d="M5 12l4 4L19 7"/></svg>;
    case "arrow":  return <svg {...props}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "arrowL": return <svg {...props}><path d="M19 12H5M11 5l-7 7 7 7"/></svg>;
    case "spark":  return <svg {...props}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>;
    case "shield": return <svg {...props}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>;
    case "truck":  return <svg {...props}><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>;
    case "chat":   return <svg {...props}><path d="M21 12a8 8 0 11-3.5-6.6L21 4l-1.4 4A8 8 0 0121 12z"/></svg>;
    case "clock":  return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "menu":   return <svg {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
    case "x":      return <svg {...props}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case "plus":   return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case "minus":  return <svg {...props}><path d="M5 12h14"/></svg>;
    case "star":   return <svg {...props} fill={color}><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z"/></svg>;
    case "ig":     return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill={color}/></svg>;
    case "tt":     return <svg {...props}><path d="M14 4v10a4 4 0 11-4-4"/><path d="M14 4a5 5 0 005 5"/></svg>;
    case "yt":     return <svg {...props}><rect x="3" y="6" width="18" height="12" rx="3"/><path d="M11 10l4 2-4 2v-4z" fill={color}/></svg>;
    default: return null;
  }
};

const ImagePh = ({ tint = "", label = "Photo", aspect = "4/3", style = {}, className = "" }) => (
  <div className={`imgph tinted-${tint} ${className}`} style={{ aspectRatio: aspect, ...style }}>
    <span>{label}</span>
  </div>
);

const Stars = ({ n = 5 }) => (
  <div style={{ display: "inline-flex", gap: 2, color: "#ffb43d" }}>
    {Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" size={14} />)}
  </div>
);

// Animated 3D-print "blob" — coral droplet that drips with slight motion
const PrintBlob = ({ size = 180 }) => (
  <div style={{ position: "relative", width: size, height: size }}>
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ display: "block" }}>
      <defs>
        <linearGradient id="blobg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6a3dd1"/>
          <stop offset="40%" stopColor="#ff5a8e"/>
          <stop offset="75%" stopColor="#ff6a3d"/>
          <stop offset="100%" stopColor="#2fb7ff"/>
        </linearGradient>
      </defs>
      <rect x="55" y="30" width="90" height="40" rx="10" fill="url(#blobg)"/>
      <path d="M75 70 Q75 110 90 130 Q100 145 100 165 Q100 180 110 180 Q120 180 120 165 Q120 145 130 130 Q145 110 145 70 Z" fill="url(#blobg)">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,4; 0,0" dur="2.4s" repeatCount="indefinite" />
      </path>
    </svg>
  </div>
);

Object.assign(window, { Logo, Icon, ImagePh, Stars, PrintBlob });
