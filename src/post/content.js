import React from 'react';

export default function Content({ title, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  );
}
