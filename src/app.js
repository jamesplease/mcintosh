import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';
import ScrollToTop from './common/scroll-to-top';
import Home from './home/home';
import Post from './post/post';
import data from './data';

const isProduction = process.env.NODE_ENV === 'production';
const basename = isProduction ? '/mcintosh' : '/';

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
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
            <Route path="/:page" exact component={Home} />
          </Switch>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}
