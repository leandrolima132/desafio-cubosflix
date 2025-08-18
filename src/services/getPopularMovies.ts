import api from "../shared/config/axios";
import type { Movie } from "../shared/types/movie";

export const getPopularMovies = async (
  page = 1
): Promise<{ results: Movie[]; totalPages: number }> => {
  const response = await api.get<{
    results: Movie[];
    total_pages: number;
  }>("/movie/popular", {
    params: {
      page,
    },
  });

  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
};
