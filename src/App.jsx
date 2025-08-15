import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Timeline } from "./pages/timeline"; 
import { SkillsTL } from "./pages/Skills"; 
import { Cv } from "./pages/Cv"; 
import { About } from "./pages/About"; 
import { Contact } from "./pages/Contact"; 
import { Projects } from "./pages/Projects"; 
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
