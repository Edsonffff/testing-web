import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Gallery", path: "/gallery" },
  { name: "Donation", path: "/donation" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHome
          ? "pt-3"
          : "pt-5"
      }`}
      initial={prefersReducedMotion ? {} : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating warm-glass pill bar once scrolled (or on non-home pages) */}
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled || !isHome
              ? "glass-warm rounded-full px-4 sm:px-6 py-2 shadow-2xl"
              : "rounded-full px-2 py-2"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.08, rotate: -5 }}
              transition={{ duration: 0.25 }}
              className="w-10 h-10 rounded-full bg-white shadow-lg overflow-hidden ring-2 ring-white/50"
            >
              <img
                src={logo}
                alt="Kiruba Trust Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="hidden sm:block">
              <h1
                className={`text-base font-extrabold leading-tight tracking-tight transition-colors ${
                  isScrolled || !isHome ? "text-white" : "text-white"
                }`}
              >
                Kiruba Trust
              </h1>
              <p
                className={`text-[10px] font-semibold tracking-widest uppercase transition-colors ${
                  isScrolled || !isHome
                    ? "text-amber-200"
                    : "text-white/80"
                }`}
              >
                Education · Charity
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-250 ${
                    active
                      ? "bg-white text-orange-700 shadow-md"
                      : isScrolled || !isHome
                        ? "text-white/90 hover:text-white hover:bg-white/15"
                        : "text-white/90 hover:text-white hover:bg-white/15"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9442301105"
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                isScrolled || !isHome
                  ? "text-white/90 hover:text-white"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>9442301105</span>
            </a>
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            >
              <Button
                asChild
                className="rounded-full bg-white text-orange-700 hover:bg-amber-50 font-bold px-5 shadow-lg"
              >
                <Link to="/contact">
                  <Heart className="w-3.5 h-3.5 mr-1.5" />
                  Enroll Now
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={prefersReducedMotion ? {} : { scale: 0.92 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            className="lg:hidden mt-2 glass-warm rounded-3xl p-4"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-2xl font-semibold text-sm transition ${
                      active
                        ? "bg-white text-orange-700"
                        : "text-white hover:bg-white/15"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-2 flex gap-2">
                <Button
                  asChild
                  className="flex-1 rounded-full bg-white text-orange-700 hover:bg-amber-50 font-bold"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Enroll Now
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
