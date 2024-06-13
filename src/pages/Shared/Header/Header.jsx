import campNou from "../../../assets/camp-nou.jpg";
import moment from "moment";

const Header = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${campNou})`,
  };

  return (
    <div className="hero w-full h-72" style={backgroundImageStyle}>
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-4xl font-bold">
            The Beautiful Game: Exploring the World of Football
          </h1>
          <p className="text-xl mt-1">
            {moment().format("dddd, MMMM D, YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
