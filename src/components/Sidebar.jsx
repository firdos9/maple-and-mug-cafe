import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/menu">Menu</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/team">Team</Link>
        <Link to="/admin/settings">Settings</Link>
        <hr />
        <Link to="/">Back to Website</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
