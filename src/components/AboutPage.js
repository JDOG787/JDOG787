import '../styles/AboutPage.css';

const AboutPage = () => {

    return (
        <div className="page aboutPage" id="about">
            <div className='content'>
                <div>
                <h1 data-aos='fade-right'>About me</h1>
                <p data-aos='fade-left'>
                    I'm a homeschooled 17 year old passionate about building software, who has been programming for over 3 years. Obsessed with all things relating to React, including Next.js and React Native. I also like to dabble in designing UIs and logos although I'm not that great at it. I'm also interested networking and cybersecurity but often find myself lacking the time to study thoroughly. My main goal right now is to finish school and land my first internship to get real world experience.
                </p>
                </div>
                <h2 data-aos='fade-right'>Strengths</h2>
                <div className='strenghts'>
                    <ul>
                        <li data-aos="fade-up-left">Nodejs</li>
                        <li data-aos="fade-up-left" >React/Nextjs</li>
                        <li data-aos="fade-up-left" >React Native</li>
                        <li data-aos="fade-up-left" >Monogdb</li>
                    </ul>
                    <ul>
                        <li data-aos="fade-up-left" data-aos-delay="400">Java</li>
                        <li data-aos="fade-up-left" data-aos-delay="400">Git/Github</li>
                        <li data-aos="fade-up-left" data-aos-delay="400">Server Management</li>
                        <li data-aos="fade-up-left" data-aos-delay="400">Docker</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;