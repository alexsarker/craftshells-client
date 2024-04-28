import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from "lottie-react";
import FightingShapeLoader from "../box.json";

const AddCraftItem = () => {
  const { loading } = useContext(AuthContext);
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
    <div>
      <div className="hero pt-10 pb-24 lg:pb-56">
        <div className="py-12 px-16 border">
          <div className="text-left pb-8">
            <h1 className="text-4xl font-medium pb-4">Add Craft Item</h1>
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
                <select className="select select-bordered rounded-none w-full">
                  <option disabled selected>
                    Select One
                  </option>
                  <option>Landscape Painting</option>
                  <option>Portrait Drawing</option>
                  <option>Watercolour Painting</option>
                  <option>Oil Painting</option>
                  <option>Charcoal Sketching</option>
                  <option>Cartoon Drawing</option>
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
                  placeholder="0.0"
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
                <select className="select select-bordered rounded-none w-full">
                  <option disabled selected>
                    Select One
                  </option>
                  <option>Yes</option>
                  <option>No</option>
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
                  type="text"
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
                <select className="select select-bordered rounded-none w-full">
                  <option disabled selected>
                    Select One
                  </option>
                  <option>In Stock</option>
                  <option>Made to Order</option>
                </select>
              </div>
              {/* User Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    User Name
                  </span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="User Name"
                  className="input input-bordered rounded-none text-sm"
                  required
                />
              </div>
              {/* User Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    User Email
                  </span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="User Email"
                  className="input input-bordered rounded-none text-sm"
                  required
                />
              </div>

              {/* button */}
              <div className="form-control mt-6 col-span-2">
                <button className="btn back-main text-white rounded-none hover:bg-[#6A9093]">
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCraftItem;
