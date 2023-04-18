import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  if(cargando) return  'Cargando'
  return <>{auth._id ? "auteticado" : <Navigate to="/" />}</>;
};

export default RutaProtegida;
