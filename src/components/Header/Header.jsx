import React, { useState, useContext } from 'react';

import ThemeContext from '../../Context/ThemeContext';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);
  const {theme, setTheme} = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <header className="header">
      <h1 style={{color}}>Shop</h1>
      <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </header>
  );
}

export default Header;