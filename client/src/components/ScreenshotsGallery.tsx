import { useState } from "react";
export default function ScreenshotsGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const screenshots = [
    {
      src: "/public_assets/tasks.png",
      title: "Списки задач и проекты",
      description: "Организуйте задачи по проектам и спискам с подробным отслеживанием"
    },
    {
      src: "/public_assets/calendar.png",
      title: "Календарь и планирование",
      description: "Визуализируйте задачи в календаре с поддержкой повторяющихся событий"
    },
    {
      src: "/public_assets/timers.png",
      title: "Таймеры и фокус",
      description: "Отслеживайте время работы и анализируйте продуктивность"
    }
  ];

  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold">Галерея</h2>
          <p className="text-xl text-muted-foreground">
            Посмотрите, как работает Secretary
          </p>
        </div>

        <div className="space-y-8">
          <div className="relative group animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-chart-2 rounded-lg opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
            <img
              src={screenshots[activeIndex].src}
              alt={screenshots[activeIndex].title}
              className="relative w-full rounded-lg shadow-2xl border border-border transition-transform duration-500"
              data-testid={`img-screenshot-${activeIndex}`}
            />
          </div>

          <div className="text-center space-y-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold">{screenshots[activeIndex].title}</h3>
            <p className="text-muted-foreground">{screenshots[activeIndex].description}</p>
          </div>

          <div className="flex justify-center gap-3">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary w-12' 
                    : 'bg-border hover-elevate'
                }`}
                data-testid={`button-screenshot-${index}`}
                aria-label={`Скриншот ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
