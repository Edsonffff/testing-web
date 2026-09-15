import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
        : "bg-transparent"
        }`}
      initial={prefersReducedMotion ? {} : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container-width px-4 sm:px-6 lg:px-8 py-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={logo}
                alt="Kiruba Trust Logo"
                className="w-12 h-12 rounded-full object-cover"
              />
            </motion.div>
            <div>
              <h1 className="text-lg font-bold text-white leading-tight tracking-tight">
                Kiruba Trust
              </h1>
              <p className="text-[11px] text-purple-400 font-medium tracking-wide uppercase">
                Education & Charity
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${location.pathname === link.path
                  ? "text-white bg-white/10"
                  : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9442301105"
              className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-purple-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">9442301105</span>
            </a>
            <div className="w-px h-6 bg-white/10" />
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-white/10 text-neutral-300 hover:bg-white/5 hover:border-white/20 hover:text-white font-medium px-5"
              >
                <Link to="/about">About Us</Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <Button
                asChild
                size="sm"
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 text-white font-medium px-5"
              >
                <Link to="/contact">Enroll Now</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="lg:hidden py-4 border-t border-white/5 bg-neutral-950/95 backdrop-blur-xl"
            initial={prefersReducedMotion ? {} : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium py-2.5 px-3 rounded-lg transition-all block ${location.pathname === link.path
                      ? "text-white bg-white/10"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="pt-3 flex gap-2"
              >
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 rounded-full border-white/10 text-neutral-300 hover:text-white"
                >
                  <Link to="/about" onClick={() => setIsOpen(false)}>
                    About Us
                  </Link>
                </Button>
                <Button
                  asChild
                  className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Enroll Now
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
