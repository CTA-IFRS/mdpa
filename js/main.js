//-------------------
// ----- FOOTER -----
//-------------------
$(document).ready(function() {
    if ((document.querySelector('main').offsetHeight) < (window.innerHeight)){
        document.querySelector('footer').classList.add('footer-relative');
    }
} );