import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import './content.css';
import formatDate from '../utils/format-date';
import staticFilePrefix from '../utils/static-file-prefix';

export default function Content({
  title,
  url,
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

  const relativeMediaUrl = hasImgMedia ? imgUrl : videoUrl;
  const mediaUrl = `${staticFilePrefix}post-media/${relativeMediaUrl}`;

  const mediaContainerClass = `postContent_mediaContainer ${
    hasImgMedia
      ? 'postContent_mediaContainer-img'
      : 'postContent_mediaContainer-video'
  }`;
  const mediaClass = `postContent_media ${
    hasImgMedia ? 'postContent_img' : 'postContent_video'
  }`;

  const contentClass = `postContent ${
    !isHomePage ? 'postContent_standalone' : ''
  }`;

  return (
    <article className={contentClass}>
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
      <h1 className="postContent_header">
        {isHomePage && (
          <Link to={url} className="postContent_headerLink">
            {title}
          </Link>
        )}
        {!isHomePage && title}
      </h1>
      <ReactMarkdown source={markdown} className="postContent_text" />
      <div className="postContent_publishDate">{formatDate(publishDate)}</div>
    </article>
  );
}
