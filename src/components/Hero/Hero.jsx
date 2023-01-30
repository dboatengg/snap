import { useRef, useEffect, useState } from "react";
import HeroMobile from "../../assets/image-hero-mobile.png";
import HeroDesktop from "../../assets/image-hero-desktop.png";
import HeroTag from "./HeroTag";

const Hero = () => {
  const HeroImage = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let image;
  if (screenWidth < 960) {
    image = HeroMobile;
  } else {
    image = HeroDesktop;
  }

  return (
    <div className="hero">
      <div className="hero__left">
        <h1 className="headline">Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals and watch productivity soar.
        </p>
        <a className="hero__btn" href="#">
          Load more
        </a>
        <HeroTag />
      </div>
      <div className="hero__right">
        <img className="hero__image" alt="" src={image} ref={HeroImage} />
      </div>
    </div>
  );
};

export default Hero;
