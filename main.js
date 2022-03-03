// calc age in years
function ageYear(currentYear = 2022, birthyear = 0000) {
  return currentYear - birthyear; // age in years
}
let yourBirthYear = prompt("What Is Your Birth Year :");
let Years = ageYear(2022, yourBirthYear);
// calc age in months
function ageMonth(calc_Year) {
  return calc_Year * 12;
}
let month = ageMonth(Years);
// calc age in days
function ageDay(calc_month) {
  return calc_month * 31;
}
let day = ageDay(month);
// calc age in hours
function ageHour(calc_day) {
  return calc_day * 24;
}
let hour = ageHour(day);
// calc age in minuts
function ageMinut(calc_hour) {
  return calc_hour * 60;
}
let minut = ageMinut(hour);
document.write(`Your Age In Years Is : ${Years} Years <br>`);
document.write(`Your Age In Months Is : ${month} Months <br>`);
document.write(`Your Age In Days Is : ${day} Days <br>`);
document.write(`Your Age In Hours Is : ${hour} Hours <br>`);
document.write(`Your Age In Minuts Is : ${minut} Minuts <br>`);
