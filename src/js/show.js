document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('[data-show-open]');
    const showBlocs = document.querySelectorAll('[data-show-block]');

    const close = (button, el) => {
        if (!button) return
        button.addEventListener('click', () => {
            el.classList.remove('active');
        });
    };

    openButtons.forEach(button => {
        const dataAttr = button.dataset.showOpen;
        const currentShow = Array.from(showBlocs).find(el => el.dataset.showBlock === dataAttr);
        if (!currentShow) return;
        const currentShowCloseBtn = currentShow.querySelector('[data-show-close]');

        button.addEventListener('click', () => {
            if (!currentShow) return;
            currentShow.classList.toggle('active');
            close(currentShowCloseBtn, currentShow);
        });
    });
});