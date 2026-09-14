import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";

const AdminMenuDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { menuItems, setMenuItems } = useContext(MenuContext);

  const item = menuItems.find((i) => i.id === parseInt(id));
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item || {});

  if (!item) return <h2>Item not found!</h2>;

  const handleDelete = () => {
    setMenuItems(menuItems.filter((i) => i.id !== item.id));
    navigate("/admin/menu"); // Redirect back to list
  };

  const handleSave = () => {
    setMenuItems(menuItems.map((i) => (i.id === item.id ? editValue : i)));
    setIsEditing(false);
  };

  return (
    <div className="admin-page-content">
      <Link to="/admin/menu">← Back to Menu Management</Link>

      {isEditing ? (
        <div className="setting-card">
          <input
            value={editValue.name}
            onChange={(e) =>
              setEditValue({ ...editValue, name: e.target.value })
            }
          />
          <input
            value={editValue.price}
            onChange={(e) =>
              setEditValue({ ...editValue, price: e.target.value })
            }
          />
          <textarea
            value={editValue.description}
            onChange={(e) =>
              setEditValue({ ...editValue, description: e.target.value })
            }
          />
          <button onClick={handleSave}>Save Changes</button>
        </div>
      ) : (
        <div className="setting-card">
          <h1>{item.name}</h1>
          <p>
            <strong>Price:</strong> ${item.price}
          </p>
          <p>
            <strong>Description:</strong> {item.description}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            style={{ marginRight: "10px" }}
          >
            Edit Item
          </button>
          <button
            onClick={handleDelete}
            style={{ background: "red", color: "white" }}
          >
            Delete Item
          </button>
        </div>
      )}
    </div>
  );
};
export default AdminMenuDetails;
