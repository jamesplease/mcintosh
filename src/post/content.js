import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';
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
  fixed,
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

  return (
    <article
      className={classnames('postContent', {
        'postContent-standalone': !isHomePage,
      })}>
      <div
        className={classnames('postContent_mediaContainer', {
          'postContent_mediaContainer-img': hasImgMedia,
          'postContent_mediaContainer-video': hasVideoMedia,
        })}>
        {hasImgMedia && (
          <img src={mediaUrl} alt="" className="postContent_media" />
        )}
        {hasVideoMedia && (
          <>
            <video
              src={mediaUrl}
              type="video/mp4"
              className={classnames('postContent_media', {
                postContent_img: hasImgMedia,
                postContent_video: hasVideoMedia,
              })}
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
        {fixed === true && <div className="postContent_fixedStatus">Fixed</div>}
      </h1>
      <ReactMarkdown source={markdown} className="postContent_text" />
      <div className="postContent_publishDate">{formatDate(publishDate)}</div>
    </article>
  );
}
