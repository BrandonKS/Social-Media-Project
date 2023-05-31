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

setInterval(() => {
  //"manage data" from module 4 slide 57 example,  to set a delay of 0.5 seconds
  const list = document.querySelector("#card-list");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
  // console.log("pulling"); //console.log here to show function working inside the browser console.
  news.map((item) => {
    addCard(item);
  });
}, 1000); // sets pull for "news" data object to display Posts mimicking a live feed update

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
    document.getElementById('randomImage').src = randomImage;
  }
  
  // Call setRandomImage function when the page finishes loading
  window.addEventListener('load', setRandomImage);