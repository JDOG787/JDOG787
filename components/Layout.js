import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

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
                </Head>
                <Navbar/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;