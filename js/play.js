let n, fig, playArea, table, time, cl, html;
let back, pause, restart, gray;
let col = ['var(--col1)', 'var(--col2)'];
let divs, winTable;
let played1 = false, played2 = true, win = false;
let timer = 0, click = 0;
var startPlay;
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

    localStorage.time4 = localStorage.time4 || 0;
    localStorage.time6 = localStorage.time6 || 0;
    localStorage.time8 = localStorage.time8 || 0;
    localStorage.click4 = localStorage.click4 || 0;
    localStorage.click6 = localStorage.click6 || 0;
    localStorage.click8 = localStorage.click8 || 0;
    n = localStorage.size;
    fig = localStorage.figure;

    winTable = document.getElementById('win');
    restart = document.getElementById('restart');
    restart1 = document.getElementById('restart1');
    gray = document.getElementById('gray');
    back = document.getElementById('back');
    back1 = document.getElementById('back1');
    pause = document.getElementById('pause');
    playArea = document.getElementById('playArea');
    time = document.getElementById('time');
    timeWin = document.getElementById('timeWin');
    cl = document.getElementById('cl');
    clWin = document.getElementById('clWin');

    pause.addEventListener('click', stop);
    back.addEventListener('click', backPage);
    back1.addEventListener('click', backPage);
    restart.addEventListener('click', restartGame);
    restart1.addEventListener('click', restartGame);

    time.innerHTML += ' 0.0';
    cl.innerHTML += ' 0';

    if (n == 2) {
        playArea.style.gridTemplateColumns = '1fr 1fr';
    }
    if (n == 4) {
        playArea.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
    }
    if (n == 6) {
        playArea.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';
    }
    if (n == 8) {
        playArea.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
    }

    createEl();
    divs = playArea.childNodes;
});

function createEl() {
    for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div');
        if (fig == 'circle') {
            div.style.borderRadius = '50%';
        }
        let size;
        if (window.innerHeight > window.innerWidth) {
            size = `${65 / n}cqw`;
        }
        else {
            size = `${65 / n}cqh`;
        }
        div.style.height = size;
        div.style.width = size;
        div.style.backgroundColor = col[Math.floor(Math.random() * 2)];
        div.addEventListener('click', clickDiv);
        playArea.append(div);
    }
}
function clickDiv() {
    if (win) return;
    if (!played1) {
        startPlay = setInterval(() => {
            timer += 0.1;
            time.innerHTML = `Время: ${timer.toFixed(1)}`;
        }, 100);
        gray.style.display = 'none';
        played1 = true;
        played2 = true;
    }
    click++;
    cl.innerHTML = `Нажатий: ${click}`
    let j, k = 1;
    for (let i = 0; i < n * n; i++) {
        if (this == divs[i]) {
            j = i;
            break;
        }
    }
    while (j - n * k >= 0) {
        if (divs[j - n * k].style.backgroundColor == 'var(--col1)') {
            divs[j - n * k].style.backgroundColor = 'var(--col2)';
        }
        else {
            divs[j - n * k].style.backgroundColor = 'var(--col1)';
        }
        k++;
    }
    k = -1;
    while (j - n * k < n * n) {
        if (divs[j - n * k].style.backgroundColor === 'var(--col1)') {
            divs[j - n * k].style.backgroundColor = 'var(--col2)';
        }
        else {
            divs[j - n * k].style.backgroundColor = 'var(--col1)';
        }
        k--;
    }
    j = Math.floor(j / n);
    j *= n;
    for (let i = j; i < j + (n - 0); i++) {
        if (divs[i].style.backgroundColor == 'var(--col1)') {
            divs[i].style.backgroundColor = 'var(--col2)';
        }
        else {
            divs[i].style.backgroundColor = 'var(--col1)';
        }
    }

    isWin();
}

function stop() {
    console.log('click');
    if (played1) {
        if (played2) {
            clearInterval(startPlay);
            gray.style.display = 'block';
            played2 = false;
            pause.innerHTML = `<img src="images/pause_play_icon_214327.png">`
        }
        else {
            startPlay = setInterval(() => {
                timer += 0.1;
                time.innerHTML = `Время: ${timer.toFixed(1)}`;
            }, 100);
            gray.style.display = 'none';
            played2 = true;
            pause.innerHTML = `<img src="images/1486348532-music-play-pause-control-go-arrow_80458.png">`;
        }
    }
}
function backPage() {
    document.location = "index.html";
}

function restartGame() {
    for (let i = n * n - 1; i >= 0; i--) {
        divs[i].remove();
    }
    win = false;
    createEl();
    if (played1) {
        timer = 0.0;
        click = 0;
        cl.innerHTML = `Нажатий: ${click}`
        time.innerHTML = `Время: ${timer.toFixed(1)}`;
        clearInterval(startPlay);
    }
    played1 = false;
    played2 = true;
    winTable.style.display = 'none';
}

function isWin() {

    for (let i = 1; i < n * n; i++) {
        if (divs[i].style.backgroundColor != divs[i - 1].style.backgroundColor) {
            return false;
        }
    }
    win = true;
    pause.disabled = true;
    clearInterval(startPlay);
    timeWin.innerHTML = ('Время: ' + timer.toFixed(1));
    clWin.innerHTML = ('Количество нажатий: ' + click);
    if (n == 4) {
        if (timer.toFixed(1) < localStorage.time4 || localStorage.time4 == 0) {
            timeWin.innerHTML = ('Новый рекорд по времени: ' + timer.toFixed(1));
            localStorage.time4 = timer.toFixed(1);
        }

        if (click < localStorage.click4 || localStorage.click4 == 0) {
            clWin.innerHTML = ('Новый рекорд по количеству нажатий: ' + click);
            localStorage.click4 = click;
        }
    }
    if (n == 6) {
        if (timer.toFixed(1) < localStorage.time6 || localStorage.time6 == 0) {
            timeWin.innerHTML = ('Новый рекорд по времени: ' + timer.toFixed(1));
            localStorage.time6 = timer.toFixed(1);
        }

        if (click < localStorage.click6 || localStorage.click6 == 0) {
            clWin.innerHTML = ('Новый рекорд по количеству нажатий: ' + click);
            localStorage.click6 = click;
        }
    }
    if (n == 8) {
        if (timer.toFixed(1) < localStorage.time8 || localStorage.time8 == 0) {
            timeWin.innerHTML = ('Новый рекорд по времени: ' + timer.toFixed(1));
            localStorage.time8 = timer.toFixed(1);
        }

        if (click < localStorage.click8 || localStorage.click8 == 0) {
            clWin.innerHTML = ('Новый рекорд по количеству нажатий: ' + click);
            localStorage.click8 = click;
        }
    }
    winTable.style.display = 'block';
}
