import api from "../shared/config/axios";

export interface Genre {
  id: number;
  name: string;
}

export const getGenres = async (language = "pt-BR"): Promise<Genre[]> => {
  const response = await api.get<{ genres: Genre[] }>("/genre/movie/list", {
    params: { language },
  });
  return response.data.genres;
};
