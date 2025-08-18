import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../services/getGenres";

export const useGenres = (language = "pt-BR") => {
  return useQuery({
    queryKey: ["genres", language],
    queryFn: () => getGenres(language),
    staleTime: 1000 * 60 * 60, // 1 hora
  });
};
