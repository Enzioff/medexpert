document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('[data-menu-open]')
    const mobileMenu = document.querySelector('[data-menu]')

    const closeMenu = () => {
        mobileMenu.classList.remove('active')
        openButton.classList.remove('active')
    }

    openButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
        openButton.classList.toggle('active')
    })

    window.addEventListener('click', (evt) => {
        if (!mobileMenu.contains(evt.target) && evt.target !== openButton) {
            closeMenu()
        }
    })

})