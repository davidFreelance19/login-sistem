import { Link, useLocation } from "react-router-dom";
import { asideSection } from "../../db";
import iconUser from "/images/icon-user.svg";
export default function Aside() {
  const location = useLocation();

  return (
    <aside className="w-[69px] bg-[#13131383] z-10 h-full fixed flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 justify-evenly h-1/2">
        {asideSection.map((asideCategoria) => (
          <Link
            to={`${asideCategoria.asideSectionPath}`}
            key={asideCategoria.id}
          >
            <div
              className={`hover:cursor-pointer h-[45px] w-[45px] bg-no-repeat  bg-center ${
                (location.pathname === `${asideCategoria.asideSectionPath}`) &
                  asideCategoria.asideBg ||
                asideCategoria.asideSectionPath.includes(
                  location.pathname.slice(
                    1,
                    location.pathname.slice(1, -1).indexOf("/") + 1
                  )
                ) &
                  (location.pathname.slice(1, -1).indexOf("/") !== -1)
                  ? "rounded-full bg-[#032541]"
                  : ""
              }`}
              style={{
                backgroundImage: `url(${asideCategoria.asideImageSection})`,
                backgroundSize: `${
                  asideCategoria.asideSectionPath === "/movies"
                    ? "30px"
                    : "23px"
                }`,
              }}
            ></div>
          </Link>
        ))}
        {/* Tenemos de manera condicional el icon de user, primero verificamos si el usuario esta autenticado, en otro caso que no muestre nada */}
        {localStorage.getItem("token") && (
          <Link to={`/perfil/collection/2`}>
            <div
              style={{
                backgroundImage: `url(${iconUser})`,
              }}
              className={`hover:cursor-pointer h-[45px] w-[45px] bg-no-repeat  bg-center ${
                location.pathname.includes("collection") &&
                "rounded-full bg-[#032541]"
              }`}
            ></div>
          </Link>
        )}
      </div>
    </aside>
  );
}
