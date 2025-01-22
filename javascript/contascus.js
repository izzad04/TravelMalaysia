document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    var mailtoLink = 'mailto: izzad21075@gmail.com'
                    + '?subject=' + encodeURIComponent('Contact from ' + name)
                    + '&body=' + encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')');
    
    window.location.href = mailtoLink;
});