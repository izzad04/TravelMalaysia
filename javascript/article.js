document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const confirmBtn = document.getElementById("confirmBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    // Function to show the popup
    function showPopup(link) {
        popup.classList.add("show");
        overlay.classList.add("show");

        // Handle "Yes" button
        confirmBtn.onclick = function () {
            window.location.href = link;  // Navigate to the article
        };

        // Handle "No" button
        cancelBtn.onclick = function () {
            hidePopup();  // Close the pop-up
        };
    }

    // Function to hide the popup
    function hidePopup() {
        popup.classList.remove("show");
        overlay.classList.remove("show");
    }

    // Get all article links
    const articleLinks = document.querySelectorAll(".article-link");

    // Attach event listeners to article links
    articleLinks.forEach(function (articleLink) {
        articleLink.addEventListener("click", function (event) {
            event.preventDefault();  // Prevent default navigation
            showPopup(articleLink.href);  // Show the pop-up and pass the link
        });
    });

    // Close the popup when clicking the overlay
    overlay.addEventListener("click", hidePopup);
});
