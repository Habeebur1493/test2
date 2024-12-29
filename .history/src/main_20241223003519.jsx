import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FrontendContext from "./context/FrontendContext";




createRoot(document.getElementById("root")).render(
  <FrontendContext>
  <App />
  </FrontendContext>
);

