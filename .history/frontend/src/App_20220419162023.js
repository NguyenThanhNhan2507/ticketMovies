
import {  Route, Switch } from 'react-router';
import './App.css';
import './assets/css/reponsive.css';
import PageBookingMovie from './funtions/pageBookingMovie/pageBookingMovie';
function App() {
  return (
    <div className="App"
            <Switch>
              <Route exact path="/">
                <PageBookingMovie></PageBookingMovie>
              </Route>
            </Switch>
    </div>
  );
}

export default App;
