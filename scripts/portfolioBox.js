const buttons = document.querySelectorAll(".buttonArea button");
const boxes = document.querySelectorAll(".portfolioBox");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.textContent.trim().toLowerCase();

    boxes.forEach(box => box.classList.remove("active"));

    const box = document.getElementById(target);
    if (box) box.classList.add("active");

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});