import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

const CustomerMenuDetails = () => {
  const { id } = useParams();
  const { menuItems } = useContext(MenuContext);
  const item = menuItems.find((i) => i.id === parseInt(id));

  if (!item) return <h2 style={{ padding: "50px" }}>Item not found!</h2>;

  return (
    <div className="main-content" style={{ padding: "40px 0" }}>
      <Link to="/menu">← Back to Menu</Link>
      <h1>{item.name}</h1>
      <p style={{ fontSize: "1.2rem", color: "#666" }}>{item.description}</p>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Price: ${item.price}
      </p>
      <button className="cta-button">Add to Cart</button>
    </div>
  );
};
export default CustomerMenuDetails;
