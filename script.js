// Show the footer text "Back to Top" when scrolling down
window.onscroll = function() {
    let backToTopText = document.getElementById("backToTopText");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopText.style.cursor = "pointer";
    } else {
        backToTopText.style.cursor = "default";
    }
};

// Scroll to the top when the "Back to Top" text is clicked
document.getElementById("backToTopText").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
