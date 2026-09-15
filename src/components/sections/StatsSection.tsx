import { GraduationCap, Heart, Users, Award } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

const stats = [
  {
    icon: Users,
    number: "1000+",
    label: "Students Benefited",
  },
  {
    icon: GraduationCap,
    number: "14+",
    label: "Years of Service",
  },
  {
    icon: Award,
    number: "100%",
    label: "Free Education",
  },
  {
    icon: Heart,
    number: "₹12,000",
    label: "Stipend Provided",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-16 bg-neutral-900 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-pink-600/5 blur-[100px]" />
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-4 left-[10%] w-20 h-20 border-2 border-white rounded-full" />
        <div className="absolute bottom-4 right-[15%] w-16 h-16 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-[50%] w-32 h-32 border border-white rounded-full" />
      </div>

      <div className="container-width px-4 sm:px-6 lg:px-8 relative">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                {stat.number}
              </div>
              <div className="text-sm text-white/70 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
