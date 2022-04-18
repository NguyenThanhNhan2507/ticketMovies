import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {  Route, Switch } from 'react-router';
import './App.css';
import './assets/css/reponsive.css';
import PageBookingMovie from './funtions/pageBookingMovie/pageBookingMovie';
function App() {
  const [user, setUser] = useState('');
  const userStore = useSelector(state=>state.user)



  const userState=()=>{
    const data= localStorage.getItem('user');
    const us = data !== null ? JSON.parse(data):null
    setUser(us)
  }
  useEffect(() => {
    
    userState()
  }, [userStore])

  return (
    <div className="App">
            <Switch>
              <Route exact path="/">
                <PageBookingMovie setUserState={()=>setUser(null)}></PageBookingMovie>
              </Route>
            </Switch>
    </div>
  );
}

export default App;
