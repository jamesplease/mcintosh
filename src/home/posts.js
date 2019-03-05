import React from 'react';
import { Link } from 'react-router-dom';
import './posts.css';
import data from '../data';

const publishedPosts = data.filter(data => data.published);

export default function Posts() {
  return (
    <div className="postsList">
      {publishedPosts.map(post => {
        return (
          <article key={post.url} className="postContainer">
            <Link to={post.url}>{post.title}</Link>
          </article>
        );
      })}
    </div>
  );
}
