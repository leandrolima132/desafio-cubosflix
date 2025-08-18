import { useGenres } from "../../../hooks/useGenres";

import { SearchBar } from "./SearchBar";
import { FilterPopover } from "./FilterPopover";
import { MovieBackdrop } from "../../MovieDetails/components/MovieBackdrop";

interface Props {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  language: string;
  setLanguage: (value: string) => void;

  genres: number[];
  setGenres: (value: number[]) => void;
}

export function HeroSection({
  searchTerm,
  setSearchTerm,
  language,
  setLanguage,
  genres,
  setGenres,
}: Props) {
  const { data: availableGenres = [], isLoading: loadingGenres } =
    useGenres(language);

  return (
    <section className="relative h-[564px] overflow-hidden">
      <MovieBackdrop backdropUrl="/assets/home-background2.svg" />

      {/* Conteúdo central */}
      <div className="relative z-10 flex py-6 flex-row justify-center px-6 text-center gap-4">
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <FilterPopover
          language={language}
          setLanguage={setLanguage}
          genres={genres}
          setGenres={setGenres}
          availableGenres={availableGenres}
          loadingGenres={loadingGenres}
        />
      </div>
    </section>
  );
}
