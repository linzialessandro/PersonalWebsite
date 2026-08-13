import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/archivo/latin-700.css";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "./index.css";
import App from "./App.jsx";
import { redirectLegacyHashRoute } from "./lib/hashRedirect.js";

redirectLegacyHashRoute();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
