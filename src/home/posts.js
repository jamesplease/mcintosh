import React from 'react';
import './posts.css';
import data from '../data';
import Content from '../post/content';
import isVisiblePost from '../utils/is-visible-post';

const publishedPosts = data.filter(isVisiblePost);

export default function Posts() {
  return (
    <div className="postsList">
      {publishedPosts.map(post => {
        return <Content key={post.url} {...post} isHomePage={true} />;
      })}
    </div>
  );
}
