let html = document.documentElement;
let clientWidth = html.clientWidth || document.body.clientWidth;
html.style.fontSize = clientWidth / 10 + 'px';

window.addEventListener('resize', function() {
    let html = document.documentElement;
    let clientWidth = html.clientWidth || document.body.clientWidth;
    html.style.fontSize = clientWidth / 10 + 'px';
});