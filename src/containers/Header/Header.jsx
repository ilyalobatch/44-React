// icons
import { DiReact } from "react-icons/di";

// components
import ButtonSet from "../../elements/ButtonSet";

// assets
import "../../assets/styles/containers/header.scss";

function Header() {
  return (
    <header className="header-wrapper">
      <DiReact className="header-logo" />
      <h1 className="header-title">React</h1>
      <ButtonSet />
    </header>
  );
}

export default Header;
