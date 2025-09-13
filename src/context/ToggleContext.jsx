import { createContext, useState, useContext } from "react";

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ToggleContext.Provider value={{ isMenuOpen, toggleMenu, isDarkMode, toggleTheme }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = () => useContext(ToggleContext);
