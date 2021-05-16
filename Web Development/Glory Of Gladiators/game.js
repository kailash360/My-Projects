console.log("JS file integrated successfully")
setTimeout(() => {
    let introAudio = new Audio("media/intro.mp3")
    alert("Made by 𝑲𝒂𝒊𝒍𝒂𝒔𝒉 𝑲𝒆𝒋𝒓𝒊𝒘𝒂𝒍")
    introAudio.play();
}, 900);

//For the introduction animation:
//When user clicks on Start,the introductory message will move upwards
let intro = document.querySelector(".starting")
let playBtn = document.getElementById("playBtn")
let score = document.querySelector(".score")
let gladiator = document.querySelector(".person");
let attacker = document.querySelector(".attacker");
let scoreCount = 0
score.innerHTML = scoreCount

// Audios for different moments
let battlefieldAudio = new Audio('media/battlefield.mp3')
let defeatAudio = new Audio('media/defeat.mp3')

// Initial Animations and proceedings
playBtn.addEventListener('click', playIntroAnimation, false)
async function playIntroAnimation() {
    intro.classList.add("startingAnimation")
    setTimeout(() => {
        intro.style.display = "none"
        introAudio.pause()
    }, 1000);
    setTimeout(() => {
        score.style.display = "block"

    }, 1100);
    setTimeout(() => {
        gladiator.style.display = "block";
        battlefieldAudio.play()
    }, 1200)
    setTimeout(() => {
        gladiator.classList.remove("personFall")
        attacker.style.display = "block";
        startPlay = true;
    }, 2000)
    setTimeout(() => {
        setInterval(checkCollision, 10);
    }, 1800)
}

//Movements of gladiator
document.onkeydown = function(e) {
    console.log(e.key)
        // To make the gladiator jump 
    if (e.key == 'ArrowUp') {
        gladiator = document.querySelector(".person");
        //Make the gladiator jump upwards
        gladiator.classList.add("personJump")
        setTimeout(() => {
            gladiator.classList.remove("personJump")
        }, 1200);
    }
    // To make the gladiator move right 
    else if (e.key == 'ArrowRight') {
        gladiator = document.querySelector(".person");
        position = parseInt(window.getComputedStyle(gladiator, null).getPropertyValue("left"))
        gladiator.style.left = position + 25 + "px";
    }
    // To make the gladiator move left
    else if (e.key == 'ArrowLeft') {
        gladiator = document.querySelector(".person");
        position = parseInt(window.getComputedStyle(gladiator, null).getPropertyValue("left"))
        gladiator.style.left = position - 25 + "px";
    }
}

//Function to check if there is any collision
function checkCollision() {
    let cross = true;
    attacker = document.querySelector(".attacker");
    gladiator = document.querySelector(".person");

    //Calculate distance in X-axis
    let attackerX = parseFloat(window.getComputedStyle(attacker, null).getPropertyValue("left"))
    let gladiatorX = parseFloat(window.getComputedStyle(gladiator, null).getPropertyValue("left"))
    let dx = Math.abs(attackerX - gladiatorX);

    let dy = parseFloat(window.getComputedStyle(gladiator, null).getPropertyValue("bottom"))

    //Checking for collision
    if (dx < 7 && dy < 50) {
        attacker.style.left = (window.getComputedStyle(attacker, null).getPropertyValue("left"));
        attacker.classList.remove("attackerAnimate")
        gladiator.classList.remove("personJump")
        let gameOver = document.querySelector(".gameOver")
        console.log(gameOver)
        gameOver.style.display = "block"
        defeatAudio.play();
        battlefieldAudio.pause()
    } else if (cross) {
        setTimeout(() => {
            score = document.querySelector(".score")
            scoreCount++;
            score.innerHTML = scoreCount;
            cross = false;
        }, 1000);

    }
}