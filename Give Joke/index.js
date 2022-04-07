// run `node index.js` in the terminal



let giveJoke = require('give-me-a-joke');
giveJoke.getRandomDadJoke (function(joke) {
   console.log(joke);
})

