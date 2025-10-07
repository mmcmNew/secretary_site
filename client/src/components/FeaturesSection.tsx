import FeatureCard from "./FeatureCard";
import { CheckSquare, Mic, Calendar, BookOpen, Timer, Database } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: CheckSquare,
      title: "Умное управление задачами",
      description: "Создавайте задачи, подзадачи, списки и проекты. Организуйте работу по группам, устанавливайте приоритеты, дедлайны и повторяющиеся события. Система поддерживает различные интервалы повторений: ежедневно, еженедельно, по рабочим дням."
    },
    {
      icon: Mic,
      title: "Голосовой помощник с AI",
      description: "Управляйте задачами голосом на естественном языке. Помощник понимает команды типа \"создай задачу купить молоко в список покупки\" или \"отметь задачу отчет как выполненную\". Интеграция с Meta AI для ответов на вопросы."
    },
    {
      icon: Calendar,
      title: "Календарь и планирование",
      description: "Визуализация задач в календаре с поддержкой повторяющихся событий (rrule). Функция \"Мой день\" показывает актуальные задачи с учетом вашего часового пояса. Отслеживание фактически потраченного времени через анти-расписание."
    },
    {
      icon: BookOpen,
      title: "Журналы и аналитика",
      description: "Ведите дневники: рабочий журнал, дневник трейдинга, журнал проектов, бэктестинга и личный дневник. Храните заметки, прикрепляйте файлы, анализируйте продуктивность."
    },
    {
      icon: Timer,
      title: "Таймеры и уведомления",
      description: "Встроенные таймеры для задач с голосовыми уведомлениями через Edge TTS. Отслеживайте время работы над проектами в реальном времени."
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
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold">Возможности</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Все инструменты для эффективного управления задачами и временем в одном приложении
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
