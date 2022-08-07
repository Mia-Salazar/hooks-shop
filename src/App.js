import { useState } from 'react';

import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import Header from './components/Header/Header';
import ThemeContext from './Context/ThemeContext';

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={'App ' + theme }>
        <Header></Header>
        <main>
          <CharacterList></CharacterList>
        </main>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
