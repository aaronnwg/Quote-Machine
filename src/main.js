
//quote variables
const quoteOne = '1';
const quoteTwo = '2';
const quoteThree = '3';
const quoteFour = '4';
const quoteFive = '5';
const quoteSix = '6';
//botton variable
const newQuote = document.getElementById('new-quote');

//quotes array
const quotes = [quoteOne, quoteTwo, quoteThree, quoteFour, quoteFive, quoteSix];

const quoteFunction = () => {
    //randomize quotes
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById('text').innerHTML = randomQuote;
}

newQuote.onclick = quoteFunction;