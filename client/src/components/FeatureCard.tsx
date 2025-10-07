import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="p-8 hover-elevate active-elevate-2 transition-all duration-300 animate-fade-in-up overflow-visible"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`feature-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex flex-col gap-4">
        <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
