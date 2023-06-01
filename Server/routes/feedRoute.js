const express = require('express')
const router = express.Router()

const feedController = require('../controllers/feedController') // importing feed controller into route so can add in allposts/postsbyid directionality

// THIS PORTION DISPLAYS ALL POSTS http://localhost:3000/feed/posts
router.get('/posts', (req, res) => {  // uses express router to pull data from /posts using request response. /posts is the endpoint
    // res.status(200).json( {result: 'List the users main feed'}) // removed later to include the routes for all posts and id post query 
    // this line above was mainly just to say "code did it status 200 a-ok" and then sends the pulled results as a string to send back as the "response body"
    feedController.getPosts(req,res) //traffic routing for grabbing all posts
    //Handles requests to '/posts' endpoint
})

//get a post by id http://localhost:3000/feed/posts/4

router.get('posts/:id', (req, res) => { // important to note that this takes in a DYNAMIC VALUE (id). Handles requests to '/posts:id' endpoint
    feedController.getPostById(req, res) //this uses the feedController and applies postByID method to run through backend
})

//route to create a post http://localhost:3000/feed/posts/add
router.post('/posts/add', (req, res) => {
    feedController.addPost(req, res)
})


router.delete('/posts/:id', (req, res) => {
    feedController.deletePost(req, res)
}); //set up to accommodate a delete posts route per Roberts Challenge

router.put('/posts/:id', (req, res) => {
    feedController.updatePost(req, res)
}) //this SHOULD work for updating the posts.
// router.put('/posts/:id', (req, res) => {    //says res not going anywhere here.........noting it out and scrapping for now. doing new code above this
//     const postId = req.params.id;
//     const newData = req.body
// });

module.exports = router //ALWAYS EXPORT THE ROUTE....... I cannot make this note bold and bigger or I would for personal frustration reasons alone.
//note to self without this export line your nodemon crashes. avoid this headache in the future.. lesson learned

// NOTE TO SELF...these routes are for get requests only not for post requests. Would need another route for that type of thing. Good example of this in the swagger exercise and the postman app introduction.
// SECOND NOTE TO SELF... express is a JS module that = framework for web apps in Node JS. Keyword it is a framework.. answers your question about it from earlier tonight