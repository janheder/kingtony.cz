window.lazySizesConfig=window.lazySizesConfig||{},lazySizesConfig.loadHidden=!1,MicroModal.init({openClass:"is-open",disableScroll:!0,disableFocus:!0,awaitOpenAnimation:!0,awaitCloseAnimation:!0,debugMode:!1});var navToggle=document.getElementById("navToggle");navToggle&&document.getElementById("navToggle").addEventListener("click",(function(){document.body.classList.toggle("--nav-active")}));var searchToggle=document.getElementById("searchToggle");searchToggle&&document.getElementById("searchToggle").addEventListener("click",(function(){document.body.classList.toggle("--search-active"),document.getElementById("searchbox").focus()}));var filter=document.getElementById("filterContent");filter&&document.getElementById("filterToggle").addEventListener("click",(function(){document.body.classList.toggle("--filter-active")})),document.getElementById("darkBackdrop").addEventListener("click",(function(){document.body.classList.remove("--nav-active","--search-active","--filter-active")}));var userToggle=document.getElementById("userToggle");userToggle&&userToggle.addEventListener("click",(function(){document.body.classList.toggle("--user-active")})),document.body.addEventListener("click",(function(e){e.target.classList.contains("search__input")||document.getElementById("searchAutocomplete").classList.contains("--active")&&document.getElementById("searchAutocomplete").classList.remove("--active")}));var productGallery=document.getElementById("productGallery");function initializeSteppers(){document.querySelectorAll(".stepper").forEach((stepper=>{const input=stepper.querySelector("input"),inputstep=stepper.querySelector("input").getAttribute("step"),incrementButton=stepper.querySelector(".plus"),decrementButton=stepper.querySelector(".minus");var event=new Event("change");incrementButton.addEventListener("click",(()=>{input.value=parseInt(input.value)+parseInt(inputstep),input.dispatchEvent(event)})),decrementButton.addEventListener("click",(()=>{const currentValue=parseInt(input.value);currentValue>parseInt(inputstep)&&(input.value=currentValue-parseInt(inputstep)),input.dispatchEvent(event)}))}))}function imageClick(imageNumber){setTimeout((()=>{const sliderElement=document.getElementById("pgalleryModal");swiffyslider.slideTo(sliderElement,imageNumber),document.body.classList.add("--activeProductCarousel"),swiffyslider.onSlideEnd(sliderElement,(()=>sliderElement.querySelector(".slider-container").focus()))}),300)}function thumbHover(imageNumber){const sliderElement=document.getElementById("pgallery");swiffyslider.slideTo(sliderElement,imageNumber)}productGallery&&(document.getElementById("productGalleryBackdrop").addEventListener("click",(function(){document.body.classList.remove("--activeProductCarousel")})),document.getElementById("productGalleryClose").addEventListener("click",(function(){document.body.classList.remove("--activeProductCarousel")}))),initializeSteppers(),document.addEventListener("DOMContentLoaded",(function(){if(document.getElementById("homecarousel")){const indexCarousel=new Siema({selector:"#homecarousel",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,duration:250,loop:!0,rtl:!1,onInit:()=>{},onChange:()=>{}});setInterval((()=>indexCarousel.next()),7e3),document.querySelector(".prev").addEventListener("click",(()=>indexCarousel.prev())),document.querySelector(".next").addEventListener("click",(()=>indexCarousel.next()))}}));var navitem=document.querySelectorAll(".expandable .nav-link");for(let loop=0;loop<navitem.length;loop++)document.getElementById("subToggle-"+loop).addEventListener("click",(function(e){document.getElementById("sub-"+loop).classList.toggle("--active")}));$(".nav-linkDesktop").hover((function(){setTimeout(function(){$(this).closest(".nav-item.expandable").addClass("result_hover")}.bind(this),600)}),(function(){setTimeout(function(){$(this).closest(".nav-item.expandable").removeClass("result_hover")}.bind(this),600)}));var variants=document.getElementById("variants");function openTab(evt,cityName){var i,tabcontent,tablinks;for(tabcontent=document.getElementsByClassName("tabcontent"),i=0;i<tabcontent.length;i++)tabcontent[i].style.display="none";for(tablinks=document.getElementsByClassName("tablinks"),i=0;i<tablinks.length;i++)tablinks[i].className=tablinks[i].className.replace(" active","");document.getElementById(cityName).style.display="block",evt.currentTarget.className+=" active"}variants&&document.querySelector(".variants__list").addEventListener("click",(function(e){this.classList.toggle("--active");var target=e.target;e.currentTarget.querySelector(".--active")&&e.currentTarget.querySelector(".--active").classList.remove("--active");target.querySelector("input").checked=!0;target.classList.add("--active");var code=target.dataset.code,stock=target.dataset.stock,stockstatus=target.dataset.stockstatus,priceold=target.dataset.priceold,price=target.dataset.price,pricevat=target.dataset.pricevat;document.getElementById("product-code").innerHTML=code,document.getElementById("stock").dataset.status=stockstatus,document.getElementById("stock").innerHTML=stock,document.getElementById("price-old").innerHTML=null==priceold?"":priceold,document.getElementById("price-main").innerHTML=price,document.getElementById("price-vat").innerHTML=pricevat})),document.getElementById("register-form")&&(document.getElementById("faToggle").onclick=function(){document.getElementById("register-fa-name").toggleAttribute("required"),document.getElementById("register-fa-street").toggleAttribute("required"),document.getElementById("register-fa-street-n").toggleAttribute("required"),document.getElementById("register-fa-city").toggleAttribute("required"),document.getElementById("register-fa-psc").toggleAttribute("required"),document.getElementById("register-fa-state").toggleAttribute("required")}),document.getElementById("showLoginPassword")&&(document.getElementById("showLoginPassword").onclick=function(){var x=document.getElementById("login-password");"password"===x.type?x.type="text":x.type="password"}),document.getElementById("showRegisterPassword")&&(document.getElementById("showRegisterPassword").onclick=function(){var x=document.getElementById("heslo");"password"===x.type?x.type="text":x.type="password"}),document.getElementById("showCartRegisterPassword")&&(document.getElementById("showCartRegisterPassword").onclick=function(){var x=document.getElementById("cart-register-password");"password"===x.type?x.type="text":x.type="password"}),document.addEventListener("ppl-parcelshop-map",(event=>{var ppl_parcel_id=JSON.stringify(event.detail.id),ppl_parcel_code=JSON.stringify(event.detail.code),ppl_parcel_shopname=JSON.stringify(event.detail.parcelshopName),ppl_parcel_name=JSON.stringify(event.detail.name),ppl_parcel_street=JSON.stringify(event.detail.street),ppl_parcel_city=JSON.stringify(event.detail.city),ppl_parcel_zip=JSON.stringify(event.detail.zipCode),ppl_parcel_country=JSON.stringify(event.detail.country),ppl_parcel_adr=ppl_parcel_id+"|"+ppl_parcel_code.replace(/['"]+/g,"")+"|"+ppl_parcel_shopname.replace(/['"]+/g,"")+"|"+ppl_parcel_name.replace(/['"]+/g,"")+"|"+ppl_parcel_street.replace(/['"]+/g,"")+"|"+ppl_parcel_city.replace(/['"]+/g,"")+"|"+ppl_parcel_zip.replace(/['"]+/g,"")+"|"+ppl_parcel_country.replace(/['"]+/g,"");document.getElementById("ppl_parcel_inp").value=ppl_parcel_adr,document.getElementById("ppl_parcel_adr_obal").innerHTML="Odběrné místo: "+ppl_parcel_name.replace(/['"]+/g,"")+"<br>"+ppl_parcel_street.replace(/['"]+/g,"")+", "+ppl_parcel_city.replace(/['"]+/g,"")+", "+ppl_parcel_zip.replace(/['"]+/g,"")+", "+ppl_parcel_country.replace(/['"]+/g,""),$("#modal-ppl").modal("hide")}));
//# sourceMappingURL=maps/scripts.js.map
