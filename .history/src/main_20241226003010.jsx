import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import FrontendContext from "./context/FrontendContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <FrontendContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FrontendContext>
);
