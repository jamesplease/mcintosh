import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';
import List from './list';
import Post from './post';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/post" exact component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
