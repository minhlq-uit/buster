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
import Search from "./pages/Movies/Search/Search";
import YearSelected from "./pages/Movies/YearSelected/YearSelected";
import GenreSelected from "./pages/Movies/GenreSelected/GenreSelected";
import Login from "./pages/Login/Login"
import Views from "./pages/Views"
import Welcome from "./pages/Welcome/Welcome"
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
            <Route exact path="/downloads" component={Downloads} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/my_list" component={MyList} />
            <Route exact path="/news" component={News} />
            <Route exact path="/series" component={Series} />
            <Route exact path="/settings" component={Settings} />

            <Route path="/views/:category/:id" component={Views} />

            <Route exact path="/movies/search/:query" component={Search} />

            <Route path="/movies/views/:category/:id" component={Views} />

            <Route
              exact
              path="/movies/yearSelected/:year"
              component={YearSelected}
            />
            <Route
              exact
              path="/movies/genreSelected/:genre"
              component={GenreSelected}
            />
          </div>
        </Switch>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
