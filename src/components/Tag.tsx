interface TagProps {
    text: string | string[]
}

export default function Tag({ text }: TagProps) {
    if (Array.isArray(text)) {
        return (
            <span className="tag-container">
                {text.map((item) => (
                    <span className="tag">{item}</span>
                ))}
            </span>
        )
    }
    return <span className="tag">{text}</span>
}