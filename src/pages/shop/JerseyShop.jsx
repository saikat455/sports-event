import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Header from "../Shared/Header/Header";

const JerseyShop = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("shop.json") 
      .then((res) => res.json())
      .then((data) => setShops(data));
  }, []);

  return (
    
    <div>
      <p className="text-center text-3xl font-semibold mt-4 text-orange-600" >
        Dress in Style: Jersey Boutique
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-4"
        data-aos="fade-up"
      >
        {shops.map((service, index) => (
          <div
            key={service.id}
            className="card bg-gradient-to-r from-red-500 to-blue-500 text-white shadow-xl"
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            data-aos-duration="800"
          >
            <figure>
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-[200px]"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between  mb-2">
                <div className="flex gap-6">
                  <div className=" mb-2">
                    <span className="font-semibold">{service.title}</span>
                  </div>
                  <div className=" mb-2">
                    <span className="ml-2 text-sm">{service.price}</span>
                  </div>
                </div>
              </div>
              <div className="">
                <p>{service.description}</p>
              </div>
              <div className="text-center ">
                <Link to={`/event/${service.id}`}>
                  <button className="btn glass w-full bg-yellow-500">
                    <div className="flex items-center justify-center">
                      <AiOutlineShoppingCart className="mr-2" />
                      ADD TO CART
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JerseyShop;
