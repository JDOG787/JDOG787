import { useRef } from "react";
import { IoArrowForward } from "react-icons/io5";

export default ({children, href}) => {
    const link = useRef(null);
    return (
        <a href={href} ref={link}>[ link.current.classList<IoArrowForward/> ]</a>
    )
}