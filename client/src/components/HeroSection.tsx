import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import GradientBackground from "./GradientBackground";
import { useEffect, useState } from "react";

interface VersionInfo {
  version: string;
  downloadUrl: string;
}

export default function HeroSection() {
  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null);

  useEffect(() => {
    fetch('/version.json')
      .then(response => response.json())
      .then(data => setVersionInfo(data))
      .catch(error => console.error('Error fetching version info:', error));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      <GradientBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                  Secretary
                </span>
                {" "}— Ваш персональный помощник для управления задачами
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Умный планировщик с голосовым управлением, который помогает организовать рабочий день, отслеживать задачи и повышать продуктивность
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={versionInfo?.downloadUrl} download>
                <Button
                  size="lg"
                  className="text-lg px-8 group"
                  data-testid="button-download-hero"
                  disabled={!versionInfo}
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Скачать Secretary
                </Button>
              </a>
              {/* <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                data-testid="button-github"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button> */}
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-chart-2 animate-pulse" />
                <span className="font-mono">v{versionInfo?.version}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-chart-2 animate-pulse" />
                <span className="font-mono">~600 МБ</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-chart-2 animate-pulse" />
                {/* <span>Windows • Linux • macOS</span> */}
                <span>Windows</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-chart-2 rounded-lg opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <img
                src="/public_assets/tasks.png"
                alt="Secretary App Interface"
                className="relative rounded-lg shadow-2xl border border-border transition-transform duration-500 group-hover:scale-105"
                data-testid="img-hero-screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
