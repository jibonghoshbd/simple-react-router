import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Friend from './Components/Friend/Friend';
import FriendDetail from './Components/FriendDetail/FriendDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
