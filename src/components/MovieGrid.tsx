import MovieCard from "./MovieCard";
import { type Movie } from "../services/getAllMovies";

interface Props {
  movies: Movie[];
  loading: boolean;
}

export default function MovieGrid({ movies, loading }: Props) {
  return (
    <section className="-mt-[450px] px-0 sm:px-6 relative z-20 justify-center items-center flex">
      <div className="bg-gray-dark-alpha-3 p-4 sm:p-6 backdrop-blur-sm max-w-[1322px]">
        {loading ? (
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <MovieCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function MovieCardSkeleton() {
  return (
    <div className="relative w-[183px] h-[281px] sm:w-[220px] sm:h-[340px] md:w-[235px] md:h-[355px] rounded overflow-hidden bg-gray-dark-3 animate-pulse">
      <div className="w-full h-full object-cover bg-gray-dark-4" />

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 z-10">
        <div className="h-4 w-3/4 bg-gray-dark-5 rounded" />
      </div>

      <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-3 z-20">
        <div className="h-4 w-3/4 bg-gray-dark-5 rounded mb-2" />
        <div className="h-3 w-2/3 bg-gray-dark-5 rounded" />
      </div>

      <div className="absolute top-2 left-2 w-10 h-10 rounded-full border-4 border-gray-dark-5 flex items-center justify-center bg-gray-dark-4 z-30" />
    </div>
  );
}
