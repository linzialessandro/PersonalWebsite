import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { redirectLegacyHashRoute } from "./lib/hashRedirect.js";

redirectLegacyHashRoute();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
