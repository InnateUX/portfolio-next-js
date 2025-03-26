import WOW from 'wow.js';  // Ensure correct import of WOW.js

// Function to initialize WOW.js
export const initWow = () => {
  if (typeof window !== 'undefined') {  // Check if we're in the browser
    const wow = new WOW({ live: false });  // Proper initialization without the second WOW
    wow.init();  // Initialize WOW.js animations
  }
};

export const animationCreate = () => {
    // Add a simple log to check if it's being called
    console.log("Animation function called!");
    // Your animation logic goes here
};