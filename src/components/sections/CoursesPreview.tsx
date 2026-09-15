import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, IndianRupee, ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedCard, AnimatedText } from "@/components/animations";
import { motion, useReducedMotion } from "framer-motion";
import tailoringImage from "@/assets/tailoring-course.jpg";
import aariImage from "@/assets/aari-work.jpg";
import juteImage from "@/assets/jute-work.jpg";
import broadbandImage from "@/assets/broadband-technician.jpg";
import beauticianImage from "@/assets/beautician-course.png";

const courses = [
  {
    title: "Beautician Course Training",
    description:
      "Expert training in makeup, facial treatments, and salon management with government certification.",
    image: beauticianImage,
    features: [
      "100% Free Training",
      "₹12,000 Stipend",
      "Govt. Certified",
      "Career Support",
    ],
    highlighted: true,
    isNew: true,
    stipendAmount: "12,000",
  },
  {
    title: "Broadband Technician Course",
    description:
      "3-month industry training with TN Skill Development Corporation & Infonet Comm. Get ₹12,000 monthly stipend!",
    image: broadbandImage,
    features: [
      "100% Free Training",
      "₹12,000/month Stipend",
      "TN Govt. Certificate",
      "Job Placement",
    ],
    highlighted: true,
    stipendAmount: "12,000",
  },
  {
    title: "Free Tailoring Course",
    description:
      "Complete tailoring education with government certification under Naan Mudhalvan Scheme.",
    image: tailoringImage,
    features: [
      "100% Free Training",
      "₹12,000 Stipend",
      "TN Govt. Certificate",
      "Job-Ready Skills",
    ],
    highlighted: true,
    stipendAmount: "12,000",
  },
  {
    title: "Aari Work Training",
    description:
      "Learn traditional Aari embroidery techniques for creative self-employment opportunities.",
    image: aariImage,
    features: [
      "Traditional Techniques",
      "Creative Skills",
      "Self-Employment",
      "Practical Sessions",
    ],
    highlighted: true,
  },
  {
    title: "Jute Work Training",
    description:
      "Eco-friendly jute crafting skills for sustainable product creation and entrepreneurship.",
    image: juteImage,
    features: [
      "Eco-Friendly Craft",
      "Product Design",
      "Business Skills",
      "Sustainable Income",
    ],
    highlighted: true,
    isNew: true,
  },
];

export function CoursesPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-20 md:py-28 bg-neutral-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-pink-600/5 blur-[120px]" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-purple-600/5 blur-[100px]" />
      <div className="container-width px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-purple-400 mb-4">
              <Award className="w-4 h-4" />
              <span>Free Skill Development Programs</span>
            </div>
          </AnimatedSection>
          <AnimatedText
            as="h2"
            delay={0.1}
            zoom
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-4 tracking-tight"
          >
            Empower Yourself With New Skills
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="text-lg text-neutral-400 leading-relaxed"
          >
            Our programs are designed for women and youth seeking self-employment
            and sustainable livelihoods through skill development.
          </AnimatedText>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <AnimatedCard
              key={course.title}
              delay={index * 0.1}
              className="group relative bg-white/[0.03] rounded-3xl overflow-hidden border border-white/[0.06] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.06] hover:-translate-y-1"
            >
              {course.isNew && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                  NEW
                </div>
              )}
              {course.stipendAmount && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-bold shadow-sm">
                  <IndianRupee className="w-3 h-3" />
                  {course.stipendAmount}
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {course.title}
                </h3>
                <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-neutral-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  <Button
                    asChild
                    className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 text-white font-semibold"
                  >
                    <Link to="/courses">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-14">
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            className="inline-block"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-10 py-6 text-base shadow-lg shadow-purple-500/20 border-0 hover:shadow-xl hover:shadow-purple-500/30"
            >
              <Link to="/courses">
                View All Programs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
