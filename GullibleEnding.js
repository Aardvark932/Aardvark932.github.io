document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress");
    const percentageText = document.getElementById("percentage");
    const loadingText = document.getElementById("loading-text");
    const message = document.getElementById("message");

    let percentage = 0;

    function updateProgress() {
        if (percentage < 100) {
            percentage += Math.floor(Math.random() * 10) + 5; // Increase by a random value between 5-15%
            if (percentage > 100) percentage = 100; // Ensure it doesn't go over 100

            progressBar.style.width = percentage + "%";
            percentageText.textContent = percentage + "%";

            setTimeout(updateProgress, 500); // Speed of loading bar
        } else {
            showMessage();
        }
    }

    function showMessage() {
        loadingText.textContent = "Analysis Complete!";
        message.classList.remove("hidden");

        setTimeout(() => {
            message.innerHTML = `<h2>Result: <span style="color: red;">0 IQ</span></h2><p>Congratulations! You fell for the most obvious trick in the world.</p>`;
        }, 1000);
    }

    updateProgress();
});
