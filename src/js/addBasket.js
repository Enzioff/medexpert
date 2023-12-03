import axios from "axios";

document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.querySelector('[data-buy]');
    if (!buyButton) return;
    const alert = document.querySelector('[data-alert]');
    let timeout = null;
    const url = '';

    const getData = (id) => {
        const data = new FormData();
        data.append('id', id)
        return data;
    }

    const showAlert = () => {
        if (!alert) return
        alert.classList.add('active');
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            alert.classList.remove('active')
        }, 2000)
    }

    const sendData = () => {
        axios.post(url, getData())
            .then(response => {
                showAlert()
            })
            .catch(error => console.error(error));
    }

    buyButton.addEventListener('click', () => {
        sendData();
    })
})