document.addEventListener('DOMContentLoaded', () => {
    const contactUsButton = document.getElementById('contactUsButton');
    const popupForm = document.getElementById('popupForm');
    const formContainer = document.querySelector('.form-container');
    const closeBtn = document.querySelector('.close');

    contactUsButton.addEventListener('click', () => {
        popupForm.classList.add('show');
        formContainer.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        popupForm.classList.remove('show');
        formContainer.classList.remove('show');
        popupForm.classList.add('hide');
        setTimeout(() => {
            popupForm.classList.remove('hide');
        }, 500);
    });

    window.addEventListener('click', (event) => {
        if (event.target === popupForm) {
            popupForm.classList.remove('show');
            formContainer.classList.remove('show');
            popupForm.classList.add('hide');
            setTimeout(() => {
                popupForm.classList.remove('hide');
            }, 500);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const projectContents = document.querySelectorAll('.project-content');
    const image_2x = document.getElementById('image_2x');

    projectContents.forEach(content => {
        content.addEventListener('click', () => {
            // Remove 'selected' class from all project contents
            projectContents.forEach(item => item.classList.remove('selected'));
            
            // Add 'selected' class to the clicked project content
            content.classList.add('selected');

            const newImage = content.getAttribute('data-image');
            if (image_2x.src !== newImage) {
                // Start the transition by fading out the current image
                image_2x.classList.add('fade-out');
                setTimeout(() => {
                    // Change the image source after the fade out
                    image_2x.src = newImage;
                    // Fade in the new image
                    image_2x.classList.remove('fade-out');
                    image_2x.classList.add('fade-in');
                }, 500);
            }
        });
    });

    image_2x.addEventListener('transitionend', () => {
        // Remove the fade-in class after the transition is complete
        image_2x.classList.remove('fade-in');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = 3000;

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.getAttribute('data-slide'));
            moveToSlide(slideIndex);
            resetAutoSlide();
        });
    });

    function moveToSlide(index) {
        // Calculate the position to scroll to
        const cardWidth = cards[0].getBoundingClientRect().width + 16; // Including gap
        const scrollPosition = index * cardWidth;

        // Slide the slider to the targeted position
        document.getElementById('slider').scroll({
            left: scrollPosition,
            behavior: 'smooth'
        });

        // Update active dot styles
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');

        // Update current slide index
        currentSlide = index;
    }

    function autoSlide() {
        currentSlide = (currentSlide + 1) % cards.length;
        if (currentSlide > dots.length - 1) {
            currentSlide = 0;
        }
        moveToSlide(currentSlide);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, slideInterval);
    }

    // Start the auto-slide
    let autoSlideInterval = setInterval(autoSlide, slideInterval);
    moveToSlide(0); // Initialize the first slide
});

function toOpen() {
    const url = "https://www.fylehq.com"; // Replace with your desired URL
    window.open(url, '_blank').focus();
}

function toggleSubmitButton() {
    const checkbox = document.getElementById('flexCheckDefault');
    const submitButton = document.getElementById('subBtn');
    submitButton.disabled = !checkbox.checked;
}

