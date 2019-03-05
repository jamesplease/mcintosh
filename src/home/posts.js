import React from 'react';
import { Link } from 'react-router-dom';
import './posts.css';
import data from '../data';

export default function Posts() {
  return (
    <ul>
      {data.map(post => {
        return (
          <li key={post.url}>
            <Link to={post.url}>{post.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
