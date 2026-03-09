document.querySelectorAll(".buttonArea").forEach(area => {

  const buttons = area.querySelectorAll("button");
  const section = area.parentElement;

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      const target = button.dataset.target;

      // remove active from buttons
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // hide all boxes in that section
      section.querySelectorAll(".portfolioBox, .curriculumBox")
        .forEach(box => box.classList.remove("active"));

      // show target
      section.querySelector("#" + target)?.classList.add("active");

    });
  });

});