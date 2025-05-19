import Slider from "../components/side-slider/Slider";
import { Link } from "react-router-dom";
import CheckBox from "../common/CheckBox";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Google from "../common/GoogleBtn";

const Register = () => {
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [terms, setTerms] = useState(false);

  const wideAuthBtns =
    "mt-4 border border-slate-300 flex items-center justify-center gap-2 px-2 py-[6px] rounded-lg hover:shadow-md font-medium capitalize duration-300 ease-in-out transition-all";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!terms || !emailUpdates) {
      toast.error("Please fill in all fields");
      return;
    } else {
      toast.success("Login successful");
      setEmailUpdates(false);
      setTerms(false);
    }
  };

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
            <Google className="w-6 h-6" />
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
          <form
            className="w-[100%] xs:w-[77%] sm:w-[62%] md:w-[65%] xmd:w-[50%] lg:w-[62%] 2xl:w-[44%] mt-4"
            onSubmit={handleSubmit}
          >
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
                <CheckBox
                  value={emailUpdates}
                  onChange={(e) => setEmailUpdates(!emailUpdates)}
                />
                <span className="text-gray-700 text-[12px] text-left font-medium">
                  I want to receive updates, special offers, and promotional
                  emails. I understand that I can opt out at any time.
                </span>
              </label>
              <label className="flex items-center gap-2">
                <CheckBox value={terms} onChange={(e) => setTerms(!terms)} />
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
