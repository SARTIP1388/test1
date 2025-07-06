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
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
});
const addUserButton = document.getElementById('add_user_button')
addUserButton.addEventListener('click', () => {
    document.querySelector('.add_user_modal').classList.add('show')
    document.querySelector('.add_user_modal_back').classList.remove('dis-none')
})

document.querySelector('.add_user_modal_back').addEventListener('click', (e) => {
    document.querySelector('.add_user_modal').classList.remove('show')
    e.target.classList.add('dis-none')
})