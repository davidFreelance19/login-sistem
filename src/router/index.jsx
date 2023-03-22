import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../interfaces/Layout";
import RegistrarUsuario from "../pages/RegistrarUsuario";
import OlvideConstraseña from "../pages/OlvideConstraseña";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/registrar-usuario",
        element: <RegistrarUsuario />,
      },
      {
        path: "/olvide-contraseña",
        element: <OlvideConstraseña />,
      },
    ],
  },
]);
export default router;
