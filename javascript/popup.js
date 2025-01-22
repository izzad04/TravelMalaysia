document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const confirmBtn = document.getElementById("confirmBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    let pendingUrl = ""; // Variable to store the clicked link's URL

    // Function to show the popup
    function showPopup(url) {
        pendingUrl = url; // Store the URL for redirection
        popup.style.display = "block";   // Show the popup
        overlay.style.display = "block"; // Show the overlay
    }

    // Function to hide the popup
    function hidePopup() {
        popup.style.display = "none";
        overlay.style.display = "none";
        pendingUrl = ""; // Clear the stored URL
    }

    // Attach event listeners to all article links
    const articleLinks = document.querySelectorAll(".article-link");
    articleLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation
            showPopup(link.href);  // Show popup with the link's URL
        });
    });

    // Handle confirm button click
    confirmBtn.addEventListener("click", function () {
        if (pendingUrl) {
            window.open(pendingUrl, "_blank"); // Open the link in a new browser tab
        }
        hidePopup(); // Close the popup
    });

    // Handle cancel button click
    cancelBtn.addEventListener("click", hidePopup);

    // Close the popup when clicking on the overlay
    overlay.addEventListener("click", hidePopup);
});
