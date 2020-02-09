// currency convertor - index.html

const price = document.querySelectorAll('.prebooking-price-amount'),
      selectBtnCurrency = document.querySelector('#currency'),
      currency = document.querySelectorAll('.prebooking-price-currency');

let originalPrice = [], 
    originalCurrency = [];

const convertCurrency = (event) => {

    for (let i = 0; i < price.length; i++) {
        originalPrice.push(price[i].innerHTML);
        originalCurrency.push(currency[i].innerHTML);

        switch(selectBtnCurrency.value) {

            case 'EUR':
                let x = +price[i].innerHTML * 0.9;
                x.toString();
                price[i].innerHTML = x;
                currency[i].innerHTML = ' EUR';
            break;

            case 'USD':
                price[i].innerHTML = originalPrice[i];
                currency[i].innerHTML = originalCurrency[i];
                break;
                
            default:
                break;
        }
    }
}

selectBtnCurrency.addEventListener('change', convertCurrency);




// ---------  JQUERY code  -------------
// owl carousel settings - index.html

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        nav: true,
        loop: true,
        margin: 3,
        navText: ["&lang;", "&rang;"],
        responsiveClass: true,
        responsive: {
            1300: {
                items: 3
            },
            992: {
                items: 2
            },
            768: {
                items: 2
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            }
        },
        center: true,
        stagePadding: 20,
    });
    });