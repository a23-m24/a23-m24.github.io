let info, go, results, settings, rules, html;
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

    info = document.getElementById('info');
    go = document.getElementById('go');
    results = document.getElementById('results');
    settings = document.getElementById('settings');
    rules = document.getElementById('rules');
    go.addEventListener('click', () => { document.location = "playArea.html" });
    results.addEventListener('click', () => { document.location = "results.html" });
    settings.addEventListener('click', () => { document.location = "settings.html" });
    rules.addEventListener('click', () => { document.location = "rules.html" });
    localStorage.size = localStorage.size || '4';
    localStorage.figure = localStorage.figure || 'square';
    info.addEventListener('mouseenter', infoCat);
});

async function infoCat() {
    try {
        fetch('https://meowfacts.herokuapp.com/')
            .then(res => res.json())
            .then(data => {
                console.log(data.data[0]);
                info.setAttribute('title', data.data[0]);
            })
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}