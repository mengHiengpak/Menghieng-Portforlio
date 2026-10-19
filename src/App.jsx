import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AdminLayout from "./layout/AdminLayout";

const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const Projects = lazy(() => import("./page/Projects"));
const Education = lazy(() => import("./page/Education"));
const Certificate = lazy(() => import("./page/Certificate"));
const Contact = lazy(() => import("./page/Contact"));
import { LoginForm } from "./assets/LoginForm";

function Loader() {
  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-3">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-neutral-400/40 border-t-indigo-600" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={
            <Suspense fallback={<Loader />}>
              <Home />
              <About />
              <Projects />
              <Education />
              <Certificate />
              <Contact />
            </Suspense>
          } />
          <Route path="/about" element={<Suspense fallback={<Loader />}><About /></Suspense>} />
          <Route path="/projects" element={<Suspense fallback={<Loader />}><Projects /></Suspense>} />
          <Route path="/education" element={<Suspense fallback={<Loader />}><Education /></Suspense>} /> 
          <Route path="/certificate" element={<Suspense fallback={<Loader />}><Certificate /></Suspense>} /> 
          <Route path="/contact" element={<Suspense fallback={<Loader />}><Contact /></Suspense>} />
          <Route path="/login" element={<div className="min-h-screen flex items-center justify-center bg-[#0b0d17]"><LoginForm /></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
