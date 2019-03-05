import React from 'react';
import Header from './header';
import Content from './content';
import Footer from '../footer';

export default function Post({ title, content, markdownUrl }) {
  return (
    <>
      <Header />
      <Content title={title} content={content} markdownUrl={markdownUrl} />
      <Footer />
    </>
  );
}
