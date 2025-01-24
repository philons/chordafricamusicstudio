// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-message').textContent = "Thank you! We'll get back to you soon.";
});

// Booking Modal
const modal = document.getElementById('booking-modal');
const openModal = document.getElementById('book-now');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Booking Form Submission
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Booking Confirmed! We will contact you soon.");
    modal.style.display = 'none';
});
// Function to detect when sections are visible
function revealSections() {
    const sections = document.querySelectorAll('.about-container, .services-container, .contact-container');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('show');  // Add class when section is in view
        }
    });
}

// Run function on scroll
window.addEventListener('scroll', revealSections);

// Run once on page load in case sections are already in view
document.addEventListener('DOMContentLoaded', revealSections);

