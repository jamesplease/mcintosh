import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Content({ title, content, markdownUrl }) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(markdownUrl)
      .then(response => response.text())
      .then(markdownText => {
        setMarkdown(markdownText);
      });
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      {markdown && (
        <ReactMarkdown source={markdown} className="guideContent_text" />
      )}
    </div>
  );
}
