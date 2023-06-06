const Database = require("../libraries/databaseLib"); //says must use this "mock library" to pull data from
// const { post } = require("../routes/feedRoute");

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

const addPost = (req, res) => {
  const data = req.body;
  // console.log(req.body)
  console.log("Add post", req.body); //controllers goal here is to check if properties are all accounted for before adding to database aka title content and URL

  if (data.title && data.content) {
    // translated: if both title and content have been filled in THEN... continue to next line of if statement
    const result = db.addPost(data); // set said title and content to new variable called result
    res
      .status(201)
      .json({ result: "Post created Successfully!", databaseLength: result });
  } else {
    console.log("Error! Invalid Post data!!"); // added to log error to console
    res.status(400).json({ error: "Incorrect post data!" });
  }
};

//challenge from Robert = delete posts //update posts
const deletePost = (req, res) => {
  const postId = req.params.id; //takes in id of a post and sets it to variable postId
  const result = db.deletePost(postId); //runs that id through delete post function clearing it if it does come back as found(200)

  if (result) {
    //if result comes back 200 showing id exists it clears it using const result above and then returns response below
    res.status(200).json({ result: "Post deleted successfully!" });
  } else {
    //if result comes back 404 showing id doesn't exist nothing happens except post not found returned
    res.status(404).json({ error: "Post not found!" });
  }
};
const updatePost = (req, res) => {
  const postId = req.params.id; //pulls id and sets to variable postId
  const newData = req.body; //pulls the params of data and sets it to variable newData
  console.log("Update post", postId, newData); // adds update context to console in browser

  if (newData.title && newData.content) {
    const result = db.updatePost(postId, newData);
    if (result) {
      res.status(201).json({ result: "Post updated successfully!" }); // 200 = good response 201=record updated
    } else {
      res.status(404).json({ error: "Post not found!" }); //404 = bad data
    }
  } else {
    res.status(400).json({ error: "Incorrect post Data!" }); // added this part for if user doesn't put in all the information needed for a post
  }
};

module.exports = {
  getPosts,
  getPostById,
  addPost,
  deletePost,
  updatePost,
};
//Didn't leave this part out this time look at me go.
// This time exporting 5 functions is necessary.
// getPosts pulls all posts from db
// getPostById pulls specific post
// addPost creates a new post for the db to StorageEvent
// deletePost deletes existing post by id
// updatePost updates current content of post by id
