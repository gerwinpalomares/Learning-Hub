function explore(){
    window.location.href="explore.html";
}

const categoryCards = document.querySelectorAll(".category-card");
const modal = document.getElementById("modal");

// Attach click event listeners to each category card
categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    modal.classList.remove("hidden"); // Show modal when card is clicked
  });
});
function openModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('hidden');
}


// Close modal function
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById("email").value; // Get the value of the email input
    const password = document.getElementById("password").value; // Get the value of the password input

    if (email === "gerwin@gege.com" && password === "gerwin") {
        window.location.href = "home.html"; // Redirect to home.html
    } else {
        alert("Invalid email or password!"); // Show error if the credentials are incorrect
    }
}

function logout(){
  window.location.href = "index.html";
}
function signupmodal() {
  const modal = document.getElementById("sign-upmodal");
  modal.classList.remove('hidden');
}
function sucloseModal() {
  modal.classList.add("hidden");
}
function sucloseModal() {
  // Reference the modal by its ID
  const modal = document.getElementById("sign-upmodal");
  
  // Add the "hidden" class to hide the modal
  modal.classList.add("hidden");
}


// Validate the form and proceed
function SignUp() {
  // Get all input fields
  const name = document.getElementById("name").value.trim();
  const Mname = document.getElementById("Mname").value.trim();
  const Lname = document.getElementById("Lname").value.trim();
  const email = document.getElementById("Eemail").value.trim();
  const password = document.getElementById("Ppassword").value.trim();

  // Check if any field is empty
  if (!name || !Mname || !Lname || !email || !password) {
    alert("Please fill out all fields before proceeding!");
    return;
  }

  // All fields are filled, navigate to home.html
  window.location.href = "home.html";
}

