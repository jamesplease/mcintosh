import playlistUrl from './content/2019-03-05-playlist-ordering.md';
import samePageLink from './content/2019-03-05-books-same-page-link.md';
import bookmarksSync from './content/2019-03-05-safari-bookmarks-syncing.md';
import stocksErrorMsgFormat from './content/2019-03-12-stocks-error-message-formatting.md';
import calendarTransitionBug from './content/2019-03-19-calendar-transition-bug.md';
import photosAppIcon from './content/2019-03-26-photos-app-icon.md';
import newsHighlightBug from './content/2019-04-02-news-highlight-bug.md';

export default [
  {
    title: 'macOS News App Selection Bug',
    url: '/macos-news-app-selection-bug',
    videoUrl: 'news-highlight-bug.mp4',
    markdownUrl: newsHighlightBug,
    published: true,
    publishDate: '2019-04-02',
    fixed: false,
    versions: {
      macos: '10.14.3',
    },
  },
  {
    title: 'Photos App Icon',
    url: '/photos-app-icon',
    imgUrl: 'photos-app-icon.png',
    markdownUrl: photosAppIcon,
    published: true,
    publishDate: '2019-03-26',
    fixed: false,
    versions: {
      ios: '12.1.4',
    },
  },
  {
    title: 'Calendar Transition Bug',
    url: '/calendar-transition-bug',
    videoUrl: 'calendar-transition-bug.mp4',
    markdownUrl: calendarTransitionBug,
    published: true,
    publishDate: '2019-03-19',
    fixed: false,
    versions: {
      ios: '12.1.4',
    },
  },
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
