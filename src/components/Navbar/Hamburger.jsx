import React from "react";
import "../../style/style.scss";

const Hamburger = (props) => {
  return (
    <>
      <button
        className="hamburger"
        onClick={props.click}
        ref={props.hamburgerRef}
      >
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </button>
    </>
  );
};

export default Hamburger;
