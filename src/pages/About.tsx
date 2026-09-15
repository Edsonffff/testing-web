import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Quote, Target, Eye, Heart, Users, Award, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PageTransition } from "@/components/animations/PageTransition";
import mrFranklin from "@/assets/mr-franklin.png";

const milestones = [
  { year: "2011", event: "Trust Registered", description: "Kiruba Education & Charitable Trust was officially registered (Govt. Regd No: 42/2011) with a vision to empower women." },
  { year: "2015", event: "First Batch Graduated", description: "Successfully trained our first batch of 50 women in tailoring skills." },
  { year: "2020", event: "Government Partnership", description: "Partnered with TN Skill Development Corporation under the Naan Mudhalvan Scheme." },
  { year: "2023", event: "Expanded Programs", description: "Added Aari work, Jute work, and Broadband Technician training to our curriculum." },
  { year: "2025", event: "5000+ Beneficiaries", description: "Reached the milestone of training over 5000 students across multiple disciplines." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const About = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <PageTransition>
      <Layout>
        {/* HERO */}
        <section className="relative section-hero bg-[#fff6e8] overflow-hidden fabric-texture">
          <div className="absolute top-0 -left-20 w-[320px] h-[320px] rounded-full bg-orange-400/20 blur-[100px]" />
          <div className="absolute bottom-0 -right-20 w-[320px] h-[320px] rounded-full bg-amber-300/25 blur-[100px]" />
          <div className="container-width px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial="hidden" animate="show" variants={fadeUp}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="warm-badge inline-block mb-5">About Us</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-orange-950 mb-6 leading-[1.05]">
                About <span className="text-gradient-warm italic">Kiruba Trust</span>
              </h1>
              <p className="text-lg md:text-xl text-orange-900/75 leading-relaxed">
                For over 14 years, we've empowered women and youth across Tamil Nadu through
                free government-certified skill development programs — turning passion into livelihoods.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MISSION + VISION */}
        <section className="py-16 md:py-24 bg-[#fff6e8]">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  Icon: Target,
                  title: "Our Mission",
                  body: "To empower women and youth from economically disadvantaged backgrounds by providing free, quality skill development training that enables them to achieve financial independence and lead dignified lives.",
                  gradient: "from-orange-500 to-amber-500",
                },
                {
                  Icon: Eye,
                  title: "Our Vision",
                  body: "A society where every woman has access to skill development opportunities — enabling them to become self-reliant entrepreneurs and contributing members of their communities.",
                  gradient: "from-amber-500 to-yellow-500",
                },
              ].map((b, i) => (
                <motion.div
                  key={b.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  className="warm-card p-8 md:p-10"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <b.Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-950 mb-4">{b.title}</h2>
                  <p className="text-orange-900/75 leading-relaxed text-[15px] md:text-base">{b.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DIRECTOR */}
        <section className="py-16 md:py-24 warm-section-alt fabric-texture">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="lg:col-span-5 flex justify-center lg:justify-start"
              >
                <div className="relative">
                  <div className="w-72 h-80 md:w-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
                    <img
                      src={mrFranklin}
                      alt="Mr. R. Franklin — Managing Director"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Floating years badge, placed clearly not overlapping face */}
                  <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-2xl px-5 py-3 shadow-xl">
                    <p className="font-display text-3xl font-bold leading-none">14+</p>
                    <p className="text-xs font-semibold uppercase tracking-wider mt-1">Years Leading</p>
                  </div>
                  {/* Decorative accent */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-amber-300 to-orange-400/80 -z-10 blur-[1px]" />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="lg:col-span-7"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur rounded-full text-xs font-bold text-orange-700 mb-6 shadow-sm border border-orange-200">
                  <Quote className="w-3.5 h-3.5" /> Director's Message
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-orange-950 mb-2 leading-[1.1]">
                  Mr. R. Franklin
                </h2>
                <p className="text-base md:text-lg text-orange-800/70 font-semibold mb-6">M.Com, MSW · Managing Director</p>

                <blockquote className="relative text-lg md:text-xl text-orange-950/85 leading-relaxed font-light italic mb-6 pl-5 border-l-4 border-orange-400">
                  "When we started Kiruba Trust in 2011, our dream was simple — to give
                  women the skills they need to support themselves and their families.
                  Today, seeing over 5000 women transform their lives fills my heart
                  with immense joy and gratitude."
                </blockquote>

                <p className="text-orange-900/75 leading-relaxed mb-8 text-[15px] md:text-base">
                  "Our partnership with the Tamil Nadu Government through the Naan Mudhalvan
                  Scheme has enabled us to provide not just training, but also financial
                  support through stipends. Every woman who joins our program leaves with
                  not just skills — but confidence and hope for a better future."
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button asChild className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-xl text-white font-bold px-6 py-5">
                    <Link to="/contact">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-orange-900/70 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    Govt. Regd No: 42/2011
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-16 md:py-24 bg-[#fff6e8]">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={fadeUp}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="warm-badge inline-block mb-4">Our Values</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-orange-950 mb-4">
                Principles close to our <span className="italic text-gradient-warm">heart</span>
              </h2>
              <p className="text-lg text-orange-900/70">
                The values that guide everything we do at Kiruba Trust.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: Heart, title: "Compassion", desc: "We serve with love, patience, and a deep understanding of every individual's needs." },
                { icon: Users, title: "Empowerment", desc: "We enable women to become independent, confident, and self-sufficient breadwinners." },
                { icon: Award, title: "Excellence", desc: "We hold our training to the highest standards — preparing students for real-world success." },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  className="warm-card p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                    <v.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-orange-950 mb-3">{v.title}</h3>
                  <p className="text-orange-900/70 leading-relaxed text-sm md:text-base">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-16 md:py-24 warm-section-alt fabric-texture">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }}
              variants={fadeUp}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="warm-badge inline-block mb-4">Our Journey</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-orange-950 mb-4">
                14+ Years of <span className="italic text-gradient-warm">Impact</span>
              </h2>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400/40 via-orange-400/60 to-amber-400/40 -translate-x-1/2" />

              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={fadeUp}
                    className={`relative flex items-start md:items-center gap-6 md:gap-0 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 top-3 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 ring-4 ring-white shadow-lg" />
                    </div>

                    {/* Card */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                      <div className="warm-card p-6">
                        <span className="inline-block font-display text-3xl font-bold text-gradient-warm">{m.year}</span>
                        <h3 className="text-lg font-bold text-orange-950 mt-1 mb-2">{m.event}</h3>
                        <p className="text-sm text-orange-900/70 leading-relaxed">{m.description}</p>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 warm-gradient-bg">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-warm rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <Calendar className="w-10 h-10 text-white/90 mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-[1.05]">
                Join our <span className="italic">mission</span>
              </h2>
              <p className="text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
                Whether you want to learn new skills or support our cause, we welcome you to be part of the Kiruba family.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild className="rounded-full bg-white text-orange-700 hover:bg-amber-50 font-bold px-7 py-5 shadow-lg">
                  <Link to="/courses">View Courses <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
                <Button asChild variant="ghost" className="btn-warm-ghost">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default About;
