import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Award,
  IndianRupee,
  Clock,
  Users,
  BookOpen,
  Scissors,
  Flower2,
  TreeDeciduous,
  Wifi,
  MapPin,
  FileText,
  UserCheck,
  Building,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PageTransition, AnimatedSection, AnimatedText, AnimatedCard } from "@/components/animations";
import tailoringImage from "@/assets/tailoring-course.jpg";
import aariImage from "@/assets/aari-work.jpg";
import juteImage from "@/assets/jute-work.jpg";
import broadbandImage from "@/assets/broadband-technician.jpg";
import beauticianImage from "@/assets/beautician-course.png";

const courses = [
  {
    id: "beautician",
    title: "Beautician Course Training",
    subtitle: "Professional Beauty & Wellness Program",
    description:
      "A comprehensive 3-month training program designed to equip you with professional skills in makeup, skin care, and salon management. This course includes government certification and a monthly stipend to support your learning journey.",
    image: beauticianImage,
    icon: Flower2,
    duration: "3 Months",
    certification: "Govt. Recognized Certificate",
    stipend: "₹12,000",
    formUrl: "https://forms.gle/FmLdeAcq9k1vj2nF6",
    features: [
      "Completely FREE training with zero hidden costs",
      "₹12,000 stipend provided upon completion",
      "Official Government recognized certification",
      "Hands-on practice with modern beauty kits",
      "Professional skin care and makeup techniques",
      "Bridal and party makeup specialization",
      "Salon management and entrepreneurship",
      "Placement and self-employment support",
    ],
    highlights: [
      { label: "Duration", value: "3 Months" },
      { label: "Stipend", value: "₹12,000" },
      { label: "Certificate", value: "Govt. Certified" },
      { label: "Fee", value: "100% Free" },
    ],
    highlighted: true,
    eligibility: {
      age: "18 to 45 Years",
      gender: "Female Preferred",
      qualification: "Minimum 10th pass & above",
    },
    documents: [
      "Passport Size Photo",
      "Aadhaar Card Xerox",
      "Education Certificate Xerox",
      "Bank Passbook Front Page",
    ],
  },
  {
    id: "broadband",
    title: "Broadband Technician Course",
    subtitle: "Under Naan Mudhalvan Scheme",
    description:
      "A comprehensive 3-month program conducted by TN Skill Development Corporation in association with Infonet Comm Enterprises Pvt Ltd. Get trained in broadband installation, maintenance, and networking with a generous monthly stipend.",
    image: broadbandImage,
    icon: Wifi,
    duration: "3 Months",
    certification: "TN Govt. Certificate",
    stipend: "₹12,000",
    formUrl: "https://forms.gle/FmLdeAcq9k1vj2nF6",
    features: [
      "Completely FREE training with no hidden costs",
      "₹12,000 monthly stipend provided",
      "Tamil Nadu Government Recognized Certificate",
      "Industry-oriented practical training",
      "Job-ready skill development",
      "Broadband installation & maintenance",
      "Networking fundamentals",
      "Placement assistance",
    ],
    highlights: [
      { label: "Duration", value: "3 Months" },
      { label: "Stipend", value: "₹12,000" },
      { label: "Certificate", value: "Govt. Certified" },
      { label: "Fee", value: "100% Free" },
    ],
    highlighted: true,
    eligibility: {
      age: "18 to 45 Years",
      gender: "Male & Female",
      qualification: "Minimum 10th pass & above (Degree holders also eligible)",
    },
    documents: [
      "Passport Size Photo",
      "Aadhaar Card Xerox",
      "Education Certificate Xerox",
      "Bank Passbook Front Page",
    ],
    association: ["Ministry of Textiles", "Textiles Committee (Government of India)"],
  },
  {
    id: "tailoring",
    title: "Free Tailoring Course",
    subtitle: "Under Naan Mudhalvan Scheme",
    description:
      "Our flagship program provides comprehensive tailoring training certified by the Tamil Nadu Skill Development Corporation. Students receive a ₹12,000 stipend and official government certification upon completion.",
    image: tailoringImage,
    icon: Scissors,
    duration: "3 Months",
    certification: "TN Govt. Certificate",
    stipend: "₹12,000",
    formUrl: "https://forms.gle/FmLdeAcq9k1vj2nF6",
    features: [
      "Completely FREE training with no hidden costs",
      "₹12,000 stipend provided to all students",
      "Official Tamil Nadu Government Certificate",
      "Basic & advanced tailoring techniques",
      "Practical hands-on training sessions",
      "Job-oriented skill development",
      "Self-employment guidance",
      "Access to sewing machines during training",
    ],
    highlights: [
      { label: "Duration", value: "3 Months" },
      { label: "Stipend", value: "₹12,000" },
      { label: "Certificate", value: "Govt. Certified" },
      { label: "Fee", value: "100% Free" },
    ],
    highlighted: true,
  },
  {
    id: "aari",
    title: "Aari Work Training",
    subtitle: "Traditional Embroidery Art",
    description:
      "Learn the beautiful art of Aari embroidery, a traditional technique used in creating intricate designs on fabrics. This skill opens doors to creative self-employment opportunities in the fashion industry.",
    image: aariImage,
    icon: Flower2,
    duration: "2 Months",
    certification: "Completion Certificate",
    formUrl: "https://forms.gle/FmLdeAcq9k1vj2nF6",
    features: [
      "Traditional Aari embroidery techniques",
      "Colorful thread work designs",
      "Fabric selection and preparation",
      "Pattern creation and transfer",
      "Finishing and quality techniques",
      "Business and pricing guidance",
    ],
    highlights: [
      { label: "Duration", value: "2 Months" },
      { label: "Type", value: "Traditional Art" },
      { label: "Outcome", value: "Self-Employment" },
    ],
    highlighted: false,
  },
  {
    id: "jute",
    title: "Jute Work Training",
    subtitle: "Eco-Friendly Craft",
    description:
      "Master the art of creating eco-friendly jute products including bags, home decor, and accessories. This sustainable skill enables you to build a business in the growing green products market.",
    image: juteImage,
    icon: TreeDeciduous,
    duration: "2 Months",
    certification: "Completion Certificate",
    formUrl: "https://forms.gle/FmLdeAcq9k1vj2nF6",
    features: [
      "Jute material handling and processing",
      "Bag and accessory making",
      "Home decor product creation",
      "Design and pattern making",
      "Eco-friendly finishing techniques",
      "Market and selling strategies",
    ],
    highlights: [
      { label: "Duration", value: "2 Months" },
      { label: "Type", value: "Eco-Craft" },
      { label: "Market", value: "Growing Demand" },
    ],
    highlighted: false,
  },
];

const Courses = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <PageTransition>
      <Layout>
        {/* Hero Section */}
        <section className="section-padding bg-[#fff1dc]">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-success text-success-foreground rounded-full text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  <span>Government Certified Programs</span>
                </div>
              </AnimatedSection>
              <AnimatedText as="h1" delay={0.1} zoom className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Free Skill Development{" "}
                <span className="text-primary">Courses</span>
              </AnimatedText>
              <AnimatedText as="p" delay={0.2} className="text-lg text-muted-foreground">
                Empowering women and youth with job-ready skills through our
                comprehensive training programs. All courses are designed for
                self-employment and sustainable livelihoods.
              </AnimatedText>
            </div>
          </div>
        </section>

        {/* Courses List */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="space-y-16">
              {courses.map((course, index) => (
                <AnimatedSection
                  key={course.id}
                  delay={0}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div
                    id={course.id}
                    className={`scroll-mt-24 ${course.highlighted
                        ? "bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-3xl p-8 md:p-12"
                        : ""
                      }`}
                  >
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                        }`}
                    >
                      {/* Image */}
                      <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                        <motion.div
                          className="relative rounded-2xl overflow-hidden card-shadow"
                          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-80 object-cover"
                          />
                          {course.id === "tailoring" && (
                            <motion.div
                              className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold"
                              initial={prefersReducedMotion ? {} : { scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3, type: "spring" }}
                            >
                              <IndianRupee className="w-4 h-4" />
                              12,000 Stipend
                            </motion.div>
                          )}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                            <course.icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                              {course.title}
                            </h2>
                            <p className="text-sm text-primary font-medium">
                              {course.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {course.description}
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {course.highlights.map((highlight, hIndex) => (
                            <motion.div
                              key={highlight.label}
                              className="bg-card rounded-xl p-4 text-center card-shadow"
                              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: hIndex * 0.05 }}
                            >
                              <p className="text-lg font-bold text-primary">
                                {highlight.value}
                              </p>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                                {highlight.label}
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                          {course.features.map((feature, fIndex) => (
                            <motion.div
                              key={feature}
                              className="flex items-start gap-2 text-sm"
                              initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: fIndex * 0.03 }}
                            >
                              <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                              <span className="text-foreground">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        <motion.div
                          whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                          whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                          className="inline-block"
                        >
                          <Button asChild size="lg">
                            <a href={course.formUrl} target="_blank" rel="noopener noreferrer">
                              Enroll Now
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-[#fff1dc]">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <AnimatedText as="h2" zoom className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Why Train With Us?
              </AnimatedText>
              <AnimatedText as="p" delay={0.1} className="text-lg text-muted-foreground">
                What makes our programs unique and valuable.
              </AnimatedText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: IndianRupee,
                  title: "100% Free",
                  description:
                    "No fees, no hidden costs. Education should be accessible to all.",
                },
                {
                  icon: Award,
                  title: "Govt. Certified",
                  description:
                    "Receive official Tamil Nadu Government certification.",
                },
                {
                  icon: Users,
                  title: "Expert Trainers",
                  description:
                    "Learn from experienced professionals with years of expertise.",
                },
                {
                  icon: BookOpen,
                  title: "Practical Focus",
                  description:
                    "Hands-on training that prepares you for real-world work.",
                },
              ].map((item, index) => (
                <AnimatedCard
                  key={item.title}
                  delay={index * 0.1}
                  className="bg-card rounded-2xl p-6 text-center card-shadow"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Training Locations */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Training Locations</span>
                </div>
              </AnimatedSection>
              <AnimatedText as="h2" delay={0.1} zoom className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Where Training Happens
              </AnimatedText>
              <AnimatedText as="p" delay={0.2} className="text-lg text-muted-foreground">
                Join our skill development programs at these convenient locations.
              </AnimatedText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Kulasekharam Location */}
              <AnimatedCard delay={0} className="bg-card rounded-2xl p-8 card-shadow border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      Kulasekharam
                    </h3>
                    <p className="font-semibold text-primary mb-2">
                      Kiruba Educational & Charitable Trust
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Kalladimamoodu Junction, Cherupaloor Post,
                      <br />
                      Kulasekharam – 629161
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <a href="tel:9442301105" className="text-primary hover:underline">
                        9442301105
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a href="tel:04651290332" className="text-primary hover:underline">
                        04651-290332
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              {/* Kuzhithurai Location */}
              <AnimatedCard delay={0.1} className="bg-card rounded-2xl p-8 card-shadow border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      Kuzhithurai
                    </h3>
                    <p className="font-semibold text-accent mb-2">
                      Sherina Skill Training and Social Welfare Organization
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Opp. Reliance Petrol Pump, Kallukatti,
                      <br />
                      Kuzhithurai – 629163
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <a href="tel:9442301105" className="text-primary hover:underline">
                        9442301105
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a href="tel:9443801105" className="text-primary hover:underline">
                        9443801105
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="section-padding bg-[#fff1dc]">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <AnimatedText as="h2" zoom className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Eligibility & Documents
              </AnimatedText>
              <AnimatedText as="p" delay={0.1} className="text-lg text-muted-foreground">
                Check if you qualify for our skill development programs.
              </AnimatedText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Eligibility */}
              <AnimatedCard delay={0} className="bg-card rounded-2xl p-8 card-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    Eligibility Criteria
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Age Limit</p>
                      <p className="text-sm text-muted-foreground">18 to 45 Years</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Gender</p>
                      <p className="text-sm text-muted-foreground">Male & Female</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Qualification</p>
                      <p className="text-sm text-muted-foreground">
                        Minimum 10th pass & above (Degree holders also eligible)
                      </p>
                    </div>
                  </li>
                </ul>
              </AnimatedCard>

              {/* Documents */}
              <AnimatedCard delay={0.1} className="bg-card rounded-2xl p-8 card-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    Required Documents
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Passport Size Photo",
                    "Aadhaar Card Xerox",
                    "Education Certificate Xerox",
                    "Bank Passbook Front Page",
                  ].map((doc, index) => (
                    <motion.li
                      key={doc}
                      className="flex items-center gap-3"
                      initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground">{doc}</span>
                    </motion.li>
                  ))}
                </ul>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-hero">
          <div className="container-width text-center">
            <AnimatedText as="h2" zoom className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Start Learning?
            </AnimatedText>
            <AnimatedText as="p" delay={0.1} className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Enrollment is now open for our upcoming batch. Take the first step
              towards a skilled and independent future.
            </AnimatedText>
            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                className="inline-block"
              >
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Contact Us to Enroll</Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default Courses;
