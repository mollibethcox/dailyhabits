
const fullMonth = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December" ];

const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

function getDate() {
  const date = new Date();
  const dayOfWeek = days[date.getDay()];
  const month = fullMonth[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const isoDate = new Date().toISOString().slice(0, 10);

  return {month, day, year, dayOfWeek, isoDate};
}

export default getDate;
