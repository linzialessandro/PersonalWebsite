import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PageFallback from "./components/PageFallback";
import Home from "./pages/Home";
import { getBasename } from "./lib/site";

const CV = lazy(() => import("./pages/CV"));
const Publications = lazy(() => import("./pages/Publications"));
const Teaching = lazy(() => import("./pages/Teaching"));
const AcademicNet = lazy(() => import("./pages/AcademicNet"));
const AIGallery = lazy(() => import("./pages/AIGallery"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cv" element={<CV />} />
          <Route path="publications" element={<Publications />} />
          <Route path="teaching" element={<Teaching />} />
          <Route path="academic-net" element={<AcademicNet />} />
          <Route path="ai-gallery" element={<AIGallery />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

const App = () => {
  return (
    <BrowserRouter basename={getBasename()}>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
