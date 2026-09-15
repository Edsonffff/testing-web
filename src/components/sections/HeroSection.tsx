import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Instagram,
  Facebook,
  Youtube,
  Scissors,
  Sparkles,
  Star,
  GraduationCap,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import tailoringCourse from "@/assets/tailoring-course.jpg";
import aariWork from "@/assets/aari-work.jpg";
import juteWork from "@/assets/jute-work.jpg";
import beautician from "@/assets/beautician-course.png";

/* ══════════════════════════════════════════
   4 cinematic product states with their
   own theme colors — matching Jacket Masters.
   ══════════════════════════════════════════ */
const heroSlides = [
  {
    id: "tailoring",
    tag: "Tailoring",
    eyebrow: "FREE GOVT. CERTIFIED COURSE",
    title: "Stitch your",
    titleAccent: "Dream Career",
    body:
      "Professional tailoring from basics to boutique-grade. Learn to cut, stitch and style — with a ₹12,000 government stipend and a certificate that opens doors.",
    cta: "Start Stitching",
    ctaTo: "/courses",
    image: tailoringCourse,
    tagline: "Crafted with care, worn with pride",
    price: "Free",
    priceOld: "₹15,000",
    chips: ["6", "Months", "Certified"],
    // Rich orange/brown — the original reference
    theme: {
      bgOuter: ["#ff5c00", "#ff7a1a", "#ff9f2e", "#ffc34d"],
      cardFrom: "rgba(210, 95, 20, 0.55)",
      cardVia: "rgba(180, 70, 10, 0.50)",
      cardTo: "rgba(140, 45, 5, 0.55)",
      glow: "rgba(255, 170, 60, 0.55)",
      glow2: "rgba(255, 120, 20, 0.40)",
      blob1: "rgba(255, 200, 90, 0.45)",
      blob2: "rgba(200, 70, 0, 0.55)",
      accentText: "#fff6e8",
      chipActive: "#c2410c",
    },
  },
  {
    id: "beautician",
    tag: "Beautician",
    eyebrow: "BEAUTY & WELLNESS",
    title: "Glow up",
    titleAccent: "Your Future",
    body:
      "From bridal makeup to salon management — master skin, hair and spa techniques under expert trainers. Graduate with a government certificate and your own studio-ready skills.",
    cta: "Join Beauty",
    ctaTo: "/courses",
    image: beautician,
    tagline: "Confidence, stitched into every lesson",
    price: "Free",
    priceOld: "₹18,000",
    chips: ["6", "Months", "Studio"],
    // Soft warm cream / pink-white — the "white jacket" reference
    theme: {
      bgOuter: ["#f5d6c6", "#f6c4b3", "#fae1d1", "#ffe8d8"],
      cardFrom: "rgba(230, 150, 140, 0.35)",
      cardVia: "rgba(210, 130, 130, 0.28)",
      cardTo: "rgba(200, 120, 125, 0.30)",
      glow: "rgba(255, 220, 210, 0.65)",
      glow2: "rgba(255, 180, 180, 0.35)",
      blob1: "rgba(255, 230, 220, 0.55)",
      blob2: "rgba(230, 150, 150, 0.30)",
      accentText: "#3a1a1a",
      chipActive: "#8a2e3a",
    },
  },
  {
    id: "aari",
    tag: "Aari Work",
    eyebrow: "TRADITIONAL ARTISTRY",
    title: "Design with",
    titleAccent: "Golden Hands",
    body:
      "Master the timeless art of bridal aari, zardosi and beadwork. Turn silk and thread into heirlooms — and turn your talent into a thriving boutique business.",
    cta: "Explore Aari",
    ctaTo: "/courses",
    image: aariWork,
    tagline: "Every stitch tells a story",
    price: "Free",
    priceOld: "₹12,000",
    chips: ["3", "Months", "Bridal"],
    // Muted rose / pink — the "red jacket" reference
    theme: {
      bgOuter: ["#b84a4a", "#c95258", "#d06a6a", "#e08787"],
      cardFrom: "rgba(130, 40, 55, 0.50)",
      cardVia: "rgba(110, 30, 50, 0.45)",
      cardTo: "rgba(90, 25, 40, 0.50)",
      glow: "rgba(255, 120, 130, 0.55)",
      glow2: "rgba(220, 80, 100, 0.35)",
      blob1: "rgba(255, 180, 180, 0.35)",
      blob2: "rgba(140, 30, 50, 0.55)",
      accentText: "#fff0f0",
      chipActive: "#7a1f33",
    },
  },
  {
    id: "jute",
    tag: "Jute Work",
    eyebrow: "ECO-FRIENDLY CRAFT",
    title: "Weave a",
    titleAccent: "Green Future",
    body:
      "Turn natural jute fibre into bags, decor and lifestyle products. Learn sustainable design and entrepreneurship — build a business that's kind to the planet.",
    cta: "Discover Jute",
    ctaTo: "/courses",
    image: juteWork,
    tagline: "Natural craft, timeless living",
    price: "Free",
    priceOld: "₹10,000",
    chips: ["3", "Months", "Eco-Skill"],
    // Dark charcoal — the "black jacket" reference
    theme: {
      bgOuter: ["#2a2320", "#3a302a", "#4a4038", "#5a5048"],
      cardFrom: "rgba(35, 30, 28, 0.70)",
      cardVia: "rgba(25, 22, 20, 0.65)",
      cardTo: "rgba(15, 12, 10, 0.70)",
      glow: "rgba(200, 170, 130, 0.25)",
      glow2: "rgba(150, 120, 80, 0.20)",
      blob1: "rgba(100, 85, 70, 0.50)",
      blob2: "rgba(20, 15, 10, 0.60)",
      accentText: "#f5ece0",
      chipActive: "#1a1512",
    },
  },
];

// Cinematic easing
const CINEMATIC = [0.22, 1, 0.36, 1] as const;
const TRANSITION_DUR = 0.9;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const slide = heroSlides[active];

  // Mouse parallax (very subtle for premium feel)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 80, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 80, stiffness: 120 });
  const imgX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const imgY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const goTo = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive((idx + heroSlides.length) % heroSlides.length);
  };

  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-10"
      onMouseMove={handleMouseMove}
    >
      {/* ═══════ OUTER BACKGROUND — color-morphing gradient ═══════ */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${slide.id}`}
          className="absolute inset-0 -z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: TRANSITION_DUR, ease: CINEMATIC }}
          style={{
            background: `radial-gradient(ellipse at 20% 0%, ${slide.theme.bgOuter[0]} 0%, transparent 55%),
                         radial-gradient(ellipse at 80% 10%, ${slide.theme.bgOuter[1]} 0%, transparent 50%),
                         linear-gradient(180deg, ${slide.theme.bgOuter[0]} 0%, ${slide.theme.bgOuter[1]} 35%, ${slide.theme.bgOuter[2]} 65%, ${slide.theme.bgOuter[3]} 100%)`,
          }}
        />
      </AnimatePresence>
      {/* Bottom light wash always present */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <motion.div
          className="absolute inset-x-0 bottom-0 h-1/2"
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: `radial-gradient(circle at 50% 100%, ${slide.theme.blob1} 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* ═══════ GLASS CENTER CARD — color-morphs with slide ═══════ */}
      <motion.div
        className="relative z-10 w-full max-w-[1280px]"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: CINEMATIC }}
      >
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12"
          style={{
            background: `linear-gradient(135deg, ${slide.theme.cardFrom} 0%, ${slide.theme.cardVia} 50%, ${slide.theme.cardTo} 100%)`,
            backdropFilter: "blur(28px) saturate(140%)",
            WebkitBackdropFilter: "blur(28px) saturate(140%)",
            border: "1px solid rgba(255,220,170,0.22)",
            boxShadow:
              "0 40px 80px -20px rgba(30,10,0,0.45), 0 20px 40px -15px rgba(30,10,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
          animate={{
            boxShadow: [
              "0 40px 80px -20px rgba(30,10,0,0.45), 0 20px 40px -15px rgba(30,10,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
              "0 45px 90px -20px rgba(30,10,0,0.50), 0 25px 45px -15px rgba(30,10,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
              "0 40px 80px -20px rgba(30,10,0,0.45), 0 20px 40px -15px rgba(30,10,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Top gloss highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          {/* Decorative animated blobs inside card (color-morph) */}
          <AnimatePresence initial={false}>
            <motion.div
              key={`blob-in-${slide.id}`}
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: TRANSITION_DUR, ease: CINEMATIC }}
            >
              <motion.div
                className="absolute -top-16 -left-16 w-80 h-80 rounded-full blur-[90px] animate-blob-pulse"
                style={{ background: slide.theme.blob1 }}
              />
              <motion.div
                className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-[100px] animate-blob-pulse"
                style={{ background: slide.theme.blob2, animationDelay: "2s" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* ═══════ TOP ROW — stays stable, only text color tweens ═══════ */}
          <motion.div
            className="relative z-20 flex items-center justify-between mb-6 md:mb-8"
            animate={{ color: slide.theme.accentText }}
            transition={{ duration: TRANSITION_DUR, ease: CINEMATIC }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center shadow-md">
                <Scissors className="w-4 h-4 text-orange-600" />
              </div>
              <span className="font-bold tracking-wider text-sm md:text-base uppercase text-white drop-shadow-sm">
                Kiruba <span className="font-light">Trust</span>
              </span>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:flex items-center rounded-full px-2 py-1.5 gap-1"
              style={{
                background: "rgba(30,15,0,0.35)",
                backdropFilter: "blur(20px) saturate(150%)",
                WebkitBackdropFilter: "blur(20px) saturate(150%)",
                border: "1px solid rgba(255,200,150,0.2)",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              {[
                { name: "HOME", to: "/" },
                { name: "COURSES", to: "/courses" },
                { name: "ABOUT US", to: "/about" },
                { name: "CONTACT", to: "/contact" },
              ].map((l, i) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                    i === 0
                      ? "bg-white text-neutral-900 font-bold shadow-md"
                      : "text-white/85 hover:text-white hover:bg-white/15 font-semibold"
                  }`}
                >
                  {l.name}
                </Link>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <button
                aria-label="Enroll"
                className="w-10 h-10 rounded-full bg-white/15 border border-white/25 text-white flex items-center justify-center hover:bg-white/25 transition"
              >
                <GraduationCap className="w-4 h-4" />
              </button>
              <button
                aria-label="Wishlist"
                className="w-10 h-10 rounded-full bg-white/15 border border-white/25 text-white flex items-center justify-center hover:bg-white/25 transition"
              >
                <Heart className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          {/* ═══════ MAIN 3-COLUMN LAYOUT ═══════ */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center min-h-[420px] md:min-h-[520px]">
            {/* LEFT — text (crossfades in place, no movement) */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative text-white">
              <div className="flex items-center gap-2 mb-6">
                <button
                  aria-label="Previous course"
                  onClick={prev}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition hover:bg-white/20"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  aria-label="Next course"
                  onClick={next}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition hover:bg-white/20"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.55, ease: CINEMATIC }}
                >
                  <span className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/90 mb-5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {slide.eyebrow}
                  </span>

                  <h1 className="font-display font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl mb-5 drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
                    {slide.title}
                    <br />
                    <span className="italic font-semibold text-white">
                      {slide.titleAccent}
                    </span>
                  </h1>

                  <p className="text-white/85 text-sm md:text-[15px] leading-relaxed max-w-md mb-8 font-light">
                    {slide.body}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link to={slide.ctaTo} className="btn-warm-pill group">
                      {slide.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <div className="flex items-center gap-1.5 text-white/80 text-xs">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-yellow-200 text-yellow-200"
                          />
                        ))}
                      </div>
                      <span className="font-medium">4.9 · 1000+ students</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CENTER — product (cinematic fade+scale+Y transition) */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex items-center justify-center relative h-[260px] sm:h-[320px] md:h-[400px] lg:h-[460px]">
              {/* Color glow disc behind product (morphs color) */}
              <AnimatePresence initial={false}>
                <motion.div
                  key={`glow-${slide.id}`}
                  className="absolute inset-0 -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: TRANSITION_DUR, ease: CINEMATIC }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full blur-3xl"
                    style={{
                      background: `radial-gradient(circle, ${slide.theme.glow} 0%, ${slide.theme.glow2} 40%, transparent 75%)`,
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Product image with cinematic transition */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`img-${slide.id}`}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                    y: 40,
                    filter: "blur(12px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.1,
                    y: -40,
                    filter: "blur(8px)",
                  }}
                  transition={{ duration: TRANSITION_DUR, ease: CINEMATIC }}
                  style={prefersReducedMotion ? {} : { x: imgX, y: imgY }}
                  className="relative flex items-center justify-center w-full h-full"
                >
                  <motion.img
                    src={slide.image}
                    alt={slide.tag}
                    className="object-contain w-[240px] sm:w-[300px] md:w-[380px] lg:w-[430px] max-h-full"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 82%, transparent 96%)",
                      maskImage:
                        "linear-gradient(to bottom, black 82%, transparent 96%)",
                      filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.35))",
                    }}
                    animate={{ y: [0, -6, 0], rotate: [0, 0.4, 0] }}
                    transition={{
                      y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    }}
                  />

                  {/* Ground shadow (also morphs) */}
                  <motion.div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[55%] h-4 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, transparent 70%)",
                      filter: "blur(8px)",
                    }}
                    animate={{ opacity: [0.8, 0.6, 0.8], scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT — price/chips (crossfades in place) */}
            <div className="lg:col-span-3 order-3 relative z-10 flex flex-col items-start gap-4 text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`price-${slide.id}`}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.55, ease: CINEMATIC }}
                  className="text-left w-full"
                >
                  <p className="text-white/70 text-xs uppercase tracking-[0.22em] font-bold mb-2">
                    Course Fee
                  </p>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-display font-bold text-5xl md:text-6xl leading-none drop-shadow-sm">
                      {slide.price}
                    </span>
                    <span
                      className="text-lg md:text-xl font-medium"
                      style={{
                        color: "rgba(255,230,200,0.65)",
                        textDecoration: "line-through",
                        textDecorationThickness: "2px",
                        textDecorationColor: "rgba(255,230,200,0.5)",
                      }}
                    >
                      {slide.priceOld}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm mt-2 font-medium">
                    with ₹12,000 stipend
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="w-full">
                <p className="text-white/70 text-xs uppercase tracking-[0.22em] font-bold mb-3">
                  Duration
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`chips-${slide.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: CINEMATIC }}
                    className="flex gap-2.5 flex-wrap"
                  >
                    {slide.chips.map((c, i) => (
                      <button
                        key={c}
                        className={`h-[52px] px-4 min-w-[52px] rounded-full inline-flex items-center justify-center font-bold text-[0.95rem] transition-all duration-300 backdrop-blur ${
                          i === 0
                            ? "bg-white shadow-[0_10px_25px_-8px_rgba(0,0,0,0.35)]"
                            : "bg-white/15 text-white/90 border border-white/25 hover:bg-white/25"
                        }`}
                        style={i === 0 ? { color: slide.theme.chipActive } : {}}
                      >
                        {c}
                      </button>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ═══════ BOTTOM ROW: socials | tagline | next-thumbnail ═══════ */}
          <div className="relative z-10 mt-6 md:mt-8 flex items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-1">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full inline-flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={`tag-${slide.id}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.5, ease: CINEMATIC }}
                className="hero-tagline text-center text-base md:text-lg lg:text-xl hidden sm:block flex-1"
              >
                {slide.tagline}
              </motion.p>
            </AnimatePresence>

            {/* Next-product thumbnail — updates per slide like the reference */}
            <button
              onClick={next}
              className="hidden md:flex items-center gap-3 rounded-2xl bg-white/15 border border-white/25 backdrop-blur px-3 py-2 hover:bg-white/25 transition group"
            >
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-white/20 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`thumb-${heroSlides[(active + 1) % heroSlides.length].id}`}
                    src={heroSlides[(active + 1) % heroSlides.length].image}
                    alt="Next course"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: CINEMATIC }}
                  />
                </AnimatePresence>
              </div>
              <div className="text-left pr-1">
                <p className="text-[10px] uppercase tracking-wider text-white/70 font-bold leading-none">
                  Next up
                </p>
                <p className="text-white text-xs font-bold leading-tight mt-0.5 group-hover:translate-x-0.5 transition-transform">
                  {heroSlides[(active + 1) % heroSlides.length].tag}
                </p>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Mobile slide dots */}
        <div className="flex lg:hidden justify-center gap-2 mt-6">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              aria-label={`Go to ${s.tag}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
