import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Preconnect to external domains for faster resource loading
const preconnectDomains = [
  'https://www.youtube-nocookie.com',
  'https://open.spotify.com',
  'https://embed.music.apple.com',
];

preconnectDomains.forEach(domain => {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = domain;
  document.head.appendChild(link);
});

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<Root />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
