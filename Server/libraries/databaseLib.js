const postsData = require("../data/postsData.js")   // this pulls the data from postsData file inside data folder. The object array. // is this link the same as Server/data/postsData.js???? ask robert. I have been using relative path to mark these reference links and need to know if thats an accurate way 100% of the time
const posts = postsData.posts           // this part pulls the actual posts property from the imported object and assigns them to a constant variable calls posts

// This is example Library pretending to be our backend database that we would be accessing
class Database {
    constructor() {                     // constructor function executes when a new instance of Database is created. 
        this.id = Date.now()            // assigns a time stamp to the id property of new Database
    }

    #log = (value) => {         //privatizes method log so it's only able to be used inside the class Database
        console.log(`[Database: ${this.id}: ${value}]`)     //logs message to console with id timestamp the properties of the object and input "value"
    }
    
    //returns all the posts to requester when using the route getPosts from feedController
    posts(){
        this.#log("all")
        return postsData
    }

    //similar to line 15-17 except this is used when pulling a specific id and then privatizes it using the # before log on line 22... or secures it... 
    postsById(id) {
        this.#log(id)
        const result = posts.filter((post) => {
            if(post.id === id){
                return post
            }
        })
        return result
    }

}

module.exports = Database