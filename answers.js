// cd-day3-javscript-intro: Alex's Javascript Functions Answers


// 1. Write a function that takes a string and returns the first character of the string. Test your function on a few inputs, including the empty string.

function firstChar(string) {
    if(string) {
        return(string.charAt(0));
    }
    else {
        return("enter a string");
    }
};
//console.log(firstChar("Fred"));


// Write a function that takes a string and returns the last character of a string. Test your function on a few inputs, including the empty string.

function lastChar(string) {
    if(string) {
        return(string.slice(-1));
    }
    else {
        return("enter a string");
    }
};
//console.log(lastChar("Albert"));


// Write a function that takes a string and a number, and returns the character at the position represented by the number. The indexing of number should start at 0. Test your function on a few inputs, including the empty string.

function numberedChar(string, num) {
    if(string && num <= string.length - 1) {
        return(string.charAt(num));
    }
    else {
        return("enter a string and a smaller number");
    }
};
//console.log(numberedChar("George", 4 ));


// Write a function that takes two numbers and adds them together. Test your function on a few inputs. Write in the comments what happens when you pass something other than a number to your function.

function add(num1, num2) {
    if(typeof num1 === "number" && typeof num2 === "number") {
        return(num1 + num2);
    }
    else {
        return("enter two numbers");
    }
};
console.log(add(5, 4));