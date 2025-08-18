import { useQuery } from "@tanstack/react-query";
import { getMovieVideosById } from "../services/getMovieVideosById";

export const useMovieVideos = (id: number) => {
  return useQuery({
    queryKey: ["movieVideos", id],
    queryFn: () => getMovieVideosById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
