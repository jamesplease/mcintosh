import React from 'react';
import { Link } from 'react-router-dom';
import './list.css';

export default function List() {
  return (
    <div>
      <h1 className="listHeader">McIntosh</h1>
      <p className="listDescription">
        A blog documenting IA/UX/design issues in iOS + macOS.
      </p>
      <ul>
        <li>
          <Link to="/post">First post</Link>
        </li>
      </ul>
    </div>
  );
}
