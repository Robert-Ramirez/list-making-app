import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import TrelloBoard from '../components/Boards/TrelloBoard';
import Home from '../components/Boards/Home';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/:boardID" component={TrelloBoard} />
      </div>
    </Router>
  );
};

export default AppRouter;
