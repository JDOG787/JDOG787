import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

class Layout extends React.Component {
    render() {
        return(
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
                </Head>
                <Navbar/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;