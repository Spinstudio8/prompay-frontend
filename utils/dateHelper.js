export function toLocaleString(string) {
  const date = new Date(string);
  const customFormat = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  }); // "February 10, 2023, 4:58:45 PM EST"

  return customFormat;
}

export function toDateString(string) {
  const date = new Date(string);
  const customFormat = date.toDateString(); //  Fri Feb 10 2023

  return customFormat;
}
