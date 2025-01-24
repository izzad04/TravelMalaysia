// Function to display the current date and time
function displayDateTime() {
    // Get the current date and time
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // January is 0
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // Add leading zero to minutes and seconds if they are less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format the date and time
    var formattedDateTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;

    // Display the date and time in an element with id "date-time"
    document.getElementById('date-time').innerHTML = formattedDateTime;
}

// Call the function to display the date and time
setInterval(displayDateTime, 1000); // Update every second
