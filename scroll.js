// Smooth scroll animation using IntersectionObserver
const sections = document.querySelectorAll('.screen');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach(section => {
  observer.observe(section);
});
