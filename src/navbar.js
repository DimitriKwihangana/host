import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>

        <Link to="/">Kira Services</Link>
        </li>
 <li>

        <Link to="/two">Kira Services</Link>
 </li>
      </ul>
    </div>
  );
};
