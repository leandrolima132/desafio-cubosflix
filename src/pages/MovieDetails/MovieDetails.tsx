import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { MovieBackdrop } from "./components/MovieBackdrop";
import { MoviePoster } from "./components/MoviePoster";

import { Badge } from "../../components/Badge";
import ProgressCircle from "./components/ProgressCircle";
import { formatDateBR } from "../../shared/utils/formattedDate";
import { MovieTrailer } from "./components/MovieTrailer";
import { useMovieVideos } from "../../hooks/useMovieVideos";
import { formatCurrency } from "../../shared/utils/formattedMoney";
import { MovieGenres } from "./components/MovieGenres";

export default function MovieDetails() {
  const { id } = useParams();
  const movieId = Number(id);
  const { data, isLoading, error } = useMovieDetails(movieId);
  const { data: videos } = useMovieVideos(movieId);
  const movie = data?.results;

  if (!id || isNaN(movieId)) {
    return (
      <div className="flex  items-center  min-h-screen bg-gray-dark-1">
        <main className="flex-grow pt-[72px]">
          <p className="text-center text-gray-300">
            ID inválido. Não foi possível carregar os detalhes do filme.
          </p>
        </main>
      </div>
    );
  }

  if (isLoading) return <MovieDetailsSkeleton />;

  if (!movie || Object.keys(movie).length === 0) {
    return (
      <div className="flex  items-center  min-h-screen bg-gray-dark-1">
        <main className="flex-grow pt-[72px]">
          <p className="text-center text-gray-300">
            Nenhuma informação disponível para este filme.
          </p>
        </main>
      </div>
    );
  }
  if (error)
    return (
      <div className="flex  items-center  min-h-screen bg-gray-dark-1">
        <main className="flex-grow pt-[72px]">
          <p className="text-center text-gray-300">
            Erro ao carregar detalhes do filme.
          </p>
        </main>
      </div>
    );

  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-dark-1 text-white">
      <main className="flex-grow pt-[72px]">
        <MovieBackdrop backdropUrl={backdropUrl} />
        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-center px-6 py-10 gap-10">
          <MoviePoster posterUrl={posterUrl} title={movie.title} />
          <div className="flex flex-col lg:flex-row gap-10 flex-wrap">
            {/* Coluna 1: Header + Gêneros */}
            <div className="flex-1 min-w-[300px] space-y-6 text-sm">
              <div className="max-w-xl space-y-6 text-sm">
                <div className="space-y-2">
                  <h1 className=" text-[32px] font-semibold break-words leading-tight">
                    {movie.title}
                  </h1>
                  {movie.original_title && (
                    <p className="dark:text-gray-dark-11 text-base mt-2">
                      Título original: {movie.original_title}
                    </p>
                  )}
                  {movie.tagline && (
                    <p className="text-gray-dark-12 text-base mt-2">
                      {movie.tagline}
                    </p>
                  )}
                </div>
                <Badge title="Sinopse" description={movie.overview} />
                <MovieGenres genres={movie.genres} />
              </div>
            </div>
            {/* Coluna 2: Badges & Stats */}
            <div className="flex-1 min-w-[300px] space-y-6 text-sm">
              {/* Popularidade / Votos / Circle */}
              <div className="grid grid-cols-3 gap-4">
                <Badge
                  title="Popularidade"
                  description={movie.popularity.toFixed(0)}
                />
                <Badge
                  title="Votos"
                  description={movie.vote_count.toString()}
                />
                <div className="flex items-center justify-center h-full">
                  <ProgressCircle
                    percentage={Math.round(movie.vote_average * 10)}
                  />
                </div>
              </div>

              {/* Informações principais */}
              <div className="grid grid-cols-2 gap-4">
                <Badge
                  title="Lançamento"
                  description={formatDateBR(movie.release_date)}
                />
                <Badge
                  title="Duração"
                  description={`${Math.floor(movie.runtime / 60)}h ${
                    movie.runtime % 60
                  }m`}
                />
                <Badge title="Situação" description={movie.status} />
                <Badge
                  title="Idioma"
                  description={movie.spoken_languages
                    .map((lang) => lang.name)
                    .join(", ")}
                />
              </div>

              {/* Financeiro */}
              <div className="grid grid-cols-3 gap-4">
                <Badge
                  title="Orçamento"
                  description={formatCurrency(movie.budget)}
                />
                <Badge
                  title="Receita"
                  description={formatCurrency(movie.revenue)}
                />
                <Badge
                  title="Lucro"
                  description={formatCurrency(movie.revenue - movie.budget)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          {videos?.key ? (
            <MovieTrailer videoId={videos.key} />
          ) : (
            <div className="text-center text-gray-400 py-10">
              Trailer não disponível.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function MovieDetailsSkeleton() {
  return (
    <div className="relative min-h-screen bg-gray-dark-1">
      <main className="flex-grow pt-[72px]">
        {/* Content Skeleton */}
        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center px-6 py-10 gap-10 animate-pulse">
          {/* Poster */}
          <div className="w-[300px] h-[450px] bg-gray-dark-3 rounded-lg" />

          {/* Text Info */}
          <div className="max-w-xl space-y-6 text-sm flex-1">
            <div className="h-6 bg-gray-dark-3 rounded w-3/4" />
            <div className="h-4 bg-gray-dark-3 rounded w-1/2" />
            <div className="h-4 bg-gray-dark-3 rounded w-full" />
            <div className="h-48 bg-gray-dark-3 rounded w-full" />
            <div className="h-20 bg-gray-dark-3 rounded w-5/6" />
          </div>

          {/* Badges & Stats */}
          <div className="max-w-xl space-y-6 text-sm flex-1">
            {/* Popularidade / Votos / Circle */}
            <div className="grid grid-cols-3 gap-4 items-start">
              <div className="h-16 bg-gray-dark-3 rounded w-full" />
              <div className="h-16 bg-gray-dark-3 rounded-lg" />
              <div className="h-16 w-16 bg-gray-dark-3 rounded-full flex items-center justify-center" />
            </div>

            {/* Informações principais */}
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-16 bg-gray-dark-3 rounded-lg" />
              ))}
            </div>

            {/* Financeiro */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-16 bg-gray-dark-3 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
