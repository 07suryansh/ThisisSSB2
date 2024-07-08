import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Footer />} />
          {/* <Route path="/contact" onClick={scrollToBottom} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
