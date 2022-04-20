
import {  Route, Switch } from 'react-router';
import './App.css';
import './assets/css/reponsive.css';
import PageBookingMovie from './funtions/pageBookingMovie/pageBookingMovie';
import Login from './funtions/auth/login/login';
import HistoryBookTicket from './funtions/historyBookTicker/historyBookTicker';
import Footer from './components/footer/footer';
import ContentPage from './funtions/contentPage/contentPage';
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
              <Route exact path="/lich-su-dat-ve">
                <HistoryBookTicket></HistoryBookTicket>
              </Route>
              <Route exact path="/footer">
                <ContentPage></ContentPage>
              </Route>
            </Switch>
    </div>
  );
}

export default App;
