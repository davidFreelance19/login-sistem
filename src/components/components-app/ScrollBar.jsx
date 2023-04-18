import { Splide } from "@splidejs/react-splide";
import SplideMainItem from "./SplideMainItem";
import { useGetMovies } from "../../hooks/useGetMovies";
import { optionsLg, optionsNormal } from "../../helpers";
import iconArrow from "/images/icon-arrow.svg";
import useMoviePerfil from "../../hooks/useMoviePerfil";
import Loader from "./Loader";
export default function ScrollBar({ heading, height, sectionXl, busqueda }) {
  const { queryMovie } = useGetMovies(busqueda);

  const { handleClickMovie, dataSeleccionada } = useMoviePerfil();
  return (
    <>
      {queryMovie.isLoading ? (
        <div className="w-full h-[100vh] grid place-content-center place-items-center bg-[#1D1D1D]  z-[111] relative preloader">
          <Loader />
        </div>
      ) : (
        <section className="mt-12 overflow-x-hidden">
          <div className="w-[90%] gap-4 items-center flex mx-auto">
            <h3 className="font-bold text-white capitalize text-2xl hover:cursor-pointer">
              {heading}
            </h3>
            <img
              src={iconArrow}
              alt="icon-arrow"
              className="hover:cursor-pointer"
            />
          </div>
          <div className="md:mx-4 w-[150%] md:w-[115%] md:px-1">
            <Splide options={sectionXl ? optionsLg : optionsNormal}>
              {queryMovie.data.results.map((result) => (
                <SplideMainItem
                  result={result}
                  height={height}
                  key={result.id}
                  selection={dataSeleccionada.find((movie) =>
                    Number(movie.id) === result.id ? movie.id : ""
                  )}
                />
              ))}
            </Splide>
          </div>
        </section>
      )}
    </>
  );
}
