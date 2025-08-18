import api from "../shared/config/axios";
import type { Movie } from "../shared/types/movie";

interface GetDiscoverMoviesParams {
  page?: number;
  language?: string;
  region?: string;
  genres?: number[];
}

export const getDiscoverMovies = async ({
  page = 1,
  language,
  region,
  genres,
}: GetDiscoverMoviesParams): Promise<{
  results: Movie[];
  totalPages: number;
}> => {
  const response = await api.get<{
    results: Movie[];
    total_pages: number;
  }>("/discover/movie", {
    params: {
      language,
      region,
      page,
      with_genres: genres?.join(","),
    },
  });

  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
};
