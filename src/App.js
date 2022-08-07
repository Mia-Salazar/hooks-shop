import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <CharacterList></CharacterList>
      </main>
    </div>
  );
}

export default App;
