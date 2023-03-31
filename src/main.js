   
$(document).ready(() => {
  //variables
  const $newQuote = $('#new-quote');
  const $quoteText = $('#text');
  const $authorText = $('#author');
//quote variables
const $quoteOne = "All that we are is the result of what we have thought.";
const $quoteTwo = "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.";
const $quoteThree = "Our truest life is when we are in dreams awake.";
const $quoteFour = "Whether you think you can, or you think you can't, you're right.";
const $quoteFive = "When I let go of what I am, I become what I might be.";
const $quoteSix = "Muddy water is best cleared by leaving it alone.";
const $quoteSeven = "When the whole world is silent, even one voice becomes powerful.";
const $quoteEight = "If you obey all the rules, you miss all the fun.";
const $quoteNine =  "Letting go gives us freedom, and freedom is the only condition for happiness. If, in our heart, we still cling to anything - anger, anxiety, or possessions - we cannot be free.";
//author variables
const $authorOne = "Buddha";
const $authorTwo = "Thomas Jefferson";
const $authorThree = "Henry David Thoreau";
const $authorFour = "Henry Ford";
const $authorFive = "Lao Tzu";
const $authorSix = "Alan Watts";
const $authorSeven = "Malala Yousafzai";
const $authorEight = "Katherine Hepburn";
const $authorNine = "Thich Nhat Hanh"; 

//quotes Array
const $quotes = [$quoteOne, $quoteTwo, $quoteThree, $quoteFour, $quoteFive, $quoteSix, $quoteSeven, $quoteEight, $quoteNine];
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
      case $quoteSeven:
        var $author = $authorSeven;
        break;
      case $quoteEight:
        var $author = $authorEight;
        break;
      case $quoteNine:
        var $author = $authorNine;
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

