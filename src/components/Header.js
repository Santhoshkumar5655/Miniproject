import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header flex justify-between bg-pink-200 shadow-md m-2">
        <div className="logo">
          <img className="w-56" src={LOGO} />
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <li className="px-4 text-lg font-bold">
              <Link to={"/"}>Home </Link>
            </li>

            <li className="px-4 text-lg font-bold">
              <Link to={"/about"}>About us</Link>
            </li>
            <li className="px-4 text-lg font-bold">
              <Link t0={"/contact"}>Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
