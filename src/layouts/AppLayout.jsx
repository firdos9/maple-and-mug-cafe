import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
