$(document).ready(function() {
    // Update visual of menu bar button
    const tabNavbarButton = $('#tab-navbar-button');
    const tabNavbar = $('#tab-navbar');
    tabNavbarButton.on('click', () => {
        tabNavbar.toggleClass("change")
    });
});