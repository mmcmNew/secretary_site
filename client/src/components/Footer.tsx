import { Github, FileText, MessageSquare, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Secretary</h3>
            <p className="text-sm text-muted-foreground">
              Персональный помощник для управления задачами с AI и голосовым управлением
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Ресурсы</h4>
            <ul className="space-y-2">
              {/* <li>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 w-fit"
                  data-testid="link-documentation"
                >
                  <FileText className="w-4 h-4" />
                  Документация
                </a>
              </li> */}
              {/* <li>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 w-fit"
                  data-testid="link-github"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li> */}
              <li>
                <a 
                  href="https://t.me/+n3WyJsiCrQMyZTdi" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 w-fit"
                  data-testid="link-report"
                >
                  <MessageSquare className="w-4 h-4" />
                  Сообщить о проблеме
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Версия: <span className="font-mono">1.0.0</span></li>
              <li>Размер: <span className="font-mono">~600 МБ</span></li>
              <li>Платформы: Windows</li>
              {/* <li>Платформы: Windows, Linux, macOS</li> */}
              <li>Лицензия: Бесплатно для личного использования</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
            Создано с <Heart className="w-4 h-4 text-chart-2 fill-chart-2 animate-pulse" /> для повышения продуктивности
          </p>
        </div>
      </div>
    </footer>
  );
}
