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

export function toHtmlDate(string) {
  let date = new Date(string);

  //   console.log(date.getFullYear());
  //   console.log(date.getMonth());
  //   console.log(date.getDate());

  let month = date.getMonth() + 1;
  let day = date.getDate();

  // concat 0 if month and day is less than 10
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;

  // make date a suitable format for html "(year-mm-dd)"
  date = `${date.getFullYear()}-${month}-${day}`;

  return date;
}
