import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateCraft = () => {
  const craft = useLoaderData();

  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const form = e.target;

    const photoURL = form.photoURL.value;
    const name = form.name.value;
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const artistName = form.artistName.value;
    const artistEmail = form.artistEmail.value;

    const updateCraft = {
      photoURL,
      name,
      subcategory,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      artistName,
      artistEmail,
    };
    console.log(updateCraft);

    fetch(`http://localhost:5000/craft/${craft._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Updated Successfully");
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="hero pt-10 pb-24 lg:pb-56">
        <div className="py-12 px-16 border">
          <div className="text-left pb-8">
            <h1 className="text-4xl font-medium pb-4">Update</h1>
          </div>
          <div className="card ">
            <form
              onSubmit={handleUpdateCraft}
              className="grid grid-cols-2 gap-4"
            >
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
                  defaultValue={craft.photoURL}
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
                  defaultValue={craft.name}
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
                  defaultValue={craft.subcategory}
                  required
                >
                  <option disabled hidden>
                    Select One
                  </option>
                  <option value="Landscape Painting">Landscape Painting</option>
                  <option value="Portrait Drawing">Portrait Drawing</option>
                  <option value="Watercolour Painting">
                    Watercolour Painting
                  </option>
                  <option value="Oil Painting">Oil Painting</option>
                  <option value="Charcoal Sketching">Charcoal Sketching</option>
                  <option value="Cartoon Drawing">Cartoon Drawing</option>
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
                  defaultValue={craft.description}
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
                  defaultValue={craft.price}
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
                  defaultValue={craft.rating}
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
                  defaultValue={craft.customization}
                  required
                >
                  <option disabled hidden>
                    Select One
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              {/* Processing Time */}
              <div className="form-control col-span-2">
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
                  defaultValue={craft.processingTime}
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
                  defaultValue={craft.stockStatus}
                  required
                >
                  <option disabled hidden>
                    Select One
                  </option>
                  <option value="In Stock">In Stock</option>
                  <option value="Made to Order">Made to Order</option>
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
                  defaultValue={craft.artistName}
                  required
                />
              </div>
              {/* User Email */}
              <div className="form-control col-span-2">
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
                  defaultValue={craft.artistEmail}
                  required
                />
              </div>

              {/* button */}
              <div className="form-control mt-6 col-span-2">
                <input
                  type="submit"
                  value="Add Item"
                  className="btn back-main text-white rounded-none hover:bg-[#6A9093]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default UpdateCraft;
