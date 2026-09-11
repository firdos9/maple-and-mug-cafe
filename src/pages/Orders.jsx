import { useState } from "react";
import { initialOrders } from "../data/orderData";

const Orders = () => {
  const [orders] = useState(initialOrders);

  return (
    <div className="admin-page-content">
      <h1>Orders</h1>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.items}</td>
              <td>${order.total.toFixed(2)}</td>
              <td>
                <span className={`status-${order.status}`}>{order.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Orders;
