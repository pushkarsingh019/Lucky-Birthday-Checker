// Creating refernces with the Html File
var birthday = document.querySelector("#birthday");
var luckyNum  = document.querySelector("#lucky")
var buttton = document.querySelector("#btn");
var output = document.querySelector("#output");


// Functions

// To find the sum of the digits in the birthday
function convertString(birthdayValue){
    let sum = 0
    for(let index=0; index<birthdayValue.length; index++){
        sum = sum + Number(birthdayValue.charAt(index))
    }
    return sum
}

// To check if the birthday is lucky or not
function luckyBirthdayChecker(sum, luckyNumber){
    if (sum % luckyNumber === 0){
        return 1
    }
    else if (sum % luckyNumber != 0){
        return 0
    }
    else {
        console.log("something went wrong" + "\n" + "the value is " + sum % luckyNumber )
    }
}

// Function to Disply Output
function displayOutput(flag){
    if (flag === 1){
        output.innerHTML = "you are lucky"
    }
    else if (flag === 0){
        output.innerHTML = "You are not lucky, So Sad"
    }
    else {
        output.innerHTML = "Something went wrong"
    }
}


// Original Event Handler
function eventHandler(){

    // Using ReplaceAll to replace all the special characters in the string
    let birthdayString = birthday.value.replaceAll("-","");
    birtdhaySum = convertString(birthdayString);
    let flag  = luckyBirthdayChecker(birtdhaySum, luckyNum.value);
    displayOutput(flag)
    
}


// Adding Event Listeners
buttton.addEventListener("click", eventHandler)



