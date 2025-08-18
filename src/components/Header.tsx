import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../shared/context/ThemeContext";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)!;
  const navigate = useNavigate();

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between border-b transition-colors
   bg-gray-dark-1 border-gray-dark-5"
    >
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/assets/logo.svg" alt="CUBOS Movies" />
      </div>

      <button
        aria-label="Trocar tema"
        className="w-12 h-12 flex items-center justify-center rounded-lg transition-colors
      bg-gray-dark-3 text-gray-dark-12 hover:text-purple-dark-9"
        onClick={toggleTheme}
      >
        <img
          src={
            theme === "dark"
              ? "/assets/icons/sun.svg"
              : "/assets/icons/eclipse.png"
          }
          alt={theme === "dark" ? "Modo claro" : "Modo escuro"}
          className="w-6 h-6"
        />
      </button>
    </header>
  );
};

export default Header;
