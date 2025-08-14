import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
export const ThemeToggle = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    try {
      localStorage.setItem("theme", "dark");
    } catch {}
  }, []);

  return null; // não renderiza nada (sem botão)
};
