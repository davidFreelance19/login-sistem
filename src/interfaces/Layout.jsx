import { Outlet, Link } from "react-router-dom";

import logoIcon from "/images/devchallenges.svg";
const Layout = () => {
  return (
    <>
      <main className="h-screen grid place-content-center">
        <blockquote className="h-[635px] w-[475px] p-10 bg-white rounded-2xl border">
          <div>
            <img src={logoIcon} alt="logo-icon" />
          </div>
          <Outlet />
        </blockquote>

        <footer className="text-center mt-20">
          Codificado por{" "}
          <span className="text-sky-500 font-bold">
            <Link to='https://www.instagram.com/dev_rodbd'>David Rodriguez Badillo</Link>
          </span>
        </footer>
      </main>
    </>
  );
};

export default Layout;
