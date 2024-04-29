import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Toaster } from "react-hot-toast";

const MyList = () => {
  const [craftList, setCraftList] = useState([]);
  const [selectedCustomization, setSelectedCustomization] = useState("All"); // Set default value to "All"
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
                    <button
                      className="hover:btn-ghost px-10 py-2 back-main text-white rounded-none"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Update
                    </button>
                    <button
                      className="hover:btn-ghost px-10 py-2 bg-[#D33030] text-white rounded-none"
                    >
                      Delete
                    </button>

                    {/* update dialog */}
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box rounded-none w-96 md:w-full lg:w-full">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div>
                          <div className="hero">
                            <div className="py-8 px-4">
                              <div className="text-left pb-8">
                                <h1 className="text-4xl font-medium pb-2">
                                  Update
                                </h1>
                              </div>
                              <div className="card ">
                                <form className="grid grid-cols-2 gap-4">
                                  {/* Image URL */}
                                  <div className="form-control">
                                    <label className="label">
                                      <span className="label-text font-medium text-base">
                                        Add Image URL
                                      </span>
                                    </label>
                                    <input
                                      type="url"
                                      name="photoURL"
                                      placeholder="https://"
                                      className="input input-bordered rounded-none text-sm"
                                      required
                                    />
                                  </div>
                                  {/* Item Name */}
                                  <div className="form-control">
                                    <label className="label">
                                      <span className="label-text font-medium text-base">
                                        Item Name
                                      </span>
                                    </label>
                                    <input
                                      type="text"
                                      name="name"
                                      placeholder="Item Name"
                                      className="input input-bordered rounded-none text-sm"
                                      required
                                    />
                                  </div>
                                  {/* Subcategory Name */}
                                  <div className="form-control col-span-2">
                                    <label className="label">
                                      <span className="label-text font-medium text-base">
                                        Subcategory Name
                                      </span>
                                    </label>
                                    <select
                                      name="subcategory"
                                      className="select select-bordered rounded-none w-full"
                                      required
                                    >
                                      <option disabled defaultValue="" hidden>
                                        Select One
                                      </option>
                                      <option value="Landscape Painting">
                                        Landscape Painting
                                      </option>
                                      <option value="Portrait Drawing">
                                        Portrait Drawing
                                      </option>
                                      <option value="Watercolour Painting">
                                        Watercolour Painting
                                      </option>
                                      <option value="Oil Painting">
                                        Oil Painting
                                      </option>
                                      <option value="Charcoal Sketching">
                                        Charcoal Sketching
                                      </option>
                                      <option value="Cartoon Drawing">
                                        Cartoon Drawing
                                      </option>
                                    </select>
                                  </div>
                                  {/* Short Description */}
                                  <div className="form-control col-span-2">
                                    <label className="label">
                                      <span className="label-text font-medium text-base">
                                        Short Description
                                      </span>
                                    </label>
                                    <textarea
                                      type="text"
                                      name="description"
                                      placeholder="Short Description"
                                      className="text-area h-24 input input-bordered rounded-none text-sm pt-2"
                                      required
                                    />
                                  </div>
                                  {/* Price */}
                                  <div className="form-control">
                                    <label className="label">
                                      <span className="label-text font-medium text-base">
                                        Price
                                      </span>
                                    </label>
                                    <input
                                      type="number"
                                      name="price"
                                      placeholder="$$"
                                      className="input input-bordered rounded-none text-sm"
                                      required
                                    />
                                  </div>
                                  {/* Rating */}
                                  <div className="form-control">
                                    <label className="label">
                                      <span className="label-text font-medium text-base">
                                        Rating
                                      </span>
                                    </label>
                                    <input
                                      type="text"
                                      name="rating"
                                      placeholder="Out of 5"
                                      className="input input-bordered rounded-none text-sm"
                                      required
                                    />
                                  </div>
                                  {/* Customization */}
                                  <div className="form-control col-span-2">
                                    <label className="label">
                                      <span className="label-text font-medium text-base">
                                        Customization
                                      </span>
                                    </label>
                                    <select
                                      name="customization"
                                      className="select select-bordered rounded-none w-full"
                                      required
                                    >
                                      <option disabled defaultValue="" hidden>
                                        Select One
                                      </option>
                                      <option value="Yes">Yes</option>
                                      <option value="No">No</option>
                                    </select>
                                  </div>
                                  {/* Processing Time */}
                                  <div className="form-control">
                                    <label className="label">
                                      <span className="label-text font-medium text-base">
                                        Processing Time
                                      </span>
                                    </label>
                                    <input
                                      type="number"
                                      name="processingTime"
                                      placeholder="Processing Time"
                                      className="input input-bordered rounded-none text-sm"
                                      required
                                    />
                                  </div>
                                  {/* Stock Status */}
                                  <div className="form-control">
                                    <label className="label">
                                      <span className="label-text font-medium text-base">
                                        Stock Status
                                      </span>
                                    </label>
                                    <select
                                      name="stockStatus"
                                      className="select select-bordered rounded-none w-full"
                                      required
                                    >
                                      <option disabled defaultValue="" hidden>
                                        Select One
                                      </option>
                                      <option value="In Stock">In Stock</option>
                                      <option value="Made to Order">
                                        Made to Order
                                      </option>
                                    </select>
                                  </div>
                                  {/* User Name */}
                                  <div className="form-control">
                                    <label className="label">
                                      <span className="label-text font-medium text-base">
                                        Artist Name
                                      </span>
                                    </label>
                                    <input
                                      type="text"
                                      name="artistName"
                                      placeholder="Artist Name"
                                      className="input input-bordered rounded-none text-sm"
                                      required
                                    />
                                  </div>
                                  {/* User Email */}
                                  <div className="form-control">
                                    <label className="label">
                                      <span className="label-text font-medium text-base">
                                        Artist Email
                                      </span>
                                    </label>
                                    <input
                                      type="email"
                                      name="artistEmail"
                                      placeholder="Artist Email"
                                      className="input input-bordered rounded-none text-sm"
                                      required
                                    />
                                  </div>

                                  {/* button */}
                                  <div className="form-control mt-6 col-span-2">
                                    <input
                                      type="submit"
                                      value="Update"
                                      className="btn back-main text-white rounded-none hover:bg-[#6A9093]"
                                    />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Toaster
                              position="top-right"
                              reverseOrder={false}
                            />
                          </div>
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
    </div>
  );
};

export default MyList;
