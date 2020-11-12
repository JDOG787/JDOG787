import React from 'react';
import Link from 'next/link';
import MobileBtn from "./MobileBtn";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    onClick = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        let display = "none";
        if (this.state.active) {
            display = "block";
        } else {
            display = "none";
        }
        return(
            <div className="Navbar">
                <ul className="mainNav">
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
                <div className="mobileNav">
                    <div className="mobileNav-container">
                        <button className="mobile-btn" onClick={this.onClick}><i className="material-icons">menu</i></button>
                        <nav style={{display: display}}>
                            <MobileBtn href="/" text="Home"/>
                            <MobileBtn href="#About" text="About"/>
                            <MobileBtn href="#Skills" text="Skills"/>
                            <MobileBtn href="#Projects" text="Projects"/>
                            <MobileBtn href="#Contact" text="Contact"/>
                        </nav>
                    </div>
                </div>


                <style jsx>{`
                    .Navbar {
                        padding: 20px;
                        color: white;
                    }
                    .mainNav {
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

                    .mobileNav {
                        display: none;
                    }

                    .mobile-btn {
                        background: transparent;
                        border: none;
                        color: white;
                        outline: none;
                    }

                    @media only screen and (max-width: 620px) {
                        .mainNav {
                            display: none;
                        }

                        .mobileNav {
                            display: block;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Navbar;