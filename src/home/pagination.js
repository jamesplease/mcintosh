import React from 'react';
import { Link } from 'react-router-dom';
import './pagination.css';
import pageSize from '../utils/page-size';
import data from '../data';

const numberOfPosts = data.length;
const numberOfPages = Math.ceil(numberOfPosts / pageSize);

const pages = Array.from({ length: numberOfPages });

// This is a naive pagination implementation. It does not need to be
// more advanced, because I am unlikely to hit the limitations of this approach.
export default function Pagination({ page }) {
  if (pages.length === 1) {
    return null;
  }

  const numericPage = Number(page);

  return (
    <div className="pagination">
      {pages.map((noVal, pageIndex) => {
        const pageNumber = pageIndex + 1;
        const isActivePage = numericPage === pageNumber;

        // This ensures that react-snap does not generate a duplicate of the index page under /1
        const link = pageNumber === 1 ? '/' : `/${pageNumber}`;

        if (isActivePage) {
          return (
            <div key={`active-${pageNumber}`} className="paginationLink-active">
              {pageNumber}
            </div>
          );
        }

        return (
          <Link
            key={`inactive-${pageNumber}`}
            to={link}
            className="paginationLink">
            {pageNumber}
          </Link>
        );
      })}
    </div>
  );
}
