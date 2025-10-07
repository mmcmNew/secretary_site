import FeatureCard from '../FeatureCard'
import { CheckCircle } from 'lucide-react'

export default function FeatureCardExample() {
  return (
    <div className="p-8 bg-background max-w-sm">
      <FeatureCard
        icon={CheckCircle}
        title="Умное управление задачами"
        description="Создавайте задачи, подзадачи, списки и проекты. Организуйте работу по группам, устанавливайте приоритеты и дедлайны."
      />
    </div>
  )
}
