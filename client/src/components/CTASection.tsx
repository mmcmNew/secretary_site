import { Button } from "@/components/ui/button";
import { Download, FileText, Github, MessageSquare } from "lucide-react";
import GradientBackground from "./GradientBackground";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <GradientBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">
              Начните работать продуктивнее уже сегодня
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Скачайте Secretary и получите полный контроль над своими задачами и временем. Приложение готово к работе сразу после установки — не требуется регистрация или настройка облачных сервисов.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://files.ndomen.ru/SecretaryAppInstaller.exe" download>
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 group relative overflow-hidden"
                data-testid="button-download-cta"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-chart-2 to-primary bg-[length:200%_auto] animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity" />
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Скачать Secretary
              </Button>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="text-sm text-muted-foreground">Версия</div>
              <div className="font-mono text-2xl font-bold">1.0.0</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-sm text-muted-foreground">Размер</div>
              <div className="font-mono text-2xl font-bold">~600 МБ</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="text-sm text-muted-foreground">Платформы</div>
              <div className="text-lg font-bold">Windows</div>
              {/* <div className="text-lg font-bold">Win • Linux • macOS</div> */}
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="text-sm text-muted-foreground">Лицензия</div>
              <div className="text-lg font-bold">Бесплатно</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {/* <Button 
              variant="outline" 
              className="gap-2"
              data-testid="button-documentation"
            >
              <FileText className="w-4 h-4" />
              Документация
            </Button> */}
            {/* <Button 
              variant="outline" 
              className="gap-2"
              data-testid="button-github-footer"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button> */}
            <a href="https://t.me/+n3WyJsiCrQMyZTdi">
            <Button 
              variant="outline" 
              className="gap-2"
              data-testid="button-report-issue"
            >
              <MessageSquare className="w-4 h-4" />
              Сообщить о проблеме
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
