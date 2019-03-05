import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <>
      <header className="blogHeader">
        <Link to="/" className="blogHeader_link">
          <img src="./logo.png" alt="McIntosh" className="blogHeader_logo" />
        </Link>
        <h1 className="blogHeader_text">
          <Link to="/" className="blogHeader_link">
            McIntosh
          </Link>
        </h1>
      </header>
      <p className="blogDescription">
        IA/UX/design notes and issues for iOS/macOS.
      </p>
    </>
  );
}
