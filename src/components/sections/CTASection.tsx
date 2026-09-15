import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection, AnimatedText } from "@/components/animations";

export function CTASection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-neutral-950">
      {/* Gradient background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-pink-600/10 blur-[100px]" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />

      <div className="container-width px-4 sm:px-6 lg:px-8 relative text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-white/90 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Enrollment Open</span>
          </div>
        </AnimatedSection>

        <AnimatedText
          as="h2"
          zoom
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight"
        >
          Ready to Start Your Journey?
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.1}
          className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Join our free skill development programs and transform your future.
          Enrollment is now open for the upcoming batch.
        </AnimatedText>
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:shadow-purple-500/25 font-bold px-8 py-6 text-base"
              >
                <Link to="/contact">
                  Enroll Now
                  <ArrowRight className="w-5 h-5 ml-2" />
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
                className="rounded-full border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-bold px-8 py-6 text-base"
              >
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
