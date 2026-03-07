const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      location.hash = entry.target.id;
    }
  });
}, {
  threshold: 0.6
});

sections.forEach(section => observer.observe(section));