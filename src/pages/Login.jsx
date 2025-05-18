import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/side-slider/Slider";
import CheckBox from "../common/CheckBox";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    } else {
      toast.success("Login successful");
      setEmail("");
      setPassword("");
      setRemember(false);
      setIsLogin(true);
    }
  };

  const AuthBtns =
    "border border-slate-400 flex items-center justify-center gap-2 px-2 py-[6px] rounded-lg w-[45%] hover:shadow-lg font-medium capitalize duration-300 ease-in-out transition-all";

  return (
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
                  checked={remember}
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
                <svg
                  className="w-6 h-6"
                  viewBox="-3 0 262 262"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      fill="#EB4335"
                    ></path>
                  </g>
                </svg>
                Google
              </button>
              <button className={AuthBtns}>
                <svg
                  className="w-6 h-6"
                  viewBox="-1.5 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>apple [#173]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-102.000000, -7439.000000)"
                        fill="#000000"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
                            id="apple-[#173]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
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
  );
};

export default Login;
