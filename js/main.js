const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.htitle', {})
sr.reveal('.hscroll', { delay: 200 })
sr.reveal('.himg', { origin: 'right', delay: 400 })

sr.reveal('.aimg', { delay: 500 })
sr.reveal('.asubtitle', { delay: 300 })
sr.reveal('.aprofession', { delay: 400 })
sr.reveal('.atext', { delay: 500 })
sr.reveal('.about__social-icon', { delay: 600, interval: 200 })

sr.reveal('.ss', {})
sr.reveal('.skills', { distance: '20px', delay: 50, interval: 100 })
sr.reveal('.simg', { delay: 400 })

sr.reveal('.pimg', { interval: 200 })