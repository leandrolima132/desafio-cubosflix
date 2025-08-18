import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Movie } from "../services/getAllMovies";
import { getMoviesById } from "../services/getMoviesById";
import { Badge } from "../components/Badge";

const genreMap: Record<number, string> = {
  28: "Ação",
  12: "Aventura",
  16: "Animação",
  35: "Comédia",
  80: "Crime",
  99: "Documentário",
  18: "Drama",
  10751: "Família",
  14: "Fantasia",
  36: "História",
  27: "Terror",
  10402: "Música",
  9648: "Mistério",
  10749: "Romance",
  878: "Ficção Científica",
  10770: "TV",
  53: "Thriller",
  10752: "Guerra",
  37: "Faroeste",
};

const formatCurrency = (value: number) =>
  `US$ ${value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export default function MovieDetails() {
  const { id } = useParams();
  const movieId = Number(id);
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { results } = await getMoviesById(movieId);
        setMovie(results[0]);
      } catch (error) {
        console.error("Erro ao buscar detalhes do filme:", error);
      }
    };

    if (!isNaN(movieId)) {
      fetchMovie();
    }
  }, [movieId]);

  if (!movie) {
    return <p className="text-center mt-10 text-white">Carregando...</p>;
  }

  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const genres = Array.isArray(movie.genre_ids)
    ? movie.genre_ids.map((id) => genreMap[id] || id).join(", ")
    : "Não disponível";
  const profit = movie.revenue - movie.budget;

  return (
    <div className="relative min-h-screen bg-gray-dark-1 text-white">
      {/* Imagem de fundo */}
      <div
        className="absolute top-0 left-0 w-full h-[606px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      />
      {/* Camada escura sobre a imagem */}
      <div className="absolute inset-0 bg-gray-dark-1/80 bg-opacity-70" />

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center px-6 py-10 gap-10">
        {/* Poster */}
        <img
          src={posterUrl}
          alt={`Poster de ${movie.title}`}
          className="w-64 sm:w-[354px] sm:h-[542px] rounded-lg shadow-lg"
        />

        {/* Informações */}
        <div className="max-w-xl space-y-6 text-sm">
          <div>
            <h1 className="text-[32px] font-semibold">{movie.title}</h1>
            {movie.tagline && (
              <p className="italic text-gray-400 text-base mt-1">
                {movie.tagline}
              </p>
            )}
          </div>

          <Badge title="Sinopse" description={movie.overview} />
          <Badge title="Gêneros" description={genres} />

          {/* Seção: Informações */}
          <div className="space-y-4 pt-4">
            <h2 className="text-lg font-semibold text-white">Informações</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Badge title="Lançamento" description={movie.release_date} />
              <Badge
                title="Duração"
                description={`${Math.floor(movie.runtime / 60)}h ${
                  movie.runtime % 60
                }m`}
              />
              <Badge
                title="Idioma"
                description={movie.original_language.toUpperCase()}
              />
              <Badge title="Situação" description={movie.status} />
            </div>
          </div>

          {/* Seção: Avaliação */}
          <div className="space-y-4 pt-4">
            <h2 className="text-lg font-semibold text-white">Avaliação</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Badge title="Votos" description={movie.vote_count.toString()} />
              <Badge
                title="Avaliação"
                description={`${movie.vote_average * 10}%`}
              />
            </div>
          </div>

          {/* Seção: Financeiro */}
          <div className="space-y-4 pt-4">
            <h2 className="text-lg font-semibold text-white">Financeiro</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Badge
                title="Orçamento"
                description={formatCurrency(movie.budget)}
              />
              <Badge
                title="Receita"
                description={formatCurrency(movie.revenue)}
              />
              {movie.revenue > 0 && (
                <Badge title="Lucro" description={formatCurrency(profit)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
