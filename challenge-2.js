const getLastDateOfTheMonth = (y, m, d) => {
    const date = new Date(y, m)
    let daysOfTheMonth = [];
   
    while (date.getDay() !== d) {
        date.setDate(date.getDate() + 1);
    }

    while (date.getMonth() === m) {
        daysOfTheMonth.push(new Date(date.getTime()).toString());
        date.setDate(date.getDate() + 7);
    }

    return daysOfTheMonth[daysOfTheMonth.length - 1];
}
   