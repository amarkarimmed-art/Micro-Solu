"use client";
import { createContext, useContext, useState } from "react";

const NavigationContext = createContext({
  activeSection: 0,
  setActiveSection: (i: number) => {},
});

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
