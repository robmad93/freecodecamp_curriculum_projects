const textInput = document.getElementById("text-input");

const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  let characters = textInput.value.length;

if (characters > 50) {
  textInput.value = textInput.value.slice(0, 50);
  characters = 50;
}

charCount.textContent = `Character Count: ${characters}/50`;

if (characters >= 50) {
  charCount.classList.add("exceeded");
} else {
  charCount.classList.remove("exceeded");
}

})