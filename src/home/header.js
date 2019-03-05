import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <>
      <h1 className="blogHeader">
        <Link to="/" className="blogHeader_link">
          McIntosh
        </Link>
      </h1>
      <p className="blogDescription">
        A blog documenting IA/UX/design issues in iOS + macOS.
      </p>
    </>
  );
}
