import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import FrontendContext from "./context/FrontendContext";
import { BrowserRouter } from "react-router-dom";




const BrowseRouter = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};



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
