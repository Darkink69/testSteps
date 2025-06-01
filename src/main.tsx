import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import '@fontsource/maven-pro/400.css';  // font-normal
import '@fontsource/maven-pro/500.css';  // font-medium
import '@fontsource/maven-pro/700.css';  // font-bold

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
