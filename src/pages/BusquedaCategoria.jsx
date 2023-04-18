import { useGetMoviesCategory } from "../hooks/useGetMovies";
import { useParams, useLocation, Link } from "react-router-dom";
import Loader from "../components/components-app/Loader";
import CardMovies from "../components/components-app/CardMovies";
const BusquedaCategoria = () => {
  const params = useParams();
  const location = useLocation();
  const { queryMovie } = useGetMoviesCategory(
    `discover/${location.pathname.includes("movie") ? "movie" : "tv"}`,
    params.id
  );
  return (
    <>
      {queryMovie.isFetching ? (
        <div
          className={`w-full h-[100vh] grid place-content-center place-items-center bg-[#1D1D1D]  z-[111] relative preloader ${
            queryMovie.isLoading ? "loading" : ""
          }`}
        >
          <Loader loading={queryMovie.isLoading} />
        </div>
      ) : (
        <>
          <header className="w-[90%] max-w-[1460px] my-14 mx-auto flex justify-between">
            <h1 className="text-4xl font-bold text-white">
              {location.pathname.includes("movie")
                ? "Peliculas de"
                : "TV-Shows de"}{" "}
              {params.category}
            </h1>
            <Link
              to="/busqueda-categorias"
              className="text-lg font-bold text-white hover:border-b"
            >
              Go Back
            </Link>
          </header>
          <section className="grid  lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-5 w-[90%] max-w-[1460px] gap-x-10 gap-y-5  mx-auto">
            {queryMovie?.data.results.map((result) => (
              <CardMovies result={result}/>
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default BusquedaCategoria;
