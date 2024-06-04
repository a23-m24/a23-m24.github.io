let size, figure, theme, save, html;

window.addEventListener('load', () => {
    size = document.getElementById('size');
    figure = document.getElementById('figure');
    theme = document.getElementById('theme');
    save = document.getElementById('save');
    html = document.querySelector('html');

    size.value = localStorage.size || '4';
    figure.value = localStorage.figure || 'square';
    theme.value = localStorage.theme || 'white';

    save.addEventListener('click', saveChange);

    if (theme.value == 'white') {
        html.setAttribute('data-theme', 'white');
        localStorage.theme = 'white';
    }
    if (theme.value == 'dark') {
        html.setAttribute('data-theme', 'dark');
        localStorage.theme == 'dark'
    }
});

function saveChange() {
    localStorage.size = size.value;
    localStorage.figure = figure.value;
    localStorage.theme = theme.value;
    document.location = "index.html";
}
