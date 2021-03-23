
window.onload = function() {
let dot = document.querySelectorAll('#dots .qodef-dot');
let age = [24,26,34,30,80,50,40,46,59,88,70,64,52,43,34,29,14,16,19,22,34];
let location = ["New York","Los Angeles", "Miami", "Houston", "Richmond"];
let occupation = ["Plumber","Web Developer", "Construction", "Teacher"];

function randomNumber(arrayLength){
 return   Math.floor(Math.random() * arrayLength);
}

for (i = 0; i < dot.length; i++){

let dataObject = {
    objAge: age[randomNumber(age.length)],
    objLocation: location[randomNumber(location.length)],
    objOccupation: occupation[randomNumber(occupation.length)]
}

dot[i].setAttribute("age", dataObject.objAge);
dot[i].setAttribute("location", dataObject.objLocation);
dot[i].setAttribute("occupation", dataObject.objOccupation);

}

console.log(dot);

}