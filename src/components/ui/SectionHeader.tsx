import { cn } from '@/lib/utils'

interface SectionHeaderProps {
    title: string
    subtitle?: string
    description?: string
    centered?: boolean
    className?: string
}

export default function SectionHeader({
    title,
    subtitle,
    description,
    centered = false,
    className,
}: SectionHeaderProps) {
    return (
        <div className={cn(
            'mb-12 md:mb-16',
            centered && 'text-center max-w-3xl mx-auto',
            className
        )}>
            {subtitle && (
                <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4 inline-block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                {title}
            </h2>
            {description && (
                <p className="text-slate-400 text-lg md:text-xl font-medium">
                    {description}
                </p>
            )}
        </div>
    )
}
