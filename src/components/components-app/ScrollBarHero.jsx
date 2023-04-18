import { useState } from "react";
import { Splide } from "@splidejs/react-splide";
import SplideHeroItem from "./SplideHeroItem";
import { useGetMovies } from "../../hooks/useGetMovies";
import Loader from "./Loader";
import { useEffect } from "react";
import { movieApi } from "../../api/movieApi";
export default function ScrollBarHero({ busqueda }) {
  const { queryMovie } = useGetMovies(busqueda);
  const [genreListMovies, setGenreListMovies] = useState([]);
  useEffect(() => {
    const peticionGenre = async () => {
      const { data } = await movieApi.get(
        `genre/${busqueda.includes('tv') ? 'tv': 'movie'}/list?api_key=${import.meta.env.VITE_API_KEY}`
      );
      const { genres } = data;
      setGenreListMovies(genres);
    };
    peticionGenre();
  }, []);
  return (
    <>
      {queryMovie.isLoading ? (
        <div
          className={`w-full h-[100vh] overflow-hidden  grid place-content-center place-items-center bg-[#1D1D1D]  z-[111] relative preloader ${
            queryMovie.isLoading ? "loading" : ""
          }`}
        >
          <Loader loading={queryMovie.isLoading} />
        </div>
      ) : (
        <section className="mb-20 hero">
          <Splide
            options={{
              type: "loop",
              snap: true,
              arrows: false,
              pagination: false,
              width: "120%",
            }}
          >
            {queryMovie.data?.results.map((result) => (
              <SplideHeroItem
                key={result.id}
                result={result}
                genreListMovies={genreListMovies}
              />
            ))}
          </Splide>
        </section>
      )}
    </>
  );
}
