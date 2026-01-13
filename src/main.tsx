import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import LightbulbCursor from "./components/ui/LightbulbCursor.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <LightbulbCursor />
  </StrictMode>
);
