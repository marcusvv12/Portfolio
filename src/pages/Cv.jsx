"use client";

import { useState } from "react";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

export const Cv = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fundo com estrelas */}
      <StarBackground />

      {/* Navbar fixa */}
      <Navbar />

      {/* Espaço para compensar altura da navbar */}
      <div className="h-20 md:h-24" />

      {/* Conteúdo principal */}
      <main className="container flex flex-col items-center justify-center px-4 mx-auto pb-4">
        {/* Botões de idioma */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setLanguage("en")}
            className={`flex gap-2 items-center border-2 px-5 py-3 shadow-md rounded-md transition-all duration-300 hover:translate-y-[-0.335rem] hover:shadow-xl ${
              language === "en"
                ? "bg-foreground text-background"
                : "bg-background text-foreground"
            }`}
          >
            <img
              src="/images/plugin-accessibility/eua.png"
              width={20}
              height={20}
              alt="USA Flag"
            />
            English
          </button>

          <button
            onClick={() => setLanguage("pt")}
            className={`flex gap-2 items-center border-2 px-5 py-3 shadow-md rounded-md transition-all duration-300 hover:translate-y-[-0.335rem] hover:shadow-xl ${
              language === "pt"
                ? "bg-foreground text-background"
                : "bg-background text-foreground"
            }`}
          >
            <img
              src="/images/plugin-accessibility/brasil.png"
              width={20}
              height={20}
              alt="Brazil Flag"
            />
            Portuguese
          </button>
        </div>

        {/* PDF do CV ajustado para quase tela cheia */}
        <div className="w-full max-w-[1200px] flex-1">
          <iframe
            src={language === "en" ? "/pdf/resume.pdf" : "/pdf/curriculo.pdf"}
            className="w-full h-[calc(100vh-160px)] shadow-lg rounded-lg"
            style={{ minHeight: "80vh" }}
          ></iframe>
        </div>

        {/* Crédito */}
        <p className="mt-4 text-sm text-muted-foreground">
          Inspired by{" "}
          <a
            href="https://azal.im/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Luca Azalim CV page
          </a>
          .
        </p>
      </main>

      {/* Footer */}
      <Footer />

      {/* Theme Toggle fixo */}
      <div className="fixed right-4 bottom-4 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
};
