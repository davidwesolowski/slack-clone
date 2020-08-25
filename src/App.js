import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:id">
              <Chat />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App

