const Database = require("../libraries/databaseLib"); //says must use this "mock library" to pull data from

const db = new Database(); //creating new instance of Database and assigning it to variable db for naming simplicity

// controller function to gather all posts from databaseLib
const getPosts = (req, res) => {
  const data = db.posts(); // this is asking database for all posts and setting them to a new const called data
  res.status(200).json({ result: data }); //this is saying if request if good log status 200 for a-ok and then return the posts data
};

// separate function to call a specific post by its Id
const getPostById = (req, res) => {
  const id = req.params.id; //pulls the id parameter specifically from the posts data in order to filter through for a specific id and then sets = to new const called id
  const data = db.postsById(id); // sets data = database info for the specif id that was called on

  if (data.length > 0) {
    //this if statement says if id matches (aka true=1 which is > 0) then return that post's data as a result with server status 200 showing a-ok server request
    res.status(200).json({ result: data });
  } else {
    res.status(404).json({ error: `Post ${id} not found` }); // if id is false (aka false=0 which !> 0) then send 404 data not available and say post (id#) not found
  }
};

module.exports = {
    getPosts,
    getPostById
}
//Didn't leave this part out this time look at me go. 
// This time exporting 2 functions is necessary. 1st pulls all posts for a true livefeed feel and the 2nd pulls post by id using a search method idea
