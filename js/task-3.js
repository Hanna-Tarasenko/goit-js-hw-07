const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", function () {
  const name = nameInput.value.trim();
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = name;
  }
});
