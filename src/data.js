import playlistUrl from './content/2019-03-06-playlist-ordering.md';
import samePageLink from './content/2019-03-06-books-same-page-link.md';
import bookmarksSync from './content/2019-03-06-safari-bookmarks-syncing.md';

export default [
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
