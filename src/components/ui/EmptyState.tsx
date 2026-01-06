import { LucideIcon, Dumbbell } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
  icon?: LucideIcon
  title: string
  description: string
  className?: string
}

export default function EmptyState({
  icon: Icon = Dumbbell,
  title,
  description,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'col-span-full py-20 flex flex-col items-center justify-center text-center border border-dashed border-white/10 bg-surface/20 rounded-xl px-6',
        className
      )}
    >
      <div className="mb-6 p-4 rounded-full bg-white/5 text-slate-500">
        <Icon size={48} strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl font-black uppercase mb-3 tracking-tight text-white">{title}</h3>
      <p className="text-slate-400 max-w-md mx-auto leading-relaxed">{description}</p>
    </div>
  )
}
