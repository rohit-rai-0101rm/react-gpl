import './App.css';
import CharacterList from './pages/CharacterList';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Character from './pages/Character';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={CharacterList}/>
        <Route exact path="/character/:id" component={Character}/>

      
      </Router>
    </div>
  );
}

export default App;
