var date = new Date();
var year = date.getFullYear();
console.log(date)

var elToday = document.getElementById('today');
elToday.textContent = date + "."

var elCopyrightDate = document.getElementById('copyrightdate');
elCopyrightDate.textContent = year;