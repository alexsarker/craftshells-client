import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from "lottie-react";
import FightingShapeLoader from "../box.json";
import { Link } from "react-router-dom";
const CraftItem = () => {
  const { loading } = useContext(AuthContext);
  const [craftList, setCraftList] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);

  useEffect(() => {
    const fetchCraftData = async () => {
      try {
        const response = await fetch("http://localhost:5000/craft");
        const data = await response.json();
        setCraftList(data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };
    fetchCraftData();
  }, []);

  const handleViewAll = () => {
    setDisplayCount(craftList.length);
  };
  console.log(craftList);

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
        <h2 className="text-2xl font-bold text-[#595D62] uppercase pb-2">Craft Items</h2>
        <hr className="w-48 mx-auto border-2 border-[#595D62]" />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {craftList.slice(0, displayCount).map((craft) => (
            <div key={craft._id}>
              <img src={craft?.photoURL} className="h-96 w-full" />
              <h4 className="font-bold py-3">{craft?.name}</h4>
              <p className="text-[#595D62] font-light pb-2">
                Category: {craft.subcategory}
              </p>
              <p className="text-secondary text-xl pb-4">${craft?.price}</p>
              <Link
                to={`/craft/${craft?._id}`}
                className="hover:btn-ghost px-4 py-3 back-main text-white rounded-none"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      {displayCount < craftList.length && (
        <div className="flex justify-center">
          <button className="btn btn-outline my-10" onClick={handleViewAll}>
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default CraftItem;
