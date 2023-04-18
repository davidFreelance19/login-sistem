import { Form, useActionData, Link, useLoaderData } from "react-router-dom";
import HeadingInicio from "../components/components-login/HeadingInicio";
import iconPassword from "/images/iconPassword.svg";
import clienteAxios from "../config/clienteAxios";
export async function loader({ params }) {
  try {
    await clienteAxios.get(`/usuarios/olvide-password/${params.id}`);
    return true;
  } catch (error) {
    return { message: error.response.data.msj, error: true };
  }
}
export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const { password } = datos;
  const errores = {};
  if (password === "") {
    errores.password = "password can't be blank";
  } else if (datos?.password.length < 8) {
    errores.password = "password so weeak";
  }
  if (Object.keys(errores).length) return errores;
  try {
    const { data } = await clienteAxios.post(
      `/usuarios/olvide-password/${params.id}`,
      { password }
    );
    return data.msj;
  } catch (error) {
    errores.password = error.response.data.msj;
    return errores;
  }
}
const heading = "Genera un nuevo password y accede de nuevo a tu cuenta";
const NuevoPassword = () => {
  const data = useActionData();
  const loader = useLoaderData();
  console.log(data);
  return (
    <>
      {!loader.error ? (
        <>
          {" "}
          <HeadingInicio heading={heading} />
          <Form method="post" className="mt-8 flex flex-col gap-5">
            <blockquote className="flex flex-col">
              {data?.password && (
                <p className="mb-3 text-red-500 self-end">{data.password}</p>
              )}
              <div
                className={`${
                  data?.password && "border-2 border-rose-500 "
                } flex items-center gap-4 p-3 rounded-lg border`}
              >
                <label htmlFor="password">
                  <img
                    src={iconPassword}
                    width="25px"
                    height="30px"
                    alt="icon-password"
                  />
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-1"
                />
              </div>
            </blockquote>
            <input
              type="submit"
              value="Reestablecer password"
              className="bg-sky-600 text-white p-3 font-bold rounded-lg hover:cursor-pointer"
            />
          </Form>
        </>
      ) : data ? (
        <section>
          <p className="font-bold uppercase mt-7 text-center">{data}</p>
          <p className="text-center ">
            Comienza a ponerte al contacto con tus amigos en linea e{" "}
            <span className="font-bold text-sky-500">
              <Link to="/">Inicia Sesión</Link>
            </span>
          </p>
        </section>
      ) : (
        <section>
          <p className="mt-4 text-center font-bold text-red-500 text-2xl">
            {loader.message}
          </p>
        </section>
      )}
    </>
  );
};

export default NuevoPassword;
