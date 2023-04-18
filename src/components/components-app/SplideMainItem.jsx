import CardMovies from "./CardMovies";
import { SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import useMoviePerfil from "../../hooks/useMoviePerfil";
export default function SplideMainItem({ result, height, selection }) {
  const { dataSeleccionada } = useMoviePerfil();
  const [moviesSeleccionada, setMoviesSeleccionadas] = useState({});
  useEffect(() => {
    const listItem = dataSeleccionada.find(
      (movie) => Number(movie.id) === result.id
    );
    if (listItem) {
      setMoviesSeleccionadas(listItem);
    }
  }, [moviesSeleccionada]);
  return (
    <SplideSlide>
      <CardMovies
        result={result}
        height={height}
        moviesSeleccionada={moviesSeleccionada}
      />
    </SplideSlide>
  );
}
