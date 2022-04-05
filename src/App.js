import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/sign-in">
          <SignIn></SignIn>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
