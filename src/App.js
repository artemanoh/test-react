import './App.css';
import recipies from "./data/recipies.json";
import { Recipe } from "./components/Recipe";




function App() {
  return (
    <div className="App">
      {recipies.map((item, index) => (
        <Recipe key={index} recipe={item} />
      ))}
    </div>
  );
}

export default App;
