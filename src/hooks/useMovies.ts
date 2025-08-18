import { useQuery } from "@tanstack/react-query";
import { getDiscoverMovies } from "../services/getDiscoverMovies";
import { getFilteredMovies } from "../services/getFilteredMovies";

export interface UseMoviesParams {
  searchTerm: string;
  currentPage: number;
  language?: string;
}

export const useMovies = ({
  searchTerm,
  currentPage,
  language,
  genres,
}: UseMoviesParams & {
  genres?: number[];
}) => {
  const isSearching = searchTerm.trim().length > 0;

  return useQuery({
    queryKey: ["movies", searchTerm, currentPage, language, genres],
    queryFn: async () => {
      if (isSearching) {
        return await getFilteredMovies({
          query: searchTerm,
          language,
          page: currentPage,
        });
      }

      return await getDiscoverMovies({
        page: currentPage,
        language,
        region: language === "pt-BR" ? "BR" : "US",
        genres,
      });
    },
  });
};
