var day of the month = day of month()
var getAge = function(year,month,date){
    var today = new Date();
    var dob = new Date();
    dob.setFullYear(year);
    dob.setMonth(month-1);
    dob.setDate(date);
    var timeDiff = today.valueOf() - dob.valueOf();
    var milliInDay = 24*60*60*1000;
    var noOfDays = timeDiff / milliInDay;
    var daysInYear = 365.242;
    return  ( noOfDays / daysInYear ) ;
}