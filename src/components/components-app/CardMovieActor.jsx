import { useGetMovies } from "../../hooks/useGetMovies";
import Loader from "./Loader";
import SplideMainItem from "./SplideMainItem";
SplideMainItem;
const CardMovieActor = ({ id, movie }) => {
  const { queryMovie } = useGetMovies(
    `person/${id}/${movie ? "movie_credits" : "tv_credits"}`
  );
  return (
    <>
      {" "}
      {queryMovie.isFetching ? (
        <div
          className={`w-full h-[100vh] grid place-content-center place-items-center bg-[#1D1D1D]  z-[111] relative preloader ${
            queryMovie.isLoading ? "loading" : ""
          }`}
        >
          <Loader loading={queryMovie.isLoading} />
        </div>
      ) : (
        // <CardMovies result={result} />
        <section className="grid  lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-5 w-[90%] max-w-[1460px] gap-x-10 gap-y-5  mx-auto">
          {queryMovie.data.cast.map((result) => (
            <SplideMainItem result={result} key={result.id} />
          ))}
        </section>
      )}
    </>
  );
};

export default CardMovieActor;
