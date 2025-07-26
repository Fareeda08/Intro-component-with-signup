const inputs = document.querySelectorAll("form .info");

const signUpForm = document.querySelector("form");

let inputValue = "";
signUpForm.addEventListener("submit", (form) => {
  form.preventDefault();

  inputs.forEach((input) => {
    inputValue = input.value;

    let errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");

    if (inputValue === "") {
      input.classList.add("error");
      input.placeholder = "";
      const parent = input.closest("div");
      const existingExistingError = parent.querySelector("p");

      if (existingExistingError) {
        existingExistingError.remove();
        parent.style.opacity = "0.5";

        setTimeout(() => {
          parent.style.opacity = "1";
        }, 500);
      }

      if (input.id === "fname") {
        errorMessage.textContent = "First Name cannot be empty";
        parent.appendChild(errorMessage);
      } else if (input.id === "lname") {
        errorMessage.textContent = "Last Name cannot be empty";
        parent.appendChild(errorMessage);
      } else if (input.id === "mail") {
        errorMessage.textContent = "Looks like this is not an email";
        parent.appendChild(errorMessage);
        input.placeholder = "email@example/com";
      } else if (input.id === "password") {
        errorMessage.textContent = "Password cannot be empty";
        parent.appendChild(errorMessage);
      } else {
        alert("Type shii");
      }
    }
  });

  if (inputValue !== "") {
    alert("Thank you for trying out this website");
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", (ev) => {
    inputValue = ev.target.value;

    if (inputValue !== "") {
      input.classList.remove("error");
      const closestErrorMessage = input.closest("div").querySelector("p");
      if (closestErrorMessage) {
        closestErrorMessage.remove();
      }
    } else {
      console.log("No panic, na me");
    }
  });
});
