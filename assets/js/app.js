// alert("Hello");
 var cl = console.log
 
//  var ages = [12, 13, 14, 15, 2, 6, 36, 58, 59, 23, 45, 75, 8, 6];

//  for(var i =0; i <ages.length; i++){
//    cl(ages[i]);
//  }
 
 
 
//  for(var i = ages.length; i >=0; i--){
//    cl(ages[i]);
//  }

// forEach -> is a method
// foreach method accepts another fun as a argument
// callback fun >> a function which is passed as argument or parameter in another function
// arrayName.forEach(callbackFunction(parameter){
//    parameter >> each and every element of a "arrayname" array
// })

// ages.forEach(function(age){
//    cl(age);
// })



//I love html5
//2nd parameter of callback functiom represents index number of array element
// skills.forEach(function(skill, i){
//    cl((i+1) + " I love " + skill);
// })
//--------------------------------------------------------------------------------------------
var skills = ["HTML5", "CSS3", "javaScript", "TypeScript", "Angular"];
var skillsInfo = document.getElementById("skillsInfo");
var result = `<ul class="list-group">`;
skills.forEach(function(skill){
   result += `<li class="list-group-item">I Love ${skill} </li>`;
})
result += `</ul>`;
skillsInfo.innerHTML = result;

//---------------------------------------------------------------------------------
var avengers = ['thor', 'captain america', 'hulk'];
var avengerInfo = document.getElementById("avengerInfo");
var result = `<ul class="list-group">`;
avengers.forEach(function(avenger){
   result += `<li class="list-group-item">I like ${avenger}</li>`;
})
result +=`</ul>`;
avengerInfo.innerHTML = result;

//-------------------------------------------------------------------------------
const fruits = ["apple", "orange", "cherry"];
var fruitInfo = document.getElementById("fruitInfo");
var result = `<ul class="list-group">`;
fruits.forEach(function(fruit){
   result += `<li class="list-group-item"> I like to eat ${fruit} </li>`;
})
result += `</ul>`
fruitInfo.innerHTML = result;

//----------------------------------------------------------------------------------
const students = ["Rohan", "Priti", "Rahul", "Preeta","Nital", "Krishna"];
var studentInfo = document.getElementById("studentInfo");
var result = `<ul class="list-group">`;
students.forEach(function(student, i){
   result += `<li class="list-group-item"> Roll no ${i+1} >> student name is ${student} </li>`;
})
result += `</ul>`
studentInfo.innerHTML = result;
//-------------------------------------------------------------------------------------
const browsers = ["Chrome", "Firefox", "Safari", "Microsoft Ede","Opera"];
var browserInfo = document.getElementById("browserInfo");
var result = `<ul class="list-group">`;
browsers.forEach(function(browser, i){
   result += `<li class="list-group-item">(${i+1})Browser name is ${browser} </li>`;
})
result += `</ul>`
browserInfo.innerHTML = result;
//-------------------------------------------------------------------------------------