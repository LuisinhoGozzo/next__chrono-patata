"use client";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="p-4 border-b border-gray-200 dark:border-slate-800 flex justify-between items-center">
      <div className="flex gap-6">
        <a href="/" className="hover:text-blue-500 font-bold">Inicio</a>
        <Link href="/about" className="hover:text-blue-500">Acerca de</Link>
      </div>
      <button 
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-gray-200 dark:bg-slate-700"
      >
        {darkMode ? "Modo ☀️ Claro" : "Modo 🌙 Oscuro"}
      </button>
    </nav>
  );
}