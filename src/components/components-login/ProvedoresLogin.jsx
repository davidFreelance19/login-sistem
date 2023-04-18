import iconGmail from "/images/Google.svg";
import iconFacebook from "/images/Facebook.svg";
import iconGitHub from "/images/Gihub.svg";
import iconTwitter from "/images/Twitter.svg";
const ProvedoresLogin = () => {
  return (
    <section className="flex flex-col gap-5 mt-2 items-center">
      {" "}
      <p className="mt-4 text-center font-semibold border-b py-3 border-b-slate">
        Continua con alguna de las siguientes opciones
      </p>
      <div className="flex w-3/5 justify-between">
        <img className="hover:cursor-pointer" src={iconGmail} alt="icon-gmail" />
        <img className="hover:cursor-pointer" src={iconFacebook} alt="icon-gmail" />
        <img className="hover:cursor-pointer" src={iconGitHub} alt="icon-gmail" />
        <img className="hover:cursor-pointer" src={iconTwitter} alt="icon-gmail" />
      </div>
    </section>
  );
};

export default ProvedoresLogin;
