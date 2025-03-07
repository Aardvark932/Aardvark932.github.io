document.addEventListener("DOMContentLoaded", function() {
    let text = document.querySelector(".wobbly-text");
    let letters = text.innerText.split("");

    text.innerHTML = ""; 

    letters.forEach(letter => {
        let span = document.createElement("span");
        span.innerText = letter;
        span.style.animationDuration = (0.4 + Math.random() * 0.2) + "s"; // Slightly slower random speeds
        span.style.animationDelay = (Math.random() * 0.15) + "s"; // More natural delay
        text.appendChild(span);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let text = document.querySelector(".hidden-message");
    let words = text.innerText.split(/(\s+)/); // Splits words while keeping spaces

    text.innerHTML = ""; 

    words.forEach(word => {
        let span = document.createElement("span");
        span.innerText = word;

        // Keep spaces visible
        if (word === " ") {
            span.innerHTML = "&nbsp;";
        }

        span.style.animationDuration = (1.3 + Math.random() * 0.4) + "s"; 
        span.style.animationDelay = (Math.random() * 0.2) + "s"; 
        text.appendChild(span);
    });
});

document.getElementById("leaveButton").addEventListener("click", function() {
    window.location.href = ""; // Change this to your actual page
});