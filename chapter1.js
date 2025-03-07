let inncerement = document.getElementById("hi");
let dicerement = document.getElementById("hidi");
let reset = document.getElementById("hire");
let count = 0;
inncerement.onclick = function(){
    count++;
    document.getElementById("demo").textContent = count;
}
dicerement.onclick = function(){
    count--;
    document.getElementById("demo").textContent = count;
}
reset.onclick = function(){
    document.getElementById("demo").textContent = 0;
}