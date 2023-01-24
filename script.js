const img = document.querySelector("img");
const randomBtn = document.querySelector(".random-btn");
const searchBtn = document.querySelector(".search-btn");
const userInput = document.querySelector("input");
let userInputValue;

// randomBtn.addEventListener("click", displayGif);

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayGif();
});

function displayGif() {
  checkUserInput();
  fetchGif();
}

function checkUserInput() {
  userInputValue = userInput.value;
  if (userInputValue.length == 0) {
    alert("u didnt search for anything");
    userInputValue = "nothing";
  }
}

function fetchGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=YSQLiFX2EgmLBs1uwWmgWQ0t55FjvAGX&s=" +
      userInputValue,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log("User input value: " + userInputValue);
      img.src = "";
      img.src = response.data.images.original.url;
    });
}
