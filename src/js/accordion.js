document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('[data-accordion]')

    const toggle = (el) => {
        el.classList.toggle('active')
    }

    accordions.forEach(accordion => {
        accordion.addEventListener('click', ()=> {
            toggle(accordion)
        })
    })
})
