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


// 2. Write a function that takes a string and returns the last character of a string. Test your function on a few inputs, including the empty string.

function lastChar(string) {
    if(string) {
        return(string.slice(-1));
    }
    else {
        return("enter a string");
    }
};
//console.log(lastChar("Albert"));


// 3. Write a function that takes a string and a number, and returns the character at the position represented by the number. The indexing of number should start at 0. Test your function on a few inputs, including the empty string.

function numberedChar(string, num) {
    if(string && num <= string.length - 1) {
        return(string.charAt(num));
    }
    else {
        return("enter a string and a smaller number");
    }
};
//console.log(numberedChar("George", 4 ));


// 4. Write a function that takes two numbers and adds them together. Test your function on a few inputs. Write in the comments what happens when you pass something other than a number to your function.

function add(num1, num2) {
    if(typeof num1 === "number" && typeof num2 === "number") { // when passed something other than type number, the user is prompted to enter 2 numbers
        return(num1 + num2);
    }
    else {
        return("enter two numbers");
    }
};
//console.log(add("greoge", 4));


// 5. Write a function that takes two numbers and multiplies them together. Test your function on a few inputs. Write in your comments what happens when you pass something other than a number to your function.

function multiply(num1, num2) {
    if(typeof num1 === "number" && typeof num2 === "number") { // when passed something other than 2 variables of type number, the user is prompted to enter 2 numbers
        return(num1 * num2);
    }
    else {
        return("enter two numbers");
    }
};
//console.log(multiply(5, 8));


// 6. Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers. If the string is ‘subtract’, return the difference. If the string is ‘mult’, return the product. If the string is ‘div’, return the ratio. Otherwise return 0.

function math(num1, num2, opperator) {
    /* when passed something other than 2 variables of type number followed by a variable of type string, the user is prompted to enter 2 numbers followed by the opperator */
    if(typeof num1 === "number" && typeof num2 === "number" && typeof opperator === "string") {
        if(opperator === "add") {
            return(num1 + num2);   
        }
        else if(opperator === "subtract") {
            return(num1 - num2);   
        }
        else if(opperator === "mult") {
            return(num1 * num2);   
        }
        else if(opperator === "div") {
            return(num1 / num2);   
        }
        else {
            return("0 - enter the opperator as one of: add, subtract, mult, div");
        }
    }
    else {
        return("enter two numbers followed by the opperator (add, subtract, mult, div) as csv");
    }
};
console.log(math(12, 4, "mult"));