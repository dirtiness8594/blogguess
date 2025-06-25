import Link from "next/link";


export default function ContentRenderer({ content }) {
    if (!Array.isArray(content)) return null;

    return content.map((block, index) => {
        if (typeof block === "string") {
            return <p key={index}>{block}</p>;
        }

        switch (block.type) {
            case "heading":
                const HeadingTag = `h${block.level || 2}`;
                return <HeadingTag key={index}>{block.text}</HeadingTag>;

            case "paragraph":
                return <p key={index}>{block.text}</p>;

            case "callout":
                const parts = block.text.split(/(\[.*?\]\(.*?\))/g); // Divide entre texto e links em markdown

                const parsedText = parts.map((part, i) => {
                    const match = part.match(/\[(.*?)\]\((.*?)\)/); // Captura o texto e o link
                    if (match) {
                        const [, label, href] = match;
                        return (
                            <Link key={i} href={href}>
                                {label}
                            </Link>
                        );
                    }
                    return <span key={i}>{part}</span>;
                });

                return (
                    <bdi key={index} className={`callout callout--${block.style || "info"}`}>
                        {parsedText}
                    </bdi>
                );

            case "warning":
                return (<blockquote key={index}>
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 21h22L12 2 1 21z" fill="#FFF3CD" stroke="#FFC107" stroke-width="1.5" />
                        <path d="M12 8v5" stroke="#856404" stroke-width="1.5" stroke-linecap="round" />
                        <circle cx="12" cy="17" r="1" fill="#856404" />
                    </svg>

                    {block.text}</blockquote>);

            case "code":
                return (
                    <pre key={index}>
                        <code className={`language-${block.language || "javascript"}`}>
                            {block.text}
                        </code>
                    </pre>
                );

            case "separator":
                return <hr key={index} />;

            case "list-item":
                return (
                    <p key={index}>
                        <strong>{block.label}</strong> {block.text}
                    </p>
                );

            default:
                return <p key={index}>{block.text || "[Bloco não reconhecido]"}</p>;
        }
    });
}
