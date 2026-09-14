import { createContext, useState } from "react";
import { menuItems as initialData } from "../data/menuData";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(initialData);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
