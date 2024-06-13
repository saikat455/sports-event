import concert from "../../assets/Concerts and Music Festivals.jpg";
import theater from "../../assets/Theater and Performing Arts.jpg";
import film from "../../assets/Film Screenings and Premieres.jpg";
import comedy from "../../assets/Comedy Shows.jpg";
import sports from "../../assets/Sports Events.jpeg";

const Carousel = () => {
  return (
    <div>
      <p className="text-center text-2xl text-pink-500 mt-6 mb-3 font-bold">
        Entertainment Events: Your Passport to Fun and Joy
      </p>
      <div className="carousel w-full h-80 relative">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={concert} className="w-full" alt="Concert" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="absolute bottom-5 left-5 text-white text-2xl">
            Concerts and Music Festivals
          </p>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={theater} className="w-full" alt="Theater" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="absolute bottom-5 left-5 text-white text-2xl">
            Theater and Performing Arts
          </p>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={film} className="w-full" alt="Film" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="absolute bottom-5 left-5 text-white text-2xl">
            Film Screenings and Premieres
          </p>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={comedy} className="w-full" alt="Comedy" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="absolute bottom-5 left-5 text-white text-2xl">
            Comedy Shows
          </p>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={sports} className="w-full" alt="Sports" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <p className="absolute bottom-5 left-5 text-white text-2xl">
            Sports Events
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
