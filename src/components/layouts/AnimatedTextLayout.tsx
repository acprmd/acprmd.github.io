import type { ReactNode } from "react"

interface AnimatedTextLayoutProps {
    children: ReactNode
}

export default function AnimatedTextLayout({ children }: AnimatedTextLayoutProps) {
    return (
        <div className='text-animation-frame'>
            <div className='text-animation-foreground'>
                {children}
            </div>
            <div className='text-animation-background'>
                {children}
            </div>
        </div>
    )
}