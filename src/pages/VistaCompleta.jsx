import { useGetMovies } from "../hooks/useGetMovies";
import { useParams, useLocation } from "react-router-dom";
import Loader from "../components/components-app/Loader";
import Gallery from "../components/components-app/Gallery";
import CastPelicula from "../components/components-app/CastPelicula";
import ScrollBar from "../components/components-app/ScrollBar";
import Reviews from "../components/components-app/Reviews";
import SplideHeroItem from "../components/components-app/SplideHeroItem";
SplideHeroItem;
const VistaCompleta = () => {
  const params = useParams();
  const location = useLocation();
  const { queryMovie } = useGetMovies(
    `${location.pathname.includes("movies") ? "movie" : "tv"}/${params.id}`
  );
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
          <SplideHeroItem result={queryMovie?.data} />
          <CastPelicula
            id={params.id}
            typeInfo={location.pathname.includes("movies") ? "movie" : "tv"}
          />
          <section className="w-[90%] mx-auto mt-5 mb-20 flex xl:gap-20">
            <blockquote className="w-7/12">
              <h3 className="text-white text-2xl font-bold">Reviews</h3>
              <div className="overflow-auto max-h-[500px] h-auto mt-4">
                <Reviews
                  id={params.id}
                  type={location.pathname.includes("movies") ? "movie" : "tv"}
                />
              </div>
            </blockquote>
            <div className="w-5/12 h-[500px]  gap-6">
              <h3 className=" text-white text-2xl font-bold">Gallery</h3>
              <blockquote className="grid grid-cols-2 h-[90%] w-full gap-4 mt-8">
                <Gallery
                  id={params.id}
                  type={location.pathname.includes("movies") ? "movie" : "tv"}
                />
              </blockquote>
            </div>
          </section>
          <ScrollBar
            heading={
              location.pathname.includes("movies")
                ? "Peliculas Relacionadas"
                : "Series Relaciondas"
            }
            height="490px"
            busqueda={`${
              location.pathname.includes("movies") ? "movie" : "tv"
            }/${params.id}/recommendations`}
          />
        </>
      )}
    </>
  );
};

export default VistaCompleta;
