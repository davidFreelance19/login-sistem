import { createBrowserRouter } from "react-router-dom";
import Login, { action as actionLogin } from "../pages/Login";
import Layout from "../layouts/Layout";
import LayoutMovies from "../components/components-app/Layout";
import Categorias from "../pages/Categorias";
import Index from "../pages/Index";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import VistaCompleta from "../pages/VistaCompleta";
import BusquedaCategoria from "../pages/BusquedaCategoria";
import ActorDetails from "../pages/ActorDetails";
import RegistrarUsuario, {
  action as actionNuevoRegistro,
} from "../pages/RegistrarUsuario";
import OlvideConstraseña, {
  action as actionOlvideContraseña,
} from "../pages/OlvideConstraseña";
import NoEncontrado from "../pages/NoEncontrado";
import ConfirmarCuenta, {
  loader as loaderConfirmarUsuario,
} from "../pages/ConfirmarCuenta";
import NuevoPassword, {
  action as actionNuevoPassword,
  loader as loaderNuevoPassword,
} from "../pages/NuevoPassword";
import RutaProtegida from "../layouts/RutaProtegida";
import PerfilCollections from "../pages/PerfilCollections";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMovies />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tv-series",
        element: <Series />,
      },
      {
        path: "/busqueda-categorias",
        element: <Categorias />,
      },
      {
        path: "movies/:id",
        element: <VistaCompleta />,
      },
      {
        path: "tv-series/:id",
        element: <VistaCompleta />,
      },
      {
        path: "busqueda-categorias/:category/movie/:id",
        element: <BusquedaCategoria />,
      },
      {
        path: "busqueda-categorias/:category/tv-shows/:id",
        element: <BusquedaCategoria />,
      },
      {
        path: "busqueda/actor/:name/:id",
        element: <ActorDetails />,
      },
      {
        path: "/perfil/collection/:id",
        element: <PerfilCollections />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
        action: actionLogin,
      },
      {
        path: "/registrar-usuario",
        element: <RegistrarUsuario />,
        action: actionNuevoRegistro,
      },
      {
        path: "/olvide-contraseña",
        element: <OlvideConstraseña />,
        action: actionOlvideContraseña,
      },
      {
        path: "/confirmar-cuenta/:id",
        element: <ConfirmarCuenta />,
        loader: loaderConfirmarUsuario,
      },
      {
        path: "/olvide-contraseña/:id",
        element: <NuevoPassword />,
        action: actionNuevoPassword,
        loader: loaderNuevoPassword,
      },
    ],
  },

  {
    path: "*",
    element: <NoEncontrado />,
  },
]);
export default router;
