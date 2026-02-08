import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { posts } from "./date/posts.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App src={posts} />
  </StrictMode>,
);
