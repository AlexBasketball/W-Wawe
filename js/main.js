document.addEventListener('DOMContentLoaded', ()=> {
    const searchBtn = document.querySelector('.search');
    const headerForm = document.querySelector('.header-form');   
    
    searchBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        headerForm.classList.add('active');
        searchBtn.classList.add('hidden');
    });

    headerForm.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    document.addEventListener('click', function(){
        headerForm.classList.remove('active');
        searchBtn.classList.remove('hidden');
    });

    const modal = document.querySelector('.header-modal');
    const modalWindow = document.querySelector('.header-modal__window');
    const modalBtn = document.querySelectorAll('.login');
    const modalClose = document.querySelector('.header-modal__close'); 

    modalBtn.forEach(function(item) {
        item.addEventListener('click', () => {
            modal.classList.remove('hidden');

            modalClose.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        })
    })

    modalWindow.addEventListener('click', function(e){
        e.stopPropagation();
    });

    modal.addEventListener('click', () => {
        modal.classList.add('hidden');
    })

    document.addEventListener('keydown', function(e){
        if (e.key === 'Escape') {
            modal.classList.add('hidden');
        };
    });


    const podcastsBtn = document.querySelector('.podcasts-btn');
    const podcastsItemsSpec = document.querySelectorAll('.podcasts-list__item_spec');

    podcastsBtn.addEventListener('click', () => {
        podcastsItemsSpec.forEach(function(item) {
            let mm = gsap.matchMedia();

            if (item.classList.contains('hide')) {
                mm.add('(max-width: 610px)', () => {
                    gsap.fromTo(item, {opacity: 0, visibility: 0, height: 0}, {opacity: 1, visibility: 1, height: item.scrollHeight, duration: 0.5})
                })
                gsap.fromTo(item, {opacity: 0, visibility: 0, height: 0}, {opacity: 1, visibility: 1, height: item.scrollHeight, duration: 0.5})
                item.classList.remove('hide');
                podcastsBtn.textContent = 'Скрыть';
            } else {
                mm.add('(max-width: 610px)', () => {
                    gsap.fromTo(item, {opacity: 1, visibility: 1, height: item.scrollHeight}, {opacity: 0, visibility: 0, height: 0, duration: 0.5})
                })
                gsap.fromTo(item, {opacity: 1, visibility: 1, height: item.scrollHeight}, {opacity: 0, visibility: 0, height: 0, duration: 0.5})
                podcastsBtn.textContent = 'Ещё подкасты'; 
                item.classList.add('hide');                                  
            }
        });     
    });


    const broadcastDropdownBtn = document.querySelector('.broadcast-dropdown__btn');
    const broadcastDropdownList = document.querySelector('.broadcast-dropdown__list');
    const broadcastDropdownListItem = document.querySelectorAll('.broadcast-dropdown__item');

    broadcastDropdownBtn.addEventListener('click', () => {
        broadcastDropdownList.classList.toggle('hidden');
    });

    broadcastDropdownListItem.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            broadcastDropdownBtn.textContent = this.textContent;
            broadcastDropdownList.classList.add('hidden');
        });
    });

    document.addEventListener('click', function(e) {
        if (e.target !== broadcastDropdownBtn) {
            broadcastDropdownList.classList.add('hidden');
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            broadcastDropdownList.classList.add('hidden');
        }
    });


    const accordeons = document.querySelectorAll('.accordeon__item');

    accordeons.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const content = self.querySelector('.accordeon__content');

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        })
    })


    const guestModalHeaders = document.querySelectorAll('[data-guest]');
    const guestModalBoxes = document.querySelectorAll('[data-guest-content]');

    guestModalHeaders.forEach(function(item) {
        item.classList.remove('active');
        item.addEventListener('click', function(){
            this.classList.add('active');

            guestModalBoxes.forEach(function(item) {
            item.classList.add('hidden');
        })

            const guestModalBox = document.querySelector('#' + this.dataset.guest);
            guestModalBox.classList.remove('hidden');
        })
    })

    const swiper = new Swiper ('.swiper', {
        direction: 'horizontal', 
        slidesPerView: 4,
        spaceBetween: 30,

        navigation: {
            nextEl: '.swiper-custom-next',
            prevEl: '.swiper-custom-prev',
          },

        breakpoints: {
            320: {
                slidesPerView: 2,
            },

            930: {
                slidesPerView: 3,
            },

            1243: {
                slidesPerView: 4,
            }
        }  

    })

    const burgerStickTop = document.querySelector('.header-burger__stick--top');
    const burgerStickMid = document.querySelector('.header-burger__stick--middle');
    const burgerStickBottom = document.querySelector('.header-burger__stick--bottom');
    const burgerBtn = document.querySelector('.header-burger');
    const burgerNav = document.querySelector('.burger-holder');
    const burgerNavLink = document.querySelectorAll('.burger-nav__link');

    burgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        burgerStickTop.classList.toggle('rotate-top');
        burgerStickMid.classList.toggle('hide');
        burgerStickBottom.classList.toggle('rotate-bottom');
        burgerNav.classList.toggle('hidden');
    })

    burgerNav.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    burgerNavLink.forEach(function(item) {
        item.addEventListener('click', () => {
            burgerNav.classList.add('hidden');
            burgerStickTop.classList.remove('rotate-top');
            burgerStickMid.classList.remove('hide');
            burgerStickBottom.classList.remove('rotate-bottom');
        })
    })

    document.addEventListener('click', () => {
        burgerNav.classList.add('hidden')
        burgerStickTop.classList.remove('rotate-top');
        burgerStickMid.classList.remove('hide');
        burgerStickBottom.classList.remove('rotate-bottom');
    })

    const headerBottomBtn = document.querySelector('.header-bottom-mobile-btn');
    const headerBottomSvg = document.querySelector('.header-bottom-mobile-btn__svg');
    const headerBottomMibileBlock = document.querySelector('.header-bottom-mobile');

    headerBottomBtn.addEventListener('click', () => {
        headerBottomSvg.classList.toggle('rotate');
        headerBottomMibileBlock.classList.toggle('hidden');
    })
});

