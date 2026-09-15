import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Stethoscope,
  ShieldCheck,
  GraduationCap,
  HandHeart,
  CheckCircle,
  Building2,
  BadgeCheck,
  Clock,
  Users,
  Phone,
  Copy,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  PageTransition,
  AnimatedSection,
  AnimatedText,
  AnimatedCard,
} from "@/components/animations";

// Import images
import medicalCamp1 from "@/assets/donation/medical-camp-1.jpg";
import medicalCamp2 from "@/assets/donation/medical-camp-2.jpg";
import healthCheckup from "@/assets/donation/health-checkup.jpg";

const impactItems = [
  {
    icon: Stethoscope,
    title: "Free Medical Check-up Camps",
    description:
      "Conducted in association with Annamal Hospital, Kanyakumari providing healthcare to underserved communities.",
  },
  {
    icon: ShieldCheck,
    title: "COVID-19 Relief Support",
    description:
      "Food distribution, essential supplies during lockdown, and support for affected families in need.",
  },
  {
    icon: GraduationCap,
    title: "Free Skill Training Programs",
    description:
      "Empowering women and youth with vocational skills for sustainable livelihoods and self-employment.",
  },
  {
    icon: HandHeart,
    title: "Community Welfare Activities",
    description:
      "Supporting underprivileged families with educational materials, clothing, and essential necessities.",
  },
];

const whyDonate = [
  {
    icon: Building2,
    text: "Registered Trust (Reg No: 42/2011)",
  },
  {
    icon: BadgeCheck,
    text: "Income Tax Exempted (12AA & 80G Registered)",
  },
  {
    icon: Clock,
    text: "14+ Years of Dedicated Social Service",
  },
  {
    icon: Users,
    text: "Government & CSR Recognized NGO",
  },
  {
    icon: CheckCircle,
    text: "100% Transparent and Impact-Focused",
  },
];

const galleryImages = [
  {
    src: medicalCamp1,
    caption: "Medicine Distribution at Free Health Camp",
  },
  {
    src: medicalCamp2,
    caption: "Inauguration of Free Medical Camp",
  },
  {
    src: healthCheckup,
    caption: "Free Health Check-up Camp for Women",
  },
];

const Donation = () => {
  const prefersReducedMotion = useReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Close the lightbox with the Escape key
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageTransition>
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="container-width section-padding relative">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  <Heart className="w-4 h-4" />
                  <span>Support Our Mission</span>
                </div>
              </AnimatedSection>

              <AnimatedText
                as="h1"
                delay={0.2}
                zoom
                className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight"
              >
                Donate to{" "}
                <span className="text-primary">
                  Kiruba Education & Charitable Trust
                </span>
              </AnimatedText>

              <AnimatedText
                as="p"
                delay={0.3}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Your contribution helps us continue our mission of empowering
                underprivileged communities through education, healthcare, and
                skill development in Kanyakumari District, Tamil Nadu.
              </AnimatedText>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <AnimatedCard className="p-8 md:p-10 bg-card rounded-2xl shadow-lg border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                      About Our Trust
                    </h2>
                    <p className="text-muted-foreground">
                      Established in 2011 | Reg No: 42/2011
                    </p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong>Kiruba Education & Charitable Trust</strong> is a
                  registered non-profit organization working tirelessly for{" "}
                  <strong>education, women empowerment, free skill training,</strong>{" "}
                  and <strong>social welfare</strong> in Kanyakumari District,
                  Tamil Nadu.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  For over <strong>14 years</strong>, we have been making a
                  difference in the lives of thousands of people. All donations
                  are used <strong>100% for social welfare activities</strong>{" "}
                  with complete transparency and accountability.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="section-padding bg-[#fff1dc]/30">
          <div className="container-width">
            <AnimatedText
              as="h2"
              zoom
              className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4"
            >
              How Your Support Makes a{" "}
              <span className="text-primary">Difference</span>
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.1}
              className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              Your generous contributions enable us to carry out these vital
              community welfare programs.
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {impactItems.map((item, index) => (
                <AnimatedCard
                  key={item.title}
                  delay={index * 0.1}
                  className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <AnimatedText
              as="h2"
              zoom
              className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4"
            >
              Moments of <span className="text-primary">Service</span>
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.1}
              className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              Images from our free medical camps, COVID relief activities, and
              training programs.
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <motion.div
                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                    onClick={() => openLightbox(index)}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={image.src}
                      alt={image.caption}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-orange-950 text-sm font-medium">
                        {image.caption}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#fff6e8]/90 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                aria-label="Close"
                className="absolute top-4 right-4 p-2 bg-white hover:bg-white/20 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6 text-orange-950" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
                className="absolute left-4 p-2 bg-white hover:bg-white/20 rounded-full transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6 text-orange-950" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
                className="absolute right-4 p-2 bg-white hover:bg-white/20 rounded-full transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6 text-orange-950" />
              </button>

              <motion.div
                className="relative max-w-5xl max-h-[85vh]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].caption}
                  className="max-w-full max-h-[80vh] rounded-lg object-contain"
                />
                <p className="text-orange-950 text-center mt-4 text-lg">
                  {galleryImages[currentImageIndex].caption}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Why Donate Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-width">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedText
                  as="h2"
                  zoom
                  className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6"
                >
                  Why Donate to{" "}
                  <span className="text-primary">Kiruba Trust?</span>
                </AnimatedText>
                <AnimatedText
                  as="p"
                  delay={0.1}
                  className="text-muted-foreground mb-8"
                >
                  Your trust is our highest priority. Here's why you can be
                  confident in your contribution:
                </AnimatedText>

                <div className="space-y-4">
                  {whyDonate.map((item, index) => (
                    <AnimatedSection key={item.text} delay={index * 0.1}>
                      <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                        <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-success" />
                        </div>
                        <span className="text-foreground font-medium">
                          {item.text}
                        </span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Bank Details Card */}
              <AnimatedCard delay={0.2}>
                <Card className="bg-card border-2 border-primary/20 shadow-xl">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground">
                          Donation & Bank Details
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Transfer directly to our account
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-[#fff1dc]/50 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">
                          Account Name
                        </p>
                        <p className="font-semibold text-foreground">
                          Kiruba Education & Charitable Trust
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-[#fff1dc]/50 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">
                            Bank Name
                          </p>
                          <p className="font-semibold text-foreground">Canara Bank</p>
                        </div>
                        <div className="p-4 bg-[#fff1dc]/50 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">
                            Branch
                          </p>
                          <p className="font-semibold text-foreground">Kulasekharam</p>
                        </div>
                      </div>

                      <div className="p-4 bg-[#fff1dc]/50 rounded-lg flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Account Number
                          </p>
                          <p className="font-semibold text-foreground">
                            0956101031031
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard("0956101031031")}
                          className="shrink-0"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="p-4 bg-[#fff1dc]/50 rounded-lg flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            IFSC Code
                          </p>
                          <p className="font-semibold text-foreground">
                            CNRB0000956
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard("CNRB0000956")}
                          className="shrink-0"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>

                      {copied && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-success text-center"
                        >
                          Copied to clipboard!
                        </motion.p>
                      )}
                    </div>

                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-sm text-center text-muted-foreground">
                        <strong className="text-primary">Note:</strong> Please
                        share your transaction details with us for receipt and
                        80G certificate.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-hero">
          <div className="container-width text-center">
            <AnimatedText
              as="h2"
              zoom
              className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4"
            >
              Your Small Contribution Can Change Lives
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.1}
              className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8"
            >
              Join us in our mission to empower underprivileged communities.
              Every donation, big or small, makes a meaningful difference.
            </AnimatedText>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                >
                  <Button asChild variant="hero" size="lg">
                    <a href="tel:9442301105">
                      <Phone className="w-5 h-5 mr-2" />
                      Contact for Donation
                    </a>
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

        {/* Footer Note */}
        <section className="py-8 bg-[#fff1dc]/50">
          <div className="container-width text-center">
            <AnimatedText
              as="p"
              className="text-sm text-muted-foreground max-w-3xl mx-auto"
            >
              <strong>Kiruba Education & Charitable Trust</strong> is a
              non-profit organization dedicated to the upliftment of
              underprivileged communities in Kanyakumari District. All donations
              are eligible for tax exemption under Section 80G of the Income Tax
              Act.
            </AnimatedText>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default Donation;
