import React from 'react';
import { Link } from 'react-router-dom';
import './posts.css';

export default function Posts() {
  return (
    <ul>
      <li>
        <Link to="/post">First post</Link>
      </li>
    </ul>
  );
}
