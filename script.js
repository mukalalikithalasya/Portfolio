/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu Show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.querySelector('.header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if(navLink){
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                navLink.classList.add('active-link')
            }else{
                navLink.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DYNAMIC YEAR ===============*/
document.getElementById('year').textContent = new Date().getFullYear();

/*=============== REVEAL ANIMATIONS ===============*/
function reveal() {
    var reveals = document.querySelectorAll(".section");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);
// Initial check
reveal();

// Add 'reveal' class to all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
});

/*=============== CERTIFICATE MODAL ===============*/
const modal = document.getElementById('certificate-modal'),
      modalBody = document.getElementById('certificate-modal-body'),
      modalClose = document.getElementById('certificate-modal-close'),
      certificateLinks = document.querySelectorAll('.certificate__link');

if(certificateLinks && modal){
    certificateLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Get the certificate content from the parent item
            const certificateItem = link.closest('.certificate__item');
            const certificateContent = certificateItem.querySelector('.certificate__img-container').cloneNode(true);
            
            // Clear previous content and add new
            modalBody.innerHTML = '';
            modalBody.appendChild(certificateContent);
            
            // Show modal
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
}

if(modalClose){
    modalClose.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'initial'; // Restore scrolling
    });
}

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'initial';
    }
});

/*=============== PROJECT CARD CLICKABLE ===============*/
const projectCards = document.querySelectorAll('.projects__card');

projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // If the click is on the button itself or a child of the button, the <a> tag will handle it.
        // If the click is anywhere else on the card, we trigger the click.
        if (!e.target.closest('.projects__button')) {
            const link = card.querySelector('.projects__button').getAttribute('href');
            window.open(link, '_blank');
        }
    });
});

