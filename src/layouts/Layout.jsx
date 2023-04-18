import { Outlet, Link } from "react-router-dom";
import logoIcon from "/images/devchallenges.svg";
import logo from '/images/icon-logo.png'
const Layout = () => {
  return (
    <>
      <main className="h-screen flex items-center justify-center ">
        <blockquote className="mx-auto w-11/12 max-w-[475px] p-10 bg-white rounded-2xl border">
          <Link to="/login" className="flex gap-4">
            <img src={logo} alt="logo-icon" className="rounded"/>
            <p className="font-bold">DevMovies</p>
          </Link>
          <Outlet />
        </blockquote>
      </main>
      <footer className="text-center my-10">
        Codificado por{" "}
        <span className="text-sky-500 font-bold">
          <Link to="https://www.instagram.com/dev_rodbd">
            David Rodriguez Badillo
          </Link>
        </span>
      </footer>
    </>
  );
};

export default Layout;
