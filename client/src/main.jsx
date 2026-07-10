import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  if (preloader) {
    preloader.classList.add("hide");

    setTimeout(() => preloader.remove(), 400);
  }
});
