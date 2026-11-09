import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.title = "Charuka's Portfolio";
  }, []);

  useEffect(() => {
    console.log("Theme changed. Dark mode is:", isDark);
  }, [isDark]);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#222" : "#fff",
        color: isDark ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;