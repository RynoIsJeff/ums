'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


/**
 * Video Play Button
 */

// Get the video element and play button
const video = document.getElementById('aboutVideo');
const playBtn = document.getElementById('playBtn');

// Add click event listener to the play button
playBtn.addEventListener('click', function () {
  // Check if the video is paused or ended
  if (video.paused || video.ended) {
    // Play the video
    video.play();
    playBtn.classList.add('playing'); // Optional: Add a class for styling purposes
  } else {
    // Pause the video
    video.pause();
    playBtn.classList.remove('playing'); // Optional: Remove the class if it was added
  }
});

// Add event listener to update the play button when the video is paused or ended
video.addEventListener('pause', function () {
  playBtn.classList.remove('playing');
  playBtn.style.display = 'block'; // Show the play button
});

video.addEventListener('ended', function () {
  playBtn.classList.remove('playing');
  playBtn.style.display = 'block'; // Show the play button
});

// Add event listener to hide the play button when the video is playing
video.addEventListener('play', function () {
  playBtn.style.display = 'none'; // Hide the play button
});

// Add click event listener to the video element to pause the video
video.addEventListener('click', function () {
  if (!video.paused) {
    video.pause();
    playBtn.style.display = 'block'; // Show the play button when paused
  }
});