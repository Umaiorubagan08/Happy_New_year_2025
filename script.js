// Function to generate twinkling stars
function createStars() {
    const numStars = 150; // Number of stars
    const background = document.querySelector('.background');
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      background.appendChild(star);
    }
  }
  
  // Function to create fireworks animation
  function createFireworks() {
    const numFireworks = 3; // Number of fireworks to display
    const background = document.querySelector('.fireworks');
  
    for (let i = 0; i < numFireworks; i++) {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 100}vh`;
      background.appendChild(firework);
  
      // Make the firework burst and disappear
      setTimeout(() => {
        firework.style.animation = 'fireworkEffect 1s forwards';
      }, Math.random() * 500);
    }
  }
  
  // Initialize stars and fireworks
  createStars();
  createFireworks();
  