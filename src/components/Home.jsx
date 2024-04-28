import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import NavLabel from "../Shared/NavLabel";
import Artists from "./Artists";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => {
  const blogList = useLoaderData();
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center my-24">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <NavLabel></NavLabel>
      {/* section 1 */}
      <div className="relative">
        <div className="carousel w-full h-96 lg:h-full relative z-10">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/VYJBdLN/pexels-shahram-jahansooz-180917-5113153.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide3"
                  className="btn btn-circle bg-transparent text-white"
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn btn-circle bg-transparent text-white"
                >
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/nzyw2dw/pexels-anastasia-shuraeva-4406714.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide1"
                  className="btn btn-circle bg-transparent text-white "
                >
                  ❮
                </a>
                <a
                  href="#slide3"
                  className="btn btn-circle bg-transparent text-white "
                >
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/yP8QjDR/pexels-flors-q-196871-1834312.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide2"
                  className="btn btn-circle bg-transparent text-white "
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn btn-circle bg-transparent text-white "
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-20 lg:px-0 absolute top-0 left-0 right-0 bottom-0 flex flex-col text-white justify-center text-center lg:text-left items-center lg:items-start lg:ml-56 z-20 gap-4 sm:gap-6 lg:gap-10 lg:w-[800px]">
          <h1 className="max-w-lg text-3xl md:text-5xl lg:text-6xl font-bold">
            Get up to see our store
          </h1>
          <p className="max-w-lg sm:max-w-xl text-base sm:text-lg">
            Introducing our latest collection of Painting and Drawing.
          </p>
          <span>
            <Link className="flex gap-4 items-center border px-6 py-2 hover:btn-ghost">
              PLACE YOUR ORDER <FaArrowRightLong className="text-xl" />
            </Link>
          </span>
        </div>
      </div>

      {/* section 2 */}
      <div className="my-24">
        <div className="text-center pb-16">
          <h2 className="text-2xl font-bold text-[#595D62] pb-2">BLOGS</h2>
          <hr className="w-24 mx-auto border-2 border-[#595D62]" />
        </div>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogList.map((blog) => (
              <Link
                key={blog.id}
                to={`/item/${blog.id}`}
                className="cursor-pointer hover:shadow-md hover:px-2 text-base"
              >
                <img src={blog.image} className="h-56 w-full" />
                <h4 className=" font-bold text-[#595D62] py-3">
                  {blog.header}
                </h4>
                <p className="text-[#9CA3AF] pb-3 ">
                  {blog.description.slice(0, 70) + "..."}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* section 3 */}
      <Artists></Artists>
    </div>
  );
};

export default Home;
