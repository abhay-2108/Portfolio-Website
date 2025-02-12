import React from 'react';
import Backgroundeffect from './components/backgroundeffect';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
// import Skills from './components/skills'
import Carousel from './components/carousel'
import Projects from './components/project'
import Contact from './components/contact'
import Footer from './components/footer'
import './styles/GlobalStyles.css';


const App = () => {
    return (
        <div>
            <Backgroundeffect />
            <Header />
            <Banner />
            <About />
            {/* <Skills /> */}
            <Carousel />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
