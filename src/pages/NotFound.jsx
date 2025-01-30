import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center min-h-screen">
      <p
        style={{ fontSize: "clamp(0.74rem, 0.6485rem + 0.3906vw, 1.7rem)" }}
        className="font-bold absolute sm:right-[20%] top-[8%] right-1/2 transform translate-x-1/2 translate-y-1/2"
      >
        [SOMETHING WENT WRONG!]
      </p>
      <h1
        style={{
          fontSize: "clamp(11rem, 2.5493rem + 36.0563vw, 35rem)",
        }}
        className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 font-bold"
      >
        404
      </h1>
      <Link
        style={{ fontSize: "clamp(0.75rem, 0.6620rem + 0.3756vw, 1rem)" }}
        to="/"
        className="bg-dark text-light border px-7 py-3 rounded-lg hover:opacity-80 duration-300 transition-opacity absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        Back To HomePage
      </Link>
      <p
        style={{ fontSize: "clamp(0.74rem, 0.6485rem + 0.3906vw, 1.7rem)" }}
        className="font-bold absolute sm:left-[20%] bottom-[8%] left-1/2 transform -translate-x-1/2 translate-y-1/2"
      >
        [SOMETHING WENT WRONG!]
      </p>
    </div>
  );
};

export default NotFound;
