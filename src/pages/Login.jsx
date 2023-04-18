import { useLocation, useActionData, Form, redirect } from "react-router-dom";
import HeadingInicio from "../components/components-login/HeadingInicio";
import ProvedoresLogin from "../components/components-login/ProvedoresLogin";
import EnlacesLogin from "../components/components-login/EnlacesLogin";
import iconEmail from "/images/email-icon.svg";
import iconPassword from "/images/iconPassword.svg";
import clienteAxios from "../config/clienteAxios";
const heading =
  "Inicia sesión y empieza a conversa con miles de estudiantes de todo el mundo";
export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const { email, password } = datos;
  const errores = {};
  if (email === "") {
    errores.mail = "Email can't be blank";
  }
  if (password === "") {
    errores.password = "Password can't be blank";
  }
  if (Object.keys(errores).length) return errores;
  try {
    const { data } = await clienteAxios.post("/usuarios/login", {
      email,
      password,
    });
    localStorage.setItem("token", data.token);
    return redirect('/proyectos')
  } catch (error) {
    if (error.response.data.msj.includes("Usuario")) {
      errores.mail = error.response.data.msj;
    } else {
      errores.password = error.response.data.msj;
    }
    if (Object.keys(errores).length) return errores;
  }
}
const Login = () => {
  const location = useLocation();
  const data = useActionData();
  return (
    <>
      <HeadingInicio heading={heading} />
      <Form method="post" className="mt-8 flex flex-col gap-5">
        <blockquote className="flex flex-col">
          {data?.mail && (
            <p className="mb-3 text-red-500 self-end">{data.mail}</p>
          )}
          <div
            className={`${
              data?.mail && "border-2 border-rose-500 "
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
              id="pasword"
              name="password"
            />
          </div>
        </blockquote>
        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-sky-600 text-white p-3 font-bold rounded-lg hover:cursor-pointer"
        />
      </Form>
      <ProvedoresLogin />
      <EnlacesLogin location={location.pathname} />
    </>
  );
};

export default Login;
