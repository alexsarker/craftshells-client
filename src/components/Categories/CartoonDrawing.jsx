import { Link, useLoaderData } from "react-router-dom";

const CartoonDrawing = () => {
  const craftList = useLoaderData();
  console.log(craftList);
  return (
    <div className="my-24">
      <div className="text-center pb-16">
        <h2 className="text-2xl font-bold text-[#595D62] uppercase pb-2">
        Cartoon Drawing
        </h2>
        <hr className="w-80 mx-auto border-2 border-[#595D62]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {craftList.map((craft) => (
          <div key={craft._id} className="px-4 md:px-0 lg:px-0">
            {craft.subcategory === "Cartoon Drawing" && (
              <>
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
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartoonDrawing;
