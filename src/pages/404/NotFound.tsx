import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] bg-gray-dark-1 text-white px-6 text-center animate-fade-in">
      <h1 className="text-6xl font-bold text-purple-dark-10 mb-4 animate-bounce">
        404
      </h1>
      <p className="text-xl mb-6 animate-fade-in-delay">
        Ops! A página que você está procurando não foi encontrada.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-purple-dark-10 hover:bg-purple-dark-9 text-white rounded"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
