
function getWeek() {

  let curr = new Date();
  let week = []

  for (let i = 0; i <= 6; i++) {
    let first = curr.getDate() - curr.getDay() + i
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    let dayName = curr.toDateString().slice(0,3);
    week.push({day, dayName});
  }
  return week;
};

export default getWeek;
