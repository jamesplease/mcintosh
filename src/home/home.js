import React from 'react';
import Header from './header';
import Posts from './posts';
import Pagination from './pagination';
import Footer from '../footer';

export default function Home({ match }) {
  const { page = 1 } = match.params;

  return (
    <>
      <Header />
      <Posts page={page} />
      <Pagination page={page} />
      <Footer />
    </>
  );
}
