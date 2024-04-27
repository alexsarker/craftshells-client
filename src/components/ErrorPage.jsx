import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-72">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="text-3xl pt-6 pb-2 font-semibold text-[#9CA3AF]">
        Not Found
      </p>
      <p>the resource requested could not be found on this server!</p>
      <span className="flex justify-center pt-6">
        <Link to="/">
          <button className="flex gap-2 px-5 py-3 items-center back-main text-white">
            Back to home{" "}
          </button>
        </Link>
      </span>
    </div>
  );
};

export default ErrorPage;
