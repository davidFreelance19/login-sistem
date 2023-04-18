import { useGetMovies } from "../../hooks/useGetMovies";
import { Splide } from "@splidejs/react-splide";
import { optionsCast } from "../../helpers";
import Loader from "./Loader";
import SplideActor from "./SplideActor";
import iconArrow from "/images/icon-arrow.svg";
const CastPelicula = ({ id, typeInfo }) => {
  const { queryMovie } = useGetMovies(`${typeInfo}/${id}/credits`);
  return (
    <>
      {queryMovie.isLoading ? (
        <div
          className={`w-full h-[100vh] grid place-content-center place-items-center bg-[#1D1D1D]  z-[111] relative preloader ${
            queryMovie.isLoading ? "loading" : ""
          }`}
        >
          <Loader loading={queryMovie.isLoading} />
        </div>
      ) : (
        <>
          <div className="w-[90%] gap-4 flex items-center mx-auto mt-12">
            <h3 className="font-bold text-white capitalize text-2xl hover:cursor-pointer">
              Main cast
            </h3>
            <img
              src={iconArrow}
              alt="icon-arrow"
              className="hover:cursor-pointer"
            />
          </div>
          <div className="md:mx-4 w-[150%] md:w-[115%] md:px-1">
            <Splide options={optionsCast}>
              {queryMovie?.data.cast.map((result) => (
                <SplideActor actor={result} key={result.id} height="450px" />
              ))}
            </Splide>
          </div>
        </>
      )}
    </>
  );
};

export default CastPelicula;
