import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-pink-600/10 blur-[100px] pointer-events-none" />

        <div className="container-width px-4 sm:px-6 lg:px-8 relative text-center py-20">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-orange-500 mb-6">
              <Search className="w-4 h-4" />
              <span>Page Not Found</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight shimmer-gradient mb-4">
              404
            </h1>

            <p className="text-xl text-muted-foreground mb-2">
              Oops! We couldn't find that page.
            </p>
            <p className="text-sm text-orange-800/60 mb-10">
              The page{" "}
              <span className="font-mono text-orange-900/70">
                {location.pathname}
              </span>{" "}
              may have been moved or no longer exists.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-orange-950 font-semibold px-8"
              >
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-orange-200 text-orange-900/70 hover:text-orange-950 hover:bg-orange-50 font-semibold px-8"
              >
                <Link to="/courses">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Browse Courses
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
