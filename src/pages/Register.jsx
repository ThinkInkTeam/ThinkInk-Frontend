import Slider from "../components/side-slider/Slider";
import { Link } from "react-router-dom";
import CheckBox from "../common/CheckBox";

const Register = () => {
  const wideAuthBtns =
    "mt-4 border border-slate-300 flex items-center justify-center gap-2 px-2 py-[6px] rounded-lg hover:shadow-md font-medium capitalize duration-300 ease-in-out transition-all";

  return (
    <div className="flex p-6 justify-center items-center">
      <div className="w-full md:w-[80%] lg:w-1/2 sm:p-5 p-1 h-[calc(100vh-3rem)] relative flex flex-col items-center justify-center">
        <div className="text-center flex flex-col justify-center w-full items-center">
          <h3 className="capitalize font-semibold text-xl md:text-2xl xl:text-3xl text-center">
            Create an account
          </h3>
          <button
            className={wideAuthBtns}
            style={{
              width: "clamp(19.375rem, 18.6783rem + 3.1847vw, 22.5rem)",
            }}
          >
            <svg
              className="w-6 h-6"
              viewBox="-3 0 262 262"
              xmlnsXlink="http://www.w3.org/2000/svg"
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
            Sign up with Google
          </button>
          <div className="w-[90%] sm:w-[70%] lg:w-1/2 text-xs font-medium text-gray-600 mt-3">
            <p>
              By clicking “Sign up with Google” I agree to the{" "}
              <Link
                to="https://www.beehiiv.com/tou?utm_source=import_react&utm_medium=subscribe_page"
                target="_blank"
                className="underline ring-0 outline-gray-alpha-950 focus-visible:underline focus-visible:ring-1 focus-visible:ring-ring"
              >
                Terms of Service,
              </Link>
              acknowledge ThinkInk's{" "}
              <Link
                to="https://www.beehiiv.com/privacy?utm_medium=subscribe_page&utm_source=import_react"
                target="_blank"
                className="underline ring-0 outline-gray-alpha-950 focus-visible:underline focus-visible:ring-1 focus-visible:ring-ring"
              >
                Privacy Policy,
              </Link>{" "}
              and consent to receive updates, special offers, and promotional
              emails. I understand that I can opt out at any time.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4 w-full">
            <div className="w-[12%] h-[1px] bg-gray-400"></div>
            <span className="text-gray-500 text-sm whitespace-nowrap">
              Or continue with email
            </span>
            <div className="w-[12%] h-[1px] bg-gray-400"></div>
          </div>
          <form className="w-[100%] xs:w-[77%] sm:w-[62%] md:w-[65%] xmd:w-[50%] lg:w-[62%] 2xl:w-[44%] mt-4">
            <div className="flex flex-col gap-3 items-start mb-4 w-full">
              <label
                htmlFor="emailinput"
                className="font-medium cursor-pointer"
              >
                Email
              </label>
              <input
                id="emailinput"
                type="email"
                required
                placeholder="Enter your email address"
                className="rounded-md py-[7px] px-4 focus:outline-2 border border-slate-300 w-full text-[0.9rem] tracking-wider"
              />
            </div>
            <div className="flex flex-col gap-3 items-start w-full">
              <label
                htmlFor="passwordinput"
                className="font-medium cursor-pointer"
              >
                Password
              </label>
              <input
                id="passwordinput"
                type="password"
                required
                min={6}
                max={20}
                placeholder="Enter your password"
                className="rounded-md py-[7px] px-4 focus:outline-2 border border-slate-300 w-full"
              />
            </div>
            <div className="flex justify-between items-center mt-3 p-1 flex-col gap-2">
              <label className="flex items-center gap-2">
                <CheckBox />
                <span className="text-gray-700 text-[12px] text-left font-medium">
                  I want to receive updates, special offers, and promotional
                  emails. I understand that I can opt out at any time.
                </span>
              </label>
              <label className="flex items-center gap-2">
                <CheckBox />
                <span className="text-gray-700 text-[12px] text-left font-medium">
                  I agree to the{" "}
                  <Link
                    className="underline ring-0 outline-gray-alpha-950 focus-visible:underline focus-visible:ring-1 focus-visible:ring-ring"
                    to="/"
                  >
                    Terms of Service
                  </Link>{" "}
                  and acknowledge ThinkInk’{" "}
                  <Link
                    className="underline ring-0 outline-gray-alpha-950 focus-visible:underline focus-visible:ring-1 focus-visible:ring-ring"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-b from-[#2a2a2a] to-black w-full text-white mt-3 p-2 rounded-md capitalize tracking-wider text-[1.1rem] hover:opacity-90 transition-opacity duration-300 ease-in-out"
            >
              Signup
            </button>
          </form>
          <div className="w-full text-center mt-5">
            <p className="text-sm text-[rgba(0,12,32,.7)]">
              Already registered?
              <Link
                to="/login"
                className="ml-1 font-bold text-gray-950 underline ring-0 outline-gray-alpha-950 focus-visible:underline focus-visible:ring-1 focus-visible:ring-ring"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Register;