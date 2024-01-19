import { Link } from "react-router-dom"

export const WelcomeNavbar = () => {
  return (
    <header>
      <nav className="flex flex-col items-center p-5 md:flex-row md:justify-between md:mx-10 md:p-6">
        <span className="font-semibold text-2xl navTitle text-center">
          <Link to="/">SOCKET CHAT</Link>
        </span>
        <ul className="flex gap-8 mt-2">
          <li className="text-center hover:underline active:text-gray-300"> <Link to="/auth/login">Iniciar Sesion</Link></li>
          <li className="hover:underline active:text-gray-300"> <Link to="/auth/register">Registrarse</Link></li>
        </ul>
      </nav>
    </header>
  );
};
