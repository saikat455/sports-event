

import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location);



  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/');
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Incorrect email or password");
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-3xl font-semibold text-center text-red-500 mb-6">
            Please Login
          </h2>
          <form
            onSubmit={handleLogin}
            className="md:w-3/4 lg:w-full mx-auto"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded-md"
                required
              />
              <label className="text-xs text-gray-600 mt-1">
                <Link
                  to="/forgot-password"
                  className="text-blue-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md font-semibold"
              >
                Login
              </button>
            </div>
            <p className="mt-2 text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 font-bold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;



