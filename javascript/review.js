document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Show the modal
    const modal = document.getElementById('feedbackModal');
    modal.style.display = 'block';

    // Close the modal when the user clicks the "x" button
    const closeButton = modal.querySelector('.close');
    closeButton.onclick = function () {
        modal.style.display = 'none';
    };

    // Close the modal when the user clicks outside of the modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Reset the form
    document.getElementById('contactForm').reset();
});
