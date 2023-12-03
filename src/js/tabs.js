document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelectorAll('[data-tabs-head]')
    const content = document.querySelectorAll('[data-tabs-content]')

    const removeClass = (element) => {
        element.forEach(el => {
            el.forEach(elem => elem.classList.remove('active'))
        })
    }

    header.forEach((headEl, idx, arr) => {
        headEl.addEventListener('click', () => {
            const currentIdx = headEl.dataset.tabsHead;
            const currentContent = Array.from(content).find(el => el.dataset.tabsContent === currentIdx);

            removeClass([arr, content])

            headEl.classList.add('active');
            currentContent ? currentContent.classList.add('active') : null;
        })
    })
})