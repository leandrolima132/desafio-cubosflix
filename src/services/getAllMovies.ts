import api from "../shared/config/axios";

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getAllMovies = async (
  page = 1
): Promise<{ results: Movie[]; totalPages: number }> => {
  const response = await api.get("/movie/popular", {
    params: {
      language: "pt-BR",
      page,
    },
  });

  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
};
