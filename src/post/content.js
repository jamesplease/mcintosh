import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './content.css';
import formatDate from '../utils/format-date';

export default function Content({
  title,
  publishDate,
  imgUrl,
  videoUrl,
  markdownUrl,
  isHomePage,
}) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(markdownUrl)
      .then(response => response.text())
      .then(markdownText => {
        setMarkdown(markdownText);
      });
  }, []);

  const hasImgMedia = typeof imgUrl !== 'undefined';
  const hasVideoMedia = typeof videoUrl !== 'undefined';

  const pathPrefix = isHomePage ? './post-media/' : '../post-media/';

  const relativeMediaUrl = imgUrl ? imgUrl : videoUrl;
  const mediaUrl = `${pathPrefix}${relativeMediaUrl}`;

  const mediaContainerClass = `postContent_mediaContainer ${
    hasImgMedia
      ? 'postContent_mediaContainer-img'
      : 'postContent_mediaContainer-video'
  }`;
  const mediaClass = `postContent_media ${
    hasImgMedia ? 'postContent_img' : 'postContent_video'
  }`;

  return (
    <article className="postContent">
      <div className={mediaContainerClass}>
        {hasImgMedia && (
          <img src={mediaUrl} alt="" className="postContent_media" />
        )}
        {hasVideoMedia && (
          <>
            <video
              src={mediaUrl}
              type="video/mp4"
              className={mediaClass}
              loop
              muted
              controls
            />
          </>
        )}
      </div>
      <h1 className="postContent_header">{title}</h1>
      <ReactMarkdown source={markdown} className="postContent_text" />
      <div className="postContent_publishDate">{formatDate(publishDate)}</div>
    </article>
  );
}
