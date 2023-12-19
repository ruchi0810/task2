import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Services2 from "./components/Services2/Services2";
import Grid from "./components/Grid/Grid";
import Happyc from "./components/Happyc/Happyc";

import Grid3 from "./components/Grid3/Grid3";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Experience2 from "./components/Experience2/Experience2";
import Works from "./components/Works/Works";
import Works2 from "./components/Works2/Works2";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer/Footer";

import Footer2 from "./components/Footer2/Footer2";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      // style={{
      //   background: darkMode ? "black" : "",
      //   color: darkMode ? "white" : "",
      // }}
    >
      <Navbar />
      <Intro />
      <Services2 />
      <Experience2 />
      <Grid3 />
      <Works2 />
      <Portfolio />
      {/* <Testimonial /> */}
      <Happyc />
      <Contact />
      <Footer2 />
    </div>
  );
}

export default App;
