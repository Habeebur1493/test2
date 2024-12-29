import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FrontendContext from "./context/FrontendContext";
import { BrowserRouter as BrowseRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <FrontendContext>
    <App />
  </FrontendContext>
);

createRoot(document.getElementById("root")).render(
  <BrowseRouter>
    <App />
  </BrowseRouter>
);
