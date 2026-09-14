import { Routes, Route } from "react-router-dom";

// Layouts
import AppLayout from "./layouts/AppLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Customer Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import CustomerMenuDetails from "./pages/CustomerMenuDetails";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin Pages
import Dashboard from "./pages/Dashboard";
import AdminMenu from "./pages/AdminMenu";
import AdminMenuDetails from "./pages/AdminMenuDetails";
import Orders from "./pages/Orders";
import Team from "./pages/Team";
import Settings from "./pages/Settings";

import "./styles/global.css";

function App() {
  return (
    <Routes>
      {/* Customer Routes (Uses Navbar + Footer) */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:id" element={<CustomerMenuDetails />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Admin Routes (Uses Sidebar) */}
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="menu" element={<AdminMenu />} />
        <Route path="menu/:id" element={<AdminMenuDetails />} />
        <Route path="orders" element={<Orders />} />
        <Route path="team" element={<Team />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* 404 Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
