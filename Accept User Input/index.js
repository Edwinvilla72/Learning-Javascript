// How to accept user input

// 1. EASY WAY          = window prompt
// 2. PROFESSIONAL WAY  = HTML textbox


// EASY WAY
let username;
//username = window.prompt("What's your username?");

// when the 'mySubmit' button is clicked, it calls this function
document.getElementById("mySubmit").onclick = function(){
    // sets username variable to our input
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello, ${username}!`
    console.log(username);

    typewriterEffect(`Hello, ${username}`, document.getElementById("myH1"));
}

function typewriterEffect(text, element, speed = 100) {
    let i = 0;
    element.textContent = ""; // clear before starting
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();

}