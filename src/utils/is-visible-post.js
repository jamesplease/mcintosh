import dateFromString from './date-from-string';

export default function isVisiblePost(post) {
  // This includes the hours and minutes, but we don't care about that
  // level of granularity.
  const currentTime = new Date();

  // We only need the year and day from the current time.
  const currentYear = currentTime.getFullYear();
  const currentMonth = currentTime.getMonth();
  const currentDay = currentTime.getDate();
  const startOfToday = new Date(currentYear, currentMonth, currentDay);

  const postDate = dateFromString(post.publishDate);

  // Only display posts that are both marked as published,
  // and that have a publish date that isn't in the future.
  return post.published && startOfToday >= postDate;
}
