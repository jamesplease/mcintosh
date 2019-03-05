import React from 'react';
import { Link } from 'react-router-dom';
import IconKeyboardReturn from 'materialish/icon-keyboard-return';
import './post.css';
import Header from './header';
import Content from './content';
import Footer from '../footer';

export default function Post(post) {
  return (
    <>
      <Header />
      <Link to="/" className="post_returnLink">
        <IconKeyboardReturn
          fill="var(--accentColor)"
          className="post_returnIcon"
        />{' '}
        All Posts
      </Link>
      <Content {...post} isHomePage={false} />
      <Footer />
    </>
  );
}
