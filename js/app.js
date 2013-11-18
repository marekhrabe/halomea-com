var _gaq=[['_setAccount','UA-43255070-1'],['_trackPageview']];

window.onload = function () {
    document.body.classList.add('loaded');
};

var monkey = document.getElementById('monkey');
var first = true;
var animating = false;
var h1 = document.getElementsByTagName('h1')[0];
var quotes = ['Halo Mea!'];
var last = null;

new Firebase('https://halomea.firebaseio.com/').on('value', function (data) {
    var q = data.val();
    for (var i in q) {
        quotes.push(q[i]);
    }
    last = quotes.length - 1;
});

document.getElementById('vuit').addEventListener('click', function () {
    _gaq.push(['_trackEvent', 'Button', 'Pressed', 'Just Vu It']);
    if (animating) {
        return false;
    }

    var quote = Math.random() > .3 ? last-- : Math.floor(quotes.length * Math.random());

    animating = true;
    monkey.classList.remove('active');
    h1.classList.remove('active');
    setTimeout(function () {
        monkey.classList.add('active');
    }, 0);
    setTimeout(function () {
        h1.innerText = quotes[quote];
        h1.classList.add('active');
        monkey.classList.remove('active');
        animating = false;
    }, 2000);
});

var light = document.getElementById('light');
document.getElementById('switch').addEventListener('click', function () {
    light.classList.toggle('on');
});
