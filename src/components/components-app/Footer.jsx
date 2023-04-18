import { Link } from "react-router-dom";
import logoDb from "/images/logoDb.svg";
export default function Footer() {
  return (
    <footer className="w-[100vw] flex flex-col items-center gap-4 text-white mt-10 mb-20">
      <p className="font-bold">Powered by</p>
      <img src={logoDb} width="220px" height="220px" />
      <p className="capitalize font-bold">
        <Link to='https://www.instagram.com/dev_rodbd/'>
          Codificado por <span style={{color: '#90cea1'}}>David Rodriguez Badillo</span>
        </Link>
      </p>
    </footer>
  );
}
