import { useState } from "react";

const Settings = () => {
  const [isStoreOpen, setIsStoreOpen] = useState(true);

  return (
    <div className="admin-page-content">
      <h1>Settings</h1>
      <div className="setting-card">
        <h3>Store Status</h3>
        <p>
          Current Status: <strong>{isStoreOpen ? "Open" : "Closed"}</strong>
        </p>
        <button
          onClick={() => setIsStoreOpen(!isStoreOpen)}
          style={{ background: isStoreOpen ? "#dc3545" : "#28a745" }}
        >
          {isStoreOpen ? "Close Store" : "Open Store"}
        </button>
      </div>
    </div>
  );
};
export default Settings;
