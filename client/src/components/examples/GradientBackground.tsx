import GradientBackground from '../GradientBackground'

export default function GradientBackgroundExample() {
  return (
    <div className="relative h-96 bg-background">
      <GradientBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-2xl font-bold">Gradient Background</p>
      </div>
    </div>
  )
}
