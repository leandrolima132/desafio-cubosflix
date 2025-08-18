import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { MovieGrid } from "./components/MovieGrid";
import { useMovies } from "../../hooks/useMovies";
import { Pagination } from "./components/Pagination";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading } = useMovies({ searchTerm, currentPage });

  const movies = data?.results ?? [];
  const totalPages = data?.totalPages ?? 1;

  return (
    <div className="min-h-screen flex flex-col bg-gray-dark-1">
      <main className="flex-grow pt-[72px]">
        <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <MovieGrid movies={movies} loading={isLoading} />
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
            loading={isLoading}
          />
        </div>
      </main>
    </div>
  );
}
