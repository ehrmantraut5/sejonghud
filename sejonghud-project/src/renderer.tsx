const {ipcRenderer} = require('electron')

window.onload = () => {
    const btnEl = document.getElementById('btn')

    btnEl?.addEventListener('click', (evt) => {
        const inputValue = document.getElementById('text-input').value
    })
}