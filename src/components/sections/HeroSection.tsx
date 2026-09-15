import { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Award, ArrowDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";
import heroImage from "@/assets/hero-tailoring.jpg";
import mrFranklin from "@/assets/mr-franklin.png";

// Helper: split text into characters for staggered animation
function AnimatedLetters({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
      style={{ display: "block", perspective: "600px" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={child}
          style={{ display: "inline-block", willChange: "transform, opacity" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Generate star positions deterministically
function useStarField(count: number) {
  return useMemo(() => {
    const stars: Array<{
      top: string;
      left: string;
      size: number;
      duration: string;
      delay: string;
      color: string;
    }> = [];
    for (let i = 0; i < count; i++) {
      const seed1 = ((i * 137 + 97) % 100);
      const seed2 = ((i * 251 + 43) % 100);
      stars.push({
        top: `${seed1}%`,
        left: `${seed2}%`,
        size: 1.5 + (i % 4) * 0.8,
        duration: `${2 + (i % 5) * 0.8}s`,
        delay: `${(i % 7) * 0.5}s`,
        color:
          i % 3 === 0
            ? "rgba(192, 132, 252, 0.7)"
            : i % 3 === 1
              ? "rgba(244, 114, 182, 0.6)"
              : "rgba(255, 255, 255, 0.5)",
      });
    }
    return stars;
  }, [count]);
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const stars = useStarField(12);

  // Mouse position tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 60, stiffness: 80 }); // Throttled for performance
  const smoothMouseY = useSpring(mouseY, { damping: 60, stiffness: 80 });

  // Parallax transforms at different speeds for each orb
  const orb1X = useTransform(smoothMouseX, [-0.5, 0.5], [-40, 40]);
  const orb1Y = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30]);
  const orb2X = useTransform(smoothMouseX, [-0.5, 0.5], [30, -30]);
  const orb2Y = useTransform(smoothMouseY, [-0.5, 0.5], [25, -25]);
  const orb3X = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const orb3Y = useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]);

  // Grid parallax (subtle)
  const gridX = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
  const gridY = useTransform(smoothMouseY, [-0.5, 0.5], [-10, 10]);

  // Particle parallax
  const particleX = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);
  const particleY = useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950 pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ═══════ AURORA GRADIENT MESH ═══════ */}
      <div className="absolute inset-0 aurora-mesh pointer-events-none" />

      {/* ═══════ ANIMATED GRADIENT ORBS ═══════ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[80px] will-change-transform" /* Lower opacity and blur */
          style={{ x: orb1X, y: orb1Y }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-pink-600/10 blur-[80px] will-change-transform"
          style={{ x: orb2X, y: orb2Y }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-rose-500/05 blur-[60px] will-change-transform"
          style={{ x: orb3X, y: orb3Y }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ═══════ STAR FIELD ═══════ */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={`star-${i}`}
            className="absolute star-particle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              backgroundColor: star.color,
              ["--twinkle-duration" as string]: star.duration,
              ["--twinkle-delay" as string]: star.delay,
            }}
          />
        ))}
      </div>

      {/* ═══════ GRID PATTERN OVERLAY ═══════ */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          x: gridX,
          y: gridY,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ═══════ DIAGONAL LIGHT SWEEP ═══════ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[200%] h-full light-sweep-bar"
          style={{ transformOrigin: "center center" }}
        />
      </div>

      {/* ═══════ FLOATING PARTICLES WITH MOUSE PARALLAX ═══════ */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full will-change-transform"
          style={{
            top: `${15 + i * 15}%`,
            left: `${8 + i * 18}%`,
            x: particleX,
            y: particleY,
            width: i % 2 === 0 ? 3 : 2,
            height: i % 2 === 0 ? 3 : 2,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.7, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.7,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        >
          <div
            className={`w-full h-full rounded-full ${i % 3 === 0
              ? "bg-purple-400/50"
              : i % 3 === 1
                ? "bg-pink-400/50"
                : "bg-rose-400/40"
              }`}
          />
        </motion.div>
      ))}

      {/* ═══════ CONTENT ═══════ */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="relative z-10">
            {/* Badge with bounce entrance */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                bounce: 0.4,
              }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
              </motion.div>
              <span className="text-sm text-purple-300 font-medium">
                Empowering Women with Skill-Based Learning
              </span>
            </motion.div>

            {/* Heading with staggered letter-by-letter reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              <AnimatedLetters
                text="Learn Skills"
                className="text-white"
                delay={0.5}
              />
              <AnimatedLetters
                text="That Shape Your"
                className="text-white"
                delay={0.9}
              />
              {/* "Future!" with shimmer gradient */}
              <motion.span
                className="block shimmer-gradient"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.4,
                  type: "spring",
                  bounce: 0.3,
                }}
                style={{ display: "block" }}
              >
                <AnimatedLetters
                  text="Future!"
                  delay={1.5}
                />
              </motion.span>
            </h1>

            {/* Subheading */}
            <motion.p
              className="text-base sm:text-lg text-neutral-400 mb-8 leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.0 }}
            >
              Explore free government-certified skill programs designed for
              real-world success. Learn, create, and upskill with ₹12,000
              stipend support.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.2 }}
            >
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-6 text-base shadow-lg shadow-purple-500/25 border-0 hover:shadow-xl hover:shadow-purple-500/30"
                >
                  <Link to="/courses">
                    Browse Courses
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border border-white/10 text-neutral-300 hover:border-white/20 hover:text-white hover:bg-white/5 font-semibold px-8 py-6 text-base"
                >
                  <Link to="/about">Our Story</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="flex flex-wrap items-start gap-8 sm:gap-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.4 }}
            >
              {[
                { number: "1000+", label: "Students Trained" },
                { number: "14+", label: "Years of Service" },
                { number: "₹12K", label: "Stipend Provided" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white leading-none">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-500 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image + Floating Cards */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Purple gradient blob behind image */}
            <motion.div
              className="absolute -top-10 -right-10 w-[110%] h-[110%] rounded-full bg-purple-600/15 blur-[80px]"
              initial={prefersReducedMotion ? {} : { scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Hero Image */}
            <motion.div
              className="relative z-10 w-full max-w-[500px] xl:max-w-[560px]"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <TiltCard tiltAmount={15}>
                <img
                  src={heroImage}
                  alt="Skill training in progress"
                  className="w-full h-[400px] sm:h-[460px] lg:h-[500px] object-cover rounded-3xl shadow-2xl shadow-purple-900/30 border border-white/10"
                />
              </TiltCard>
            </motion.div>

            {/* Floating Testimonial Card */}
            <motion.div
              className="absolute bottom-6 -left-4 sm:left-0 lg:-left-12 z-20"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.8 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            >
              <div className="rounded-2xl px-5 py-4 max-w-[260px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={mrFranklin}
                    alt="Mr. Franklin"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-400/30"
                  />
                  <div>
                    <p className="text-sm font-bold text-white">
                      Mr. Franklin
                    </p>
                    <p className="text-xs text-purple-400 font-medium">
                      Director
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  "Transforming lives through free skill training. Highly
                  recommended for beginners."
                </p>
              </div>
            </motion.div>

            {/* Badge Card - Top Right */}
            <motion.div
              className="absolute top-8 -right-2 sm:right-4 z-20"
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="rounded-xl px-4 py-3 flex items-center gap-2 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] shadow-lg">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Award className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">
                    Govt. Certified
                  </p>
                  <p className="text-[10px] text-neutral-500">
                    Naan Mudhalvan
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
