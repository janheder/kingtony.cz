
// -----------------------------------------------------------------------------
// LAZYLAOD INIT
// -----------------------------------------------------------------------------

/*
lazyload();
*/
window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.loadHidden = false;



// -----------------------------------------------------------------------------
// MODAL INIT
// -----------------------------------------------------------------------------


MicroModal.init({ 
    openClass: 'is-open', 
    disableScroll: true, 
    disableFocus: true, 
    awaitOpenAnimation: true,
    awaitCloseAnimation: true, 
    debugMode: false 
});


// -----------------------------------------------------------------------------
// RESPONSIVE TOGGLES
// -----------------------------------------------------------------------------

var navToggle = document.getElementById('navToggle');
if (navToggle){
    document.getElementById('navToggle').addEventListener('click', function() {
        document.body.classList.toggle('--nav-active');
    });
}

var searchToggle = document.getElementById('searchToggle');
if (searchToggle){
    document.getElementById('searchToggle').addEventListener('click', function() {
        document.body.classList.toggle('--search-active');
        document.getElementById('searchbox').focus();
    });
}

var filter = document.getElementById('filterContent');
if (filter){
    document.getElementById('filterToggle').addEventListener('click', function() {
        document.body.classList.toggle('--filter-active');
    });
}

document.getElementById('darkBackdrop').addEventListener('click', function() {
    document.body.classList.remove('--nav-active','--search-active','--filter-active');
});

var userToggle = document.getElementById('userToggle');
if (userToggle){
    userToggle.addEventListener('click', function() {
        document.body.classList.toggle('--user-active');
    });
}

document.body.addEventListener('click', function(e) {
    if (!e.target.classList.contains('search__input')) {
        if (document.getElementById('searchAutocomplete').classList.contains('--active')){
            document.getElementById('searchAutocomplete').classList.remove('--active');
        };
    }
});

var productGallery = document.getElementById('productGallery');
if(productGallery){
    document.getElementById('productGalleryBackdrop').addEventListener('click', function() {
        document.body.classList.remove('--activeProductCarousel');
    });
    document.getElementById('productGalleryClose').addEventListener('click', function() {
        document.body.classList.remove('--activeProductCarousel');
    });
}



// -----------------------------------------------------------------------------
// NUMBER STEPPER
// -----------------------------------------------------------------------------


function initializeSteppers() {
    const steppers = document.querySelectorAll('.stepper');

    steppers.forEach(stepper => {
        const input = stepper.querySelector('input');
        const inputstep = stepper.querySelector('input').getAttribute('step');
        const incrementButton = stepper.querySelector('.plus');
        const decrementButton = stepper.querySelector('.minus');
        let cartItem = stepper.closest('.cart-item'); // Get the closest .cart-item element
        if (!cartItem) {
            cartItem = stepper.closest('.product-card'); // If no .cart-item, look for .product-card
        }
        if (!cartItem) {
            cartItem = stepper.closest('.product-detail__cta');
        }

        var event = new Event('change');

        incrementButton.addEventListener('click', () => {
            input.value = parseInt(input.value) + parseInt(inputstep);
            input.dispatchEvent(event);
            checkStock(input, cartItem); // Check stock after changing the input value
        });

        decrementButton.addEventListener('click', () => {
            const currentValue = parseInt(input.value);
            if (currentValue > parseInt(inputstep)) {
                input.value = currentValue - parseInt(inputstep);
            }
            input.dispatchEvent(event);
            checkStock(input, cartItem); // Check stock after changing the input value
        });

        // Check stock initially
        checkStock(input, cartItem);
    });
}

function checkStock(input, cartItem) {
    const stock = parseInt(input.dataset.stock || 0); // Get the value of data-stock attribute, default to 0 if not set
    const currentValue = parseInt(input.value);
    
    if (stock === 0 && currentValue === 1) {
        // If stock is 0 and input value is 1, do nothing
        return;
    }

    if (currentValue > stock) {
        // If input value exceeds stock
        if (cartItem) {
            cartItem.classList.add('--unavailable');
        }
    } else {
        // If input value is within or equal to stock
        if (cartItem) {
            cartItem.classList.remove('--unavailable');
        }
    }
}

initializeSteppers();


var cart = document.getElementsByClassName('cart-table-items');

if (cart.length>0){
    // Select the closest common ancestor of all .cart-item elements
    const commonAncestor = document.querySelector('.cart-table-items'); // Update this selector with the appropriate ancestor class/id

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
        const cartItems = commonAncestor.querySelectorAll('.cart-item');
        const unavailableItems = commonAncestor.querySelectorAll('.cart-item.--unavailable');
        const obalRozdelit = document.getElementById('obal_rozdelit');
        var radioInputs = obalRozdelit.querySelectorAll('input[type="radio"]');
        
        if ((unavailableItems.length === 0 || unavailableItems.length === cartItems.length) && obalRozdelit) {
            obalRozdelit.classList.add('--hide');
            obalRozdelit.classList.remove('--show');
            radioInputs.forEach(function(radioInput) {
                radioInput.removeAttribute('required');
            });
        } else if (unavailableItems.length > 0 && unavailableItems.length < cartItems.length && obalRozdelit) {
            obalRozdelit.classList.remove('--hide');
            obalRozdelit.classList.add('--show');
            radioInputs.forEach(function(radioInput) {
                radioInput.setAttribute('required', 'required');
            });
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the common ancestor for configured mutations
    observer.observe(commonAncestor, config);
}




document.getElementById('user-info').addEventListener('change', function() {
    ZmenDodaciAdresu();
});


// -----------------------------------------------------------------------------
// HOMEPAGE CARUSEL
// -----------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function() {
    var homecarousel = document.getElementById('homecarousel');

    if (homecarousel){
        const indexCarousel = new Siema({
            selector: '#homecarousel',
            duration: 200,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            duration: 250,
            loop: true,
            rtl: false,
            onInit: () => {},
            onChange: () => {},
        });
        setInterval(() => indexCarousel.next(), 7000);
        
        document.querySelector('.prev').addEventListener('click', () => indexCarousel.prev());
        document.querySelector('.next').addEventListener('click', () => indexCarousel.next());
    }
});


// -----------------------------------------------------------------------------
// PRODUCT DETAIL CARUSEL
// -----------------------------------------------------------------------------

    function imageClick(imageNumber) {
        setTimeout(() => {
            //Find the slider element
            const sliderElement = document.getElementById('pgalleryModal');
            //Slide to he right image
            swiffyslider.slideTo(sliderElement, imageNumber);
            //Listen to slide end and set focus to the container to enable keyboard navigation
            
            document.body.classList.add("--activeProductCarousel");
            swiffyslider.onSlideEnd(sliderElement, () => sliderElement.querySelector(".slider-container").focus());

        }, 300)
    }

    function thumbHover(imageNumber) {
        //Find the slider element
        const sliderElement = document.getElementById('pgallery');
        //Slide to he right image
        swiffyslider.slideTo(sliderElement, imageNumber)
    }

/*
    document.addEventListener("DOMContentLoaded", () => {

        var carousel = document.getElementsByClassName('product-detail__carousel');

        if (carousel.length > 0){


            let $imagesContainer = document.getElementById('product-carousel');
            let $lightbox = document.getElementById('lightbox');
        
            let delta = 6;
            let startX;
            let startY;

            $imagesContainer.addEventListener('mousedown', (event) => {
                startX = event.pageX;
                startY = event.pageY;
            });
            $imagesContainer.addEventListener('mouseup', e => {
                let diffX = Math.abs(event.pageX - startX);
                let diffY = Math.abs(event.pageY - startY);
                if (diffX < delta && diffY < delta) {
                    let imageWrapper = e.target.closest('.product-detail__carouselLink');
                    if (imageWrapper) {
                        let image = imageWrapper.querySelector('img');
                        let imagetitle = imageWrapper.querySelector('span');
                        if (image) {
                            $lightbox.innerHTML = '<div class="next-lightbox" src="">next</div><div class="close-lightbox"></div>' + image.outerHTML + imagetitle.outerHTML;
                            $lightbox.classList.add('show');
                        }
                    }
                } else {
                    // pause
                }
        
            });
        
            $lightbox.addEventListener('click', (e) => {
                if (!e.target.hasAttribute('src')) {
                    $lightbox.classList.remove('show');
                }
            });


            var multiCarousel = document.getElementsByClassName('product-detail__thumbs');


                if (multiCarousel.length > 0){
                let thumbCarousel = new Siema({
                    selector: '.product-detail__carousel',
                    duration: 200,
                    easing: 'ease-out',
                    perPage: 1,
                    startIndex: 0,
                    draggable: true,
                    multipleDrag: true,
                    threshold: 20,
                    loop: true,
                    rtl: false,
                    onInit: () => {},
                    onChange: () => {},
                });
            
                document.querySelector('.prev').addEventListener('click', () => thumbCarousel.prev());
                document.querySelector('.next').addEventListener('click', () => thumbCarousel.next());

                // Add a function that generates pagination to prototype
                Siema.prototype.addPagination = function() {
                    for (let lop = 0; lop < this.innerElements.length; lop++) {
                        let thumb = document.getElementById("thumb" + lop);
                        thumb.addEventListener('click', () => this.goTo(lop));
                    }
                }
                
                thumbCarousel.addPagination();

                var variants = document.getElementById('variants');

                if (variants){
                    var firstClick = true;
                    document.querySelector('.variants__list').addEventListener('click', function (e) {

                        var target = e.target;
                        if (target.querySelector('img')) {
                            var imgSrc = target.querySelector('img').dataset.src;
                            var name = target.querySelector('.variants__item-text').innerHTML;

                            if(firstClick){
                                firstClick = false;
                            } else {
                                thumbCarousel.remove(0);
                            }
                            
                            const newElement = document.createElement('div');
                            newElement.classList.add("product-detail__carouselItem");
                            newElement.innerHTML = '<div class="product-detail__carouselLink"><img src="'+ imgSrc +'" alt="' + name + '" title="' + name + '" loading="lazy"><span>' + name + '</span></div>';
                            thumbCarousel.prepend(newElement);
                            
                            thumbCarousel.goTo(0);
                            
                            
                        }

                    });
                }


            }
        }
    });
    */


// -----------------------------------------------------------------------------
// NAV SUBMENU
// -----------------------------------------------------------------------------


var navitem = document.querySelectorAll('.expandable .nav-link');

for (let loop = 0; loop < navitem.length; loop++) {

    document.getElementById('subToggle-'+ loop).addEventListener('click', function(e) {
        document.getElementById('sub-'+ loop).classList.toggle('--active');
    });

}


// -----------------------------------------------------------------------------
// PRODUCT DETAIL VARIANTS
// -----------------------------------------------------------------------------


var variants = document.getElementById('variants');

if (variants){

    document.querySelector('.variants__list').addEventListener('click', function (e) {

        this.classList.toggle('--active');
        
        var target = e.target;

        if (e.currentTarget.querySelector('.--active')) {
            e.currentTarget.querySelector('.--active').classList.remove('--active');
        }
        

        var input = target.querySelector('input').checked = true;


        target.classList.add('--active');

        var code = target.dataset.code;
        var stock = target.dataset.stock;
        var stockstatus = target.dataset.stockstatus;
        var priceold = target.dataset.priceold;
        var price = target.dataset.price;
        var pricevat = target.dataset.pricevat;

        document.getElementById('product-code').innerHTML = code;
        document.getElementById('stock').dataset.status = stockstatus;
        document.getElementById('stock').innerHTML = stock;
        if(priceold == null) {
            
            document.getElementById('price-old').innerHTML = "";           
        }else{
            document.getElementById('price-old').innerHTML = priceold;  
        }
        document.getElementById('price-main').innerHTML = price;
        document.getElementById('price-vat').innerHTML = pricevat;
    });
}



// -----------------------------------------------------------------------------
// REGISTER TOGGLE 
// -----------------------------------------------------------------------------


if(document.getElementById('register-form')){
    document.getElementById('faToggle').onclick = function() {
        document.getElementById("register-fa-name").toggleAttribute("required");
        document.getElementById("register-fa-street").toggleAttribute("required");
        document.getElementById("register-fa-street-n").toggleAttribute("required");
        document.getElementById("register-fa-city").toggleAttribute("required");
        document.getElementById("register-fa-psc").toggleAttribute("required");
        document.getElementById("register-fa-state").toggleAttribute("required");
    }


}



// -----------------------------------------------------------------------------
// TABS TOGGLE 
// -----------------------------------------------------------------------------

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

// -----------------------------------------------------------------------------
// PASSWORD SHOW
// -----------------------------------------------------------------------------


if(document.getElementById('showLoginPassword')
){
    document.getElementById('showLoginPassword').onclick = function() {
        var x = document.getElementById('login-password');
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
}


if(document.getElementById('showRegisterPassword')
){
    document.getElementById('showRegisterPassword').onclick = function() {
        var x = document.getElementById('heslo');
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
}

if(document.getElementById('showCartRegisterPassword')
){
    document.getElementById('showCartRegisterPassword').onclick = function() {
        var x = document.getElementById('cart-register-password');
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
}

if(document.getElementById('showResetPassword')
){
    document.getElementById('showResetPassword').onclick = function() {
        var x = document.getElementById('password-email');
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
}


document.addEventListener(
    "ppl-parcelshop-map",
    (event) => {
        // vygenerujeme input prvky
        //console.log("Vybraný parcel shop:", event.detail)
        //alert(JSON.stringify(event.detail.id));
        var ppl_parcel_id = JSON.stringify(event.detail.id);
        var ppl_parcel_code = JSON.stringify(event.detail.code);
        var ppl_parcel_shopname = JSON.stringify(event.detail.parcelshopName);
        var ppl_parcel_name = JSON.stringify(event.detail.name);
        var ppl_parcel_street = JSON.stringify(event.detail.street);
        var ppl_parcel_city = JSON.stringify(event.detail.city);
        var ppl_parcel_zip = JSON.stringify(event.detail.zipCode);
        var ppl_parcel_country = JSON.stringify(event.detail.country);
        
        var ppl_parcel_adr = ppl_parcel_id+"|"+ppl_parcel_code.replace(/['"]+/g, '')+"|"+ppl_parcel_shopname.replace(/['"]+/g, '')+"|"+ppl_parcel_name.replace(/['"]+/g, '')+"|"+ppl_parcel_street.replace(/['"]+/g, '')+"|"+ppl_parcel_city.replace(/['"]+/g, '')+"|"+ppl_parcel_zip.replace(/['"]+/g, '')+"|"+ppl_parcel_country.replace(/['"]+/g, '');
        document.getElementById("ppl_parcel_inp").value = ppl_parcel_adr;
        document.getElementById("ppl_parcel_adr_obal").innerHTML = "Odběrné místo: "+ppl_parcel_name.replace(/['"]+/g, '')+"<br>"+ppl_parcel_street.replace(/['"]+/g, '')+", "+ppl_parcel_city.replace(/['"]+/g, '')+", "+ppl_parcel_zip.replace(/['"]+/g, '')+", "+ppl_parcel_country.replace(/['"]+/g, '');
        
        $('#modal-ppl').modal('hide');
    }
    );
    