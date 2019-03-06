import React from 'react';
import './posts.css';
import data from '../data';
import Content from '../post/content';
import pageSize from '../utils/page-size';

export default function Posts({ page }) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize - 1;

  const posts = data.filter(
    (post, index) => index >= startIndex && index <= endIndex
  );

  return (
    <div className="postsList">
      {posts.map(post => {
        return <Content key={post.url} {...post} isHomePage={true} />;
      })}
    </div>
  );
}
