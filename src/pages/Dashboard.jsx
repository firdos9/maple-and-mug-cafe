import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const Dashboard = () => {
  const { orders } = useContext(OrderContext);
  const totalOrders = orders.length;
  const preparingCount = orders.filter((o) => o.status === "preparing").length;
  const readyCount = orders.filter((o) => o.status === "ready").length;
  const revenue = orders.reduce((acc, order) => acc + order.total, 0);

  return (
    <div className="admin-page-content">
      <h1>Cafe Operations Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>{totalOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Preparing</h3>S<p>{preparingCount}</p>
        </div>
        <div className="stat-card">
          <h3>Ready</h3>
          <p>{readyCount}</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p>${revenue.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
