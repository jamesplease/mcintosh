import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';
import Home from './home/home';
import Post from './post/post';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post" exact component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
