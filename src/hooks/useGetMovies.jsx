import { useQuery } from "@tanstack/react-query";
import { movieApi } from "../api/movieApi";
import { sleep } from "../helpers";
const getMovies = async (busqueda) => {
  await sleep(2.2);
  const { data } = await movieApi.get(
    `/${busqueda}?api_key=${import.meta.env.VITE_API_KEY}`
  );
  return data;
};
export const useGetMovies = (busqueda) => {
  const queryMovie =
    busqueda &&
    useQuery([`${busqueda}`], () => getMovies(busqueda), {
      staleTime: 1000 * 60 * 60 * 24,
    });
  return { queryMovie };
};
const getMoviesCategory = async (busqueda, id) => {
  await sleep(2.2);
  const { data } = await movieApi.get(
    `/${busqueda}?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${id}`
  );
  return data;
};
export const useGetMoviesCategory = (busqueda, id) => {
  const queryMovie =
    busqueda &&
    useQuery([`${busqueda}/${id}`], () => getMoviesCategory(busqueda, id), {
      staleTime: 1000 * 60 * 60 * 24,
    });
  return { queryMovie };
};
