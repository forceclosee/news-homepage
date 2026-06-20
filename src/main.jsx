import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Font Inter Supports weights 100-900
import "@fontsource-variable/inter/wght.css";

// css
import "./assets/base-styles/base.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
