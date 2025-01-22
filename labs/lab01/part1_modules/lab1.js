
const _ =  require ("lodash");

const holidays =[
    {name: "Christmas", date : new Date ("2025-12-25")},
    {name: "Canada Day", date : new Date ("2025-07-01")},
    {name: "New Year", date : new Date ("2025-01-01")},
]; 

const today = new Date();
holidays.forEach((holiday) => {
    const diffTime = holiday.date - today;
    const diffDay = Math.ceil(diffTime/ (1000 * 60 * 60 * 24));
    console.log('Days until ${holiday.name}: ${diffDays} ');

});

const randomHoliday = _.sample(holidays);
console.log('Random Holiday: ${randomHoliday.name}, Date: ${randomHoliday.date.toDateString()}');

const holidayNames = holidays.map((holiday) => holiday.name);
console.log ('Index of Christmas: ${_.indexOf(holidayNames, "Christmas")} ');
console.log ('Index of Canada Day: ${_.indexOf(holidayNames, "Canada Day")} ');





