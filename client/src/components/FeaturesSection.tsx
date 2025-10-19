import { CheckSquare, Mic, Calendar, BookOpen, Timer, Database } from "lucide-react";
export default function FeaturesSection() {
  const features = [
    {
      icon: CheckSquare,
      title: "Умное управление задачами",
      description: "Создавайте задачи, подзадачи, списки и проекты. Организуйте работу по группам, устанавливайте приоритеты, дедлайны и повторяющиеся события. Система поддерживает различные интервалы повторений: ежедневно, еженедельно, по рабочим дням.",
      image: "https://files.ndomen.ru/secretary/public_assets/tasks.png",
      imageAlt: "Списки задач и проекты"
    },
    {
      icon: Calendar,
      title: "Календарь и планирование",
      description: "Визуализация задач в календаре с поддержкой повторяющихся событий (rrule). Функция \"Мой день\" показывает актуальные задачи с учетом вашего часового пояса. Отслеживание фактически потраченного времени через анти-расписание.",
      image: "https://files.ndomen.ru/secretary/public_assets/calendar.png",
      imageAlt: "Календарь и планирование"
    },
    {
      icon: Timer,
      title: "Таймеры и уведомления",
      description: "Встроенные таймеры для задач с голосовыми уведомлениями через Edge TTS. Отслеживайте время работы над проектами в реальном времени.",
      image: "https://files.ndomen.ru/secretary/public_assets/timers.png",
      imageAlt: "Таймеры и фокус"
    },
    {
      icon: BookOpen,
      title: "Журналы и аналитика",
      description: "Ведите дневники: рабочий журнал, дневник трейдинга, журнал проектов, бэктестинга и личный дневник. Храните заметки, прикрепляйте файлы, анализируйте продуктивность.",
      image: "https://files.ndomen.ru/secretary/public_assets/journals.png",
      imageAlt: "Редактор журналов"
    }
  ];

  const additionalFeatures = [
    {
      icon: Mic,
      title: "Голосовой помощник с AI",
      description: "Управляйте задачами голосом на естественном языке. Помощник понимает команды типа \"создай задачу купить молоко в список покупки\" или \"отметь задачу отчет как выполненную\". Интеграция с Meta AI для ответов на вопросы."
    },
    {
      icon: Database,
      title: "Локальное хранение данных",
      description: "Все данные хранятся локально на вашем устройстве. Полная конфиденциальность без передачи информации на внешние серверы. Автоматическое резервное копирование баз данных."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20 animate-fade-in-up">
          <h2 className="text-4xl font-bold">Возможности</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Все инструменты для эффективного управления задачами и временем в одном приложении
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`space-y-6 animate-slide-in-left ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div
                className={`relative group animate-slide-in-right ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-chart-2 rounded-lg opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="relative rounded-lg shadow-2xl border border-border transition-transform duration-500 group-hover:scale-105"
                  data-testid={`img-feature-${index}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-32">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-card border border-card-border hover-elevate active-elevate-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`feature-card-additional-${index}`}
            >
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
