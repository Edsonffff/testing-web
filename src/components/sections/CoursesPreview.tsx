import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, IndianRupee, ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import tailoringImage from "@/assets/tailoring-course.jpg";
import aariImage from "@/assets/aari-work.jpg";
import juteImage from "@/assets/jute-work.jpg";
import broadbandImage from "@/assets/broadband-technician.jpg";
import beauticianImage from "@/assets/beautician-course.png";

const courses = [
  {
    title: "Beautician Course",
    description:
      "Makeup, facials & salon management — with government certification and ₹12,000 stipend.",
    image: beauticianImage,
    features: [
      "100% Free Training",
      "₹12,000 Stipend",
      "Govt. Certified",
      "Career Support",
    ],
    isNew: true,
    stipendAmount: "12,000",
    gradient: "from-rose-400 to-orange-500",
  },
  {
    title: "Broadband Technician",
    description:
      "3-month industry training with TN Skill Development Corp & Infonet Comm. Monthly stipend included.",
    image: broadbandImage,
    features: [
      "100% Free Training",
      "₹12,000/mo Stipend",
      "TN Govt. Certificate",
      "Job Placement",
    ],
    stipendAmount: "12,000",
    gradient: "from-orange-400 to-amber-500",
  },
  {
    title: "Free Tailoring Course",
    description:
      "Professional tailoring from basics to boutique-grade — under the Naan Mudhalvan scheme.",
    image: tailoringImage,
    features: [
      "100% Free Training",
      "₹12,000 Stipend",
      "TN Govt. Certificate",
      "Job-Ready Skills",
    ],
    stipendAmount: "12,000",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    title: "Aari Work Training",
    description:
      "Traditional aari, zardosi & beadwork — the perfect creative pathway to self-employment.",
    image: aariImage,
    features: [
      "Traditional Techniques",
      "Creative Skills",
      "Self-Employment",
      "Practical Sessions",
    ],
    gradient: "from-amber-400 to-orange-600",
  },
  {
    title: "Jute Work Training",
    description:
      "Eco-friendly jute crafting for sustainable products and green entrepreneurship.",
    image: juteImage,
    features: [
      "Eco-Friendly Craft",
      "Product Design",
      "Business Skills",
      "Sustainable Income",
    ],
    isNew: true,
    gradient: "from-yellow-400 to-orange-500",
  },
];

export function CoursesPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-20 md:py-28 warm-section-alt overflow-hidden fabric-texture">
      <div className="absolute top-10 right-0 w-[400px] h-[400px] rounded-full bg-orange-400/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-amber-300/25 blur-[120px]" />

      <div className="container-width px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur rounded-full text-sm font-bold text-orange-700 mb-5 shadow-md border border-orange-200"
          >
            <Award className="w-4 h-4" />
            <span>Free Skill Development Programs</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-orange-950 mb-4 tracking-tight"
          >
            Courses crafted for
            <br />
            <span className="text-gradient-warm italic">real-world success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-orange-900/70 leading-relaxed"
          >
            Hands-on programs designed for women and youth seeking self-employment
            and sustainable livelihoods through skill development.
          </motion.p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="warm-card group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <motion.img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} opacity-20 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {course.isNew && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white text-orange-600 rounded-full text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> NEW
                  </div>
                )}
                {course.stipendAmount && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs font-black shadow-lg">
                    <IndianRupee className="w-3 h-3" />
                    {course.stipendAmount}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-orange-950 mb-2 leading-snug">
                  {course.title}
                </h3>
                <p className="text-sm text-orange-900/70 mb-5 leading-relaxed">
                  {course.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-orange-950/80 font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  <Button
                    asChild
                    className={`w-full rounded-full bg-gradient-to-r ${course.gradient} hover:shadow-xl text-white font-bold py-5 text-sm`}
                  >
                    <Link to="/courses">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            className="inline-block"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-orange-950 hover:bg-orange-900 text-white font-bold px-10 py-6 text-base shadow-xl"
            >
              <Link to="/courses">
                View All Programs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
