import { useState } from "react";
import { menuItems as initialData } from "../data/menuData"; // Import as initialData

const AdminMenu = () => {
  const [menuItems, setMenuItems] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="admin-page-content">
      <h1>Menu Management</h1>
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
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button>Edit</button> <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminMenu;
