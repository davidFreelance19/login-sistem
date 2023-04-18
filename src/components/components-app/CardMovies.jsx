import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Start from "./Start";
import rating from "/images/icons-rating.svg";
import useMoviePerfil from "../../hooks/useMoviePerfil";
import useAuth from "../../hooks/useAuth";
const CardMovies = ({ result, height, moviesSeleccionada }) => {
  const [bookMark, setBookMark] = useState(
    Number(moviesSeleccionada.id) === result.id ? true : false
  );
  const { auth } = useAuth();
  const { handleClickMovie } = useMoviePerfil();
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = async (result) => {
    bookMark ? setBookMark(false) : setBookMark(true);
    !localStorage.getItem("token") && navigate("/login");
    await handleClickMovie({
      poster: result.poster_path,
      titulo: result.title || result.name,
      id: result.id,
      seleccionada: bookMark,
      type: result.title ? "movie" : "tv",
      category: "verDespues",
      eliminar: result.id + auth._id + "verDespues",
    });
  };
  useEffect(() => {
    setBookMark(result.id === Number(moviesSeleccionada.id));
  }, [moviesSeleccionada]);

  return (
    <blockquote
      className={`${
        !height ? "w-[280px]" : "w-full"
      } bg-no-repeat bg-cover bg-center text-6xl relative rounded-lg hover:cursor-pointer p-4 px-10`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
          result.poster_path ? result.poster_path : result.poster
        })`,
        height: `${height ? height : "450px"}`,
      }}
      onClick={(e) =>
        e.target.tagName === "DIV" &&
        navigate(
          `${
            result.title || result.type === "movie" ? "/movies" : "/tv-series"
          }/${result.id}`
        )
      }
    >
      {!location.pathname.includes("collection") && (
        <div
          className="absolute right-[5%] p-1 z-10 bg-[#000000c4] rounded-full"
          onClick={() => handleClick(result)}
        >
          {moviesSeleccionada && <Start bookmark={bookMark} />}
        </div>
      )}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0ae8] py-8 px-4 items-end flex z-[1] rounded-lg">
        <div className="text-white ">
          <img src={rating} alt="icon-start" className="mb-3" />
          <h3 className="text-3xl font-bold">
            {result.title
              ? result.title
              : result.titulo
              ? result.titulo
              : result.name}
          </h3>
        </div>
      </div>
    </blockquote>
  );
};

export default CardMovies;
