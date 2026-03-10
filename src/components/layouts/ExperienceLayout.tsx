import type { ReactNode } from "react";
import Tag from "../Tag";

interface ExperienceLayout {
    icon?: ReactNode
    title: string
    company: string
    period: string
    children?: ReactNode
}
export default function ExperienceLayout({ icon, title, company, period, children }: ExperienceLayout) {
    return (
        <>
            <div className="experience-header-container" >
                {icon && icon}
                <div className="experience-header">
                    <div>
                        <div className='experience-title'>{title}</div>
                        <div className='experience-subtitle'>{company}</div>
                    </div>
                    <Tag text={period} />
                </div>
            </div>
            {children && (
                <div className='experience-details'>
                    {children}
                </div>
            )}
        </>
    )
}