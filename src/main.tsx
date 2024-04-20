import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeConfig from "./config/theme.config.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeConfig>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeConfig>
  </React.StrictMode>
);
