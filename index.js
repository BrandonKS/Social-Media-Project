










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

//function to make form submission do stuff
function submitButton(event) {
  /// this is a function to pull local data not from api
  console.log("button clicked");
  const title = document.getElementById("news-title");
  const content = document.getElementById("news-content");
  const URL = document.getElementById("news-URL");

  let newItems = {
    title: title.value,
    content: content.value,
    URL: URL.value,
  };
  news.push(newItems);
}


// Array of pre-stored image URLs
const images = [
    { url: 'Assets/Images/guittar add with flavor.jpg' },
    { url: 'Assets/Images/blowing fire.jpg' },
    { url: 'Assets/Images/frozen man.jpg' },
    // Add more image URLs as needed
  ];
  
  
  
