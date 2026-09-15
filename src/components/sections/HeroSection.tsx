import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Heart,
  Instagram,
  Facebook,
  Youtube,
  Scissors,
  Sparkles,
  Star,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import heroImage from "@/assets/hero-tailoring.jpg";
import tailoringCourse from "@/assets/tailoring-course.jpg";
import aariWork from "@/assets/aari-work.jpg";
import beautician from "@/assets/beautician-course.png";

const heroSlides = [
  {
    tag: "Tailoring",
    eyebrow: "FREE GOVT. CERTIFIED COURSE",
    title: "Stitch your",
    titleAccent: "Dream Career",
    body:
      "It's not just about needle and thread. It's about stepping into confidence, creativity, and a craft that lasts a lifetime. Learn professional tailoring with ₹12,000 stipend support.",
    cta: "Start Stitching",
    ctaTo: "/courses",
    image: tailoringCourse,
    tagline: "Crafted with care, worn with pride",
    price: "Free",
    priceOld: "₹15,000",
    chips: ["6", "Months", "Certified"],
  },
  {
    tag: "Aari Work",
    eyebrow: "TRADITIONAL ARTISTRY",
    title: "Design with",
    titleAccent: "Golden Hands",
    body:
      "Master the timeless art of bridal aari, zardosi and bead embroidery. Turn fabric into heirlooms and passion into a profession with expert mentorship.",
    cta: "Explore Aari",
    ctaTo: "/courses",
    image: aariWork,
    tagline: "Every stitch tells a story",
    price: "Free",
    priceOld: "₹12,000",
    chips: ["3", "Months", "Bridal"],
  },
  {
    tag: "Beautician",
    eyebrow: "BEAUTY & WELLNESS",
    title: "Glow up",
    titleAccent: "Your Future",
    body:
      "Professional beautician training covering skin, hair, makeup and salon management. Walk out with a government certificate and the confidence to launch your own studio.",
    cta: "Join Beauty",
    ctaTo: "/courses",
    image: beautician,
    tagline: "Confidence, stitched into every lesson",
    price: "Free",
    priceOld: "₹18,000",
    chips: ["6", "Months", "Studio-Ready"],
  },
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 90 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 90 });
  const imgX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const imgY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  const cardX = useTransform(smoothX, [-0.5, 0.5], [8, -8]);
  const cardY = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const blob1X = useTransform(smoothX, [-0.5, 0.5], [-25, 25]);
  const blob2X = useTransform(smoothX, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // Auto rotate slides gently
  useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setInterval(() => {
      setActive((a) => (a + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(t);
  }, [prefersReducedMotion]);

  const slide = heroSlides[active];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center warm-gradient-bg overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-10"
      onMouseMove={handleMouseMove}
    >
      {/* Decorative floating blobs for depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full bg-amber-300/40 blur-[100px] animate-blob-pulse"
          style={{ x: blob1X }}
        />
        <motion.div
          className="absolute bottom-0 -right-20 w-[420px] h-[420px] rounded-full bg-orange-600/50 blur-[120px] animate-blob-pulse"
          style={{ x: blob2X }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full bg-yellow-200/30 blur-[80px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main glass card (the big rounded rectangle in the reference) */}
      <motion.div
        className="relative z-10 w-full max-w-[1280px]"
        style={prefersReducedMotion ? {} : { x: cardX, y: cardY }}
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="glass-warm rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
          {/* Inner highlight gloss (top edge) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          {/* ═══════ TOP ROW: Logo + Pill Nav + Icons ═══════ */}
          <div className="flex items-center justify-between mb-8 md:mb-10">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center shadow-md">
                <Scissors className="w-4 h-4 text-orange-600" />
              </div>
              <span className="text-white font-bold tracking-wider text-sm md:text-base uppercase">
                Kiruba <span className="font-light">Trust</span>
              </span>
            </motion.div>

            {/* Pill navigation (centered) */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:flex items-center pill-nav px-2 py-1.5 gap-1"
            >
              <Link
                to="/"
                className="pill-active px-5 py-2 text-sm"
              >
                HOME
              </Link>
              <Link to="/courses" className="pill-link px-5 py-2 text-sm">
                COURSES
              </Link>
              <Link to="/about" className="pill-link px-5 py-2 text-sm">
                ABOUT US
              </Link>
              <Link to="/contact" className="pill-link px-5 py-2 text-sm">
                CONTACT
              </Link>
            </motion.nav>

            {/* Right-side icons */}
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
          </div>

          {/* ═══════ MAIN HERO CONTENT: 3 columns ═══════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[460px] md:min-h-[540px]">
            {/* LEFT — Text */}
            <div className="lg:col-span-4 order-2 lg:order-1 relative z-10">
              {/* Left chevron (previous slide) */}
              <div className="flex items-center gap-2 mb-6">
                <button
                  aria-label="Previous course"
                  onClick={() =>
                    setActive(
                      (a) => (a - 1 + heroSlides.length) % heroSlides.length,
                    )
                  }
                  className="chevron-btn"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  aria-label="Next course"
                  onClick={() => setActive((a) => (a + 1) % heroSlides.length)}
                  className="chevron-btn"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <AnimatePresenceKey uniqueKey={slide.tag}>
                <motion.div
                  key={slide.tag}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/90 mb-5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {slide.eyebrow}
                  </span>

                  <h1 className="text-white font-display font-bold leading-[0.98] tracking-tight text-5xl sm:text-6xl md:text-7xl mb-5">
                    {slide.title}
                    <br />
                    <span className="italic font-semibold text-white/95 drop-shadow-[0_6px_20px_rgba(120,40,0,0.35)]">
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
              </AnimatePresenceKey>
            </div>

            {/* CENTER — Hero image */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center relative">
              <AnimatePresenceKey uniqueKey={`img-${slide.tag}`}>
                <motion.div
                  key={`img-${slide.tag}`}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={prefersReducedMotion ? {} : { x: imgX, y: imgY }}
                >
                  {/* Soft glow disc behind image */}
                  <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-br from-yellow-200/40 via-orange-300/30 to-orange-500/30 rounded-full scale-110" />

                  <img
                    src={slide.image}
                    alt={slide.tag}
                    className="hero-image-shadow w-[260px] sm:w-[340px] md:w-[400px] lg:w-[440px] object-contain animate-floaty"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 85%, transparent 100%)",
                      maskImage:
                        "linear-gradient(to bottom, black 85%, transparent 100%)",
                    }}
                  />

                  {/* Small ground shadow */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-black/25 blur-2xl rounded-full" />
                </motion.div>
              </AnimatePresenceKey>

              {/* Floating stats card */}
              <motion.div
                className="absolute -left-2 sm:left-4 top-10 md:top-16 z-20 hidden sm:block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="glass-warm-light rounded-2xl px-4 py-3 flex items-center gap-3 animate-floaty-slow">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base leading-none">
                      1000+
                    </p>
                    <p className="text-white/80 text-[11px] font-medium">
                      Women Trained
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating certificate badge */}
              <motion.div
                className="absolute -right-2 sm:right-4 bottom-20 md:bottom-28 z-20 hidden sm:block"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="glass-warm-light rounded-2xl px-4 py-3 flex items-center gap-3 animate-floaty">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base leading-none">
                      Govt.
                    </p>
                    <p className="text-white/80 text-[11px] font-medium">
                      Certified
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Price / chips */}
            <div className="lg:col-span-3 order-3 flex lg:flex-col items-end lg:items-start justify-end lg:justify-start gap-6 relative z-10">
              <AnimatePresenceKey uniqueKey={`price-${slide.tag}`}>
                <motion.div
                  key={`price-${slide.tag}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-right lg:text-left"
                >
                  <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-1">
                    Course Fee
                  </p>
                  <div className="flex items-baseline gap-3 justify-end lg:justify-start">
                    <span className="text-white font-display font-bold text-4xl md:text-5xl">
                      {slide.price}
                    </span>
                    <span className="price-old text-lg md:text-xl font-medium">
                      {slide.priceOld}
                    </span>
                  </div>
                  <p className="text-white/70 text-xs mt-1">
                    ₹12,000 stipend included
                  </p>
                </motion.div>
              </AnimatePresenceKey>

              {/* Chips (size selector re-themed as course-duration chips like reference) */}
              <AnimatePresenceKey uniqueKey={`chips-${slide.tag}`}>
                <motion.div
                  key={`chips-${slide.tag}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex gap-3"
                >
                  {slide.chips.map((c, i) => (
                    <button
                      key={c}
                      className={`size-chip ${i === 0 ? "active" : ""}`}
                    >
                      {c}
                    </button>
                  ))}
                </motion.div>
              </AnimatePresenceKey>

              {/* Slide indicators */}
              <div className="hidden lg:flex gap-2 mt-auto pt-6">
                {heroSlides.map((s, i) => (
                  <button
                    key={s.tag}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-8 bg-white"
                        : "w-4 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to ${s.tag}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ═══════ BOTTOM ROW: Socials + Tagline + Thumbnail ═══════ */}
          <div className="mt-6 md:mt-8 flex items-center justify-between gap-4">
            {/* Social icons (left) */}
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
                  className="social-btn"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Tagline (center) */}
            <AnimatePresenceKey uniqueKey={`tag-${slide.tag}`}>
              <motion.p
                key={`tag-${slide.tag}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="hero-tagline text-center text-base md:text-lg lg:text-xl hidden sm:block flex-1"
              >
                {slide.tagline}
              </motion.p>
            </AnimatePresenceKey>

            {/* Thumbnail course preview (right) — mini sewing icon */}
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setActive((a) => (a + 1) % heroSlides.length)
                }
                className="hidden md:flex items-center gap-2 rounded-2xl bg-white/15 border border-white/25 backdrop-blur px-3 py-2 hover:bg-white/25 transition"
              >
                <img
                  src={
                    heroSlides[(active + 1) % heroSlides.length].image
                  }
                  alt="Next course"
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-white/70 font-semibold leading-none">
                    Next up
                  </p>
                  <p className="text-white text-xs font-bold leading-tight mt-0.5">
                    {heroSlides[(active + 1) % heroSlides.length].tag}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Small mobile slide dots */}
        <div className="flex lg:hidden justify-center gap-2 mt-6">
          {heroSlides.map((s, i) => (
            <button
              key={s.tag}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
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

function AnimatePresenceKey({
  children,
  uniqueKey,
}: {
  children: React.ReactNode;
  uniqueKey: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <div key={uniqueKey}>{children}</div>
    </AnimatePresence>
  );
}
