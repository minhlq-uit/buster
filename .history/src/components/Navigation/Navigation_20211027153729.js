// import NavItem from "./NavItem/index"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from '../../pages/Home/index'
import Series from '../../pages/Series/index'
import Movies from '../../pages/Movies/index'
import MyList from '../../pages/MyList/index'
import Downloads from '../../pages/Downloads/index'
import News from '../../pages/News/index'
import Settings from '../../pages/Settings/index'
import HomeIcon from '@mui/icons-material/Home'
import SeriesIcon from '@mui/icons-material/Theaters'
import MoviesIcon from '@mui/icons-material/Movie'
import MyListIcon from '@mui/icons-material/PlaylistPlay'
import DownloadsIcon from '@mui/icons-material/Download'
import NewsIcon from '@mui/icons-material/Forum'
import SettingsIcon from '@mui/icons-material/Settings'
import "./navigation.css"
export default function Navigation() {
  // const navItems = ['Home', 'Series', 'Movies', 'MyList', 'Downloads', 'News', 'Settings']
  return (
    <Router>
      <div id="nav">
        <div className="nav-item">
          <Link to="/">
            <HomeIcon />
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/Series">
            <SeriesIcon />
            Series
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/Movies">
            <MoviesIcon />
            Movies
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/MyList">
           <MyListIcon />
            MyList
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/Downloads">
            <DownloadsIcon />
            Downloads
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/News">
            <NewsIcon />
            News
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/Settings">
            <SettingsIcon />
            Settings
          </Link>
        </div>
      </div>
      {/* {navItems.map((navItem, index) => {
        return <NavItem key={index} title={navItem} path={navItem} />
      })} */}

      <hr />

      <Switch>
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
      </Switch>
    </Router>
  )
}