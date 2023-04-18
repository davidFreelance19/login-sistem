import { Link, useLoaderData } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
export async function loader({ params }) {
  try {
    const url = `/usuarios/confirmar-cuenta/${params.id}`;
    const { data } = await clienteAxios(url);
    return data.msj;
  } catch (error) {
    return { message: error.response.data.msj, error: true };
  }
}
const ConfirmarCuenta = () => {
  const loader = useLoaderData();
  return (
    <section className="mt-6 ">
      <p className="text-center">{loader?.message ? loader.message : loader}</p>
      {!loader?.error && (
        <p className="mt-7 text-center">
          Comienza a disfrutar nuestros beneficios{" "}
          <span className="font-bold text-sky-500">
            <Link to="/">Inicia Sesión</Link>
          </span>
        </p>
      )}
    </section>
  );
};

export default ConfirmarCuenta;
