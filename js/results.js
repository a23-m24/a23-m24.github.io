let t4, c4, t6, c6, t8, c8;
window.addEventListener('load', () => {
    html = document.querySelector('html');
    if (localStorage.theme == 'white') {
        html.setAttribute('data-theme', 'white');
        localStorage.theme = 'white';
    }
    if (localStorage.theme == 'dark') {
        html.setAttribute('data-theme', 'dark');
        localStorage.theme == 'dark'
    }
    document.getElementById('t4').innerHTML = "Время: " + localStorage.time4 || 0;
    document.getElementById('c4').innerHTML = "Количество нажатий: " + localStorage.click4 || 0;
    document.getElementById('t6').innerHTML = "Время: " + localStorage.time6 || 0;
    document.getElementById('c6').innerHTML = "Количество нажатий: " + localStorage.click6 || 0;
    document.getElementById('t8').innerHTML = "Время: " + localStorage.time8 || 0;
    document.getElementById('c8').innerHTML = "Количество нажатий: " + localStorage.click8 || 0;
});