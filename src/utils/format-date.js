export default function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
