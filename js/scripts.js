
var maleNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame",];
var femaleNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function result() {
    var d = new Date();
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    d.setDate(parseInt(day));
    d.setMonth(parseInt(month));
    d.setYear(parseInt(year));
    var day = d.getDay();
    return day;
}
var weekday = function () {
    if (result() === 0) {
        return "monday";
    } else if (result() === 1) {
        return "tuesday";
    } else if (result() === 2) {
        return "wednesday";
    } else if (result() === 3) {
        return "thursday";
    } else if (result() === 4) {
        return "friday";
    } else if (result() === 5) {
        return "saturday";
    } else if (result() === 6) {
        return "sunday";
    }
    if (century <= 18 || century >= 2) {
        alert("wrong input");
        return "false";
    } else if (year <= 1800 || year >= 2100) {
        alert("wrong input");
        return false;
    } else if (month <= 0 || month >= 12) {
        alert("wrong input")
        return false;
    } else if (day <= 0 || day >= 30) {
        alert("wrong input")
        return false;
    }
    var akan = function () {
        var male = document.getElementById("male");
        var female = document.getElementById("female");
        var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        if (maleNames.checked == true) {
            alert("the maleNames+theday of year[akan()]+dayofcentury");
        } else if (femaleNames.checked == true) {
            alert("the femaleNames+theday of year[akan()]+dayofcentury");
        }
    }
}