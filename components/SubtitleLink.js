import Link from "next/link";

const SubtitleLink = ({href, children}) => {
    const clicked = (event) => {
        event.preventDefault();
        event.cancelBubble=true;if(event.stopPropagation) event.stopPropagation();
        window.open(href, "_blank");
        return false
    }
    
    return <Link href = {href} onClick = {clicked}>
        {children}
    </Link>;
}

export default SubtitleLink;