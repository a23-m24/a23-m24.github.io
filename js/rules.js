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
});