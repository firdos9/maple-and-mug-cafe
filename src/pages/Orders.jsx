import { useState } from "react";
import { initialOrders } from "../data/orderData";

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);

  const moveOrder = (id, newStatus) => {
    setOrders(
      orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o)),
    );
  };

  const getColumn = (status) => orders.filter((o) => o.status === status);

  return (
    <div className="admin-page-content">
      <h1>Orders Kanban Board</h1>
      <div className="kanban-board">
        {["new", "preparing", "ready"].map((status) => (
          <div key={status} className="kanban-column">
            <h3>{status.toUpperCase()}</h3>
            {getColumn(status).map((order) => (
              <div key={order.id} className="order-card">
                <p>
                  <strong>#{order.id}</strong> - {order.customer}
                </p>
                <p>{order.items}</p>
                {status !== "ready" && (
                  <button
                    onClick={() =>
                      moveOrder(
                        order.id,
                        status === "new" ? "preparing" : "ready",
                      )
                    }
                  >
                    Move to {status === "new" ? "Preparing" : "Ready"}
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Orders;
