import React from 'react';
import Link from 'next/link';

class Navbar extends React.Component {
    render() {
        return(
            <div className="Navbar">
                <ul>
                    <li>
                        <Link href="/"><a><div className="username">JDOG787</div></a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="#About"><a>About Me</a></Link>
                    </li>
                    <li>
                        <Link href="#Skills"><a>Skills</a></Link>
                    </li>
                    <li>
                        <Link href="#Projects"><a>Projects</a></Link>
                    </li>
                    <li>
                        <Link href="#Contact"><a>Contact</a></Link>
                    </li>
                </ul>

                <style jsx>{`
                    .Navbar {
                        padding: 20px;
                        color: white;
                    }
                    ul {
                        display: flex;
                        list-style: none;
                    }
                    li {
                        margin-right: 20px;
                    }
                    a {
                        color: white;
                        text-decoration: none;
                        line-height: 30px;
                    }

                    .username {
                        font-size: 25px;
                    }
                `}</style>
            </div>
        )
    }
}

export default Navbar;