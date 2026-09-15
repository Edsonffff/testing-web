import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function CTASection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden warm-gradient-bg">
      {/* Inner decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-amber-300/40 blur-[100px] animate-blob-pulse" />
        <div className="absolute bottom-0 -right-20 w-[320px] h-[320px] rounded-full bg-orange-700/50 blur-[120px] animate-blob-pulse" />
      </div>

      <div className="container-width px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-warm rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-sm font-bold text-white mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Enrollment Open · Limited Seats</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight leading-[1.05]"
          >
            Ready to stitch your
            <br />
            <span className="italic">dream future?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-lg text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Join our free government-certified skill programs and transform your life.
            Walk in with curiosity, walk out with a career.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            >
              <Link to="/contact" className="btn-warm-pill">
                <Heart className="w-4 h-4" />
                Enroll Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            >
              <Button
                asChild
                variant="ghost"
                className="btn-warm-ghost"
              >
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
