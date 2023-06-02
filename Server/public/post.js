function createPost() {
  //get element values from form
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const URL = document.getElementById("URL");

  //create a new object and assign values to keys
  const postData = {
    title: title.value,
    content: content.value,
    URL: URL.value,
  };

  //send it!
  fetch(`http://localhost:3000/feed/posts/add`, {
    method: "POST", //since we are sending data, we need to specify the method
    body: JSON.stringify(postData), //this attaches our data to the request body (after converting it to JSON)
    headers: {
      "Content-type": "application/json; charset=UTF-8", //setting the headers is good practice
    },
  })
    .then((response) => response.json()) //wait for the response from the server
    .then((data) => {
      console.log(data);
      //we can redirect the user to the the main page if we want to, check if we have a successful result
      if(data.result){
        console.log(data.result)
        location.assign("http://localhost:3000/")  //this tells the browser to navigate to this URL

      }else if(data.error){ //if there is an error, show the error in the HTML
        console.log(data.error)
        const errorElement = document.getElementById("error")
        errorElement.innerHTML = data.error
      }
    })
    .catch((error) => console.error(error)); //no need to redirect if there is an error, but we SHOULD display an error message to the user
}