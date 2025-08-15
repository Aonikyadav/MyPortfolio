// 👥 Friend Data
const friends = [
  {
    name: "Yash Varshney",
    college: "GLA University '27",
    about: "Java & Python enthusiast, Web Developer, passionate about problem-solving and bringing ideas to life.",
    image: "assets/friend1.jpg",
    linkedin: "https://www.linkedin.com/in/yash-varshney-b12651294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/yashh282828",
    leetcode: "https://leetcode.com/u/yashvarshney_28/",
    instagram: "https://www.instagram.com/yashh.28_?igsh=MWNycmUydm41MGx1bw=="
  },
  {
  name: "DURGESH KUMAR GUPTA",
  college: "GLA University '27",
  about: "Frontend Developer | Council Member - Academic Affairs | Placement Cell Representative | Programming Enthusiast (C, Python, Java)",
  image: "assets/friend2.jpg", // update path if you have a different image
  linkedin: "https://www.linkedin.com/in/durgesh-kumar-gupta-403a3b280/",  // add real link if available
  github: "#",    // add real link if available
  leetcode: "#",  // add real link if available
  instagram: "#"  // add real link if available
}
,
  {
    name: "Shrey Mehrotra",
    college: "GLA University '27",
    about: "Passionate about problem-solving & backend development.",
    image: "assets/friend3.jpg",
    linkedin: "#",
    github: "#",
    leetcode: "#",
    instagram: "#"
}
,
  {
    name: "Ankit Gola",
    college: "GLA University",
    about: "B.Tech CSE (3rd year) | Java, C, Python | Passionate coder on LeetCode & GFG.",
    image: "assets/friend4.png",
    linkedin: "https://www.linkedin.com/in/ankit-gola-857364318/",
    github: "#",
    leetcode: "#",
    instagram: "#"
},
{
    name: "Rahul Singh",
    college: "GLA University '27",
    about: "Java & Python enthusiast, Web Developer, passionate about problem-solving and bringing ideas to life.",
    image: "assets/friend4.jpg",
    linkedin: "https://www.linkedin.com/in/rahul-singh-aa0b292b5/",
    github: "#",
    leetcode: "#",
    instagram: "#"
    }

];

// 🔁 Rotation logic
let currentIndex = 0;

function showFriends() {
  const container = document.getElementById("friendCardsContainer");
  if (!container) return;

  container.innerHTML = ""; // Clear old cards

  const visibleFriends = [];

  if (friends.length <= 3) {
    visibleFriends.push(...friends);
  } else {
    for (let i = 0; i < 3; i++) {
      visibleFriends.push(friends[(currentIndex + i) % friends.length]);
    }
  }

  visibleFriends.forEach((friend, index) => {
    const card = document.createElement("div");
    card.className = "friend-card hidden";

    card.innerHTML = `
      <img src="${friend.image}" alt="${friend.name}" />
      <div class="friend-info">
        <h3>${friend.name}</h3>
        <p>${friend.college}</p>
        <p>${friend.about}</p>
      </div>
      <div class="friend-buttons">
        <a href="${friend.linkedin}" target="_blank">LinkedIn</a>
        <a href="${friend.github}" target="_blank">GitHub</a>
        <a href="${friend.leetcode}" target="_blank">LeetCode</a>
        <a href="${friend.instagram}" target="_blank">Instagram</a>
      </div>
    `;

    container.appendChild(card);

    // Staggered animation reveal
    setTimeout(() => {
      card.classList.remove("hidden");
      card.classList.add("visible");
    }, index * 200);
  });
}

function nextFriendSet() {
  currentIndex = (currentIndex + 1) % friends.length;
  showFriends();
}

// 🟢 Initialize on DOM load
window.addEventListener("DOMContentLoaded", () => {
  showFriends();

  if (friends.length > 3) {
    setInterval(nextFriendSet, 6000); // Auto-scroll every 6s
  }
});
