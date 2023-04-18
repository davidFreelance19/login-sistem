import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import iconList from "/images/list-solid.svg";
import iconLike from "/images/icon-like.svg";
import iconFavorites from "/images/bookmark.svg";
import iconPlay from "/images/icon-play.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import useMoviePerfil from "../../hooks/useMoviePerfil";
import "react-circular-progressbar/dist/styles.css";
import useAuth from "../../hooks/useAuth";
import ModalFormularioReproduccion from "./ModalFormularioReproduccion";

const InformacionPrimaria = ({
  puntacion,
  result,
  verMasTarde,
  listMeGusta,
}) => {
  const [modal, setModal] = useState(false);
  const [bookMark, setBookMark] = useState(
    Number(verMasTarde.id) === result.id ? true : false
  );
  const [bookMark2, setBookMark2] = useState(
    Number(listMeGusta.id) === result.id ? true : false
  );
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { handleClickMovie, handleClickMeGusta } = useMoviePerfil();
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
  const handleClick2 = async (result) => {
    bookMark2 ? setBookMark2(false) : setBookMark2(true);
    !localStorage.getItem("token") && navigate("/login");
    await handleClickMeGusta({
      poster: result.poster_path,
      titulo: result.title || result.name,
      id: result.id,
      seleccionada: bookMark2,
      type: result.title ? "movie" : "tv",
      category: "meGusta",
      eliminar: result.id + auth._id + "meGusta",
    });
  };
  useEffect(() => {
    setBookMark(result.id === Number(verMasTarde.id));
  }, [verMasTarde]);

  useEffect(() => {
    setBookMark2(result.id === Number(listMeGusta.id));
  }, [listMeGusta]);
  return (
    <>
      <blockquote className="flex gap-2 items-center mt-4">
        <p className="font-bold text-xl">Puntación: </p>
        <div className="h-[70px] bg-[#032541] w-[70px] rounded-full p-1 grid place-content-center">
          <CircularProgressbar
            value={Number(puntacion).toFixed(1) * 10}
            text={`${Number(puntacion).toFixed(1)}`}
            className="h-[60px]"
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "30px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(34, 197, 99, ${
                (Number(puntacion).toFixed(1) * 10) / 100
              })`,
              textColor: "#fff",
              trailColor: "#d6d6d6",
              counterClockwise: true,
            })}
          />
        </div>
        <div className="h-[50px] hover:cursor-pointer bg-[#032541] w-[50px] rounded-full grid place-content-center p-1" onClick = { () => setModal(!modal)}>
          <img src={iconList} width="20px" height="20px" alt="icon-menu" />
        </div>

        <div
          className={`${
            bookMark2 ? "bg-red-500" : "bg-[#032541]"
          } h-[50px] hover:cursor-pointer  w-[50px] rounded-full grid place-content-center p-1`}
          onClick={() => handleClick2(result)}
        >
          <img src={iconLike} width="20px" height="20px" alt="icon-menu" />
        </div>
        <div
          className={`${
            bookMark ? "bg-red-500" : "bg-[#032541]"
          } h-[50px] hover:cursor-pointer  w-[50px] rounded-full grid place-content-center p-1`}
          onClick={() => handleClick(result)}
        >
          <img
            src={iconFavorites}
            width="20px"
            height="20px"
            alt="icon-menu"
            className="hover:cursor-pointer"
          />
        </div>

        <section className="flex gap-2 ml-4 items-center">
          <p className="text-xl font-bold">Play Trailer:</p>
          <div className="h-[70px] bg-[#032541] w-[70px] rounded-full grid place-content-center p-1">
            <img src={iconPlay} width="35px" height="35px" alt="icon-menu" />
          </div>
        </section>
        <ModalFormularioReproduccion modal={modal} setModal={setModal} data={result}/>
      </blockquote>
    </>
  );
};

export default InformacionPrimaria;
