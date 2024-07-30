import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export function TopicTag({
    topic,
    active,
    onClick,
}: {
    topic: string,
    active: boolean,
    onClick: () => void
}) {
    return (
        <a
            className={`inline-flex items-center rounded-full px-4 py-1 text-xs font-medium ${active ? 'bg-teal-700/5 text-teal-700 ring-1 ring-inset ring-teal-700/10' : 'text-gray-500 ring-1 ring-inset ring-gray-500/10'} cursor-pointer mt-1 mr-1`}
            onClick={onClick}
        >
            <p>{topic}</p>
            {active && <FontAwesomeIcon icon={faXmark} className="ms-2" />}
        </a>
    )
}