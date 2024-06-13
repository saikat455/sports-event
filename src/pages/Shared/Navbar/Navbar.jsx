// import { Link, NavLink } from "react-router-dom";
// import myImg from "../../../assets/my-image.jpg";
// import { useContext } from "react";
// import { AuthContext } from "../../../provider/AuthProvider";

// const Navbar = () => {
//   const { user, logOut} = useContext(AuthContext);

//   const handleSignOut = () => {
//     logOut()
//     .then()
//     .catch();
//   }

//   const navLinks = (
//     <>
//       <li className="text-xl">
//         <NavLink to="/" >Home</NavLink>
//       </li>

//       <li className="text-xl">
//         <NavLink to="/jersey-shop">Shop</NavLink>
//       </li>
//       <li className="text-xl">
//         <NavLink to="/barcaTour">Tour</NavLink>
//       </li>
//       <li className="text-xl ">
//         <NavLink to="/login">Login</NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className="navbar bg-gradient-to-r from-red-500 to-blue-500">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             {navLinks}
//           </ul>
//         </div>
//         <a className="btn btn-ghost normal-case text-xl">SPORTS</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{navLinks}</ul>
//       </div>
//       <div className="navbar-end flex items-center gap-2">
//         <div className="w-10 h-10 rounded-full overflow-hidden">
//           <img
//             src={ myImg}
//             alt="User Image"
//             className="h-full w-full object-cover"
//           />
//         </div>

//         {user ? (
//           <button onClick={handleSignOut} className="btn">
//             Sign Out
//           </button>
//         ) : (
//           <Link to="/login">
//             <button className="btn btn-outline">Login</button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch();
  }

  const navLinks = (
    <>
      <li className="text-xl">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="text-xl">
        <NavLink to="/jersey-shop">Shop</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/barcaTour">Tour</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-red-500 to-blue-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">SPORTS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex items-center gap-2">
        {user ? (
          <div className="flex items-center gap-2">
            {user.photoURL && (
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={user.photoURL}
                  alt="User Image"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

