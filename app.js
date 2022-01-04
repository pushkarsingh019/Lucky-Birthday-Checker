// Creating refernces with the Html File
var birthday = document.querySelector("#birthday");
var luckyNum  = document.querySelector("#lucky")
var buttton = document.querySelector("#btn");
var output = document.querySelector("#output");

// // Making varibales to store the data inputted from the user
// let birthdayString = birthday.value;
// let luckyNumString = luckyNum.value;
var dateArray = [];

// Defining the functions

function convertArray(date){
    var dateString = date;
    for (var i=0; i<date.length; i++){
        if(dateString.charAt(i) === NaN){

        }
        else{
            dateArray.push(+dateString.charAt(i))
        }
    }
    console.log(dateArray);
}

function eventHandler(){
    convertArray(birthday.value);
}


// Adding Event Listeners
buttton.addEventListener("click", eventHandler)

