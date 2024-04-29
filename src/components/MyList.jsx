import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
const MyList = () => {
  const [craftList, setCraftList] = useState([]);
  const { user } = useContext(AuthContext);

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

  return (
    <div className="my-24">
      <div className="text-center pb-16">
        <h2 className="text-2xl font-bold text-[#595D62] uppercase pb-2">
          Craft Items
        </h2>
        <hr className="w-48 mx-auto border-2 border-[#595D62]" />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {craftList.map((craft) => (
            <div key={craft._id} className="pb-6">
              {user.email === craft.userEmail && (
                <div>
                  <img src={craft?.photoURL} className="h-96 w-full" />
                  <h4 className="font-bold py-3">{craft?.name}</h4>
                  <p className="text-[#595D62] font-light pb-2">
                    Category: {craft.subcategory}
                  </p>
                  <p className="text-secondary text-xl pb-4">${craft?.price}</p>
                  <div className="flex justify-between">
                    <Link
                      to={`/craft/${craft?._id}`}
                      className="hover:btn-ghost px-10 py-2 back-main text-white rounded-none"
                    >
                      Update
                    </Link>
                    <Link className="hover:btn-ghost px-10 py-2 bg-[#D33030] text-white rounded-none">
                      Delete
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyList;
