const hero__container = document.querySelector(".hero__container");
const swiper = new Swiper('.hero__swiper', {
    speed: 300,
    pagination: {
        el: '.hero__pagination',
        type: 'bullets',
    clickable: true
    }
});

 document.addEventListener("DOMContentLoaded", function() {
      document.querySelector(".burger").addEventListener("click", function() {
        document.querySelector(".header__nav").classList.toggle("active");
        document.querySelector(".burger").classList.toggle("active");
      })
    
 });


 let tabsBtn =  document.querySelectorAll('.work__btn');
 let tabsItem = document.querySelectorAll ('.tabs__item');

tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) {
            btn.classList.remove('work__btn--active')});
            e.currentTarget.classList.add('work__btn--active');

        tabsItem.forEach(function(element){
            element.classList.remove('tabs__item--active')});
        document.querySelector(`[ data-target="${path}"]`).classList.add('tabs__item--active');
    });
});


let input = document.querySelector(".header__form__input");
let searchOpen = document.querySelector(".form-btn__open");


searchOpen.addEventListener("click", function() {
    document.querySelector(".header__form").classList.add("form__active");
    this.classList.add("active");
    setTimeout(() => input.focus(), 400)
  })
  document.querySelector(".form-close").addEventListener("click", function() {
     let form = document.querySelector(".header__form");
    form.classList.remove("form__active");
      form.querySelector(".header__form__input").value = "";
      document.querySelector(".form-btn__open").classList.remove("active")
      searchOpen.focus()
  });
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".header__form");
    if (!target.closest(".header__form__container")) {
    form.classList.remove("form__active");
      form.querySelector("header__form__input").value = "";
      document.querySelector(".form-btn__open").classList.remove("active")
      searchOpen.focus()
    }
  })

  new Accordion('.accordion-container');