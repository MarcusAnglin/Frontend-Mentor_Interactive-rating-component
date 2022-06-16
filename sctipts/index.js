const ratingsContainer = document.querySelector(".rating-container");
const promptContainer = document.querySelector(".prompt-container");
const thanksContainer = document.querySelector(".thank-you-container");

const ratings = ratingsContainer.querySelectorAll(".icon-container");

const rateMessage = document.querySelector(".selected-rating");

const submitBtn = document.querySelector(".submit-btn");

const ratingList = [...ratings];
let rateChoice;

// this function handles the click that happens on the rating.
const handleClick = (choice, event) => {
  // go through the current rating list and remove any active styling
  ratingList.map((rating) => rating.classList.remove("active-rating"));

  // store the rating clicked on and set active styling to the number clicked
  rateChoice = event.currentTarget.dataset.rating;
  choice.classList.add("active-rating");
};

// go through the list of ratings and add a click event listener to the parent
// container of the number selected
ratingList.map((rating) => {
  rating.addEventListener("click", (event) => handleClick(rating, event));
});

// adds a click event listener to the submit button
submitBtn.addEventListener("click", () => {
  // do nothing if they have not seleted a rating yet
  if (rateChoice !== undefined) {
    // set the confirmation message of the thankyou container with their rating
    rateMessage.textContent = `you selected ${rateChoice} out of 5`;

    // remove the prompt display and enable the thank you display
    promptContainer.classList.remove("view");
    thanksContainer.classList.add("view");
  }
});
