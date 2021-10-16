import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Destination from "./components/Destination/Destination";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App ">
      <div className="overly ">
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/destination">
              <Destination></Destination>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
