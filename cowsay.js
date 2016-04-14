/*The Cow Whisperer
------------------------------------------
Challenge: create a file called cowsay.js in your Cloud9 project. Running this file should output a cow saying a random fortune. This is reproducing the cowsay command-line app. Make sure to add/commit this file and push it to your GitHub. If the fortune is longer than 30 characters, you have to wrap it on a new line. For extra brownie points, wrap your fortune at the word level instead of the letter level. */

function cowSay(randQuote) {

    //print(randQuote);
    var asciiQuote =   [" _________________________",
                        "< " + randQuote + " >",
                        " ------------------------- "
                    ];

    // Split random quote into strings of less than 30 characters, wrapping at the word level
    var quoteArray = randQuote.split(" "); // split quote sting in to an array of words
    var chunk = ""; // declare variable to hold the growing string of < 30 characters
    var quoteSentenceArray = []; // declare array to push new ~30 char chunk strings to
    var elseLastRun = false;
    quoteArray.forEach(function(element) { // iterate through word array
        if(chunk.length + 1 + element.length <= 30) { // check if adding the next sting plus a space to the current chunk will make its length > 30 chars
            chunk = chunk + " " + element; // if the resulting string will be < 30 chars, add the current string to chunk
            elseLastRun = false;
            //console.log(chunk); // for debugging
        }
        else {
            quoteSentenceArray.push(chunk); // if the resulting string will be > 30 chars, push the current chunk to the new array and set chunk to the current string
            chunk = element;
            elseLastRun = true;
            //console.log(chunk); // for debugging
        }
    });
    quoteSentenceArray.push(chunk);
    //return quoteSentenceArray.join("\n");

    var asciiCow = ["        \\   ^__^",
                    "         \\  (oo)\\_______",
                     "            (__)\\       )\\/\\ ",
                     "                ||----w |",
                     "                ||     ||"
                ];
    return quoteSentenceArray.join("\n") + "\n" + asciiCow.join("\n");
}

function randomQuote(randNum) { // Generate random quote
    var quotes = [
        "Happiness is a method of life, not a destination",
        "Dont't cry because it's over, smile because it happened",
        "Be yourself, everyone else is already taken",
        "You only live once, but if you do it right, once is enough",
        "Insanity is doing the same thing, over and over again, but expecting different results",
        "Life is what happens to you while you're busy making other plans",
        "I have not failed. I've just found 10,000 ways that won't work",
        "I solemnly swear that I am up to no good",
        "For every minute you are angry you lose sixty seconds of happiness",
        "If you can't explain it to a six year old, you don't understand it yourself"
    ];
    return quotes[randNum];
}

console.log(cowSay(randomQuote(Math.floor(Math.random() * 10)))); // Pass output of randomQuote to cowSay function