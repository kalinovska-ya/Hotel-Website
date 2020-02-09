// burger animation - all pages

const burger = document.getElementById('burger-button'),
      menu = document.getElementById('menu-list');


const openBurgerMenu = () => {
    if (menu.className === 'menu-list flex') {
        menu.className += ' responsive';
    } else {
        menu.className = 'menu-list flex';
    }
}


const transformBurger = () => {
	if (burger.className === 'burger-button') {
        burger.className += ' burger-button_active';
	} else {
        burger.className = 'burger-button';
	}
}

burger.addEventListener('click', openBurgerMenu);
burger.addEventListener('click', transformBurger);



// admin button animation - all pages

const adminButton = document.getElementById('admin-button'),
      modalWindowAdmin = document.querySelector('.modal-window-admin');
    

const openLoginForm = () => {
    if (modalWindowAdmin.style.display == 'block') {
        modalWindowAdmin.style.display = 'none';
    } else {
        modalWindowAdmin.style.display = 'block';
    }
}

const closeLoginForm = (event) => {
    if (modalWindowAdmin.style.display == 'block' && (event.which == '27' || event.target == modalWindowAdmin)) {
        modalWindowAdmin.style.display = 'none';
        document.removeEventListener('keydown', closeLoginForm, true);
    }
}

adminButton.addEventListener('click', openLoginForm);
document.addEventListener('click', closeLoginForm);
document.addEventListener('keydown', closeLoginForm);




// ---------  JQUERY code  -------------

// scroll top button animation - all pages

$(function() {

    function backToTop() {
        let buttonUp = $('.button-to-up');
    
        $(window).on('scroll', () => {
            if ($(this).scrollTop() >= 300) {
                buttonUp.fadeIn();
            } else {
                buttonUp.fadeOut();
            }
        });
    
        buttonUp.on('click', () => {
            e.preventDefault();
            $('html').animate({scrollTop: 0}, 1000);
        });
    };
    
    backToTop();
    
});