import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Timeline } from "./components/ui/timeline"; 
import { SkillsTL } from "./components/Skills"; 
import { Cv } from "./components/Cv"; 
import { About } from "./components/about"; 
import { Contact } from "./components/Contact"; 
import { Projects } from "./components/Projects"; 
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/skills" element={<SkillsTL />} /> {/* nova rota */}
          <Route path="/about" element={<About />} /> {/* nova rota */}
          <Route path="/contact" element={<Contact />} /> {/* nova rota */}
          <Route path="/projects" element={<Projects />} /> {/* nova rota */}
          <Route path="/cv" element={<Cv />} /> {/* nova rota */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
