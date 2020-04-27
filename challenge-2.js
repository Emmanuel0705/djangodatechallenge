const getLastDateOfTheMonth = (y, m, d) => {
    const date = new Date(y, m)
    let daysOfTheMonth = [];
    if(d === 7) d = 0
    while (date.getDay() !== d) {
        date.setDate(date.getDate() + 1);
    }

    while (date.getMonth() === m) {
        daysOfTheMonth.push(new Date(date.getTime()).toString());
        date.setDate(date.getDate() + 7);
    }

    return daysOfTheMonth[daysOfTheMonth.length - 1];
}
console.log(getLastDateOfTheMonth(2020,0,3))
   