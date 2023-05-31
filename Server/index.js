const exp = require('constants');
const express = require('express');  //Says hey app you need this.... if JS is linked properly on html so index.js file properly

const app = express(); //takes functions from express package to use them inside app

const port = 3000 //defines port, this can be all sorts of numbers. Remember to ask Robert about min and max number here. I know there was a max port number you could use but it's probably hardware specific i think??

app.use(express.json()); // this is telling the app to pars json data without prompts.
// for the sake of remembering what parsing is noting the definition: parsing is process of analyzing a string of characters or a data structure
// according to a set of rules or grammar to determine its sturcuture and extract relevant info from it. It incolves breaking down the input into smaller components and 
// understanding their relations and meanings











  
  
  
