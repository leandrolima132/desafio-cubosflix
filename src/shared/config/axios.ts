import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  },
});

export default api;
