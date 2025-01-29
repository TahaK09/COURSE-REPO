// Pop-up form for adding recommendation
function showForm() {
  document.getElementById("recommendation-popup").style.display = "block";
}

// Close the pop-up when the form is submitted
document
  .getElementById("recommendation-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Add the new recommendation to the list
    const newRecommendation =
      document.getElementById("new-recommendation").value;
    const list = document.getElementById("recommendations-list");
    const newItem = document.createElement("li");
    newItem.textContent = newRecommendation;
    list.appendChild(newItem);

    // Show the confirmation message
    alert("Recommendation submitted!");

    // Close the pop-up
    document.getElementById("recommendation-popup").style.display = "none";
  });
