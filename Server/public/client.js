// const { response } = require("express");

const data = [
  {
    //object syntax
    title: "card-title", //properties of object
    content: "lkasdgl",
    URL: "http://via.placeholder.com/300x200",
    alt: "image placeholder 300x200",
  },
  {
    //object syntax
    title: "card-title", //properties of object
    content: "lkasdgl",
    URL: "http://via.placeholder.com/300x200",
    alt: "image placeholder 300x200",
  },
  {
    //object syntax
    title: "card-title", //properties of object
    content: "lkasdgl",
    URL: "http://via.placeholder.com/300x200",
    alt: "image placeholder 300x200",
  },
];

// setInterval(() => {
//   //"manage data" from module 4 slide 57 example,  to set a delay of 0.5 seconds
//   const list = document.querySelector("#card-list");
//   while (list.hasChildNodes()) {
//     list.removeChild(list.firstChild);
//   }
//   // console.log("pulling"); //console.log here to show function working inside the browser console.
//   news.map((item) => {
//     addCard(item);
//   });
// }, 1000); // sets pull for "news" data object to display Posts mimicking a live feed update

let news = [
  //local data object created to bypass needing a working api
  {
    id: 1,
    title: "Help!! Trolls in the Dungeon!!!!",
    content: "Really Just thought You should know...",
    URL: "Assets/Images/troll in dungeon.jpg",
  },
  {
    id: 2,
    title: "New DND party betrays logic for $$$$",
    content:
      "Contrary to popular belief this rag tag party of random strangers with little to no reason to be banded together strikes GOLD this weekend at the box offices!! Despite backlash regarding.......",
    URL: "Assets/Images/dnd party.png",
  },
  {
    id: 3,
    title: "Missing?!? Has anyone seen my Cat companion MeatBAll?",
    content:
      " He is a tricky feline that keeps sneaking out to party with the neighbors cats. He answers to Sir Meatball or The Dark Knight and will be found near most food sources. Any inform.......",
    URL: "Assets/Icons/Orange Tank Cat.jpg",
  },
];

// Function to generate a random index within the range of the images array length
// All of this is to generate a random add inside the add box place holder. its bugging out nodemon however so gots to go.
function getRandomIndex() {
  return Math.floor(Math.random() * images.length);
}

// Function to set a random image
function setRandomImage() {
  const randomIndex = getRandomIndex();
  const randomImage = images[randomIndex].url;
  document.getElementById("randomImage").src = randomImage;
}

// Call setRandomImage function when the page finishes loading
window.addEventListener("load", setRandomImage);

// Array of pre-stored image URLs
const images = [
  { url: "Assets/Images/guittar add with flavor.jpg" },
  { url: "Assets/Images/blowing fire.jpg" },
  { url: "Assets/Images/frozen man.jpg" },
  // Add more image URLs as needed
];

// let cardsData = [];
// function getData() {
//   //hits api in console on browser such as star wars api from example in class or cats api
//   fetch("https://jsonplaceholder.typicode.com/posts?_limit=10") // adding in ?_limit=10 sets max output at 10 response items
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);

//       json.map((item) => {
//         addCard(item);
//       });
//     }); //takes parsed response and assigns to json
// }

// getData(); //calls function

// function to make form submission do stuff
// function submitButton(event) {
//   /// this is a function to pull local data not from api.
//   console.log("button clicked");
//   const title = document.getElementById("news-title");
//   const content = document.getElementById("news-content");
//   const URL = document.getElementById("news-URL");

//   let newItems = {
//     title: title.value,
//     content: content.value,
//     URL: URL.value,
//   };
//   news.push(newItems);
// }

// function for sending new post to "database" that is then collected via the fetch call below
function createPost() {
  //sets up variables that grab values from the form submission
  const title = document.getElementById("news-title");
  const content = document.getElementById("content");
  const URL = document.getElementById("news-URL");
  

  //creates a new object and assigns the new element values to keys. AKA key:value pairing
  const postData = {
    title: title.value,
    content: content.value, //////PRETTY SURE THIS IS THE ISSUE HERE/////
    URL: URL.value,
  }

  //sends this to backend using a fetch method
  fetch(`http://localhost:3000/feed/posts/add`, {
    method: "POST", // must specify what type of method to use as we are sending data.
    body: JSON.stringify(postData), // converts to JSON >>> attaches data to request body
    headers: {
      "Content-Type": "application/json; charset=UTF-8", // not necessary in our case because we are directing to a localish database BUT this is good practice for using a database later on.
    },
  }) //the smooth bracket MUST go here at the end as the fetch call needs to include the URL AND the options object
    .then((response) => response.json()) //This part is waiting for a response from server for first part.

    .then((data) => {
      console.log(data);

      // this will direct user to main page to check success of post
      if (data.result) {
        console.log(data.result);
        // location.assign("http://localhost:3000/"); // this navigates user to local host address.
      } else if (data.error) {
        console.log(data.error);
        const errorElement = document.getElementById("error");
        errorElement.innerHTML = data.error;
      }
    })
    .catch((error) => console.error(error)); //this logs error for user if there is one. It also doesn't redirect user to main page linked above if an error is caught
}

// function add(item) {
//   const template = document
//     .getElementById("card-template")
//     .content.cloneNode(true);

//   template.querySelector(".card-title").innerText = item.title;
//   template.querySelector(".card-text").innerText = item.content;
//   template.querySelector(".card-image").src = item.imgURL;
//   document.querySelector("#card-list").appendChild(template);
// }

//adds new card when form is submitted on main page. Can also tie this to the submit button on new post page I guess
function addCard(card) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = card.title;
  template.querySelector(".card-text").innerText = card.content;
  template.querySelector(".card-img").src = card.URL;

  document.querySelector("#card-list").appendChild(template);
}

if ("content" in document.createElement("template")) {
  fetch(`http://localhost:3000/feed/posts`)
    .then((response) => response.json()) ///response.json() is parsing response into json
    .then((data) => {
      console.log(data.result.posts);
      data.result.posts.map((item) => {
        addCard(item);
      });
    });
}
