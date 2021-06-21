function arrowautoPlay() {
    var myAuto1 = document.getElementById('myaudio1');
    myAuto1.play();
}
function babyautoPlay() {
    var myAuto2 = document.getElementById('myaudio2');
    myAuto2.play();
}
function bombautoPlay() {
    var myAuto3 = document.getElementById('myaudio3');
    myAuto3.play();
}
function bicycleautoPlay() {
    var myAuto4 = document.getElementById('myaudio4');
    myAuto4.play();
}
function coughautoPlay() {
    var myAuto5 = document.getElementById('myaudio5');
    myAuto5.play();
}
var button1 = document.getElementById('button1');
button1.addEventListener('click', function () {
    arrowautoPlay();
})
var button2 = document.getElementById('button2');
button2.addEventListener('click', function () {
    babyautoPlay();
})
var button3 = document.getElementById('button3');
button3.addEventListener('click', function () {
    bombautoPlay();
})
var button4 = document.getElementById('button4');
button4.addEventListener('click', function () {
    bicycleautoPlay();
})
var button5 = document.getElementById('button5');
button5.addEventListener('click', function () {
    coughautoPlay();
})