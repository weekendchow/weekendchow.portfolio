import React, { Component } from 'react';
import Home from './components/Pages/HomePage/Home';
import About from './components/Pages/AboutPage/About';
import Projects from './components/Pages/ProjectsPage/Projects';
import Contact from './components/Pages/ContactPage/Contact';
import Footer from './components/Footer/Footer'
import Canvas from './utils/Canvas';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faLongArrowAltLeft, fab);


class App extends Component {
  render() {
    return (
      <div className="React-Portfolio">
        <Canvas />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}



export default App;
