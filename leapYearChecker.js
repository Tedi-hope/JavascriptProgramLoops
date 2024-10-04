function isLeapYear(year){
    //A year is a leap year if it's divisible by 4.
    //but years divisible by 100 are not leap years unless also divisible by 400

    return (year % 4===0 && year % 100!==0) || (year % 400===0);
}

//Examples 
console.log(isLeapYear(2000));
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(1900));
console.log(isLeapYear(2016));