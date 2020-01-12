
//Grabbig DOM ELEMENTS
const getElement = (element) => { return document.querySelector(`${element}`) };
const getElements = (elements) => { return document.querySelectorAll(`${elements}`) };
//Grabbig DOM ELEMENTS

//Setting invisibility to elements

getElement(".header__group").classList.add("invisible");

getElement(".nav__logo").classList.add("invisible");

getElements(".nav__item").forEach(item => {
    item.classList.add("invisible")
})

//Setting invisibility to elements


//ANIMATION

const tl = gsap.timeline();
tl.to(".nav__logo", { opacity: 1 }).to(".nav__item", { opacity: 1, stagger: 0.15 })
    .to(".header__group", { opacity: 1, duration: 1 })
    .from(".header__group", { scaleX: 1.05, scaleY: 1.05, ease: Power1.easeOut });

//ANIMATION
