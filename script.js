function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("message").innerText = "Login successful!";
  } else {
    document.getElementById("message").innerText = "Wrong username or password";
  }
}
