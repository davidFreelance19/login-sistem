import { Link } from "react-router-dom";
const EnlacesLogin = ({ location }) => {
  return (
    <>
      {" "}
      <p className="mt-7 text-center">
        {location === "/login" ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}{" "}
        {" "}
        <span className="font-bold text-sky-500">
          <Link to={`${location === '/login' ? "/registrar-usuario" : '/login'}`}>
            {location === "/login" ? "Regístrate" : "Inicia Sesión"}
          </Link>
        </span>
      </p>
      <p className="mt-7 text-center">
        ¿Olvidaste tu password?{" "}
        <span className="font-bold text-sky-500">
          <Link to="/olvide-contraseña">Recuperar cuenta</Link>
        </span>
      </p>
    </>
  );
};

export default EnlacesLogin;
