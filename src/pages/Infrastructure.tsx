import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection, AnimatedText, AnimatedCard, AnimatedImage } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  User,
  Scissors,
  Monitor,
  Calculator,
  Printer,
  CheckCircle,
  Shield,
  Droplets,
  Camera,
  Heart,
  Flame,
  Zap,
  Car,
  Utensils,
  Wifi,
  Award,
  BookOpen,
  Users,
  Briefcase,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Import all infrastructure images
import institutionFront from "@/assets/infrastructure/institution-front.jpg";
import directorOffice from "@/assets/infrastructure/director-office.jpg";
import reception from "@/assets/infrastructure/reception.jpg";
import classroom1 from "@/assets/infrastructure/classroom-1.jpg";
import classroom2 from "@/assets/infrastructure/classroom-2.jpg";
import classroom3 from "@/assets/infrastructure/classroom-3.jpg";
import computerLab1 from "@/assets/infrastructure/computer-lab-1.jpg";
import computerLab2 from "@/assets/infrastructure/computer-lab-2.jpg";
import computerLab3 from "@/assets/infrastructure/computer-lab-3.jpg";
import seminarHall from "@/assets/infrastructure/seminar-hall.jpg";
import counselingArea from "@/assets/infrastructure/counseling-area.jpg";
import library from "@/assets/infrastructure/library.jpg";
import placementCell from "@/assets/infrastructure/placement-cell.jpg";
import firstAid from "@/assets/infrastructure/first-aid.jpg";
import fireExtinguisher from "@/assets/infrastructure/fire-extinguisher.jpg";
import cctv from "@/assets/infrastructure/cctv.jpg";
import ups from "@/assets/infrastructure/ups.jpg";
import pantry from "@/assets/infrastructure/pantry.jpg";
import drinkingWater from "@/assets/infrastructure/drinking-water.jpg";
import biometric from "@/assets/infrastructure/biometric.jpg";
import tailoringRoom1 from "@/assets/infrastructure/tailoring-room-1.jpg";
import tailoringRoom2 from "@/assets/infrastructure/tailoring-room-2.jpg";
import cuttingRoom1 from "@/assets/infrastructure/cutting-room-1.jpg";
import cuttingRoom2 from "@/assets/infrastructure/cutting-room-2.jpg";
import ironingRoom from "@/assets/infrastructure/ironing-room.jpg";
import embroideryWork from "@/assets/infrastructure/embroidery-work.jpg";
import goldAppraiser from "@/assets/infrastructure/gold-appraiser.jpg";

const trainingPrograms = [
  { name: "Self Employed Tailor", icon: Scissors },
  { name: "Sewing Machine Operator", icon: Scissors },
  { name: "Data Entry Operator", icon: Monitor },
  { name: "Account Assistant (Tally)", icon: Calculator },
  { name: "DTP Operator", icon: Printer },
];

const infrastructureStats = [
  { label: "Total Area", value: "3000 sq.ft / 1900 sq.ft" },
  { label: "Theory Classrooms", value: "3" },
  { label: "Computer Labs", value: "3" },
  { label: "Workshops", value: "3" },
  { label: "Simulators", value: "3" },
];

const facilities = [
  { name: "Seminar Hall", icon: Users },
  { name: "Counseling Area", icon: Heart },
  { name: "Library", icon: BookOpen },
  { name: "Placement Cell", icon: Briefcase },
];

const practicalFacilities = [
  { name: "Tailoring Practical Room 1", image: tailoringRoom1 },
  { name: "Tailoring Practical Room 2", image: tailoringRoom2 },
  { name: "Cutting Room 1", image: cuttingRoom1 },
  { name: "Cutting Room 2", image: cuttingRoom2 },
  { name: "Ironing Room", image: ironingRoom },
  { name: "Embroidery & Aari Work", image: embroideryWork },
  { name: "Gold Appraiser Training", image: goldAppraiser },
];

const safetyFeatures = [
  { name: "Fire Extinguishers Installed", icon: Flame },
  { name: "CCTV Monitoring", icon: Camera },
  { name: "First Aid Box Available", icon: Heart },
  { name: "Building Stability Certificate", icon: Shield },
  { name: "Separate Toilets (Male & Female)", icon: Users },
  { name: "RO / Bottled Drinking Water", icon: Droplets },
  { name: "Biometric Attendance System", icon: CheckCircle },
  { name: "Internet Facility (100 Mbps)", icon: Wifi },
  { name: "UPS / Power Backup", icon: Zap },
  { name: "Parking Area", icon: Car },
  { name: "Pantry / Small Kitchen", icon: Utensils },
  { name: "Air-Cooler Available", icon: Droplets },
];

const governmentSchemes = {
  selfFunded: true,
  nsdc: true,
  star: true,
  mord: true,
  stateSchemes: ["MANAS", "DDU-GKY", "NULM", "ESDM", "PMGDISHA"],
};

const galleryImages = [
  { src: institutionFront, caption: "Institution Front View" },
  { src: reception, caption: "Reception" },
  { src: directorOffice, caption: "Director Office" },
  { src: classroom1, caption: "Classroom 1" },
  { src: classroom2, caption: "Classroom 2" },
  { src: classroom3, caption: "Classroom 3" },
  { src: computerLab1, caption: "Computer Lab 1" },
  { src: computerLab2, caption: "Computer Lab 2" },
  { src: computerLab3, caption: "Computer Lab 3" },
  { src: seminarHall, caption: "Seminar Hall" },
  { src: counselingArea, caption: "Counseling Area" },
  { src: library, caption: "Library" },
  { src: placementCell, caption: "Placement Cell" },
  { src: tailoringRoom1, caption: "Tailoring Practical Room 1" },
  { src: tailoringRoom2, caption: "Tailoring Practical Room 2" },
  { src: fireExtinguisher, caption: "Fire Extinguisher" },
  { src: cctv, caption: "CCTV Installation" },
  { src: firstAid, caption: "First Aid Kit" },
  { src: drinkingWater, caption: "Drinking Water" },
  { src: biometric, caption: "Biometric Attendance" },
];

function Infrastructure() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-success/10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjI1MjkiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          
          <div className="container-width section-padding relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection delay={0.1}>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <Building2 className="w-3 h-3 mr-1" />
                  Government Compliant Facility
                </Badge>
              </AnimatedSection>
              
              <AnimatedText as="h1" delay={0.2} zoom className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
                Infrastructure & Training Facilities
              </AnimatedText>
              
              <AnimatedText as="p" delay={0.3} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Well-equipped, government-compliant training infrastructure supporting skill development and employment.
              </AnimatedText>
            </div>
          </div>
        </section>

        {/* Organization Overview */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold text-center mb-12">Organization Overview</h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedCard delay={0.1} className="bg-background rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Organization Name</p>
                    <p className="font-semibold text-foreground">Kiruba Educational & Charitable Trust</p>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.15} className="bg-background rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Training Centre Name</p>
                    <p className="font-semibold text-foreground">Sherina Community College</p>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2} className="bg-background rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Type of Centre</p>
                    <p className="font-semibold text-foreground">Franchisee</p>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.25} className="bg-background rounded-xl p-6 border border-border shadow-sm md:col-span-2 lg:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Franchise Partners</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Tamil Nadu Open University</Badge>
                      <Badge variant="secondary">ICER (ISO Certified)</Badge>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3} className="bg-background rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Project Working Area</p>
                    <p className="font-semibold text-foreground">Kanyakumari District</p>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Address & Contact Details */}
        <section className="section-padding">
          <div className="container-width">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold text-center mb-12">Address & Contact Details</h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedCard delay={0.1} className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Address</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-medium text-foreground">Kalladimamoodu Junction</p>
                  <p>Cherupaloor (PO), Kulasekharam</p>
                  <p>Kalkulam Taluk, Pin: 629161</p>
                  <p>Kanyakumari District, Tamil Nadu</p>
                  <p className="pt-2 text-sm italic">Landmark: Opposite PWD Office</p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2} className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold">Contact</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Centre Manager</p>
                      <p className="font-medium">R. Franklin</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                      <a href="tel:9442301105" className="font-medium text-primary hover:underline">9442301105</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Training Centre Phone</p>
                      <a href="tel:04651290332" className="font-medium text-primary hover:underline">04651 – 290332</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:kecttrust@gmail.com" className="font-medium text-primary hover:underline">kecttrust@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Website</p>
                      <span className="font-medium text-foreground">www.kecttrust.in</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold text-center mb-4">Training Programs Offered</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Government-certified skill development programs designed for employment
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {trainingPrograms.map((program, index) => (
                <AnimatedCard 
                  key={program.name} 
                  delay={0.1 + index * 0.05}
                  className="bg-background rounded-xl p-6 border border-border shadow-sm text-center hover:border-primary/50 transition-colors"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <program.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-medium text-sm text-foreground">{program.name}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Classroom & Lab Infrastructure */}
        <section className="section-padding">
          <div className="container-width">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold text-center mb-4">Classroom & Lab Infrastructure</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Modern facilities equipped for practical skill training
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Stats */}
              <AnimatedCard delay={0.1} className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Infrastructure Overview</h3>
                <div className="grid grid-cols-2 gap-4">
                  {infrastructureStats.map((stat, index) => (
                    <div key={stat.label} className="bg-background p-4 rounded-lg">
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedCard>

              {/* Additional Facilities */}
              <AnimatedCard delay={0.2} className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Additional Facilities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <div key={facility.name} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                      <facility.icon className="w-5 h-5 text-success" />
                      <span className="text-sm font-medium">{facility.name}</span>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: classroom1, caption: "Classroom 1" },
                { src: classroom2, caption: "Classroom 2" },
                { src: computerLab1, caption: "Computer Lab 1" },
                { src: seminarHall, caption: "Seminar Hall" },
              ].map((item, index) => (
                <AnimatedCard 
                  key={item.caption} 
                  delay={0.1 + index * 0.05}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  hoverEffect={false}
                >
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage(item)}
                  >
                    <img 
                      src={item.src} 
                      alt={item.caption}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-orange-950 text-sm font-medium">{item.caption}</p>
                    </div>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Training Facilities */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold text-center mb-4">Practical Training Facilities</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Hands-on training areas for developing real-world skills
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {practicalFacilities.map((facility, index) => (
                <AnimatedCard 
                  key={facility.name} 
                  delay={0.1 + index * 0.03}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  hoverEffect={false}
                >
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage({ src: facility.image, caption: facility.name })}
                  >
                    <img 
                      src={facility.image} 
                      alt={facility.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <p className="text-orange-950 text-sm font-medium">{facility.name}</p>
                    </div>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Compliance */}
        <section className="section-padding">
          <div className="container-width">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold text-center mb-4">Safety & Compliance Facilities</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Ensuring a safe and secure learning environment
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {safetyFeatures.map((feature, index) => (
                <AnimatedCard 
                  key={feature.name} 
                  delay={0.05 + index * 0.03}
                  className="bg-card rounded-xl p-4 border border-border shadow-sm flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{feature.name}</p>
                </AnimatedCard>
              ))}
            </div>

            {/* Safety Images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { src: fireExtinguisher, caption: "Fire Extinguisher" },
                { src: cctv, caption: "CCTV Installation" },
                { src: firstAid, caption: "First Aid Kit" },
                { src: biometric, caption: "Biometric Attendance" },
              ].map((item, index) => (
                <AnimatedCard 
                  key={item.caption} 
                  delay={0.1 + index * 0.05}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  hoverEffect={false}
                >
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage(item)}
                  >
                    <img 
                      src={item.src} 
                      alt={item.caption}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-orange-950 text-sm font-medium">{item.caption}</p>
                    </div>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Government & Scheme Compliance */}
        <section className="section-padding bg-card">
          <div className="container-width">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold text-center mb-4">Government & Scheme Compliance</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Recognized and approved by multiple government bodies
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedCard delay={0.1} className="bg-background rounded-xl p-8 border border-border shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Funding & Approvals</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Self-Funded", approved: governmentSchemes.selfFunded },
                    { name: "NSDC", approved: governmentSchemes.nsdc },
                    { name: "STAR Scheme", approved: governmentSchemes.star },
                    { name: "MoRD", approved: governmentSchemes.mord },
                  ].map((scheme) => (
                    <div key={scheme.name} className="flex items-center gap-3 p-3 bg-card rounded-lg">
                      <CheckCircle className={`w-5 h-5 ${scheme.approved ? 'text-success' : 'text-muted-foreground'}`} />
                      <span className="font-medium">{scheme.name}</span>
                    </div>
                  ))}
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2} className="bg-background rounded-xl p-8 border border-border shadow-sm">
                <h3 className="text-xl font-semibold mb-6">State Government Schemes</h3>
                <div className="flex flex-wrap gap-3">
                  {governmentSchemes.stateSchemes.map((scheme) => (
                    <Badge key={scheme} variant="default" className="text-sm py-2 px-4">
                      {scheme}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Fully compliant with Central and State Government skill development initiatives.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="section-padding">
          <div className="container-width">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold text-center mb-4">Facility Gallery</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Explore our training infrastructure
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {galleryImages.map((item, index) => (
                <AnimatedCard 
                  key={item.caption} 
                  delay={0.03 + index * 0.02}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  hoverEffect={false}
                >
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage(item)}
                  >
                    <img 
                      src={item.src} 
                      alt={item.caption}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-orange-950 text-xs font-medium">{item.caption}</p>
                    </div>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary/80">
          <div className="container-width">
            <AnimatedSection className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Our infrastructure is designed to empower students with practical skills and real-world exposure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                >
                  <Button asChild size="lg" variant="secondary" className="font-semibold">
                    <Link to="/courses">View Courses</Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                >
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#fff6e8]/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-orange-950 hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-orange-950 text-center mt-4 text-lg font-medium">
                {selectedImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </PageTransition>
    </Layout>
  );
}

export default Infrastructure;
