import api from "../shared/config/axios";
import type { MovieVideo } from "../shared/types/movieVideo";

export const getMovieVideosById = async (
  id: number
): Promise<MovieVideo | null> => {
  const response = await api.get<{ results: MovieVideo[] }>(
    `/movie/${id}/videos`,
    {
      params: {},
    }
  );

  return response.data.results[0] ?? null;
};
