import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/side-slider/Slider";
import CheckBox from "../common/CheckBox";
import { toast } from "react-hot-toast";
import Google from "../common/GoogleBtn";
import Apple from "../common/AppleBtn";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth.jsx";
import TopNav from "../common/TopNav.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await login(email, password);
      if (res.data.token) {
        localStorage.setItem("authToken", res.data.token); // Save token
        toast.success("Login successful");
        setEmail("");
        setPassword("");
        setRemember(false);
        setIsLogin(true);
        navigate("/");
      } else {
        toast.error("Invalid credentials, please try again.");
      }
    } catch (err) {
      console.error("Login failed", err);
      toast.error("Login failed. Please check your input.");
    }
  };

  const AuthBtns =
    "border border-slate-400 flex items-center justify-center gap-2 px-2 py-[6px] rounded-lg w-[45%] hover:shadow-lg font-medium capitalize duration-300 ease-in-out transition-all";

  return (
    <div className="h-screen overflow-hidden">
      <TopNav />
      <div className="flex p-6 justify-center items-center">
        <div className="w-full md:w-[80%] lg:w-1/2 sm:p-5 p-1 h-[calc(100vh-3rem)] relative flex flex-col items-center justify-center">
          <div className="text-center flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center">
              <Link to="/">
                <img
                  src="https://i.postimg.cc/rs5vfmd8/Think-Ink-icon.png"
                  alt="thinkink brain logo"
                  loading="eager"
                  className="w-20 h-20"
                />
              </Link>
              <h3 className="capitalize font-semibold text-[1.5rem]">
                Welcome back to thinkInk
              </h3>
              <p className="capitalize text-slate-500 ">
                enter you username and password to continue
              </p>
            </div>
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3 items-start mb-4">
                <label htmlFor="emailinput" className="font-medium">
                  Email
                </label>
                <input
                  id="emailinput"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="rounded-md py-2 px-4 focus:outline-2 border border-slate-400 w-full text-[0.9rem] tracking-wider"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3 items-start">
                <label htmlFor="passwordinput" className="font-medium">
                  Password
                </label>
                <input
                  id="passwordinput"
                  type="password"
                  required
                  min={6}
                  max={20}
                  placeholder="Enter your password"
                  className="rounded-md py-2 px-4 focus:outline-2 border border-slate-400 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center mt-3 p-1">
                <label className="checkmarkContainer flex items-center space-x-2">
                  <CheckBox
                    value={remember}
                    onChange={(e) => setRemember(!remember)}
                  />
                  <span className="text-[1rem]">Remember Me</span>
                </label>
                <Link
                  to="/forgetpassword"
                  className="font-semibold capitalize hover:underline text-[0.9rem]"
                >
                  forgot Password
                </Link>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-b from-[#2a2a2a] to-black w-full text-white mt-3 p-2 rounded-md capitalize tracking-wider text-[1.1rem] hover:opacity-90 transition-opacity duration-300 ease-in-out"
              >
                Sign in
              </button>
              <div className="flex items-center justify-center gap-4 my-4">
                <div className="w-[30%] sm:w-1/3 h-[1px] bg-gray-400"></div>
                <span className="text-gray-500 text-sm">Or login with</span>
                <div className="w-[30%] sm:w-1/3 h-[1px] bg-gray-400"></div>
              </div>
              <div className="flex items-center justify-between gap-5">
                <button className={AuthBtns}>
                  <Google className="w-6 h-6" />
                  Google
                </button>
                <button className={AuthBtns}>
                  <Apple className="w-6 h-6" />
                  Apple
                </button>
              </div>
              <div className="w-full text-center mt-3">
                <p className="text-sm text-[rgba(0,12,32,.7)]">
                  Don't have an account?
                  <Link
                    to="/Register"
                    className="ml-1 font-bold text-gray-950 underline ring-0 outline-gray-alpha-950 focus-visible:underline focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Login;
