const express = require('express')
const router = express.Router()

// THIS PORTION DISPLAYS ALL POSTS
router.get('/posts', (req, res) => {  // uses express router to pull data from /posts using request response. /posts is the endpoint
    res.status(200).json( {result: 'List the users main feed'}) // this is mainly just to say "code did it status 200 a-ok" and then sends the pulled results as a string to send back as the "response body"
})

module.exports = router //ALWAYS EXPORT THE ROUTE....... I cannot make this note bold and bigger or I would for personal frustration reasons alone.
//note to self without this export line your nodemon crashes. avoid this headache in the future.. lesson learned