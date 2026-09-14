import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";

const AdminMenu = () => {
  const { menuItems, setMenuItems } = useContext(MenuContext);
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (isNaN(newItem.price) || parseFloat(newItem.price) < 0) {
      alert("Please enter a valid positive number for the price.");
      return;
    }
    setMenuItems([...menuItems, { id: Date.now(), ...newItem }]);
    setNewItem({ name: "", price: "", description: "" });
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
          type="number"
          step="0.01"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          required
        />
        <input
          placeholder="Description"
          value={newItem.description}
          onChange={(e) =>
            setNewItem({ ...newItem, description: e.target.value })
          }
        />
        <button type="submit">Add Item</button>
      </form>

      <input
        type="text"
        placeholder="Search menu items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to={`/admin/menu/${item.id}`}>{item.name}</Link>
              </td>
              <td>${parseFloat(item.price || 0).toFixed(2)}</td>
              <td className="action-buttons">
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMenu;
