import { Link } from "react-router-dom";

const NavLabel = () => {
  return (
    <div className="flex flex-wrap justify-evenly my-8 gap-6 text-[#595D62]">
      <Link className="link link-hover">Landscape Painting</Link>
      <Link className="link link-hover">Portrait Drawing</Link>
      <Link className="link link-hover">Watercolour Painting</Link>
      <Link className="link link-hover">Oil Painting</Link>
      <Link className="link link-hover">Charcoal Sketching</Link>
      <Link className="link link-hover">Cartoon Drawing</Link>
    </div>
  );
};

export default NavLabel;
