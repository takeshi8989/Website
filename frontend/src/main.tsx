import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Article from "./pages/Article.tsx";

const innerRoutes = (
  <Routes>
    <Route index element={<Home />} />
    <Route path=":article" element={<Article />} />
  </Routes>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path=":lang/*" element={innerRoutes} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
