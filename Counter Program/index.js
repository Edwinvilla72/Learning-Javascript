// Counter script

let counter = 0;

document.getElementById("decrement").onclick = function(){
    counter--;
    document.getElementById("myValue").textContent = counter;
}

document.getElementById("reset").onclick = function() {
    counter = 0;
    document.getElementById("myValue").textContent = counter;
}

document.getElementById("increment").onclick = function(){
    counter++;
    document.getElementById("myValue").textContent = counter;
}
