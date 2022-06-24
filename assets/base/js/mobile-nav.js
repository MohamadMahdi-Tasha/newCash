// Variables
const mobileNavToggler = document.getElementById('mobile-nav-toggler');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavBg = document.getElementById('mobile-dark-bg');

// A Function That Opens And Closes Nav Based On Given Status
function openOrCloseNav(status = 'true') {
    mobileNav.setAttribute('data-opened', status);
    mobileNavBg.setAttribute('data-opened', status);
}

// Adding Event Listener On Nav Toggler That Calls 'openOrCloseNav' Function  With Status Of 'True'
mobileNavToggler.addEventListener('click', () => openOrCloseNav())

// Adding Event Listener On Dark Bg That Calls 'openOrCloseNav' Function  With Status Of 'false'
mobileNavBg.addEventListener('click', () => openOrCloseNav('false'))
