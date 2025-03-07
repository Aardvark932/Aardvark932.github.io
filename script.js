document.addEventListener("DOMContentLoaded", function () {
    var audioFrame = document.getElementById("annoying-audio");
    audioFrame.src += "&autoplay=1"; // Forces autoplay again if blocked

    function typeWords(element, text, speed) {
        let words = text.split(" "); // Split into individual words
        element.innerHTML = ""; // Empty the element first
        let i = 0;

        function addWord() {
            if (i < words.length) {
                element.innerHTML += words[i] + " "; // Add one word at a time
                i++;
                setTimeout(addWord, speed);
            }
        }
        addWord();
    }

    // Select all text elements and apply the effect
    document.querySelectorAll("h1, h2, p, li, a.button").forEach((el) => {
        let text = el.innerHTML;
        el.innerHTML = "";
        typeWords(el, text, 500); // Adjust speed (higher = slower)
    });
});