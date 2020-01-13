
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
tl.from(".header__group", { x: "-100", opacity: 0 }).from(".nav", { opacity: 0, duration: 1 });
//ANIMATION


/// INTERSECTION OBSERVER for SCROLLING ///

const faders = getElements(".fade-in");
const sliders = getElements(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
}

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target)
        }
    })
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})

console.log(sliders)
/// INTERSECTION OBSERVER for SCROLLING ///
