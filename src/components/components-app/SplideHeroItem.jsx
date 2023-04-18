import { SplideSlide } from "@splidejs/react-splide";
import HeroComponent from "./HeroComponent";
import { useEffect, useState } from "react";
import useMoviePerfil from "../../hooks/useMoviePerfil";
export default function SplideHeroItem({ result, genreListMovies }) {
  const { dataSeleccionada } = useMoviePerfil();
  const [verMasTarde, setVerMasTarde] = useState({});
  const [listMeGusta, setListMeGusta] = useState({});

  useEffect(() => {
    const listItem = dataSeleccionada.find(
      (movie) =>
        (Number(movie.id) === result.id) & (movie.category === "verDespues")
    );
    if (listItem) {
      setVerMasTarde(listItem);
    }
  }, [verMasTarde]);
  useEffect(() => {
    const listItem = dataSeleccionada.find(
      (movie) =>
        (Number(movie.id) === result.id) & (movie.category === "meGusta")
    );
    if (listItem) {
      setListMeGusta(listItem);
    }
  }, [listMeGusta]);
  return (
    <SplideSlide key={result.id}>
      <HeroComponent
        data={result}
        genreListMovies={genreListMovies}
        verMasTarde={verMasTarde}
        listMeGusta={listMeGusta}
      />
    </SplideSlide>
  );
}
