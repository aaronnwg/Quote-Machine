
//quote variables
const quoteOne = '1';
const quoteTwo = '2';
const quoteThree = '3';
const quoteFour = '4';
const quoteFive = '5';
const quoteSix = '6';

//colors
var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  

//botton variable
const newQuote = document.getElementById('new-quote');

//quotes array
const quotes = [quoteOne, quoteTwo, quoteThree, quoteFour, quoteFive, quoteSix];

const quoteFunction = () => {
    //randomize quotes
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    //randomize colors
    //let color = Math.floor(Math.random() * colors.length);

    document.getElementById('text').innerHTML = randomQuote;
     /* $(document).ready(function() {
        $("#quote-box").addClass("animated bounce");
      })
   
    */   }
newQuote.onclick = quoteFunction;

$(document).ready(() => {
  const $newQuote = $('#new-quote');
  const $quoteBox = $('#quote-box');

  $newQuote.on('click', () => {
    $quoteBox.css('color', 'purple');
  })
})

/* $('html body').animate(
        {
          backgroundColor: colors[color],
          color: colors[color]
        },
        1000
      );
      $("#newQuote").animate(
        {
          backgroundColor: colors[color]
        },
        1000
      );
      $("#newQuote").addClass("animated bounce");
    
    };
      $(document).ready(function() {
        $('html body').animate(
            {
              backgroundColor: colors[color],
              color: colors[color]
            },
            1000
          );
          $("#newQuote").animate(
            {
              backgroundColor: colors[color]
            },
            1000
          );
          $("#newQuote").addClass("animated bounce");
          });*/
