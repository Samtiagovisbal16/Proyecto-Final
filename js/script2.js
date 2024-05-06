document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // You can perform validation here
  
    // Dummy check for demo purposes
    if (email === "user@example.com" && password === "password123") {
      alert("Login successful!");
      // Redirect to dashboard or perform other actions
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
  
  document.getElementById("registerLink").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Redirect to registration page"); // You can redirect to the registration page
  });
  
  document.getElementById("forgotPasswordLink").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Redirect to forgot password page"); // You can redirect to the forgot password page
  });
  