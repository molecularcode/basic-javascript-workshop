// cd-day3-javscript-intro: Alex's Javascript Functions Answers


// 1. Write a function that takes a string and returns the first character of the string. Test your function on a few inputs, including the empty string.

function firstChar(string) {
    if(string) {
        console.log(string.charAt(0));
    }
    else {
        console.log("enter a string");
    }
};
firstChar("Fred");


// Write a function that takes a string and returns the last character of a string. Test your function on a few inputs, including the empty string.

function lastChar(string) {
    if(string) {
        console.log(string.slice(-1));
    }
    else {
        console.log("enter a string");
    }
};
lastChar("Albert");

