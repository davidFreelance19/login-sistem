import { useActionData, Form } from "react-router-dom";
import HeadingInicio from "../components/components-login/HeadingInicio";
import iconEmail from "/images/email-icon.svg";
import clienteAxios from "../config/clienteAxios";
export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const errores = {};
  if (datos.email === "") {
    errores.email = "Email can't be blank";
  }
  if (Object.keys(errores).length) return errores;

  try {
    const { data } = await clienteAxios.post(`/usuarios/olvide-password`, {
      email: datos.email,
    });
    return data;
  } catch (error) {
    errores.email = error.response.data.msj;
    return errores;
  }
}
const heading =
  "Recupera tu cuenta y no pierdas tus contactos de estudiantes de todo el mundo";
const OlvideConstraseña = () => {
  const data = useActionData();
  return (
    <>
      <HeadingInicio heading={heading} />
      <Form method="post" className="mt-8 flex flex-col gap-5">
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
        <input
          type="submit"
          value="Enviar Instrucciones"
          className="bg-sky-600 text-white p-3 font-bold rounded-lg hover:cursor-pointer"
        />
      </Form>
    </>
  );
};

export default OlvideConstraseña;
