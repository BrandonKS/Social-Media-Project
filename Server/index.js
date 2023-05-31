const exp = require('constants');
const express = require('express');  //Says hey app you need this.... if JS is linked properly on html so index.js file properly

const feedRoute = require(`./routes/feedRoute.js`) // pulls or imports the feed route in routes folder telling data where to go

const app = express(); //takes functions from express package to use them inside app

const port = 3000 //defines port, this can be all sorts of numbers. Remember to ask Robert about min and max number here. I know there was a max port number you could use but it's probably hardware specific i think??

app.use(express.json()); // this is telling the app to pars json data without prompts.
// for the sake of remembering what parsing is noting the definition: parsing is process of analyzing a string of characters or a data structure
// according to a set of rules or grammar to determine its structure and extract relevant info from it. It involves breaking down the input into smaller components and 
// understanding their relations and meanings

//DEFINE ENDPOINTS HERE

app.use("/", express.static('public')) //need expanded explanation of this part using the word serves. "Serves any files located in the /public folder". I am assuming this means allows open access to the public folders file contents instead of keeping them #private

app.use("/feed", feedRoute); //this is for posts from live feed card submissions pointed at localhost:3000/feed to go to this router

app.listen(port, ()=> {
  console.log(`Social Media App listening at http://localhost:${port}`) // using backticks here creates a console log that notates what port is being used and displays in console 
})








  
  
  
