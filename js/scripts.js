
function weekday() {
    if (day() === 0) {
        return "monday" ;  
    } else if (day() === 1) {
        return "tuesday" ;
    } else if (day()=== 2) {
        return "wednesday"
    } else if (day()=== 3) {
        return "thursday"
    } else if (day()=== 4) {
        return "friday"
    } else if (day()=== 5) {
        return "saturday"
    } else if (day()=== 6) {
        return "sunday"
    }


var maleNames=[
   "kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame",]
var femaleNames=[
    "akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"]
   function result{
var century=parseInt(document.getElementById("century").value);
var year=parseInt(document.getElementById("year").value);
var month=parseInt(document.getElementById("month").value);
var day=parseInt(document.getElementById("day").value);
return result
 }

if (century<=18||century>=2){
    alert("wrong input");
    return "false";
} else if (year<=1800||year>=2100){
    alert("wrong input");   
    return false;
} else if (month<=0||month>=12){
    alert("wrong input")
    return false;
} else if(day<=0||day>=30){ 
    alert("wrong input")
    return false;
}
function akan() {
if(maleNames.checked==true){
    alert("the maleNames+theday of year[akan()]+dayofcentury")
} else if (femaleNames.checked==true){
  alert("the femaleNames+theday of year[akan()]+dayofcentury")
}
