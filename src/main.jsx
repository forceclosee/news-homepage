import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Font Inter Supports weights 100-900
import "@fontsource-variable/inter/wght.css";

import App from "./App.jsx";

// css
import "./assets/base-styles/base.css";
import { MenuProvider } from "./context/MenuContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </StrictMode>,
);
