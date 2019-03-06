import React from 'react';
import './posts.css';
import data from '../data';
import Content from '../post/content';

export default function Posts() {
  return (
    <div className="postsList">
      {data.map(post => {
        return <Content key={post.url} {...post} isHomePage={true} />;
      })}
    </div>
  );
}
