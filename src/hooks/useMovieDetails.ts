import { useQuery } from "@tanstack/react-query";
import { getMoviesById } from "../services/getMoviesById";

export const useMovieDetails = (id: number) => {
  return useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => getMoviesById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
