import { Shield, Zap, Cloud } from "lucide-react";

export default function DescriptionSection() {
  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="space-y-12 animate-fade-in-up">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">О приложении</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Secretary — это веб-приложение для управления задачами и планирования времени с интеграцией искусственного интеллекта. Проект создан для тех, кто хочет эффективно организовать свой день, не тратя время на рутинные операции.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg">Локальное хранение</h3>
              <p className="text-muted-foreground text-sm">
                Все данные хранятся локально на вашем компьютере. Полная конфиденциальность без передачи информации на внешние серверы.
              </p>
            </div>

            <div className="text-center space-y-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg">Голосовое управление</h3>
              <p className="text-muted-foreground text-sm">
                Встроенный голосовой помощник понимает естественную речь и выполняет команды: создает задачи, запускает таймеры.
              </p>
            </div>

            <div className="text-center space-y-3 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                <Cloud className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg">PWA приложение</h3>
              <p className="text-muted-foreground text-sm">
                Работает как через браузер, так и в виде десктопного приложения на любом устройстве — компьютере, планшете или смартфоне.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
