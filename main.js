const form = document.querySelector("form");
let name = form.querySelector(".name");
let last_name = form.querySelector(".last-name");
let email = form.querySelector(".email");
let message = form.querySelector(".message");
let checkbox = form.querySelector(".checkbox");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function isAlpha(str) {
  return /^[\p{L}]+$/u.test(str.trim());
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const submit_successful = document.querySelector(".submit-successful");
  submit_successful.classList.remove("active");

  form
    .querySelectorAll(".active")
    .forEach((el) => el.classList.remove("active"));
  let hasError = false;
  if (!name.value || !isAlpha(name.value)) {
    const name_required = form.querySelector(".name-required");
    name_required.classList.add("active");
    name.setAttribute("aria-invalid", "true");
    hasError = true;
  } else {
    name.setAttribute("aria-invalid", "false");
  }
  if (!last_name.value || !isAlpha(last_name.value)) {
    const last_name_required = form.querySelector(".last-name-required");
    last_name_required.classList.add("active");
    last_name.setAttribute("aria-invalid", "true");
    hasError = true;
  } else {
    last_name.setAttribute("aria-invalid", "false");
  }
  if (email.value === "") {
    const email_required = form.querySelector(".email-required");
    email_required.classList.add("active");
    email.setAttribute("aria-invalid", "true");
    hasError = true;
  } else if (!validateEmail(email.value)) {
    const email_error = form.querySelector(".email-error");
    email_error.classList.add("active");
    email.setAttribute("aria-invalid", "true");
    hasError = true;
  } else {
    email.setAttribute("aria-invalid", "false");
  }

  const radios = form.querySelectorAll('input[name="query-type"]');
  let radioChecked = false;
  radios.forEach((radio) => {
    if (radio.checked) radioChecked = true;
  });
  if (!radioChecked) {
    const radio_required = form.querySelector(".radio-required");
    radio_required.classList.add("active");
    hasError = true;
  }

  if (message.value === "") {
    const message_required = form.querySelector(".message-required");
    message_required.classList.add("active");
    message.setAttribute("aria-invalid", "true");
    hasError = true;
  } else {
    message.setAttribute("aria-invalid", "false");
  }
  if (!checkbox.checked) {
    const checkbox_required = form.querySelector(".checkbox-required");
    checkbox_required.classList.add("active");
    hasError = true;
  } else {
    submit_successful.classList.add("active");
    form.reset();
  }
  if (hasError) return false;

  return true;
});