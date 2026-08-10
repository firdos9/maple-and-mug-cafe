import { menuItems } from "../data/menuData";

const Menu = () => {
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
