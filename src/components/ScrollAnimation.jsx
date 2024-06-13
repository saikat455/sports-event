import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import messi from "../assets/messi.jpg";
import ronaldo from "../assets/ronaldo.jpg";
import neymar from "../assets/neymar.jpg";
import mbappe from "../assets/mbappe.jpeg";
import lewandowski from "../assets/lewandowski.jpeg";
import leBron from "../assets/leBron.jpg";
import serena from "../assets/serena.jpg";
import ramos from "../assets/ramos.jpg";
import federer from "../assets/federer.jpg";
import bolt from "../assets/bolt.jpg";


const ScrollAnimation = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <p className="text-3xl text-center my-4 font-bold text-orange-700">
        World's best athletes
      </p>

      <div
        className="image-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={messi} alt="Image 1" />
      </div>

      <div
        className="image-container"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img src={federer} alt="Image 3" />
      </div>

      <div
        className="image-container"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <img src={ronaldo} alt="Image 2" />
      </div>

      <div
        className="image-container"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img src={neymar} alt="Image 3" />
      </div>

      <div
        className="image-container"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src={mbappe} alt="Image 4" />
      </div>
      <div
        className="image-container"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src={lewandowski} alt="Image 4" />
      </div>

      <div
        className="image-container"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img src={leBron} alt="Image 5" />
      </div>

      <div
        className="image-container"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <img src={serena} alt="Image 6" />
      </div>

      <div
        className="image-container"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img src={ramos} alt="Image 4" />
      </div>
      <div
        className="image-container"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <img src={bolt} alt="Image 4" />
      </div>
    </div>
  );
};

export default ScrollAnimation;
