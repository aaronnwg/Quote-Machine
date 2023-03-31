   
$(document).ready(() => {
  //variables
  const $newQuote = $('#new-quote');
  const $quoteText = $('#text');
  const $authorText = $('#author');
//quote variables
const $quoteOne = '1';
const $quoteTwo = '2';
const $quoteThree = '3';
const $quoteFour = '4';
const $quoteFive = '5';
const $quoteSix = '6';
//author variables
const $authorOne = 'one';
const $authorTwo = 'two';
const $authorThree = 'three';
const $authorFour = 'four';
const $authorFive = 'five';
const $authorSix = 'six';

//quotes Array
const $quotes = [$quoteOne, $quoteTwo, $quoteThree, $quoteFour, $quoteFive, $quoteSix];
  //handlers
  $newQuote.on('click', () => {
    //randomize quotes
    let $randomQuote = $quotes[Math.floor(Math.random() * $quotes.length)];
    //match quote to author
    switch($randomQuote) {
      case $quoteOne:
        var $author = $authorOne;
        break;
      case $quoteTwo:
        var $author = $authorTwo;
        break;
      case $quoteThree:
        var $author = $authorThree;
        break;
      case $quoteFour:
        var $author = $authorFour;
        break;
      case $quoteFive:
        var $author = $authorFive;
        break; 
      case $quoteSix:
        var $author = $authorSix;
        break;
      default:
        var $author = '';
    }
    //generate quote
    $quoteText.text($randomQuote);
    //generate author
    $authorText.text($author)
  })

})

