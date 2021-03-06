import React from 'react';
import './Cursor.css';

const Cursor: React.FC = () => {
    document.addEventListener("mousemove", (e) => {
        document.querySelector(".cursor")!.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX - 1.25}px; transform: translate(-50%, -50%);`)
    });

    // document.addEventListener("click", () => {
    //     document.querySelector(".cursor")?.classList.add("expand")
    //     setTimeout(() => {  
    //         document.querySelector(".cursor")?.classList.remove("expand")
    //     }, 500)
    // })


    window.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".hover-item").forEach(ele => {
            ele.addEventListener("mouseover", () => {
                document.querySelector(".cursor")?.classList.add("hover-cursor")
            })

            ele.addEventListener("mouseleave", () => {
                document.querySelector(".cursor")?.classList.remove("hover-cursor")
            })
        })
    });



    return (
        <div className="cursor"></div>
    )
}

export default Cursor;