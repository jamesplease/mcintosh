import dateFromString from './date-from-string';

export default function formatDate(dateString) {
  const date = dateFromString(dateString);

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
