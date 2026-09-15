import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Quote, Target, Eye, Heart, Users, Award, Calendar } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PageTransition, AnimatedSection, AnimatedText, AnimatedCard, AnimatedImage } from "@/components/animations";
import mrFranklin from "@/assets/mr-franklin.png";

const milestones = [
  { year: "2011", event: "Trust Registered", description: "Kiruba Education & Charitable Trust was officially registered (Govt. Regd No: 42/2011) with a vision to empower women." },
  { year: "2015", event: "First Batch Graduated", description: "Successfully trained our first batch of 50 women in tailoring skills." },
  { year: "2020", event: "Government Partnership", description: "Partnered with TN Skill Development Corporation under Naan Mudhalvan Scheme." },
  { year: "2023", event: "Expanded Programs", description: "Added Aari work, Jute work, and Broadband Technician training to our curriculum." },
  { year: "2024", event: "5000+ Beneficiaries", description: "Reached the milestone of training over 5000 students." },
];

const About = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <PageTransition>
      <Layout>
        {/* Hero Section */}
        <section className="section-padding bg-[#fff1dc]">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedText as="h1" zoom className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                About <span className="text-primary">Kiruba Trust</span>
              </AnimatedText>
              <AnimatedText as="p" delay={0.1} className="text-lg text-muted-foreground">
                For over 14 years, we have been dedicated to empowering women and youth 
                through free skill development programs in Tamil Nadu.
              </AnimatedText>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedCard delay={0} className="bg-card rounded-2xl p-8 card-shadow">
                <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower women and youth from economically disadvantaged backgrounds 
                  by providing free, quality skill development training that enables them 
                  to achieve financial independence and lead dignified lives.
                </p>
              </AnimatedCard>

              <AnimatedCard delay={0.1} className="bg-card rounded-2xl p-8 card-shadow">
                <div className="w-14 h-14 rounded-full gradient-warm flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A society where every woman has access to skill development opportunities, 
                  enabling them to become self-reliant entrepreneurs and contributing members 
                  of their communities.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Director's Message */}
        <section className="section-padding bg-[#fff1dc]">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <AnimatedSection delay={0.1}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                    <Quote className="w-4 h-4" />
                    <span>Director's Message</span>
                  </div>
                </AnimatedSection>
                <AnimatedText as="h2" delay={0.2} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  R. Franklin <span className="text-lg font-normal text-muted-foreground">M.Com, MSW</span>
                </AnimatedText>
                <AnimatedText as="p" delay={0.3} className="text-lg text-muted-foreground leading-relaxed mb-6">
                  "When we started Kiruba Trust in 2011, our dream was simple – to give 
                  women the skills they need to support themselves and their families. 
                  Today, seeing over 5000 women transform their lives fills my heart with 
                  immense joy and gratitude."
                </AnimatedText>
                <AnimatedText as="p" delay={0.4} className="text-muted-foreground leading-relaxed mb-8">
                  "Our partnership with the Tamil Nadu Government through the Naan Mudhalvan 
                  Scheme has enabled us to provide not just training, but also financial 
                  support through stipends. Every woman who joins our program leaves with 
                  not just skills, but confidence and hope for a better future."
                </AnimatedText>
                <AnimatedSection delay={0.5}>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-semibold text-foreground">R. Franklin, M.Com, MSW</p>
                      <p className="text-sm text-muted-foreground">Managing Director</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div className="order-1 lg:order-2 flex justify-center">
                <AnimatedSection direction="right" className="relative">
                  <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden card-shadow">
                    <img
                      src={mrFranklin}
                      alt="Mr. Franklin - Director"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <motion.div 
                    className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 card-shadow"
                    initial={prefersReducedMotion ? {} : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <p className="text-2xl font-display font-bold">14+</p>
                    <p className="text-sm">Years Leading</p>
                  </motion.div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <AnimatedText as="h2" zoom className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Core Values
              </AnimatedText>
              <AnimatedText as="p" delay={0.1} className="text-lg text-muted-foreground">
                The principles that guide everything we do at Kiruba Trust.
              </AnimatedText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Compassion",
                  description: "We believe in serving with love and understanding the needs of every individual.",
                },
                {
                  icon: Users,
                  title: "Empowerment",
                  description: "Our goal is to enable women to become independent and self-sufficient.",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We maintain high standards in training to ensure quality skill development.",
                },
              ].map((value, index) => (
                <AnimatedCard
                  key={value.title}
                  delay={index * 0.1}
                  className="text-center p-8 bg-card rounded-2xl card-shadow"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-[#fff1dc]">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Our Journey</span>
                </div>
              </AnimatedSection>
              <AnimatedText as="h2" delay={0.1} zoom className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                14+ Years of Impact
              </AnimatedText>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <AnimatedSection
                    key={milestone.year}
                    delay={index * 0.1}
                    direction={index % 2 === 0 ? "left" : "right"}
                    className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card rounded-xl p-6 card-shadow">
                        <span className="text-2xl font-display font-bold text-primary">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </div>
                    </div>

                    <motion.div 
                      className="w-4 h-4 rounded-full bg-primary shrink-0 z-10"
                      initial={prefersReducedMotion ? {} : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                    />

                    <div className="flex-1 hidden md:block" />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-hero">
          <div className="container-width text-center">
            <AnimatedText as="h2" zoom className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Join Our Mission
            </AnimatedText>
            <AnimatedText as="p" delay={0.1} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Whether you want to learn new skills or support our cause, we welcome you to be part of the Kiruba family.
            </AnimatedText>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                >
                  <Button asChild variant="hero" size="lg">
                    <Link to="/courses">View Courses</Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                >
                  <Button asChild variant="heroOutline" size="lg">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default About;
