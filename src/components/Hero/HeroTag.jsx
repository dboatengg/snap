import React from "react";
import databiz from "../../assets/client-databiz.svg";
import audiophile from "../../assets/client-audiophile.svg";
import meet from "../../assets/client-meet.svg";
import maker from "../../assets/client-maker.svg";
import "../../style/style.scss";

const HeroTag = () => {
  return (
    <div className="hero__left__tag">
      <img src={databiz} alt="" />
      <img src={audiophile} alt="" />
      <img src={meet} alt="" />
      <img src={maker} alt="" />
    </div>
  );
};

export default HeroTag;
