document.querySelectorAll(".experienceButtons").forEach(area => {

  const buttons = area.querySelectorAll("button");
  const section = area.parentElement;

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      const targetId = button.dataset.target;

      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      section.querySelectorAll(".experienceBox")
        .forEach(box => box.classList.remove("active"));

      section.querySelector("#" + targetId)?.classList.add("active");
    });
  });

});