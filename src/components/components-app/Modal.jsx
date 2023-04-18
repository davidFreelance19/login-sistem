import cerrarIcon from "/images/xIcon.svg";
import arrowLeft from "/images/arrowLeft.svg";
import arrowRight from "/images/arrowRight.svg";
import { useState, useEffect } from "react";
const Modal = ({ modal, setModal, images, titulo }) => {
  const [ubicacion, setUbicacion] = useState(0)
  useEffect(()=>{
    setUbicacion(0)
  }, [titulo])
  return (
    <div
      className={`absolute top-0 bottom-0 grid place-content-center left-0 right-0 bg-[#000000c0] z-[1023] overflow-hidden ${
        !modal && "hidden"
      }`}
    >
      <div className="w-[90%] max-w-[1350px] grid gap-6 mx-auto">
        <img
          src={cerrarIcon}
          width="35px"
          height="35px"
          alt="icon-close"
          onClick={() => setModal(false)}
          className="hover:cursor-pointer justify-self-end"
        />
        <h2 className="text-white text-3xl font-bold">Galleria de {titulo}</h2>
        <div
          className="relative bg-no-repeat bg-center rounded-lg hover:cursor-pointer h-[600px] w-[600px] flex items-center justify-between"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${images[ubicacion]?.file_path})`,
            backgroundSize: "contain",
          }}
        >
          <img
            src={arrowLeft}
            className={`${ubicacion === 0 && 'hidden'} bg-white rounded-full left-[-25px] absolute`}
            width="50px"
            height="50px"
            alt="arrowRight"
            onClick={()=>setUbicacion(ubicacion-1)}
          />
          <img
            src={arrowRight}
            className={`${ubicacion +1 >= images.length && 'hidden'} bg-white rounded-full right-[-25px] absolute`}
            width="50px"
            height="50px"
            alt="arrowLeft"
            
            onClick={()=>setUbicacion(ubicacion+1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
