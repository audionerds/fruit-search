document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#fruit"); // Select the input element with the ID "fruit"
  input.value = ""; // Clear the input field's value
});

const input = document.querySelector("#fruit"); // Select the input element with the ID "fruit" and assign it to the variable 'input'
const suggestions = document.querySelector(".suggestions ul"); // Select the <ul> element inside the element with the class "suggestions" and assign it to the variable 'suggestions'

const fruit = [
  "Apple 🍎",
  "Apricot",
  "Avocado 🥑",
  "Banana 🍌",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry 🫐",
  "Boysenberry",
  "Currant",
  "Cherry 🍒",
  "Coconut 🥥",
  "Cranberry",
  "Cucumber",
  "Custard apple 🍏",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape 🍇",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit 🥝",
  "Kumquat",
  "Lemon 🍋",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango 🥭",
  "Mangosteen",
  "Marionberry",
  "Melon 🍈",
  "Cantaloupe 🍈",
  "Honeydew 🍈",
  "Watermelon 🍉",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive 🫒",
  "Orange 🍊",
  "Clementine 🍊",
  "Mandarine 🍊",
  "Tangerine 🍊",
  "Papaya",
  "Passionfruit",
  "Peach 🍑",
  "Pear 🍐",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple 🍍",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry 🍓",
  "Tamarillo",
  "Tamarind",
  "Yuzu 🍋",
]; //array of fruits to be used as suggestions

function search(str) {
  // Check if the search string is empty
  if (str.length === 0) {
    console.log("Search string is empty"); // Log a message indicating the search string is empty
    return []; // Return an empty array since there are no results
  }
  const filteredResults = fruit.filter((item) =>
    item.toLowerCase().includes(str.toLowerCase())
  ); // Filter the 'fruit' array to include only the elements matching the search query then converts the current fruit name to lowercase and check if it includes the query string
  console.log("Filtered results:", filteredResults); // Log the filtered results
  return filteredResults; // Return the filtered results
}

function searchHandler(e) {
  const inputVal = e.target.value; // Get the value from the event target (input field)
  console.log("Input value:", inputVal); // Log the input value to the console for debugging purposes
  const results = search(inputVal); // Call the search function with the input value and store the results
  showSuggestions(results, inputVal); // Call the showSuggestions function to display the search results
}

function showSuggestions(results, _inputVal) {
  // Select the <ul> element inside the element with the class "suggestions"
  const suggestions = document.querySelector(".suggestions ul");

  // Check if the suggestions element exists
  if (!suggestions) {
    console.error("Suggestions element not found"); // Log an error message if the suggestions element is not found
    return; // Exit the function early if the suggestions element is not found
  }
  suggestions.innerHTML = ""; //clear previous suggestions

  // Check if there are any results to display
  if (results.length > 0) {
    results.forEach((result) => {
      // Iterate over each result
      const li = document.createElement("li"); // Create a new li for each result
      li.textContent = result; // Set the text content of the li to the result
      li.classList.add("suggestion-item"); // Add the class "suggestion-item" to the li
      suggestions.appendChild(li); // Append the li to the suggestions ul
    });
    suggestions.style.display = "block"; // Display the suggestions element by setting its display style to "block"
  } else {
    hideSuggestions(); // Call the hideSuggestions function if there are no results to display
  }
}

function hideSuggestions() {
  const suggestionsList = document.querySelector(".suggestions ul"); // Select the <ul> element inside the element with the class "suggestions"

  suggestionsList.style.display = "none"; // Hide the suggestions list by setting its display style to "none"
}

function useSuggestion(e) {
  const searchBar = document.getElementById("fruit"); // Get the input element with the ID "fruit"
  searchBar.value = e.target.textContent; // Set the value of the search bar to the text content of the clicked suggestion
  hideSuggestions(); // Hide the suggestions list
}

input.addEventListener("input", searchHandler); // Add an event listener to the input element to handle the "input" event
document.querySelector(".suggestions").addEventListener("click", useSuggestion); // Add an event listener to the element with the class "suggestions" to handle the "click" event
