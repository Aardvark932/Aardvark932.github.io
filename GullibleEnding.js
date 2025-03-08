let progressBar = document.getElementById("progress");
let percentageText = document.getElementById("percentage");
let loadingText = document.getElementById("loading-text");
let message = document.getElementById("message");

let progress = 0;
let messages = [
    "Analyzing cognitive functions...",
    "Measuring problem-solving skills...",
    "Evaluating logical reasoning...",
    "Processing final results..."
];

let index = 0;

let interval = setInterval(() => {
    if (progress < 100) {
        progress += Math.floor(Math.random() * 10) + 5; // Randomized progress increments
        if (progress > 100) progress = 100;

        progressBar.style.width = progress + "%";
        percentageText.innerText = progress + "%";

        if (progress % 25 === 0 && index < messages.length) {
            loadingText.innerText = messages[index];
            index++;
        }
    } else {
        clearInterval(interval);
        loadingText.style.display = "none";
        percentageText.style.display = "none";
        message.classList.remove("hidden");
        message.innerText = "Congratulations! You've waited long enough to prove... you're incredibly gullible! 😂";
    }
}, 800);
