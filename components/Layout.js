import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

class Layout extends React.Component {
    render() {
        return(
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"/>
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    <title>JDOG787</title>
                    <meta name="description" content="Full stack web developer with experience in HTML, CSS, JS, and Node.js! I also know some React.js and Next.js."/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="author" content="JDOG787"/>
                    <meta name="keywords" content="JDOG787 Web Developer"></meta>
                </Head>
                <Navbar/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Layout;