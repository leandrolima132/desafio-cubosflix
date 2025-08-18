import api from "../shared/config/axios";
import type { MovieDetails } from "../shared/types/movieDetails";

export const getMoviesById = async (
  id: number
): Promise<{ results: MovieDetails; totalPages: number }> => {
  const response = await api.get<MovieDetails>(`/movie/${id}`, {
    params: {},
  });

  return {
    results: response.data,
    totalPages: 1,
  };
};
