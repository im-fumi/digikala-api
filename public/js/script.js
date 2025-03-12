document.addEventListener("DOMContentLoaded", () => {
  fetch("https://im-fumi.github.io/digikala-api/public/db.json") // Fetch the JSON file from the public folder
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => {
      console.log(data); // Check if data loads correctly
      displayData(data); // Call function to display the data
    })
    .catch((error) => console.error("Error loading JSON:", error));
});

function displayData(data) {
  const container = document.getElementById("top"); // Get a div to display data
  container.innerHTML = <pre>${JSON.stringify(data, null, 2)}</pre>; // Display formatted JSON
}
