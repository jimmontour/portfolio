import * as React from "react";


import GlobalStyles from "./styles/GlobalStyles";
import Typography from "./styles/Typography";
import MediaQueries from "./styles/MediaQueries";
import LayoutStyles from "./styles/Layout";
import "normalize.css";

import Nav from './components/Nav';
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Projects from "./components/home/Projects";
import Skills from "./components/home/Skills";
import Contact from "./components/home/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Typography />
      <LayoutStyles />
      <MediaQueries />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
