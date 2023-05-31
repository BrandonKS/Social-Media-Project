const { addPost } = require("../controllers/feedController.js");
const postsData = require("../data/postsData.js"); // this pulls the data from postsData file inside data folder. The object array. // is this link the same as Server/data/postsData.js???? ask robert. I have been using relative path to mark these reference links and need to know if thats an accurate way 100% of the time
const posts = postsData.posts; // this part pulls the actual posts property from the imported object and assigns them to a constant variable calls posts

// This is example Library pretending to be our backend database that we would be accessing
class Database {
  constructor() {
    // constructor function executes when a new instance of Database is created.
    this.id = Date.now(); // assigns a time stamp to the id property of new Database
  }

  #log = (value) => {
    //privatizes method log so it's only able to be used inside the class Database
    console.log(`[Database: ${this.id}: ${value}]`); //logs message to console with id timestamp the properties of the object and input "value"
  };

  //returns all the posts to requester when using the route getPosts from feedController
  posts() {
    this.#log("all");
    return postsData;
  }

  //similar to line 15-17 except this is used when pulling a specific id and then privatizes it using the # before log on line 22... or secures it...
  postsById(id) {
    this.#log(id);
    const result = posts.filter((post) => {
      if (post.id === id) {
        return post;
      }
    });
    return result;
  }
  addPost(data) {
    this.#log(data.title);
    const newId = `${posts.length + 1}`;

    const newURL = data.URL ? data.URL : "Assets/Images/placeholder img.png"; // the ? makes this ternary.. aka if data.URL exists then use first codeblock if not then use placeholder img from assets folder

    const newPost = {
      id: newId, //sets id to newId
      ...data, //spread operator, takes old data's key/value pairs and makes them into a new object
      URL: newURL, //add new URL img
    };

    posts.push(newPost); //pushes newPost into the array
    return post.length; //tells you length of the new array after newPost pushed into it.
  }
} //NOTE TO SELF: nothing past here or you're outside the database class and it wont work with the exception of the module export below

module.exports = Database;
