import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Rutas from './pages/rutas';
import Error from './pages/error';
import { Sidebar, NavBar } from './components';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const changeNavStatus = () => {
    setNavOpen(!navOpen);
  };
  return (
    <AuthContext>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <section className="dashboard">
            <NavBar navHandler={changeNavStatus} />
            <Sidebar showed={navOpen} />
            <div className="content">
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/rutas">
                <Rutas />
              </Route>
            </div>
          </section>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthContext>
  );
};

export default App;
