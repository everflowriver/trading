document.querySelectorAll('.dropdown-submenu > .dropdown-toggle').forEach(function (dropdown) {
    dropdown.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        let submenu = this.nextElementSibling;

        // If submenu is already open → close it
        if (submenu.classList.contains("show")) {
            submenu.classList.remove("show");
            return; // EXIT here
        }

        // Close all other open submenus
        document.querySelectorAll('.dropdown-submenu .dropdown-menu.show')
            .forEach(menu => menu.classList.remove('show'));

        // Open the clicked submenu
        submenu.classList.add('show');
    });
});

// Close submenu when clicking outside
document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-submenu .dropdown-menu.show')
        .forEach(menu => menu.classList.remove('show'));
});