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
  