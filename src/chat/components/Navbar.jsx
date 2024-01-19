import { logoutFirebase } from "../../firebase/providers";
import { MdLogout } from "react-icons/md";


export const Navbar = ({username}) => {

  return (
    <header>
        <nav className="p-4">
            <ul className="flex justify-between text-white items-center mx-4">
                <li className="text-lg font-semibold [letter-spacing:0.6px]">{username}</li>
                <li onClick={logoutFirebase}><MdLogout className="text-2xl" /></li>
            </ul>
        </nav>  
    </header>
  )
}
