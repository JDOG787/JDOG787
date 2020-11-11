import React from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


class Index extends React.Component {
    render() {
        return(
            <Layout>
                <div className={styles.container}>
                    <Intro/>
                    <About/>
                    <Skills/>
                    <Projects/>
                    <Contact/>
                </div>
            </Layout>
        )
    }
}

export default Index;