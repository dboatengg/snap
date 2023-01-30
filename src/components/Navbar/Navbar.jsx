import { useRef } from "react";
import Logo from "../../assets/logo.svg";
import Hamburger from "./Hamburger";
import NavbarUser from "./NavbarUser";
import "../../style/partials/_rotate.scss";

const Navbar = () => {
  const hamburgerRef = useRef(null);
  const navRef = useRef(null);

  const handleEvent = () => {
    navRef.current.classList.toggle("active");
    hamburgerRef.current.classList.toggle("active");
  };

  return (
    <header className="overlay">
      <nav className="navbar">
        <a href="index.html" className="logo">
          <img src={Logo} alt="" />
        </a>
        <div className="navbar__menu" ref={navRef}>
          <ul className="navbar__list">
            <li className="">
              <a href="#">Features</a>
            </li>
            <li className="">
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <NavbarUser />
        </div>
        <Hamburger click={handleEvent} hamburgerRef={hamburgerRef} />
      </nav>
    </header>
  );
};

export default Navbar;
