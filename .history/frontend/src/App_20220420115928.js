
import {  Route, Switch } from 'react-router';
import './App.css';
import './assets/css/reponsive.css';
import PageBookingMovie from './funtions/pageBookingMovie/pageBookingMovie';
import Login from './funtions/auth/login/login';
function App() {
  return (
    <div className="App">
            <Switch>
              <Route exact path="/">
                <PageBookingMovie></PageBookingMovie>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
            </Switch>
    </div>
  );
}

export default App;
