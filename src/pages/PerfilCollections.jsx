import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/components-app/Loader";
import useMoviePerfil from "../hooks/useMoviePerfil";
import PerfilColleciones from "../components/components-app/PerfilColleciones";
const PerfilCollections = () => {
  const { auth, cargando } = useAuth();
  const { dataSeleccionada, cargandoMovies } = useMoviePerfil();
  if (cargandoMovies)
    return (
      <div
        className={`w-full h-[100vh] overflow-hidden  grid place-content-center place-items-center bg-[#1D1D1D]  z-[111] relative preloader ${
          cargandoMovies ? "loading" : ""
        }`}
      >
        <Loader loading={cargandoMovies} />
      </div>
    );
  return (
    <>
      {auth._id ? (
        <PerfilColleciones auth={auth} dataSeleccionada={dataSeleccionada} />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PerfilCollections;
