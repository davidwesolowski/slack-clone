import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import './App.css';
import { useStateValue } from './StateProvider';
import Login from './components/Login/Login';

const App = () => {

  const { state: { user }} = useStateValue();

  return (
    <div className="app">
      <Router>
      {
        user ? <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/room/:id">
                <Chat />
              </Route>
            </Switch>
          </div>
        </> : <Login />
      }
      </Router>
    </div>
  )
}

export default App

