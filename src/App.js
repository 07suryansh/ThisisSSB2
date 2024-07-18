import React from "react";
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Resume from "./components/Resume";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Check if the current path is "/resume"
  const isResumePage = location.pathname === '/resume';

  return (
    <div className="App">
      {!isResumePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      {!isResumePage && <Footer />}
      {!isResumePage && <ScrollToTop />}
    </div>
  );
};

export default App;
