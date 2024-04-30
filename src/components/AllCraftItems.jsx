import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from "lottie-react";
import FightingShapeLoader from "../box.json";
import { Link, useLoaderData } from "react-router-dom";

const AllCraftItems = () => {
  const { loading } = useContext(AuthContext);
  const craftList = useLoaderData();

  if (loading) {
    return (
      <div className="flex justify-center my-24">
        <div className="w-96 mx-auto">
          <Lottie animationData={FightingShapeLoader} />
        </div>
      </div>
    );
  }
  return (
    <div className="my-24">
      <div className="text-center pb-16">
        <h2 className="text-2xl font-bold text-[#595D62] uppercase pb-2">
          All Art & Craft Items
        </h2>
        <hr className="w-48 mx-auto border-2 border-[#595D62]" />
      </div>
      <div>
        {/* {craftList((craft) => (
        ))} */}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>Photo</th>
              <th>Item Name</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {craftList.map((craft) => (
              <tr key={craft._id} className="bg-base-200">
                <td>
                  <img src={craft.photoURL} className="w-48 pl-4 py-4" />
                </td>
                <td className="font-bold text-xl">{craft.name}</td>
                <td className="text-xl">{craft.subcategory}</td>
                <td className="text-xl text-secondary font-bold">${craft.price}</td>
                <td>
                  <Link
                    to={`/craft/${craft?._id}`}
                    className="hover:btn-ghost px-4 py-3 back-main text-white rounded-none"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCraftItems;
