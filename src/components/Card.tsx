import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode
    header?: string
}

export default function Card({ children, header }: CardProps) {
    return (
        <div>
            {header && <h2 id={header.toLocaleLowerCase()} className="card-header">// {header}</h2>}
            <div className={header ? "card" : "card-top"}>
                {children}
            </div>
        </div>
    )
}