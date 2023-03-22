import HeadingInicio from "../components/components-login/HeadingInicio";
import iconEmail from "/images/email-icon.svg";
const heading =
  "Inicia sesión y empiza a conversa con miles de estudiantes de todo el mundo";
const Login = () => {
  return (
    <>
      <HeadingInicio heading={heading} />
      <form className="mt-8">
        <div className="flex items-center gap-4 p-3 rounded-lg border">
          <label>
            <img src={iconEmail} width="30px" height="35px" />
          </label>
          <input type="email" placeholder="Email" className="w-full"/>
        </div>
      </form>
    </>
  );
};

export default Login;
