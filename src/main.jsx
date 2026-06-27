import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { MenuProvider } from "./context/MenuContext.jsx";

// Font Inter (weights 100-900)
import "@fontsource-variable/inter/wght.css";

// css
import "./assets/base-styles/base.css";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </StrictMode>,
);
