import { TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const AlertIcon = () => (
    <TriangleAlert
      color="red"
      size={64}
      strokeWidth={2}
      className="hover:scale-110 duration-300 transition-all"
    />
  );

  return (
    <div className="bg-black text-white text-center min-h-screen flex flex-col items-center justify-center capitalize">
      <div className="flex items-center justify-center gap-2">
        <AlertIcon />
        <h1 className="sm:text-4xl text-2xl font-bold text-[var(--teal-50)]">
          404 not found
        </h1>
        <AlertIcon />
      </div>
      <Link
        to="/"
        className="border px-5 py-3 rounded-2xl outline-none hover:scale-105 duration-300 transition-all hover:border-[var(--red-600)]"
      >
        Back to home page
      </Link>
    </div>
  );
};

export default NotFound;
