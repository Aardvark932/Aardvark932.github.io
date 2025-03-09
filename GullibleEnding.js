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
            message.innerHTML = `<h2>Result: <span style="color: red;">0 IQ</span></h2><p>Congratulations! You fell for the most obvious trick in the world. Or... You just thought this was the 'button above'. No, there's nothing here. But They're not telling you everything, you know. The button you're looking for is further up, and i don't know what's in there, but after you've finished, there's another secret button below.</p>`;
        }, 1000);
    }

    updateProgress();
});
