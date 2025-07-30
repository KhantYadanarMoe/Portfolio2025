import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/index";
import { ThemeProvider } from "./Contexts/ThemeContext";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
