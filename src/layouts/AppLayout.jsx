import React from "react";
import Navbar from "../components/Navbar";

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">{children}</main>
      <footer>
        <p>Footer Placeholder</p>
      </footer>
    </div>
  );
};

export default AppLayout;
