var maleNames=[
   "kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame",]
var femaleNames=[
    "akosua", "adwoa", "abenaa", "akua", "yaa", "afua", "ama"]
   function result{
var century=parseInt(document.getElementById("century").value);
var year=parseInt(document.getElementById("year").value);
var month=parseInt(document.getElementById("month").value);
var day=parseInt(document.getElementById("day").value);
return [century, year, month, day];
   }

if (century<=18||century>=21>{
    alert("Right input")
    return "false";
} else if(year<=1800||year>=2100>{
  alert("Right input");
}   
return false;
} else if (month<=0||month>=12>{
  alert("Right input")
}   
return false;
} else if (day<=0||day>=30>{ 
  alert("Right input")
}
return false;
}
if (maleNames.checked==true){
  alert("the maleNames+theday of year[birthday]+dayofcentury")
} else if (femaleNames.checked==true){
  alert("the femaleNames+theday of year[birthday]+dayofcentury")
}
