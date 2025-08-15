// sidebar.js

const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarClose = document.getElementById('sidebar-close');
const mainContent = document.getElementById('main-content');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.add('open');
  mainContent.classList.add('sidebar-open');
});

sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('open');
  mainContent.classList.remove('sidebar-open');
});

// Optional: Close sidebar if clicking outside of it
document.addEventListener('click', (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnToggle = sidebarToggle.contains(event.target);

  if (!isClickInsideSidebar && !isClickOnToggle) {
    sidebar.classList.remove('open');
    mainContent.classList.remove('sidebar-open');
  }
});
