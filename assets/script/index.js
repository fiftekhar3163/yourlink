// Set the username and password in localStorage
localStorage.setItem("username", "user123");
localStorage.setItem("password", "12345");
// Function to handle form submission
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve stored username and password from localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Compare provided credentials with stored data
    if (username === storedUsername && password === storedPassword) {
      // Redirect to the home page
      window.location.href = "home.html";
    } else {
      // Display error message
      document.getElementById("error-message").textContent =
        "Incorrect username or password";
    }
  });
