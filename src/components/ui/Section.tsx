import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn('container mx-auto px-6', className)} {...props}>
      {children}
    </div>
  )
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  id?: string
  className?: string
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 md:py-32 overflow-hidden', className)} {...props}>
      {children}
    </section>
  )
}
