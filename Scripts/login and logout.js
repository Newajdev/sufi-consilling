// login Function//

// function signin(){
//     confirm.log('i am sign in')
// }


function login() {
    // Predefined username and password for demonstration (replace with real logic)
    const validUsername = "admin";
    const validPassword = "123";

    // Get username and password input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    window.location.href = 'admin.html'; 

    // Simple validation
    if (username === validUsername && password === validPassword) {
        
    } else {
        alert("Invalid username or password. Please try again.");
    }
}