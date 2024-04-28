import PropTypes from "prop-types";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import FightingShapeLoader from "../box.json";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const BlogDetail = () => {
  const { loading } = useContext(AuthContext);
  const blogs = useLoaderData();
  const { id } = useParams();
  const parseId = parseInt(id);
  const blog = blogs.find((blog) => blog.id === parseId);
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
    <div className="bg-gray-100 p-10 mb-24">
      <p className="pb-4 text-gray-400">Published Date: {blog?.date}</p>
      <img
        className="max-h-[550px] w-full pb-6"
        src={blog?.image}
        alt="Image"
      />
      <h2 className="text-3xl font-bold pt-2 pb-3 text-[#6B7280]">{blog?.header}</h2>
      <h2 className="text-xl font-bold pb-6 italic text-secondary">
        {blog?.writer}
      </h2>
      <hr className="pb-6" />
      <p className="text-[#131313B2] text-justify">{blog?.description}</p>
      <div className="flex justify-center py-24">
        <Link to="/">
          <button className="btn btn-ghost flex gap-2 px-8 items-center bg-[#393939] text-white rounded-none">
            Back{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;

BlogDetail.propTypes = {
  blog: PropTypes.object,
};
