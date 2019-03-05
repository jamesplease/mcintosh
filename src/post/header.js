import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import staticFilePrefix from '../utils/static-file-prefix';

export default function Header() {
  return (
    <h1 className="postHeader">
      <Link to="/" className="postHeader_link">
        <img
          src={`${staticFilePrefix}logo.png`}
          alt="McIntosh"
          className="postHeader_logo"
        />
      </Link>
      <Link to="/" className="postHeader_link">
        McIntosh
      </Link>
    </h1>
  );
}
