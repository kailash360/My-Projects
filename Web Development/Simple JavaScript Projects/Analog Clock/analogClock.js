console.log("JS integrated successfully")

//Geting hands of the clock
let hourHand = document.querySelector(".hourHand")
let minHand = document.querySelector(".minHand")
let secHand = document.querySelector(".secHand")

//Using setInterval function to run the clock 
//according to current time

setInterval(() => {
    // Getting the current time 
    let date = new Date()
    let hours = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    console.log(date)

    //Calculating the degree to rotate each hand
    let hourAngle = (30 * hours) + (mins / 2)
    let minAngle = 6 * mins
    let secAngle = 6 * secs

    //Adding rotate property to the hands,and setting the angles
    hourHand.style.transform = `rotate(${hourAngle}deg)`
    minHand.style.transform = `rotate(${minAngle}deg)`
    secHand.style.transform = `rotate(${secAngle}deg)`

    //Play ticking audio
    let audio = new Audio("clockTick.mp3")
    audio.play()
}, 1000);