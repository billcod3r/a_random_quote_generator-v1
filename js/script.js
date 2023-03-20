/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Array containing Quotes Objects

const quotes = [
{
  quote:'Your chances of success in any undertaking can always be measured by your belief in yourself.',
  source: 'Robert Collier'
},
{
  quote:'To live is the rarest thing in the world. Most people exist, that is all',
  source: 'Oscar Wilde',
  year: "1891"
},
{
  quote:'Even if we don\'t have the power to choose where we come from, we can still choose where we go from there.',
  source: 'Stephen Chbosky'    
},
{
  quote:'I was never afraid of failure; for I would sooner fail than not be among the greatest.',
  source: 'John Keats',
  citation: " Keats: I was never afraid of failure Letter"
},
{
  quote:'If you don\'t have time to read, you don\'t have time (or the tools) to write. Simple as that.',
  source: 'Stephen King',
},
{
  quote:'Do not lose hold of your dreams or aspirations. For if you do, you may still exist but you have ceased to live.',
  source: 'Henry David Thoreau',
  tag: '#SelfHelp, #Motivation, #Philosophical'
},
]


/***
 * `getRandomQuote` function
***/

// Function that generates a random quote

function getRandomQuote() {

  // randomNumber Variable contains a random number to be used to cycle through the set of quotes
  const randomNumber = Math.floor(Math.random() * (quotes.length));

  // return statement that return a quote object at random
  return quotes[randomNumber]

}


getRandomQuote();


/***
 * `printQuote` function
***/

function printQuote() {

// Variable to hold the random Quote returned from the function getRandomQuote()
  let randomQuote = getRandomQuote();

// html statement that will write our quote details in a paragraph tag to the DOM
  let html = ` <p class="quote"> ${randomQuote.quote} </p>
          <p class="source">${randomQuote.source}
`;

// If statement that will check if the quote object contains the citation key 
if (Object.keys(randomQuote).includes("citation")) {
// html string that will display the random quote citation
  html += `<span class='citation'> ${randomQuote.citation} </span>`;
};

// If statement that will check if the quote object contains the year key
if (Object.keys(randomQuote).includes("year")) {

// html string that will display the random quote's year value
  html += `<span class='year'>${randomQuote.year}</span>`;
};

// If statement that will check if the quote object contains the year key
if (Object.keys(randomQuote).includes("tag")) {

// html string that will display the random quote's tag value
  html += `<span class='tag'> Tags: ${randomQuote.tag} </span>`;
};

// Closing <p> tag
html += `</p>`;

// applying html string to the DOM
document.getElementById('quote-box').innerHTML = html;

}

// function that randomly generates a background color for the web page each time the submit button is clicked
function backgroundColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);

  var backGrdColor = "rgb(" + x + "," + y + "," + z + ")";

  document.body.style.background = backGrdColor; 

}

// function that updates the quote shown  on the page every 15 seconds

function timingFunction() {
  setInterval(printQuote, 15000)
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// Changes the background color of the page and the quote on each click of the "Show another quote" button
document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", backgroundColor, false);

// function that updates the quote shown  on the page every 15 seconds
timingFunction();
