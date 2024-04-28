import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { signUser, googleLogin, githubLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [regError, setRegError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

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

    signUser(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("You're logged in");
      })
      .catch(() => {
        toast.error("Not Login!");
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
      <div className="hero pt-10 pb-24 lg:pb-56">
        <div className="py-12 px-16 border">
          <div className="text-left pb-8">
            <h1 className="text-4xl font-medium pb-4">Welcome back!</h1>
            <p className="font-medium">
              Enter your Credentials to access your account
            </p>
          </div>
          <div className="card w-full">
            <form onSubmit={handleLogin}>
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
                  placeholder="Email"
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
                  Login
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
                Sign in with Google
              </button>

              <button
                onClick={() => handleGithub()}
                className="py-2 px-6 border flex items-center gap-2 hover:bg-[#6A9093] hover:text-white"
              >
                <FaGithub />
                Sign in with Github
              </button>
            </div>

            {/* sign up button */}
            <p className="text-center pt-6">
              Don’t have an account?{"  "}
              <Link to="/register">
                <span className="text-[#6A9093] font-medium">Register</span>
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

export default Login;
