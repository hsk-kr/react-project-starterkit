import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DataTablePage from './pages/DataTablePage';

const route = () => {
  return (
    <Router>
      <Switch>
        <Route path="/data-table">
          <DataTablePage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default route;
