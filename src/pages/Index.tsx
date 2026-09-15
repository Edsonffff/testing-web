import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/animations/PageTransition";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CoursesPreview } from "@/components/sections/CoursesPreview";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <PageTransition>
      <Layout>
        <HeroSection />
        <StatsSection />
        <CoursesPreview />
        <CTASection />
      </Layout>
    </PageTransition>
  );
};

export default Index;
