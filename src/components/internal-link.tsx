import Link from "next/link"

type InternalLinkProps = {
    href: string
    children: React.ReactNode
    className?: string
}

export const InternalLink = (props: InternalLinkProps) => {
    return (
        <Link
            href={props.href}
            className={`-ml-1 rounded-md p-1 underline decoration-gray-300 hover:bg-gray-200 hover:decoration-gray-400 ${props.className}`}
        >
            {props.children}
        </Link>
    )
}
