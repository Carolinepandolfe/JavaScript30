const keys = Array.from(document.querySelectorAll(".key"));

const playSound = (e) => {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!sound) return;
  key.classList.add("playing");
  sound.play();
};

const removeFocus = (e) => {
  e.propertyName !== "transform" ? "" : e.target.classList.remove("playing");
};

keys.forEach((key) => key.addEventListener("transitionend", removeFocus));

window.addEventListener("keydown", playSound);
