import { useActionData, Form } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import HeadingInicio from "../components/components-login/HeadingInicio";
import EnlacesLogin from "../components/components-login/EnlacesLogin";
import ProvedoresLogin from "../components/components-login/ProvedoresLogin";
import iconEmail from "/images/email-icon.svg";
import iconPassword from "/images/iconPassword.svg";
import iconUser from "/images/iconUser.svg";
const heading =
  "Únete a miles de estudiantes de todo el mundo y comienza a dominar el desarrollo web";
export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const errores = {};
  if (datos.nombre === "") {
    errores.nombre = "Name can't be blank";
  }
  if (datos.email === "") {
    errores.email = "Email can't be blank";
  }
  if (datos.password === "") {
    errores.password = "Password can't be blank";
  } else if (datos.password.length < 8) {
    errores.password = "Password so weak";
  }
  if (Object.keys(errores).length) {
    return errores;
  } else {
    try {
      const { data } = await clienteAxios.post(`/usuarios`, {
        email: datos.email,
        nombre: datos.nombre,
        password: datos.password,
      });
      return data;
    } catch (error) {
      errores.email = error.response.data.msj;
      return errores;
    }
  }
}
const RegistrarUsuario = () => {
  const data = useActionData();

  return (
    <>
      {data?.msj ? (
        <h1>Hola</h1>
      ) : (
        <>
          <HeadingInicio heading={heading} />
          <Form method="post" className="mt-8 flex flex-col gap-6">
            <blockquote className="flex flex-col">
              {data?.nombre && (
                <p className="mb-3 text-red-500 self-end">{data.nombre}</p>
              )}
              <div
                className={`${
                  data?.nombre && "border-2 border-rose-500 "
                } flex items-center gap-4 p-3 rounded-lg border`}
              >
                <label htmlFor="nombre">
                  <img
                    src={iconUser}
                    width="25px"
                    height="30px"
                    alt="icon-usuario"
                  />
                </label>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full p-1"
                  id="nombre"
                  name="nombre"
                />
              </div>
            </blockquote>
            <blockquote className="flex flex-col">
              {data?.email && (
                <p className="mb-3 text-red-500 self-end">{data.email}</p>
              )}
              <div
                className={`${
                  data?.email && "border-2 border-rose-500 "
                } flex items-center gap-4 p-3 rounded-lg border`}
              >
                <label htmlFor="email">
                  <img
                    src={iconEmail}
                    width="25px"
                    height="30px"
                    alt="icon-email"
                  />
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-1"
                  id="email"
                  name="email"
                />
              </div>
            </blockquote>
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
                  type="password"
                  placeholder="Password"
                  className="w-full p-1"
                  id="password"
                  name="password"
                />
              </div>
            </blockquote>
            <input
              type="submit"
              value="Registrarme"
              className="bg-sky-600 text-white p-3 font-bold rounded-lg hover:cursor-pointer"
            />
          </Form>
          <ProvedoresLogin />
          <EnlacesLogin />
        </>
      )}
    </>
  );
};

export default RegistrarUsuario;
