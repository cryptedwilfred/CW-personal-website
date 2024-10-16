
document.querySelectorAll('.photos-container').forEach(container => {
    container.addEventListener('mousedown', () => {
        container.querySelectorAll('.cfc').forEach(cfc => {
            cfc.style.animationPlayState = 'paused';  // Pause the animation
        });
    });

    container.addEventListener('mouseup', () => {
        container.querySelectorAll('.cfc').forEach(cfc => {
            cfc.style.animationPlayState = 'running';  // Resume the animation
        });
    });

    // Touch support for mobile devices
    container.addEventListener('touchstart', () => {
        container.querySelectorAll('.cfc').forEach(cfc => {
            cfc.style.animationPlayState = 'paused';  // Pause the animation
        });
    });

    container.addEventListener('touchend', () => {
        container.querySelectorAll('.cfc').forEach(cfc=> {
            cfc.style.animationPlayState = 'running';  // Resume the animation
        });
    });
});
/*
function startHoverAnimation(containerSelector, interval) {
    const container = document.querySelector(containerSelector);
    const photos = container.querySelectorAll('.cfc');
    let currentPhotoIndex = 0;
    let intervalId = null;

    function showNextPhoto() {
        // Hide all photos
        photos.forEach(cfc => {
            cfc.style.opacity = '0';
        });

        // Show the next photo
        photos[currentPhotoIndex].style.opacity = '1';

        // Move to the next photo, loop back if we reach the end
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    }

    // On hover (mouseenter), start the image transition
    container.addEventListener('mouseenter', function() {
        if (!intervalId) {
            showNextPhoto(); // Show the first photo immediately
            intervalId = setInterval(showNextPhoto, interval); // Start the loop
        }
    });

    // On mouse leave (mouseleave), stop the animation
    container.addEventListener('mouseleave', function() {
        clearInterval(intervalId);
        intervalId = null;  // Clear the interval
        // Optionally reset the opacity of the images when leaving
        photos.forEach(cfc => {
            cfc.style.opacity = '0';  // Hide all photos again
        });
        currentPhotoIndex = 0;  // Reset the index to the first photo
    });
}

// Start the hover animation for each category
window.onload = function() {
    startHoverAnimation('.category-1', 2000); // 2 seconds between images
    startHoverAnimation('.category-2', 3000); // 3 seconds between images
    startHoverAnimation('.category-3', 4000); // 4 seconds between images
}
    */
document.querySelectorAll('.photos-container').forEach(container => {
    const photos = container.querySelectorAll('.cfc');
    let currentPhotoIndex = 0;
    let intervalId;

    function showNextPhoto() {
        // Hide all photos
        photos.forEach(cfc => {
            cfc.classList.remove('visible');
        });

        // Show the next photo
        photos[currentPhotoIndex].classList.add('visible');

        // Move to the next photo, loop back if we reach the end
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    }

    // On hover (mouseenter), start the image transition
    container.addEventListener('mouseenter', function() {
        showNextPhoto(); // Show the first photo immediately
        intervalId = setInterval(showNextPhoto, 2000); // Start the loop, change 2000 for timing
    });

    // On mouse leave (mouseleave), stop the animation
    container.addEventListener('mouseleave', function() {
        clearInterval(intervalId);
        intervalId = null;  // Clear the interval
        // Optionally reset the opacity of the images when leaving
        photos.forEach(cfc => {
            cfc.classList.remove('visible'); // Hide all photos again
        });
        currentPhotoIndex = 0;  // Reset the index to the first photo
    });
});