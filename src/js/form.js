import axios from "axios";

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('[data-form]');

    const getData = (els) => {
        const data = new FormData();

        els.forEach(el => {
            data.append(el.name, el.value);
        })

        return data;
    }

    const sendData = (url, els) => {
        axios.post(url, getData(els))
            .then(response => console.log(response))
            .catch(error => console.error(error))
    }

    const checkStatus = (statusEl, checkEl) => {
        if (statusEl.checked) {
            checkEl.removeAttribute('disabled');
        } else {
            checkEl.setAttribute('disabled', '');
        }
    }

    forms.forEach(form => {
        const els = [...form.querySelectorAll('input')];
        const url = form.getAttribute('action');
        const accept = form.querySelector('[data-accept-form]')?.querySelector('[data-accept]');
        const submitBtn = form.querySelector('button[type="submit"]');

        if (accept) {
            checkStatus(accept, submitBtn)
            accept.addEventListener('click', () => {
                checkStatus(accept, submitBtn)
            })
        }

        form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            sendData(url, els)
        })
    })
})
