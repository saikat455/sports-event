

import { Link } from "react-router-dom";

const LeftSideNav = ({ services }) => {
  return (
    
      <div className="max-w-xs mx-auto">
      <div className="card bg-base-100 shadow-md">
        <figure>
          <img src={services.image} alt={services.name} className="w-full h-40 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-semibold">{services.name}</h2>
          <p className="text-sm text-gray-600">{services.title}</p>
          <p className="text-sm">{services.description}</p>
          <div className="card-actions justify-end">
            <Link to={`/services/${services.id}`}>
              <button className="btn btn-outline btn-accent">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default LeftSideNav;







