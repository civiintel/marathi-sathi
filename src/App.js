import './App.css';
import { Switch, Route } from "react-router-dom";
import AboutUs from './Components/AboutUs'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import SearchAppBar from './Components/SearchAppBar';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
        <Switch>
          <Route path="/about">
            <AboutUs />
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
