import { FaStar } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CraftDetail = () => {
  const crafts = useLoaderData();
  const { id } = useParams();
  const craft = crafts.find((craft) => craft._id === id);
  console.log(craft);
  return (
    <div
      className="flex flex-col lg:flex-row justify-center mb-24"
      data-aos="flip-right"
    >
      <div className="grid lg:grid-flow-col gap-16 mt-12 p-6 lg:p-0">
        <div>
          <img
            className="max-h-[600px] md:mx-auto"
            src={craft?.photoURL}
            alt="item Cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="grid gap-6">
            <div className="flex justify-between items-center">
              {craft?.stockStatus === "In Stock" ? (
                <span className="text-white bg-[#2E7D328F] px-4 py-1">
                  {craft?.stockStatus}
                </span>
              ) : (
                <span className="text-white bg-red-600 px-4 py-1">
                  {craft?.stockStatus}
                </span>
              )}
              <p className="text-xl italic">{craft?.subcategory}</p>
            </div>
            <h1 className="text-4xl font-bold pt-6">{craft?.name}</h1>
            <hr />
            <p className="text-[#131313B2]">
              <span className="font-bold text-black">Description : </span>
              {craft?.description}
            </p>
            <hr />
            <div className="grid grid-cols-2 gap-10">
              <p className="text-[#131313B2]">Rating :</p>
              <p className="flex items-center gap-2 font-bold">
                {craft?.rating} <FaStar className="text-yellow-400" />
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <p className="text-[#131313B2]">Processing Time :</p>
              <p className="font-bold">{craft?.processingTime} minutes</p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <p className="text-[#131313B2]">Customization :</p>
              <p className="font-bold">{craft?.customization}</p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <p className="text-[#131313B2]">Artist Name :</p>
              <p className="font-bold">{craft?.artistName}</p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <p className="text-[#131313B2]">Artist Email :</p>
              <p className="font-bold">{craft?.artistEmail}</p>
            </div>
            <div className="flex flex-col gap-8 md:gap-0 lg:gap-0 md:flex-row lg:flex-row justify-between items-center pt-10">
              <h1 className="text-red-400 text-4xl font-bold">
                <span className="text-black text-4xl font-bold">Price :</span> $
                {craft?.price}
              </h1>
              <span>
                <Link to="/">
                  <button className="flex gap-2 px-5 py-4 items-center back-main text-white hover:btn-ghost">
                    Back{" "}
                  </button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetail;
