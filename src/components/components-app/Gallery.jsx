import { useGetMovies } from "../../hooks/useGetMovies";
import { useState } from "react";
import Modal from "./Modal";
import Loader from "./Loader";
const Gallery = ({ id, type }) => {
  const { queryMovie } = useGetMovies(`${type}/${id}/images`);
  const [modal, setModal] = useState(false);
  const [images, setImages] = useState([]);
  const [titulo, setTitulo] = useState("");
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
          <Modal modal={modal} setModal={setModal} images={images} titulo={titulo}/>
          <div
            className="relative bg-no-repeat bg-cover bg-center rounded-lg hover:cursor-pointer"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${queryMovie.data?.backdrops[0]?.file_path})`,
            }}
            onClick={() =>
              setModal(true) &
              setImages(queryMovie.data?.backdrops) &
              setTitulo("Backdrops")
            }
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#13121221] z-[10]"></div>
          </div>
          <div
            className="relative bg-white bg-no-repeat bg-cover bg-center rounded-lg hover:cursor-pointer row-span-2"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${queryMovie.data?.posters[0]?.file_path})`,
            }}
            onClick={() =>
              setModal(true) &
              setImages(queryMovie.data?.posters) &
              setTitulo("Posters")
            }
          >
            {" "}
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#13121228] z-[10]"></div>
          </div>
          <div
            className="bg-[#6b6b6b36] bg-no-repeat bg-center rounded-lg hover:cursor-pointer relative"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${queryMovie.data?.logos[0]?.file_path})`,
              backgroundSize: "300px",
            }}
            onClick={() =>
              setModal(true) &
              setImages(queryMovie.data?.logos) &
              setTitulo("Logos")
            }
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1312122c] z-[10]">
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Gallery;
