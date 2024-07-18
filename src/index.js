import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from "./components/Resume";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
    <Router>
      <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
