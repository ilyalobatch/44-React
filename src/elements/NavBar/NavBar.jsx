import { RxHamburgerMenu, RxReload } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";

import "../../assets/styles/elements/navbar.scss";

function NavBar() {
  return (
    <nav className="galore-navbar">
      <RxHamburgerMenu className="galore-navbar-icon" />
      <h1 className="galore-navbar-title">Posters Galore</h1>
      <div className="galore-navbar-buttons">
        <RxReload className="galore-navbar-icon" />
        <FaRegUserCircle className="galore-navbar-icon" />
      </div>
    </nav>
  );
}

export default NavBar;
