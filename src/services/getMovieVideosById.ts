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
  const trailer = response.data.results.find(
    (video) =>
      video.type === "Trailer" && video.site === "YouTube" && Boolean(video.key)
  );
  return trailer ?? null;
};
