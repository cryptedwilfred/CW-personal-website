document.getElementById("clickButton").addEventListener(
'click' , function(){
        if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
        infoDiv.style.display = 'block';
    } else {
        infoDiv.style.display = 'none';
    }
   /*
    let infoDiv = document.getElementById('info');
     infoDiv.classList.toggle('hidden');
     */
});
/*
const showPhotosText = document.getElementById('showPhotosText');
const hiddenPhotos = document.getElementById('hiddenPhotos');
showPhotosText.addEventListener('click', function() {
    if (hiddenPhotos.style.display === 'none' || hiddenPhotos.style.display === '') {
        hiddenPhotos.style.display = 'block';
    }else{
        hiddenPhotos.style.display = 'none';
    }
});
*/
/*
document.querySelectorAll('.photos-container').forEach(container => {
    container.addEventListener('mouseenter', () => {
        const images = container.querySelectorAll('.cfc');
        const overlay = container.querySelector('.showPhotosText');

        // Hide overlay
        showPhotosText.style.opacity = '0';
        
        // Reveal images sequentially
        images.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = '1';
            }, index * 1000); // Adjust the delay (in ms) for each image to appear sequentially
        });
    });

    container.addEventListener('mouseleave', () => {
        const images = container.querySelectorAll('.cfc');
        const overlay = container.querySelector('.showPhotosText');

        // Show overlay again
        showPhotosText.style.opacity = '1';

        // Hide images when not hovering
        images.forEach(img => {
            img.style.opacity = '0';
        });
    });
});
*/

