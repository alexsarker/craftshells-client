import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const AddCraftItem = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center my-24">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  return <div></div>;
};

export default AddCraftItem;
