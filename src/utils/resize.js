var html = document.documentElement;
var clientWidth = html.clientWidth || document.body.clientWidth;
html.style.fontSize = clientWidth / 10 + 'px';

window.addEventListener('resize', function() {
    var html = document.documentElement;
    var clientWidth = html.clientWidth || document.body.clientWidth;
    html.style.fontSize = clientWidth / 10 + 'px';
});