
window.onload = function() {
let dot = document.getElementsByClassName("qodef-side-menu-icon")
let dotArray = [];

pushDot(document.querySelectorAll('#dots .qodef-dot'));

function pushDot(nextDot){
dotArray.push(nextDot);
}
console.log(dotArray);

}