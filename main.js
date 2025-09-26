// Find the mobile menu button and the navigation links in the HTML
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Listen for a click on the mobile menu button
mobileNavToggle.addEventListener('click', () => {
  // Check if the menu is currently visible
  const isVisible = navLinks.getAttribute('data-visible');

  if (isVisible === "true") {
    // If it is visible, hide it
    navLinks.setAttribute('data-visible', 'false');
    mobileNavToggle.setAttribute('aria-expanded', 'false');
  } else {
    // If it is hidden, show it
    navLinks.setAttribute('data-visible', 'true');
    mobileNavToggle.setAttribute('aria-expanded', 'true');
  }
});

// Optional: Close the menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.setAttribute('data-visible', 'false');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
    });
});