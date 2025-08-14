import React from "react";
import { Navbar } from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { ProjectsSection } from "./ProjectsSection";
import { Footer } from "./Footer";

export const Projects = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background atrás de tudo */}
      
        <StarBackground />
      

      {/* Navbar fixo no topo */}
      <Navbar />

      {/* Espaço para não ficar por baixo do navbar (ajuste conforme altura do seu navbar) */}
      <div className="h-20 md:h-24" />

      {/* Main */}
      <main className="container mx-auto px-4">
        

        {/* Sessão de projetos */}
        <section id="about" className="pb-20">
          <ProjectsSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toggle fixo no canto (opcional) */}
      <div className="fixed right-4 bottom-4 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
};
