import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();

  console.log("ID do filme:", id);

  return (
    <div className="p-4 text-red-300">
      <h1 className="text-2xl font-bold">Detalhes do Filme</h1>
      <p className="mt-2 text-lg">
        ID do filme: <span className="font-mono text-blue-400">{id}</span>
      </p>
    </div>
  );
}
