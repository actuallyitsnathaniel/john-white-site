import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<Root />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
