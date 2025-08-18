import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { MovieGrid } from "./components/MovieGrid";
import { useMovies } from "../../hooks/useMovies";
import { Pagination } from "./components/Pagination";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("pt-BR");
  const [genres, setGenres] = useState<number[]>([]);
  console.log(genres);

  const { data, isLoading } = useMovies({
    searchTerm,
    currentPage,
    language,
    genres,
  });

  const movies = data?.results ?? [];
  const totalPages = data?.totalPages ?? 1;

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-dark-1">
      <main className="flex-grow pt-[72px]">
        <HeroSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          language={language}
          setLanguage={setLanguage}
          genres={genres}
          setGenres={setGenres}
        />
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
