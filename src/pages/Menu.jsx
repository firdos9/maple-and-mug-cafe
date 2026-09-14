import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

const Menu = () => {
  const { menuItems } = useContext(MenuContext); // Pulls from global truth
  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <h3>
              {item.name} - ${item.price}
            </h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Menu;
