const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function playSound(key){

  const audio = document.getElementById(key.toUpperCase());
  if(!audio) return;

  audio.currentTime = 0;
  audio.play();

  const pad = audio.parentElement;
  display.innerText = pad.id;
}

pads.forEach(pad => {

  pad.addEventListener("click", () => {
    const key = pad.innerText.trim();
    playSound(key);
  });

});

document.addEventListener("keydown", (event) => {
  playSound(event.key);
});