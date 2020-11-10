import React from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';


class Index extends React.Component {
    render() {
        return(
            <Layout>
                <div className={styles.container}>
                    <Intro/>
                    <About/>
                    <Skills/>
                    <Projects/>
                    <div className={styles.Contact} id="Contact">
                        <div className={styles.text}>
                            <h1 className={styles.header}>Contact Me</h1>
                            <h3 className={styles.subHeader}>Would you like to get in touch?</h3>
                        </div>
                        <div className={styles.imageContainer}>
                            <img className={styles.image} src="/person3.svg"/>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Index;