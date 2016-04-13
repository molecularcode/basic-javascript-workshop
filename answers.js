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
//console.log(math(12, 4, "mult"));


// 7. Write a function that takes a string and a number, and returns the string repeated that many number of times. Test your function with various inputs.

function stringLoop(num, string) {
    /* when passed something other than a variable of type number followed by a variable of type string, the user is prompted to enter a number followed by a string */
    if(typeof num === "number" && typeof string === "string") {
        var i = 0;
        while(i < num ) {
            var loop = (string + "\n" + loop);
            i ++;
        }
        return(loop);
    }
    else {
        return("enter a number followed by a string as csv");
    }
}
//console.log(stringLoop(2, "Oh Happy Days!"));


// 8. Write a function that takes a string, and returns the reverse of that string. For example, if you pass the function the string “hello”, it should return “olleh”. Test your function on a few inputs, including the empty string.

function reverse(sentence) {
    /* when passed something other than a variable of type string, the user is prompted to enter a valid string */
    if(typeof sentence === "string") {
        return sentence.split(" ").reverse().join(" ");
    }
    else {
        return("enter a string");
    }
}
//console.log(reverse("It is a good day to have a good day"));


// 9. Write a function that takes a number and returns the factorial of a number. The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. Test your input on a few numbers, including negative numbers.

function factorial(num) {
    /* when passed something other than a variable of type number, the user is prompted to enter a valid number */
    if(typeof num === "number") {
        var runningTotal = num;
        for(var i = num; i > 1; i--) {
            runningTotal = runningTotal*(i-1)
        }
        return(runningTotal);
    }
    else {
        return("enter a number");
    }
}
//console.log(factorial(5));


// 10. Write a function that takes a phrase as a string, and returns the longest word in that phrase. If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.

function length(phrase) {
    /* when passed something other than a variable of type string, the user is prompted to enter a valid string */
    if(typeof phrase === "string") {
        var wordArray = phrase.split(" ");
        var wordArrayLength = wordArray.length; // get length of array to itterate over
        var longest = " ";
        for(var i = 0; i < wordArrayLength; i++) {
            var current = (wordArray[i]); // set value of current to each element in the array
            if(current.length > longest.length) {
                longest = current; // compate longest stored string with current string and replace if longer
            }
        }
        return longest;
    }
    else {
        return("enter a phrase");
    }
}
//console.log(length("It is a good day to have a really good day"));


// 11. Write a function that takes a phrase, and returns the same phrase with every word capitalized. For example, if you pass your function "hello world", it should return "Hello World" and if you pass it "HELLO WORLD" or even "HeLLo WoRLD", it will also return "Hello World". Test your function of a few inputs.

function capitalisation(phrase) {
    /* when passed something other than a variable of type string, the user is prompted to enter a valid string */
    if(typeof phrase === "string") {

        var wordArray = phrase.toLowerCase().split(" "); // maker whole string lowercase and split into array
        
        for(var i = 0; i < wordArray.length; i++) {
            // set value of current to each element in the array with the first character in the string changed to uppercase
            wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].substring(1); 
        }
        return wordArray.join(" ");
    }
    else {
        return("enter a phrase");
    }
}
console.log(capitalisation("It IS a gOOd day to have  rEally good day"));