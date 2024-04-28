import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Register = () => {
  const { createUser, googleLogin, githubLogin, updateUserProfile } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [regError, setRegError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    setRegError("");

    if (password.length < 6) {
      setRegError("Password should be at least 6 characters or longer.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Password should be at least one Uppercase character.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegError("Password should be at least one Lowercase character.");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo);
        navigate(location?.state ? location.state : "/");
        toast.success("Registered Successfully");
      })
      .catch(() => {
        toast.error("Already Email Exist!");
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Registered Successfully");
      })
      .catch(() => {
        toast.error("Already Email Exist!");
      });
  };
  const handleGithub = () => {
    githubLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Registered Successfully");
      })
      .catch(() => {
        toast.error("Already Email Exist!");
      });
  };

  return (
    <div>
      <div className="hero pt-4 pb-24 lg:pb-56">
        <div className="py-12 px-16 border">
          <div className="text-left pb-4">
            <h1 className="text-4xl font-medium pb-4">Get Started Now</h1>
          </div>
          <div className="card w-full">
            <form onSubmit={handleRegister}>
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered rounded-none text-sm"
                  required
                />
              </div>
              {/* Photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered rounded-none text-sm"
                  required
                />
              </div>
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Email address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered rounded-none text-sm"
                  required
                />
              </div>
              {/* Password */}
              <div className="form-control pt-2">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Password
                  </span>
                </label>
                <label className="input input-bordered flex items-center gap-2 rounded-none">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="grow text-sm"
                    placeholder="Password"
                  />
                  <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <IoEyeOffOutline className="text-xl" />
                    ) : (
                      <IoEyeOutline className="text-xl" />
                    )}
                  </span>
                </label>
              </div>

              {/* button */}
              <div className="form-control mt-6">
                <button className="btn back-main text-white rounded-none hover:bg-[#6A9093]">
                  Register
                </button>
              </div>
            </form>

            <div className="divider text-center py-4">Or</div>

            {/* more button */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <button
                onClick={() => handleGoogle()}
                className="py-2 px-6 border flex items-center gap-2 hover:bg-[#6A9093] hover:text-white"
              >
                <FaGoogle />
                Register with Google
              </button>

              <button
                onClick={() => handleGithub()}
                className="py-2 px-6 border flex items-center gap-2 hover:bg-[#6A9093] hover:text-white"
              >
                <FaGithub />
                Register with Github
              </button>
            </div>

            {/* sign up button */}
            <p className="text-center pt-6">
              Already have an account?{"  "}
              <Link to="/login">
                <span className="text-[#6A9093] font-medium">Login</span>
              </Link>
            </p>
          </div>
          {regError && (
            <p className="text-red-700 pt-4 text-center">{regError}</p>
          )}
        </div>
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Register;
