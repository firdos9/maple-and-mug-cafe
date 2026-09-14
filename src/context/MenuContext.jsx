/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { menuItems as initialData } from "../data/menuData";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(initialData);
  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
};
