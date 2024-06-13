import { Link, Navigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser,logOut } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one capital letter");
      return;
    }

    if (!/[!@#$%^&*()_+{} \ [\]:;<>,.?~\\-]/.test(password)) {
      setPasswordError("Password must contain at least one special character");
      return;
    }

    createUser(email, password, name, photo)
      .then((result) => {

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
      })
      .then(() => {
        logOut();
      })
      .catch()

        console.log(result.user);
        toast.success("Registration successful!");
        

        setPasswordError("");
        setEmail("");
        setPassword("");
        setName("");
        setPhoto(null);
        // Navigate("/login");
      })

      .catch((error) => {
        console.error("Error creating user:", error);
      toast.error("Registration failed");
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-3xl font-semibold text-center text-red-500 mb-6">
            Register
          </h2>
          <form onSubmit={handleRegister}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 border rounded-md"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Photo (URL)
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="w-full p-2 border rounded-md"
                required
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <div className="text-red-500 text-sm mt-1">{passwordError}</div>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md font-semibold"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;


