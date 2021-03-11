import React from 'react';
import './Cursor.css';

const Cursor: React.FC = () => {
    // removed the translate as not needed anymore once i fixed up the width and height
    document.addEventListener("mousemove", (e) => {
        document.querySelector(".cursor")!.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX - 1.25}px;`)
    });

    window.onblur = () => {
        (document.querySelector(".cursor") as HTMLElement).style.display = 'none';
    }
    window.onfocus = () => {
        (document.querySelector(".cursor") as HTMLElement).style.display = 'block';
    }

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
    // Handle the on tab leave and come back works well on chrome
    window.onblur = () => {
        (document.querySelector(".cursor") as HTMLElement).style.display = 'none';
    }
    window.onfocus = () => {
        (document.querySelector(".cursor") as HTMLElement).style.display = 'block';
    }



    return (
        <div className="cusorContainer">
            <div className="cursor"></div>
        </div>
    )
}

export default Cursor;