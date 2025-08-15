
document.addEventListener('DOMContentLoaded', function() {

  const certifications = [
  {
    name: "Google Cloud Computing Foundations Certificate",
    authority: "Google Cloud",
    date: "Issued June 28, 2025",
    image: "assets/certs/google-cloud-computing-foundations-certificate.png",
  },
  {
    name: "Bring AI to Work Workshop",
    authority: "Google",
    date: "Issued May 2025",
    image: "assets/certs/bring-ai-to-work-google.png",
  },
  {
    name: "AWS - Solutions Architecture Job Simulation",
    authority: "Amazon Web Services",
    date: "Issued Jan 2025",
    image: "assets/certs/aws-sa-simulation.png",
  },
  {
    name: "Microsoft Certified: Azure AI Engineer Associate",
    authority: "Microsoft",
    date: "Issued Jun 2025",
    image: "assets/certs/azure-ai-engineer-associate.jpeg",
  },
  {
    name: "Build a computer vision app with Azure Cognitive Services",
    authority: "Microsoft Azure",
    date: "Issued May 2025",
    image: "assets/certs/azure-computer-vision.jpeg",
  },
  {
    name: "Python for Data Science",
    authority: "IBM",
    date: "Issued Jan 2025",
    image: "assets/certs/python-for-data-science-ibm.jpg",
  },
  {
    name: "Oracle Cloud Success Navigator Essentials",
    authority: "Oracle",
    date: "Issued Apr 2025",
    image: "assets/certs/oracle-cloud-navigator-essentials.jpeg",
  },
  {
    name: "Deloitte Australia - Cyber Job Simulation",
    authority: "Deloitte",
    date: "Issued May 2025",
    image: "assets/certs/deloitte-cyber-simulation.png",
  },
  {
    name: "Introduction to Cybersecurity Fundamentals",
    authority: "Coursera",
    date: "Issued Jun 2025",
    image: "assets/certs/coursera-cybersecurity-fundamentals.jpg",
  },
  {
    name: "AI for Students: Build Your Own Generative AI Model",
    authority: "NxtWave",
    date: "Issued Mar 2025",
    image: "assets/certs/nxtwave-generative-ai-workshop.png",
  },
  {
    name: "Neo4j Certified Professional",
    authority: "Neo4j",
    date: "Issued Jun 2025",
    image: "assets/certs/neo4j-certified-professional.png",
  },
  {
    name: "Firebase Studio User",
    authority: "Firebase",
    date: "Issued Jul 2025",
    image: "assets/certs/firebase-studio-user.png",
  },
  {
    name: "Certificate of Participation: SPECTRA 2.0",
    authority: "Codebusters Club, GLA University",
    date: "Issued Nov 2023",
    image: "assets/certs/spectra-2-participation.jpeg",
  },
  {
    name: "Web Development (6 Weeks Course)",
    authority: "CodeSquadz",
    date: "Issued Jul 2025",
    image: "assets/certs/web-development-codesquadz.jpg",
  },
  {
    name: "HTML & CSS Bootcamp",
    authority: "LetsUpgrade",
    date: "Issued Jul 2025",
    image: "assets/certs/html-css-bootcamp.jpeg",
  },
];

  const carouselTrack = document.querySelector("#certifications .carousel-track");
  const dotsContainer = document.querySelector("#certifications .dots");
  const memberName = document.querySelector("#certifications .member-name");
  const memberRole = document.querySelector("#certifications .member-role");
  const leftArrow = document.querySelector("#certifications .nav-arrow.left");
  const rightArrow = document.querySelector("#certifications .nav-arrow.right");

  // If any element is not found, stop the script to prevent errors
  if (!carouselTrack || !dotsContainer || !memberName || !memberRole || !leftArrow || !rightArrow) {
    console.error("Carousel elements not found. Check your HTML class and ID names.");
    return;
  }

  let currentIndex = 0;
  let isAnimating = false;

  // Generate cards dynamically
  function createCards() {
    certifications.forEach((cert, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-index", index);

      const img = document.createElement("img");
      img.src = cert.image;
      img.alt = cert.name;

      card.appendChild(img);
      carouselTrack.appendChild(card);
    });
  }

  // Generate dots dynamically
  function createDots() {
    certifications.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.setAttribute("data-index", index);

      dot.addEventListener("click", () => {
        updateCarousel(index);
      });

      dotsContainer.appendChild(dot);
    });
  }

  function updateCarousel(newIndex) {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex = (newIndex + certifications.length) % certifications.length;

    const cards = document.querySelectorAll("#certifications .card");
    cards.forEach((card, i) => {
      const offset = (i - currentIndex + certifications.length) % certifications.length;
      
      card.className = 'card'; // Reset classes before adding new ones

      if (offset === 0) {
        card.classList.add("center");
      } else if (offset === 1) {
        card.classList.add("right-1");
      } else if (offset === 2) {
        card.classList.add("right-2");
      } else if (offset === certifications.length - 1) {
        card.classList.add("left-1");
      } else if (offset === certifications.length - 2) {
        card.classList.add("left-2");
      } else {
        card.classList.add("hidden");
      }
    });

    // Update dots
    const dots = document.querySelectorAll("#certifications .dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });

    // Animate text fade
    memberName.style.opacity = "0";
    memberRole.style.opacity = "0";

    setTimeout(() => {
      memberName.textContent = certifications[currentIndex].name;
      memberRole.textContent = `${certifications[currentIndex].authority} | ${certifications[currentIndex].date}`;
      memberName.style.opacity = "1";
      memberRole.style.opacity = "1";
    }, 300);

    setTimeout(() => {
      isAnimating = false;
    }, 800);
  }

  leftArrow.addEventListener("click", () => {
    updateCarousel(currentIndex - 1);
  });

  rightArrow.addEventListener("click", () => {
    updateCarousel(currentIndex + 1);
  });

  // Swipe support for mobile
  let touchStartX = 0;
  carouselTrack.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carouselTrack.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) { // Swiped left
        updateCarousel(currentIndex + 1);
      } else { // Swiped right
        updateCarousel(currentIndex - 1);
      }
    }
  });

  // Initialize
  createCards();
  createDots();
  updateCarousel(0);

}); // <-- End of the DOMContentLoaded listener