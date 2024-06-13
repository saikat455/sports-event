import Header from "../Shared/Header/Header";

import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LatestResult from "./LatestResult";
import Carousel from "../Home/Carousel";
import Footer from "../footer/Footer";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";

const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>

      <LatestResult></LatestResult>
      <Carousel></Carousel>

      <div>
      <p className="text-center text-3xl font-semibold mt-4 text-red-400 mb-6 mr-60">
        Sports Spectaculars: Iconic Events
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      
      <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        
        {services.map((aServices) => (
          <LeftSideNav
            key={aServices.id} 
            services={aServices}
          ></LeftSideNav>
        ))}
      </div>
      <div className="lg:col-span-1">
        <RightSideNav></RightSideNav>
      </div>
    </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
