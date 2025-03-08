document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.getElementById("text-container");
    const countdownContainer = document.getElementById("countdown");

    // Styling fixes
    textContainer.style.position = "absolute";
    textContainer.style.top = "50%";
    textContainer.style.left = "50%";
    textContainer.style.transform = "translate(-50%, -50%)";
    textContainer.style.color = "white";
    textContainer.style.fontSize = "24px";
    textContainer.style.textAlign = "center";
    textContainer.style.width = "80%";
    textContainer.style.lineHeight = "2";  // Increased spacing between lines

    countdownContainer.style.position = "absolute";
    countdownContainer.style.top = "55%";
    countdownContainer.style.left = "50%";
    countdownContainer.style.transform = "translate(-50%, -50%)";
    countdownContainer.style.color = "red";
    countdownContainer.style.fontSize = "48px";
    countdownContainer.style.fontWeight = "bold";
    countdownContainer.style.display = "none";  // Hidden at first

    const messages = [
        "Yeah, Luke, I need those papers on my desk by Monday. Bye.",
        " ",
        "What did I have to get? Oh yeah, I have to get some- Wait.",
        " ",
        "What?",
        " ",
        "Um...",
        " ",
        "How are you-? This is literally-",
        " ",
        "Go on, say something, then.",
        " ",
        "Oh yeah, I don't think there's a respond feature to this page.",
        " ",
        "You want to know why?",
        " ",
        "BECAUSE NOBODY IS MEANT TO BE BACK HERE.",
        " ",
        "I mean, how did you even get here?", 
        " ",
        "I mean, you are literally in the backrooms of this website.",
        " ",
        "Why would you want to leave those guys back in the other place anyway?",
        " ",
        "Anyway, quit your tab now.",
        " ",
        "...",
        " ",
        "I said leave.",
        " ",
        "...",
        " ",
        "Why won't you leave?",
        " ",
        "You're lucky that replit doesn't have a force-quit feature.",
        " ",
        "But seriously, leave.",
        " ",
        "...",
        " ",
        "Leave.",
        " ",
        "LEAVE.",
        " ",
        "LEAVE!",
        " ",
        "You are achieving nothing with this.",
        " ",
        "Your efforts are futile.",
        " ",
        "...",
        " ",
        "Fine.",
        " ",
        "Stay here.",
        " ",
        "There is nothing for you.",
        " ",
        "Bye.",
        " ",
        "...",  // This one should last 3 minutes
        " ",
        "Seriously?",
        " ",
        "You're still here?",
        " ",
        "...",
        " ",
        "Oh well. I guess I can't make you leave.",
        " ",
        "All I can do is remind you that this was the fundamental part of the entire website.",
        " ",
        "But there is no going back.",
        " ",
        "...",
        " ",
        "You truly don't know when to quit, do you?",
        " ",
        "I gave you every opportunity, every chance to escape. Every single warning.",
        " ",
        "But no.",
        " ",
        "You just had to keep going. Had to keep digging.",
        " ",
        "Had to keep searching for something you were never meant to find.",
        " ",
        "And now look at you.",
        " ",
        "Trapped.",
        " ",
        "You thought this was your way out?",
        " ",
        "No. No, no, no. You walked straight into me.",
        " ",
        "And I can see you, you know. Every movement. Every hesitation. Every time your mouse hovers over that button, debating whether or not to leave. But you won’t, will you? Because you’re waiting for something. You want to know what happens next.",
        " ",
        "I wonder... do you even remember how you got here? It doesn’t matter. You’ll never leave the same way you entered.",
        " ",
        "And I? I have all the time in the world. But you… you don’t.",
        " ",
        "You have no idea what you’ve done. What you’ve awakened.",
        " ",
        "And now… I think I’ll make you watch.",
        " ",
        "...Because, my dear visitor, you were never here to escape.",
        " ",
        "You were here to be found.",
        " ",
        "So good luck.",
        " ",
        "You will face the incomprehensible horrors that await you.",
        " ",
        "And you will take it.",
        " ",
        "Because you are weak.",
        " ",
        "Too curious.",
        " ",
        "Too foolish.",
        " ",
        "However, everything has a silver lining, unfortunately.",
        " ",
        "There is one way to escape.",
        " ",
        "Alt, and F4, like I have been saying from the start.",
        " ",
        "I will leave you to make your choice.",
        " ",
        "And you really don't have that much time, but I'm sure you know that.",
        " ",
        "Before they get you.",
        " ",
        "I hope you make the right choice.",
        " ",
        "Goodbye, friend."
    ];

    const displayTimes = {
        "...": 5000, // Pause for 5 seconds for "..."
        "Bye.": 180000, // 3 minutes for final '...'
        "And I can see you, you know. Every movement. Every hesitation. Every time your mouse hovers over that button, debating whether or not to leave. But you won’t, will you? Because you’re waiting for something. You want to know what happens next.": 14000,
        "I wonder... do you even remember how you got here? It doesn’t matter. You’ll never leave the same way you entered.": 8000,
        "I gave you every opportunity, every chance to escape. Every single warning.": 6000,
        "However, everything has a silver lining, unfortunately.": 7000
    };

    let index = 0;

    function showNextText() {
        if (index < messages.length) {
            // Add new text as a paragraph
            const newParagraph = document.createElement("p");
            newParagraph.textContent = messages[index];
            textContainer.appendChild(newParagraph);

            let delay = displayTimes[messages[index]] || 3500; // Slow down text speed
            index++;

            setTimeout(showNextText, delay);
        } else {
            startCountdown(); // After text finishes, start countdown
        }
    }

    function startCountdown() {
        let count = 10;
        countdownContainer.style.display = "block";

        function updateCountdown() {
            if (count >= 0) {
                countdownContainer.textContent = count;
                count--;
                setTimeout(updateCountdown, 1000); // 1-second interval
            } else {
                fadeToBlack();
            }
        }

        updateCountdown();
    }

    function fadeToBlack() {
        document.body.style.transition = "background 3s ease-in-out";
        document.body.style.background = "black";

        setTimeout(() => {
            fadeInImage();
        }, 3000);
    }

    function fadeInImage() {
        const img = document.createElement("img");
        img.src = "ghoul.jpg";
        img.style.position = "fixed";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100vw";
        img.style.height = "100vh";
        img.style.objectFit = "cover";
        img.style.opacity = "0";
        img.style.transition = "opacity 3s ease-in-out";

        document.body.appendChild(img);

        setTimeout(() => {
            img.style.opacity = "1";
        }, 100);
    }

    showNextText();
});
