function checkLogin() {
    const email = document.getElementById('collegeId').value;
    if (email.endsWith("@yourcollege.edu")) {
        alert("Login Successful!");
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('userWelcome').style.display = 'block';
        localStorage.setItem("isLoggedIn", "true"); // Session save karne ke liye
    } else {
        alert("Access Denied! Use your official college ID only.");
    }
}