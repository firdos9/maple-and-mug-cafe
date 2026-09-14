import { useParams, Link } from "react-router-dom";
import { menuItems } from "../data/menuData";

const MenuDetails = () => {
  const { id } = useParams();
  const item = menuItems.find((i) => i.id === parseInt(id));

  if (!item) return <h2>Item not found!</h2>;

  return (
    <div className="admin-page-content">
      <Link to="/admin/menu">← Back to Menu</Link>
      <h1>{item.name}</h1>
      <p>
        <strong>Description:</strong> {item.description}
      </p>
      <p>
        <strong>Price:</strong> ${item.price}
      </p>
    </div>
  );
};
export default MenuDetails;
