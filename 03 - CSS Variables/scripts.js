const inputs = Array.from(document.querySelectorAll(".controls input"));
const selectors = document.querySelector(":root");

const object = {
  base: "--color",
  blur: "--blur",
  spacing: "--spacing",
};

const handleChange = (e) => {
  const { name, value, dataset } = e.target;
  selectors.style.setProperty(object[name], `${value}${dataset.sizing || ""}`);
};

inputs.forEach((input) => {
  input.addEventListener("input", handleChange);
  input.addEventListener("mousemove", handleChange);
});
