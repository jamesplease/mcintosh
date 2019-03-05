import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <h1 className="postHeader">
      <Link to="/" className="postHeader_link">
        McIntosh
      </Link>
    </h1>
  );
}
