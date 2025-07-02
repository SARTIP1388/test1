document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});
document.addEventListener('DOMContentLoaded', function () {
    var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elemsDropdown, {
        // برای sidenav باید گزینه coverTrigger رو false بذاریم
        coverTrigger: false,
        constrainWidth: false,
    });

    var elemsSidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elemsSidenav);
});
