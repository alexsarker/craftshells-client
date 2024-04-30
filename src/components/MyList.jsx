import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const MyList = () => {
  const [craftList, setCraftList] = useState([]);
  const [selectedCustomization, setSelectedCustomization] = useState("All");
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

  const handleCustomizationChange = (event) => {
    setSelectedCustomization(event.target.value);
  };

  const filteredCraftList =
    selectedCustomization === "All"
      ? craftList
      : craftList.filter(
          (craft) => craft.customization === selectedCustomization
        );

  // delete data
  const handleDeleteCraft = (_id) => {
    console.log("delete this-", _id);

    fetch(`http://localhost:5000/craft/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
        }
      });
  };

  return (
    <div className="my-24">
      <div className="text-center pb-16">
        <h2 className="text-2xl font-bold text-[#595D62] uppercase pb-2">
          Craft Items
        </h2>
        <hr className="w-48 mx-auto border-2 border-[#595D62]" />

        {/* customization button */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Sort by Customization</span>
          </div>
          <select
            className="select select-bordered"
            value={selectedCustomization}
            onChange={handleCustomizationChange}
          >
            <option value="All">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredCraftList.map((craft) => (
            <div key={craft._id} className="pb-6">
              {user.email === craft.userEmail && (
                <div>
                  <img
                    src={craft?.photoURL}
                    className="h-96 w-full"
                    alt="Craft item"
                  />
                  <h4 className="font-bold py-3">{craft?.name}</h4>
                  <p className="text-[#595D62] font-light pb-2">
                    Category: {craft.subcategory}
                  </p>
                  <p className="text-[#595D62] font-light pb-2">
                    Customization: {craft.customization}
                  </p>
                  <p className="text-secondary text-xl pb-4">${craft?.price}</p>
                  <div className="flex justify-between">
                    <Link to={`/updateCraft/${craft._id}`}>
                      <button className="hover:btn-ghost px-10 py-2 back-main text-white rounded-none">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() =>
                        document
                          .getElementById(`my_modal_1_${craft._id}`)
                          .showModal()
                      }
                      className="hover:btn-ghost px-10 py-2 bg-[#D33030] text-white rounded-none"
                    >
                      Delete
                    </button>
                    {/* delete dialog */}
                    <dialog id={`my_modal_1_${craft._id}`} className="modal">
                      <div className="modal-box text-center flex flex-col items-center">
                        <AiOutlineDelete className="text-8xl text-red-500" />
                        <p className="py-4">
                          Are you sure want to delete this item?
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            <button
                              onClick={() => handleDeleteCraft(craft._id)}
                              className="btn px-10 py-2 bg-[#D33030] text-white rounded-none md:mr-4 lg:mr-4"
                            >
                              Confirm
                            </button>
                            <button className="btn px-10 py-2 rounded-none">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default MyList;
