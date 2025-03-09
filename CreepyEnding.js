document.addEventListener("DOMContentLoaded", function () {
    const words = ["GET OUT", "RUN", "GET OUT", "RUN", "GET OUT", "RUN"];
    const numWords = 20; // Number of times the words appear
    const container = document.body;

    for (let i = 0; i < numWords; i++) {
        let word = document.createElement("div");
        word.textContent = words[Math.floor(Math.random() * words.length)];
        word.classList.add("scary-text");

        word.style.left = Math.random() * 90 + "vw";
        word.style.top = Math.random() * 90 + "vh";
        word.style.position = "absolute";
        word.style.fontSize = Math.random() * 3 + 2 + "rem"; // Random sizes

        container.appendChild(word);

        animateShake(word);
    }

    function animateShake(element) {
        setInterval(() => {
            let x = (Math.random() - 0.5) * 8;
            let y = (Math.random() - 0.5) * 8;
            let rotate = (Math.random() - 0.5) * 10;
            element.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
        }, 50); // Faster, more chaotic shaking
    }
});
