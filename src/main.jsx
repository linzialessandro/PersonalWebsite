import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/archivo/latin-400.css";
import "@fontsource/archivo/latin-400-italic.css";
import "@fontsource/archivo/latin-500.css";
import "@fontsource/archivo/latin-600.css";
import "@fontsource/archivo/latin-ext-400.css";
import "@fontsource/archivo/latin-ext-600.css";
import "./index.css";
import App from "./App.jsx";
import { redirectLegacyHashRoute } from "./lib/hashRedirect.js";

redirectLegacyHashRoute();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
