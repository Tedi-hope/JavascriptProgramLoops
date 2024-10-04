for(var year=2024;year<=2050;year++){
    var date=new Date(year,0,1);//January is month 0 in javascript
    if(date.getDay()===0){// 0 represents Sunday
      console.log("January 1st is Sunday in the year"+" "+year);
    }
}