import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Series from "./pages/Series/Series";
import Movies from "./pages/Movies/Movies";
import MyList from "./pages/MyList/MyList";
import Downloads from "./pages/Downloads/Downloads";
import News from "./pages/News/News";
import Settings from "./pages/Settings/Settings";
import "./app.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Navigation />
        <Switch>
          <div className="main-container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Series">
              <Series />
            </Route>
            <Route path="/Movies">
              <Movies />
            </Route>
            <Route path="/MyList">
              <MyList />
            </Route>
            <Route path="/Downloads">
              <Downloads />
            </Route>
            <Route path="/News">
              <News />
            </Route>
            <Route path="/Settings">
              <Settings />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
