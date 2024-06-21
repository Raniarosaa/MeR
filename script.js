document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Real-time clock update
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        try {
            await emailjs.send('service_awyqebr', 'template_zz6q2ur', {
                to_email: 'raniarosaa12@gmail.com',
                from_name: name,
                from_email: email,
                message: message,
            });
            alert('Message sent successfully! Thank you.');
        } catch (error) {
            console.error('An error occurred while sending email:', error);
            alert('An error occurred while sending the message. Please try again.');
        }
    });
});
