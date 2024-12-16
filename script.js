document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      box.classList.toggle("expanded");
    });

    const colorSelector = box.querySelector("select:nth-of-type(1)");
    const sizeSelector = box.querySelector("select:nth-of-type(2)");

    colorSelector.addEventListener("change", () => {
      box.style.backgroundColor = colorSelector.value;
    });

    sizeSelector.addEventListener("change", () => {
      const size = sizeSelector.value;
      if (size === "small") {
        box.style.transform = "scale(0.8)";
      } else if (size === "medium") {
        box.style.transform = "scale(1)";
      } else if (size === "large") {
        box.style.transform = "scale(1.2)";
      }
    });
  });
});
