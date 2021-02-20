import React from 'react';
import './Cursor.css';

const Cursor: React.FC = () => {
    document.addEventListener("mousemove", (e) => {
        document.querySelector(".cursor")?.setAttribute("style", `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`)
    })

    document.addEventListener("click", () => {
        document.querySelector(".cursor")?.classList.add("expand")
        setTimeout(() => {  
            document.querySelector(".cursor")?.classList.remove("expand")
        }, 500)
    })

    return (
        <div className="cursor"></div>
    )
}

export default Cursor;