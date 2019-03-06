import playlistUrl from './content/2019-03-05-playlist-ordering.md';
import samePageLink from './content/2019-03-05-books-same-page-link.md';
import bookmarksSync from './content/2019-03-05-safari-bookmarks-syncing.md';
import stocksErrorMsgFormat from './content/2019-03-12-stocks-error-message-formatting.md';

export default [
  {
    title: 'Stocks Error Message Formatting',
    url: '/stocks-error-message-formatting',
    videoUrl: 'stocks-error-msg.mp4',
    markdownUrl: stocksErrorMsgFormat,
    published: true,
    publishDate: '2019-03-12',
    fixed: false,
    versions: {
      ios: '12.1.4',
    },
  },
  {
    title: 'Books Same Page Link',
    url: '/books-same-page-link',
    videoUrl: 'books-same-page-link.mp4',
    markdownUrl: samePageLink,
    published: true,
    publishDate: '2019-03-05',
    fixed: false,
    versions: {
      ios: '12.1.4',
    },
  },
  {
    title: 'Inconsistent Playlist Ordering',
    url: '/playlist-ordering',
    imgUrl: 'playlist-ordering.png',
    markdownUrl: playlistUrl,
    published: true,
    publishDate: '2019-03-05',
    fixed: false,
    versions: {
      ios: '12.1.4',
      macos: '10.14.3',
    },
  },
  {
    title: 'Safari Bookmarks Syncing',
    url: '/safari-bookmarks-syncing',
    imgUrl: 'safari-bookmarks-syncing.png',
    markdownUrl: bookmarksSync,
    published: true,
    publishDate: '2019-03-05',
    fixed: false,
    versions: {
      ios: '12.1.4',
    },
  },
];
