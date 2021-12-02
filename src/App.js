import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Downloads from "./pages/Downloads/Downloads";
import Movies from "./pages/Movies/Movies";
import MyList from "./pages/MyList/MyList";
import News from "./pages/News/News";
import Series from "./pages/Series/Series";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Search from "./pages/Movies/Search/Search";
import YearSelected from "./pages/Movies/YearSelected/YearSelected";
import GenreSelected from "./pages/Movies/GenreSelected/GenreSelected";

<<<<<<< HEAD
import { BrowserRouter as  Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation"
import Topbar from "./components/Topbar/Topbar"
import Home from "./pages/Home/Home"
import Downloads from "./pages/Downloads/Downloads"
import Movies from "./pages/Movies/Movies"
import MyList from "./pages/MyList/MyList"
import News from "./pages/News/News"
import Series from "./pages/Series/Series"
import Settings from './pages/Settings/Settings'
import Login from "./pages/Login/Login"
import Views from "./pages/Views"
=======
>>>>>>> cfc5d98592764b1d8443fd88b77c41ece7e0931e
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation />
          <Topbar />
        </div>
        <Switch>
          <div className="main-container">
            <Route exact path="/" component={Home} />
            <Route exact path="/Downloads" component={Downloads} />
            <Route exact path="/Movies" component={Movies} />
            <Route exact path="/MyList" component={MyList} />
            <Route exact path="/News" component={News} />
            <Route exact path="/Series" component={Series} />
            <Route exact path="/Settings" component={Settings} />
<<<<<<< HEAD
            <Route path="/views/:category/:id" component={Views} />
=======
            <Route exact path="/Movies/Search/:query" component={Search} />
            <Route
              exact
              path="/Movies/YearSelected/:year"
              component={YearSelected}
            />
            <Route
              exact
              path="/Movies/GenreSelected/:genre"
              component={GenreSelected}
            />
>>>>>>> cfc5d98592764b1d8443fd88b77c41ece7e0931e
          </div>
        </Switch>
        <Switch>
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
