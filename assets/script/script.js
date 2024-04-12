// Function to fetch user data from the Random User API
function fetchUserData() {
  fetch("https://randomuser.me/api/?results=10") // Fetch data for 10 users
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      // Extract necessary information for each user
      const users = data.results.map((user) => ({
        picture: user.picture.medium,
        name: `${user.name.first} ${user.name.last}`,
        city: user.location.city,
      }));

      // Display user profiles on the home page
      displayUserProfiles(users);
    })
    .catch((error) => console.error("Error fetching user data:", error));
}

// Function to display user profiles on the home page
function displayUserProfiles(users) {
  const connectionsContainer = document.querySelector(".connections");

  // Clear previous content
  connectionsContainer.innerHTML = "";

  // Create HTML elements for each user profile and append them to the container
  users.forEach((user) => {
    const profileDiv = document.createElement("div");
    profileDiv.classList.add("profile");

    const img = document.createElement("img");
    img.src = user.picture;
    img.alt = user.name;

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = user.name;

    const cityParagraph = document.createElement("p");
    cityParagraph.textContent = user.city;

    profileDiv.appendChild(img);
    profileDiv.appendChild(nameParagraph);
    profileDiv.appendChild(cityParagraph);

    connectionsContainer.appendChild(profileDiv);
  });
}

// Call the fetchUserData function when the page loads
window.addEventListener("load", fetchUserData);
