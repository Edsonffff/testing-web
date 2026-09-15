import { GraduationCap, Heart, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    number: "1000+",
    label: "Students Benefited",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: GraduationCap,
    number: "14+",
    label: "Years of Service",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Award,
    number: "100%",
    label: "Free Education",
    color: "from-rose-500 to-orange-500",
  },
  {
    icon: Heart,
    number: "₹12,000",
    label: "Stipend Provided",
    color: "from-orange-600 to-rose-500",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-20 warm-section overflow-hidden fabric-texture">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-400/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-amber-300/30 blur-[120px]" />

      <div className="container-width px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="warm-badge inline-block mb-4"
          >
            Our Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold text-orange-950"
          >
            Numbers that <span className="text-gradient-warm italic">warm</span> the heart
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="warm-card p-6 md:p-8 text-center"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
              >
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="big-stat text-4xl md:text-5xl text-orange-950 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-orange-900/70 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
