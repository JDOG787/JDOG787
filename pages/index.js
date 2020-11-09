import React from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import About from '../components/About';

class Index extends React.Component {
    render() {
        return(
            <Layout>
                <div className={styles.container}>
                    <Intro/>
                    <About/>
                </div>
            </Layout>
        )
    }
}

export default Index;