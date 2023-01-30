import React from "react";

const NavbarUser = () => {
  return (
    <>
      <ul className="navbar__user">
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a className="register__btn" href="#">
            Register
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavbarUser;
