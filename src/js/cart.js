var cart = document.getElementsByClassName('cart-content');

if (cart.length>0){


    var vatValue = 1.21;

    /* CART 1 */

    function addInputListener(input) {

        let row = input.parentElement.parentElement.parentElement;
        
        let overallPriceElement = row.querySelector('.cart-item-price span');
        let price = parseFloat(row.querySelector('.cart-item-price-pc span').innerText.replace(/,/g, '.')); 




        let calcEvent = function() {

            if (this.value > 0) {
                overallPriceElement.innerText = (price * this.value).toFixed(0).toString();
            } else {
                overallPriceElement.innerText = "0";
            }



            let pricegoods = document.querySelectorAll('.cart-item-price span');
            let result = Array.from(pricegoods).reduce((sum, spanElm) => sum + Number(spanElm.textContent), 0);

            let result_f = result.toFixed(0).toString().replace(/\./g, ',');
            document.getElementById('goodsprice').innerText = result_f;
            document.getElementById('goodspriceDPH').innerText = ((result_f)*vatValue).toFixed(0);
        

        };
        

        input.addEventListener('change', calcEvent);
        calcEvent.call(input);

    }

    function recountCart(){
        let inputs = document.querySelectorAll('.cart-item-stepper .num_items');

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            addInputListener(input);
        }
    
    }
    recountCart();





    /* CART 2 */
    

    function recountDeliveryCart(){
    var elms = document.querySelectorAll('.cart-table-shipping-item');

    function deliveryCart() {
        let pricedel = document.querySelectorAll('.cart-table-shipping-item input:checked ~ .cart-table-shipping-price span');
        let deliveryprice = Array.from(pricedel).reduce((sum, spanElm) => sum + Number(spanElm.textContent), 0); 

        
        var delp = (deliveryprice).toFixed(0);
        document.getElementById('delprice').innerText = delp;        


        var productprice = parseFloat(document.getElementById('goodsprice').innerText.replace(/,/g, '.'));
        var pricecart2 = (deliveryprice + productprice).toFixed(0);
        document.getElementById('sumprice').innerText = pricecart2;
        document.getElementById('vatsumprice').innerText = ((pricecart2)*vatValue).toFixed(0);
    };

    for (var ia = 0; ia < elms.length; ia++) {
        elms[ia].addEventListener('click', deliveryCart, false);
    }
    }
    recountDeliveryCart();





    /* CART 3 */
    if(document.getElementById('cart-form-user')){
        function toggleReg() {
            document.getElementById("cart-register-password").toggleAttribute("required"),
            document.getElementById("cart-register-password").toggleAttribute("disabled")
        }
        document.getElementById("cart-register").onclick = function() {
            toggleReg();
        }
        if(document.getElementById("cart-fa-address")){
            document.getElementById("cart-fa-address").onclick = function() {
                for (var e = document.querySelectorAll("#cart-fa-address + div > .form-group:not(.--checkbox) > input:not(#cart-fa-name)"), t = 0; t < e.length; ++t)
                    e[t].toggleAttribute("required")
            }
        }

        document.getElementById("cart-fa-company").onclick = function() {
            for (var e = document.querySelectorAll("#cart-fa-company + div input"), t = 0; t < e.length; ++t){
                e[t].toggleAttribute("required");
            }
            document.getElementById("fakturacni_jmeno").toggleAttribute("required");
            document.getElementById("dic").removeAttribute("required");
        } 
    }






}