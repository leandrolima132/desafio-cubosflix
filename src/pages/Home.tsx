import { useEffect, useState } from "react";
import { getAllMovies, type Movie } from "../services/getAllMovies";
import HeroSection from "../components/HeroSection";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import { getFilteredMovies } from "../services/getFilteredMovies";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const { results, totalPages } = searchTerm
          ? await getFilteredMovies(searchTerm, currentPage)
          : await getAllMovies(currentPage);

        setMovies(results);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [currentPage, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-dark-1">
      <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MovieGrid movies={movies} loading={loading} />
      <div className="block sm:hidden">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
          maxVisiblePages={3}
        />
      </div>
      <div className="hidden sm:block">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
          maxVisiblePages={5}
          loading={loading}
        />
      </div>
    </div>
  );
}
