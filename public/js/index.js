



// Navbar Functionality
document.addEventListener('DOMContentLoaded', () => {
    hideNavbar();
});

function showNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.style.transform = 'translateY(0)';
    navbar.style.opacity = '1';
}

function hideNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.style.transform = 'translateY(-100%)';
    navbar.style.opacity = '0';
}

function handleScroll() {
    const homeSection = document.getElementById('home');
    const navbar = document.getElementById('navbar');
    const triggerHeight = homeSection.offsetHeight * 0.25; // 25% of the home section height

    if (window.scrollY > triggerHeight) {
        showNavbar();
    } else {
        hideNavbar();
    }
    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

// Show the navbar on any interaction
window.addEventListener('mousemove', showNavbar);
window.addEventListener('touchstart', showNavbar);
window.addEventListener('keydown', showNavbar);
/*----------------------------------------------------------------------
------------------END of Nav bar-----------------------------------------
----------------------------------------------------------------------- */
// Wait for the page to load completely
window.onload = function () {
    const heroSection = document.getElementById('hero-section');
    const companyName = document.getElementById('company-name');
    const tagline = document.getElementById('tagline');

    // Set a timeout to simulate the video playing before showing the hero section
    setTimeout(() => {
        heroSection.classList.add('fade-in');
        companyName.classList.add('animate-hero');
        tagline.classList.add('animate-hero');
    }, 3000); // Adjust this timing as needed (3 seconds in this case)
};
// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
    });
});

showSlide(0); // Show the first slide initially
setInterval(nextSlide, 11250); // Change slide every 11.25 seconds

/*------------------------------------------------------------------------
---------------------ABOUT US---------------------------------------------
--------------------------------------------------------------------------*/




// About Us Carousel JavaScript
const aboutCards = document.querySelectorAll('.about-card');
const aboutInfo = document.getElementById('about-info');
const aboutCarouselSlide = document.querySelector('#about-carousel .about-carousel-slide');
let currentAboutSlide = 0;

function showAboutSlide(index) {
    aboutCards.forEach(card => card.classList.remove('about-active'));
    aboutCards[index].classList.add('about-active');

    // Update the info box text
    aboutInfo.textContent = aboutCards[index].dataset.info;

    // Change the box-shadow color of the info box based on the active card
    const cardColor = window.getComputedStyle(aboutCards[index].querySelector('h3')).color;
    aboutCarouselSlide.style.boxShadow = `0 8px 32px 0 ${cardColor}`;
}

function nextAboutSlide() {
    currentAboutSlide = (currentAboutSlide + 1) % aboutCards.length;
    showAboutSlide(currentAboutSlide);
}

// Initialize About Us carousel
showAboutSlide(currentAboutSlide);
setInterval(nextAboutSlide, 5000); // Change slide every 5 seconds

// About Section Interactivity
aboutCards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        showAboutSlide(index);
    });
    card.addEventListener('mouseout', () => {
        showAboutSlide(currentAboutSlide); // Revert back to the current slide
    });
});






/*------------------------------------------------------------------------
---------------------END ABOUT US---------------------------------------------
--------------------------------------------------------------------------*/

/*------------------------------------------------------------------------
------------------------Service start--------------------------------
--------------------------------------------------------------------------*/
        // Handle expand button click to show popup
        document.querySelectorAll('.expand-button').forEach(button => {
            button.addEventListener('click', function () {
                const popupId = this.getAttribute('data-popup');
                document.getElementById(popupId).style.display = 'flex';
            });
        });

        // Handle popup close
        document.querySelectorAll('.popup-close').forEach(closeBtn => {
            closeBtn.addEventListener('click', function () {
                this.closest('.popup').style.display = 'none';
            });
        });

        // Close popup when clicking outside of it
        document.querySelectorAll('.popup').forEach(popup => {
            popup.addEventListener('click', function (e) {
                if (e.target === this) {
                    this.style.display = 'none';
                }
            });
        });

/*------------------------------------------------------------------------
---------------------Service End-----------------------------------------
--------------------------------------------------------------------------*/

/*------------------------------------------------------------------------
---------------------Contact Start-----------------------------------------
--------------------------------------------------------------------------*/

/*------------------------------------------------------------------------
---------------------END of contact-----------------------------------------
--------------------------------------------------------------------------*/

/*------------------------------------------------------------------------
---------------------Subscribe Start-----------------------------------------
--------------------------------------------------------------------------*/

/*------------------------------------------------------------------------
---------------------END Subscribe-----------------------------------------
--------------------------------------------------------------------------*/