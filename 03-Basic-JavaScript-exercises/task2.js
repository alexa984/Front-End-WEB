let dateArray = [];

// Task 1.1
const today = new Date(Date.now());
dateArray.push(today);
console.log(dateArray);


// Task 1.2
let otherDate = new Date(2018, 11, 8);
otherDate.setHours(21, 0, 0);
dateArray.push(otherDate);
console.log(dateArray);


// Task 1.3
const countedDays = dateArray.map(
  date => [new Date(date.getUTCFullYear(), date.getUTCMonth() + 1, 0).getDate(), date.getDay()]
);
console.log(countedDays);  // [30, 0], [31, 6]]


// Task 1.4
const mapDay = (day) => ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'][day]

const formatDate = (date, idx) => {
  return "Дата: " + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() +
    ", час: " + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() +
    ", " + mapDay(countedDays[idx][1]) + ', ' + countedDays[idx][0] + " дни"
}
const concatenatedValues = dateArray.map((date, idx) => formatDate(date, idx));
console.log(concatenatedValues);
