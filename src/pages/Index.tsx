import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/animations/PageTransition";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CoursesPreview } from "@/components/sections/CoursesPreview";
import { CTASection } from "@/components/sections/CTASection";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

const Index = () => {
  return (
    <PageTransition>
      <Layout>
        <HeroSection />
        <MotionWrapper variant="fadeUp" delay={0.1}>
          <StatsSection />
        </MotionWrapper>
        <MotionWrapper variant="fadeUp" delay={0.2}>
          <CoursesPreview />
        </MotionWrapper>
        <MotionWrapper variant="fadeUp" delay={0.3}>
          <CTASection />
        </MotionWrapper>
      </Layout>
    </PageTransition>
  );
};

export default Index;
