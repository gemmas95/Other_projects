import "./App.css";
import CardList from "./components/CardList";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/pokemon" component={CardList} />
          <Route path="/">
            <h2>Welcome to Pokedex!</h2>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
