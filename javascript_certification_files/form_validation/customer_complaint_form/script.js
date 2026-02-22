const form = document.getElementById("form");

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const complaintsGroup = document.getElementById("complaints-group");
const complaintCheckboxes = document.querySelectorAll('input[name="complaint"]');
const complaintDescription = document.getElementById("complaint-description");
const otherComplaint = document.getElementById("other-complaint");

const solutionsGroup = document.getElementById("solutions-group");
const solutionRadios = document.querySelectorAll('input[name="solutions"]');
const solutionDescription = document.getElementById("solution-description");
const otherSolution = document.getElementById("other-solution");

const messageBox = document.getElementById("message-box");


// Validation Function


function validateForm() {

  const isFullNameValid = fullName.value.trim() !== "";

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

  const isOrderValid = /^2024\d{6}$/.test(orderNo.value);

  const isProductCodeValid =
    /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(productCode.value);

  const isQuantityValid = Number(quantity.value) > 0;

  const isComplaintChecked =
    Array.from(complaintCheckboxes).some(cb => cb.checked);

  let isComplaintDescriptionValid = true;
  if (otherComplaint.checked) {
    isComplaintDescriptionValid =
      complaintDescription.value.trim().length >= 20;
  }

  const isSolutionSelected =
    Array.from(solutionRadios).some(r => r.checked);

  let isSolutionDescriptionValid = true;
  if (otherSolution.checked) {
    isSolutionDescriptionValid =
      solutionDescription.value.trim().length >= 20;
  }

  return {
    "full-name": isFullNameValid,
    email: isEmailValid,
    "order-no": isOrderValid,
    "product-code": isProductCodeValid,
    quantity: isQuantityValid,
    "complaints-group": isComplaintChecked,
    "complaint-description": isComplaintDescriptionValid,
    "solutions-group": isSolutionSelected,
    "solution-description": isSolutionDescriptionValid
  };
}


// Check if Form is Valid


function isValid(validationObj) {
  return Object.values(validationObj).every(value => value === true);
}


// Set Border Color

function setBorder(element, valid) {
  element.style.borderColor = valid ? "green" : "red";
}


// Change Event

form.addEventListener("change", () => {
  const validation = validateForm();

  setBorder(fullName, validation["full-name"]);
  setBorder(email, validation.email);
  setBorder(orderNo, validation["order-no"]);
  setBorder(productCode, validation["product-code"]);
  setBorder(quantity, validation.quantity);
  setBorder(complaintsGroup, validation["complaints-group"]);
  setBorder(complaintDescription, validation["complaint-description"]);
  setBorder(solutionsGroup, validation["solutions-group"]);
  setBorder(solutionDescription, validation["solution-description"]);
});


// Submit Event

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validation = validateForm();

  if (isValid(validation)) {
    messageBox.textContent = "Form submitted successfully!";
    messageBox.style.color = "green";
  } else {
    messageBox.textContent = "Please fix the errors in the form.";
    messageBox.style.color = "red";

    // Highlight all invalid fields
    setBorder(fullName, validation["full-name"]);
    setBorder(email, validation.email);
    setBorder(orderNo, validation["order-no"]);
    setBorder(productCode, validation["product-code"]);
    setBorder(quantity, validation.quantity);
    setBorder(complaintsGroup, validation["complaints-group"]);
    setBorder(complaintDescription, validation["complaint-description"]);
    setBorder(solutionsGroup, validation["solutions-group"]);
    setBorder(solutionDescription, validation["solution-description"]);
  }
});
