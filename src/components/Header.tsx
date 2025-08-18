import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-dark-1 px-6 py-4 flex items-center justify-between border-b border-gray-dark-5">
      <div className="flex items-center space-x-2">
        <img src="/assets/logo.svg" alt="CUBOS Movies" />
      </div>

      <button
        aria-label="Abrir configurações"
        className="w-16 h-12 flex items-center justify-center rounded-lg text-gray-dark-12 hover:text-purple-dark-9 transition-colors
          bg-gray-dark-3
        "
      >
        <img src="/assets/icons/sun.svg" alt="imagem do sol" />
      </button>
    </header>
  );
};

export default Header;
