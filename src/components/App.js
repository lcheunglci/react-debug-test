// @flow

import React from 'react';
import './App.css';
import Grid from './listings/Grid';
import courses from '../data/courses.json';

const App = function () {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="blue lighten-2">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Courses list</a>
          </div>
        </nav>
      </div>
      <div>
        <Grid items={courses} />
      </div>
    </div>
  );
};

export default App;
