document.querySelectorAll(".buttonArea").forEach(area => {

  const buttons = area.querySelectorAll("button");
  const section = area.parentElement;

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      const target = button.dataset.target;

      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      section.querySelectorAll(".portfolioBox, .curriculumBox")
        .forEach(box => box.classList.remove("active"));

      section.querySelector("#" + target)?.classList.add("active");
    });
  });

});