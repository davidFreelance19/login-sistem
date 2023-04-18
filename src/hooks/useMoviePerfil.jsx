import { useContext } from "react";
import MovieContext from "../context/MoviesProvider";
const useMoviePerfil = () => {
  return useContext(MovieContext);
};
export default useMoviePerfil;
