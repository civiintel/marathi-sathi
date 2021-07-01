import './App.css';
import { Switch, Route } from "react-router-dom";
import Profiles from './Components/Profiles'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import SearchAppBar from './Components/SearchAppBar';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Switch>
        <Route path="/profiles">
          <Profiles />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
