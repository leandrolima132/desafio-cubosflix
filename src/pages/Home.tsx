import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {/* Aqui você pode mapear seus filmes e exibi-los */}
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => {
            // Navegar para a página de detalhes do filme
            console.log("Navegar para a página de detalhes do filme");
            navigate(`/filme/dasdasd`);
          }}
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}
