import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Enquiry from "./Enquiry.jsx";
import "./index.css";
//import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Enquiry />
  </StrictMode>
);
