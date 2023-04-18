import { Link } from "react-router-dom";
import icon404 from "/images/404.svg";
import logoIcon from "/images/devchallenges.svg";

const NoEncontrado = () => {
  return (
    <>
      {" "}
      <header className="h-[10vh] flex items-center w-[90%] max-w-[1020px] mx-auto">
        <Link to='/login'>
          <img src={logoIcon} alt="logo-icon" />
        </Link>
      </header>
      <main className="h-[90vh] grid place-content-center place-items-center">
        <h1 className="font-semibold text-2xl mx-auto mb-10">
          Página no encontrada
        </h1>
        <img src={icon404} alt="icon-404" width="70%" />
      </main>
    </>
  );
};

export default NoEncontrado;
