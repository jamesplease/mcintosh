import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './content.css';

export default function Content({ title, imgUrl, markdownUrl, isHomePage }) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(markdownUrl)
      .then(response => response.text())
      .then(markdownText => {
        setMarkdown(markdownText);
      });
  }, []);

  const imageUrl = !isHomePage ? `../${imgUrl}` : imgUrl;

  return (
    <article className="postContent">
      <img src={imageUrl} alt="" className="postContent_img" />
      <h1 className="postContent_header">{title}</h1>
      {markdown && (
        <ReactMarkdown source={markdown} className="postContent_text" />
      )}
    </article>
  );
}
