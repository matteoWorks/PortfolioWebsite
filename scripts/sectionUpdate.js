const sections = document.querySelectorAll("section");
const topNav = document.getElementById("topNavigation");

const observer = new IntersectionObserver(entries => {
  const visible = entries.find(entry => entry.isIntersecting);
  if (!visible) return;

  const id = visible.target.id;

  location.hash = id;

  if (id === "landing") {
    topNav.classList.add("hidden");
  } else {
    topNav.classList.remove("hidden");
  }

}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));