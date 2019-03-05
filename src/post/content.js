import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import IconPlayArrow from 'materialish/icon-play-arrow';
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
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
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
    isPlaying ? 'postContent_mediaContainer-playing' : ''
  } ${
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
              ref={videoRef}
              src={mediaUrl}
              className={mediaClass}
              loop
              muted
              onClick={() => {
                if (
                  videoRef.current &&
                  typeof videoRef.current.play === 'function'
                ) {
                  if (!isPlaying) {
                    setIsPlaying(true);
                    videoRef.current.play();
                  } else {
                    setIsPlaying(false);
                    videoRef.current.pause();
                  }
                }
              }}
            />
            <div className="postContent_videoOverlay">
              <div className="postContent_videoControl">
                <IconPlayArrow
                  className="postContent_videoPlayBtn"
                  size="2.4rem"
                  fill="#fff"
                />
                Tap to play
              </div>
            </div>
          </>
        )}
      </div>
      <h1 className="postContent_header">{title}</h1>
      {markdown && (
        <ReactMarkdown source={markdown} className="postContent_text" />
      )}
      <div className="postContent_publishDate">{formatDate(publishDate)}</div>
    </article>
  );
}
