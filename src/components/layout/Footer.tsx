import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Heart } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/animations";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="relative bg-neutral-950 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[150px]" />
      <div className="container-width px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <AnimatedSection delay={0} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-purple-500/10">
                <img src={logo} alt="Kiruba Trust Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Kiruba Trust</h3>
                <p className="text-sm text-purple-300">Education & Charity</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering women and youth through free skill development programs
              since 2011. Over 1000+ students have benefited from our
              initiatives. (Govt. Regd No: 42/2011)
            </p>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection delay={0.1}>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Courses", path: "/courses" },
                { name: "Infrastructure", path: "/infrastructure" },
                { name: "Gallery", path: "/gallery" },
                { name: "Donate", path: "/donation" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Programs */}
          <AnimatedSection delay={0.2}>
            <h4 className="font-bold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {[
                "Free Tailoring Course",
                "Broadband Technician Course",
                "Aari Work Training",
                "Jute Work Training",
              ].map((program) => (
                <li key={program}>
                  <span className="text-sm text-gray-400">{program}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection delay={0.3}>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Kalladimamoodu Junction, Cherupaloor, Kulasekharam, Tamil Nadu
                  – 629161
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400 shrink-0" />
                <div className="text-sm text-gray-400">
                  <a
                    href="tel:9442301105"
                    className="hover:text-purple-400 transition-colors"
                  >
                    9442301105
                  </a>
                  {" / "}
                  <a
                    href="tel:9443801105"
                    className="hover:text-purple-400 transition-colors"
                  >
                    9443801105
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400 shrink-0" />
                <a
                  href="mailto:kecttrust@gmail.com"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  kecttrust@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                {
                  icon: Facebook,
                  label: "Facebook",
                  url: "https://www.facebook.com/share/1BrkgLyxCK/",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  url: "https://www.instagram.com/kect_trust?igsh=MXBkZGJhandsZ29oNw==",
                },
                {
                  icon: Youtube,
                  label: "YouTube",
                  url: "https://www.youtube.com/@kecttrust6153",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-all duration-200"
                  aria-label={social.label}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.1, y: -2 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <AnimatedSection delay={0.4}>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Kiruba Education & Charitable
                Trust. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-purple-500 fill-purple-500" /> in
                Tamil Nadu
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
