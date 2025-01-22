document.addEventListener("DOMContentLoaded", function () {
    const adsModal = document.querySelector(".ads-modal");
    const closeBtn = document.querySelector(".ads-content .close-btn");

    // Function to close the modal
    function closeAd() {
        adsModal.classList.add("hidden");
    }

    // Show the modal after 2 seconds
    setTimeout(() => {
        adsModal.classList.remove("hidden");
    }, 2000);

    // Close modal on close button click
    closeBtn.addEventListener("click", closeAd);

    // Optional: Close the modal when clicking outside of it
    adsModal.addEventListener("click", (e) => {
        if (e.target === adsModal) {
            closeAd();
        }
    });
});
