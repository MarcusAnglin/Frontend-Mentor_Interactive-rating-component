const ratings = document.querySelectorAll(".number-rating");
const submitBtn = document.querySelector(".submit-btn");
const rateContainer = document.querySelector(".prompt-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const rateMessage = document.querySelector(".selected-rating");

const ratingList = [...ratings];
let rateChoice;

// this function handles the click that happens on the rating.
const handleClick = (choice, event) => {
  // go through the current rating list and remove any active styling
  ratingList.map((rating) =>
    rating.parentElement.classList.remove("active-rating")
  );

  // store the rating clicked on and set active styling to the number clicked
  rateChoice = event.currentTarget.dataset.rating;
  choice.parentElement.classList.add("active-rating");
};

// go through the list of ratings and add a click event listener to the parent
// container of the number selected
ratingList.map((rating) => {
  rating.parentElement.addEventListener("click", (event) =>
    handleClick(rating, event)
  );
});

// adds a click event listener to the submit button
submitBtn.addEventListener("click", () => {
  // do nothing if they have not seleted a rating yet
  if (rateChoice !== undefined) {
    // set the confirmation message of the thankyou container with their rating
    rateMessage.textContent = `you selected ${rateChoice} out of 5`;
    // remove the prompt display and enable the thank you display
    rateContainer.classList.remove("view");
    thankYouContainer.classList.add("view");
  }
});
