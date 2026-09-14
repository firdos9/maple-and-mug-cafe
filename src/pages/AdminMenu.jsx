import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";

const AdminMenu = () => {
  const { menuItems, setMenuItems } = useContext(MenuContext);
  const [newItem, setNewItem] = useState({ name: "", price: "" });
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState({ name: "", price: "" });

  const handleDelete = (id) =>
    setMenuItems(menuItems.filter((item) => item.id !== id));

  const handleAdd = (e) => {
    e.preventDefault();
    setMenuItems([...menuItems, { id: Date.now(), ...newItem }]);
    setNewItem({ name: "", price: "" });
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditValue({ name: item.name, price: item.price });
  };

  const saveEdit = (id) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id ? { ...item, ...editValue } : item,
      ),
    );
    setEditingId(null);
  };

  return (
    <div className="admin-page-content">
      <h1>Menu Management</h1>
      <form onSubmit={handleAdd} className="add-form">
        <input
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          required
        />
        <input
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          required
        />
        <button type="submit">Add Item</button>
      </form>

      <table className="admin-table">
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              {editingId === item.id ? (
                <>
                  <td>
                    <input
                      value={editValue.name}
                      onChange={(e) =>
                        setEditValue({ ...editValue, name: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      value={editValue.price}
                      onChange={(e) =>
                        setEditValue({ ...editValue, price: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <button onClick={() => saveEdit(item.id)}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <Link to={`/admin/menu/${item.id}`}>{item.name}</Link>
                  </td>
                  <td>${item.price}</td>
                  <td className="action-buttons">
                    <button onClick={() => startEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminMenu;
