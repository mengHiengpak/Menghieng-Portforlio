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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={
            <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
              <Home />
              <About />
              <Projects />
              <Education />
              <Certificate />
              <Contact />
            </Suspense>
          } />
          <Route path="/about" element={<Suspense fallback={<div className="text-center p-10">Loading...</div>}><About /></Suspense>} />
          <Route path="/projects" element={<Suspense fallback={<div className="text-center p-10">Loading...</div>}><Projects /></Suspense>} />
          <Route path="/education" element={<Suspense fallback={<div className="text-center p-10">Loading...</div>}><Education /></Suspense>} /> 
          <Route path="/certificate" element={<Suspense fallback={<div className="text-center p-10">Loading...</div>}><Certificate /></Suspense>} /> 
          <Route path="/contact" element={<Suspense fallback={<div className="text-center p-10">Loading...</div>}><Contact /></Suspense>} />
          <Route path="/login" element={<div className="min-h-screen flex items-center justify-center bg-[#0b0d17]"><LoginForm /></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
