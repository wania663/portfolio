 // Add event listener to all links in the navbar
 document.querySelectorAll('.navbar-nav .nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId); // Find the element with the corresponding ID
        
        // Scroll to the target section smoothly
        window.scrollTo({
            top: targetElement.offsetTop, // Scroll to the top of the target section
            behavior: 'smooth' // Smooth scrolling effect
        });
    });
});

