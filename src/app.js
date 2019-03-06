import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';
import Home from './home/home';
import Post from './post/post';
import data from './data';

const isProduction = process.env.NODE_ENV === 'production';
const basename = isProduction ? '/mcintosh' : '/';

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          {data.map(post => {
            return (
              <Route
                key={post.url}
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
