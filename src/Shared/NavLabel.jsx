import { Link } from "react-router-dom";

const NavLabel = () => {
  return (
    <div className="flex flex-wrap justify-evenly my-8 gap-6 text-[#595D62]">
      <Link to="/category/landscapePainting" className="link link-hover">
        Landscape Painting
      </Link>
      <Link to="/category/portraitDrawing" className="link link-hover">
        Portrait Drawing
      </Link>
      <Link to="/category/watercolourPainting" className="link link-hover">
        Watercolour Painting
      </Link>
      <Link to="/category/oilPainting" className="link link-hover">
        Oil Painting
      </Link>
      <Link to="/category/charcoalSketching" className="link link-hover">
        Charcoal Sketching
      </Link>
      <Link to="/category/cartoonDrawing" className="link link-hover">
        Cartoon Drawing
      </Link>
    </div>
  );
};

export default NavLabel;
