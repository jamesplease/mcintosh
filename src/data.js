import playlistUrl from './content/2019-03-05-playlist-ordering.md';
import samePageLink from './content/2019-03-05-books-same-page-link.md';
import bookmarksSync from './content/2019-03-05-safari-bookmarks-syncing.md';
import stocksErrorMsgFormat from './content/2019-03-12-stocks-error-message-formatting.md';
import calendarTransitionBug from './content/2019-03-19-calendar-transition-bug.md';
import photosAppIcon from './content/2019-03-26-photos-app-icon.md';
import newsHighlightBug from './content/2019-04-02-news-highlight-bug.md';
import mapsInputVelocity from './content/2019-04-09-maps-input-velocity.md';
import musicAddedToLibraryBug from './content/2019-04-16-music-added-to-library-bug.md';
import smallAppSwitcher from './content/2019-04-23-small-app-switcher.md';
import scrollPhysicsMarzipan from './content/2019-04-30-scroll-physics-marzipan.md';
import offlineBehaviorNews from './content/2019-05-07-offline-behavior-in-news.md';

export default [
  {
    title: 'Inconsistent Offline Behavior in News',
    url: '/inconsistent-offline-behavior-in-news',
    videoUrl: 'news-offline.mp4',
    markdownUrl: offlineBehaviorNews,
    published: true,
    publishDate: '2019-05-07',
    fixed: false,
    versions: {
      macos: '10.14.3',
    },
  },
  {
    title: 'Different Scroll Physics in "Marzipan" apps',
    url: '/different-scroll-physics-marzipan',
    markdownUrl: scrollPhysicsMarzipan,
    published: true,
    fixed: false,
    publishDate: '2019-04-30',
    versions: {
      macos: '10.14.3',
    },
  },
  {
    title: 'Small App Switcher Apps',
    url: '/small-app-switcher-apps',
    videoUrl: 'app-switcher-scale.mp4',
    markdownUrl: smallAppSwitcher,
    published: true,
    publishDate: '2019-04-23',
    versions: {
      ios: '12.1.4',
    },
  },
  {
    title: 'Music: Added to Library Alert Bug',
    url: '/music-added-to-library-alert-bug',
    videoUrl: 'music-added-to-library-bug.mp4',
    markdownUrl: musicAddedToLibraryBug,
    published: true,
    publishDate: '2019-04-16',
    fixed: false,
    versions: {
      ios: '12.1.4',
    },
  },
  {
    title: 'iPad Maps Input Swipe Bug',
    url: '/maps-input-swipe-bug',
    videoUrl: 'maps-input-velocity.mp4',
    markdownUrl: mapsInputVelocity,
    published: true,
    publishDate: '2019-04-09',
    fixed: false,
    versions: {
      ios: '12.1.4',
    },
  },
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
