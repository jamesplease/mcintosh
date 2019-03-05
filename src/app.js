import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';
import Home from './home/home';
import Post from './post/post';
import data from './data';

export default function App() {
  return (
    <BrowserRouter basename="/mcintosh">
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          {data.map(post => {
            return (
              <Route
                path={post.url}
                exact
                render={() => {
                  return <Post {...post} />;
                }}
              />
            );
          })}
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
}
