import { Layout } from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { Camera, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PageTransition, AnimatedSection, AnimatedText, AnimatedCard } from "@/components/animations";

// Practical Tailoring Class Images
import practical1 from "@/assets/practical-1.jpeg";
import practical2 from "@/assets/practical-2.jpeg";
import practical3 from "@/assets/practical-3.jpeg";

// Theory Class Images
import theory1 from "@/assets/theory-1.jpeg";
import theory2 from "@/assets/theory-2.jpeg";
import theory3 from "@/assets/theory-3.jpeg";

// Certificate Distribution Images
import certificate1 from "@/assets/certificate-1.jpeg";
import certificate2 from "@/assets/certificate-2.jpeg";

const galleryCategories = [
  {
    title: "Practical Tailoring Classes",
    description: "Hands-on training with industrial sewing machines",
    images: [
      { src: practical1, alt: "Students practicing tailoring skills" },
      { src: practical2, alt: "Women learning on sewing machines" },
      { src: practical3, alt: "Practical tailoring session in progress" },
    ],
  },
  {
    title: "Theory Classes",
    description: "Classroom learning sessions under the Naan Mudhalvan Scheme",
    images: [
      { src: theory1, alt: "Theory class with instructor" },
      { src: theory2, alt: "Students attending theory session" },
      { src: theory3, alt: "Classroom learning session" },
    ],
  },
  {
    title: "Certificate Distribution",
    description: "Celebrating student achievements with Government certificates",
    images: [
      { src: certificate1, alt: "Student receiving government certificate" },
      { src: certificate2, alt: "Batch completion ceremony" },
    ],
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Allow closing the lightbox with the Escape key
  useEffect(() => {
    if (!selectedImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  return (
    <PageTransition>
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-[#fff6e8] overflow-hidden fabric-texture">
          <div className="absolute top-0 -left-20 w-[320px] h-[320px] rounded-full bg-orange-400/15 blur-[100px]" />
          <div className="absolute bottom-0 -right-20 w-[320px] h-[320px] rounded-full bg-amber-300/20 blur-[100px]" />
          <div className="container-width section-hero relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="warm-badge inline-block mb-6">
                  <Camera className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                  <span>Our Training in Action</span>
                </div>
              </AnimatedSection>
              <AnimatedText as="h1" delay={0.1} zoom className="text-4xl md:text-6xl font-display font-bold text-orange-950 mb-6 leading-[1.05]">
                Photo <span className="text-gradient-warm italic">Gallery</span>
              </AnimatedText>
              <AnimatedText as="p" delay={0.2} className="text-lg md:text-xl text-orange-900/75 leading-relaxed">
                Glimpses of our skill development programs, training sessions, and
                certificate distribution ceremonies.
              </AnimatedText>
            </div>
          </div>
        </section>

        {/* Gallery Sections */}
        <section className="section-padding bg-[#fff6e8]">
          <div className="container-width">
            <div className="space-y-16">
              {galleryCategories.map((category, categoryIndex) => (
                <div key={category.title}>
                  <AnimatedSection delay={categoryIndex * 0.1} className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </AnimatedSection>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.images.map((image, imageIndex) => (
                      <AnimatedCard
                        key={imageIndex}
                        delay={imageIndex * 0.1}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden card-shadow cursor-pointer"
                        hoverEffect={false}
                      >
                        <motion.div
                          className="w-full h-full"
                          onClick={() => setSelectedImage(image.src)}
                          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-primary-foreground text-sm font-medium">
                              {image.alt}
                            </p>
                          </div>
                        </motion.div>
                      </AnimatedCard>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-[#fff6e8]/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className="absolute top-4 right-4 p-2 text-primary-foreground hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
                whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
              >
                <X className="w-8 h-8" />
              </motion.button>
              <motion.img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-[90vh] rounded-lg object-contain"
                onClick={(e) => e.stopPropagation()}
                initial={prefersReducedMotion ? {} : { scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Layout>
    </PageTransition>
  );
};

export default Gallery;
