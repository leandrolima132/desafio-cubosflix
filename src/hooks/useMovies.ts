import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../services/getPopularMovies";
import { getFilteredMovies } from "../services/getFilteredMovies";

interface UseMoviesParams {
  searchTerm: string;
  currentPage: number;
}

export const useMovies = ({ searchTerm, currentPage }: UseMoviesParams) => {
  return useQuery({
    queryKey: ["movies", searchTerm, currentPage],
    queryFn: async () => {
      return searchTerm
        ? await getFilteredMovies(searchTerm)
        : await getPopularMovies(currentPage);
    },
  });
};
