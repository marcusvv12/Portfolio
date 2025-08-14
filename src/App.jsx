import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Timeline } from "./components/ui/timeline"; // default export
import { SkillsTL } from "./components/Skills"; // importe o novo componente
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
