import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import ResetPassword from "./pages/Login/ResetPassword";
import ForgotPassword from "./pages/Login/ForgotPassword";

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
import Views from "./pages/Views";
import Welcome from "./pages/Welcome/Welcome";
import ArrowRight from "@mui/icons-material/KeyboardArrowRight";
import "./app.scss";

function App() {
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowNav(false);
    }, 15000);
  }, [showNav]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPassword}
          />
        </Switch>
        <div>
          <Navigation show={showNav} />
          <button className="open-nav" onClick={() => setShowNav(true)}>
            <ArrowRight />
          </button>
          <Topbar show={showNav} />
        </div>
        <Switch>
          <div className={`main-container ${showNav ? "" : "full"}`}>
            <Route exact path="/" component={Home} />
            <Route exact path="/downloads" component={Downloads} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/my_list" component={MyList} />
            <Route exact path="/news" component={News} />
            <Route exact path="/series" component={Series} />
            <Route exact path="/settings" component={Settings} />

            <PrivateRoute path="/views/:category/:id" component={Views} />

            <PrivateRoute
              exact
              path="/movies/search/:query"
              component={Search}
            />

            {/* <Route path="/movies/views/:category/:id" component={Views} /> */}

            <PrivateRoute
              exact
              path="/movies/year_selected/:year"
              component={YearSelected}
            />
            <PrivateRoute
              exact
              path="/movies/genre_selected/:genre"
              component={GenreSelected}
            />
          </div>
        </Switch>
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
