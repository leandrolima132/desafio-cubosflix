import { useNavigate } from "react-router-dom";
import type { Movie } from "../../../shared/types/movie";
import { formatDateBR } from "../../../shared/utils/formattedDate";

interface Props {
  movie: Movie;
}

export function MovieCard({ movie }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="relative group w-[183px] h-[281px] sm:w-[220px] sm:h-[340px] md:w-[235px] md:h-[355px] rounded overflow-hidden cursor-pointer transition-shadow hover:shadow-2xl shadow-black/40"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
        <span className="text-yellow-400">★</span>
        <span className="text-white font-medium">
          {movie.vote_average.toFixed(1)}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 z-10 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-base font-semibold text-white drop-shadow-md">
          {movie.title}
        </h3>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
          {movie.title}
        </h3>
        <span className="text-gray-400 text-sm">
          Lançamento: {formatDateBR(movie.release_date)}
        </span>

        <p className="text-gray-200 text-sm line-clamp-2">{movie.overview}</p>
        <button className="mt-4 bg-purple-dark-10 hover:bg-purple-dark-9 text-white px-4 py-2 rounded-lg transition-colors w-full">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}
