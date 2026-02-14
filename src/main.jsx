import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { posts } from "./date/posts.js";
import Header from "./header.jsx";
import PostsDetail from "./PostsDetail.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App src={posts} />} />
        <Route path="/posts/:id" element={<PostsDetail src={posts} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
