let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// for India
setInterval(() => {
    var d = new Date()

    // writing time in proper format 
    let hours = d.getHours()
    let mins = d.getMinutes()
    let secs = d.getSeconds()
        //making 12 hr format
    var mer;
    if (hours < 12) { mer = "AM" } else {
        hours -= 12;
        mer = "PM"
    }
    if (hours == 0) { hours = 12 }
    //adding zeros if hours,mins,secs is between 1-9
    if (hours < 10) { hours = "0" + hours }
    if (mins < 10) { mins = "0" + mins }
    if (secs < 10) { secs = "0" + secs }

    document.getElementById('IndTime').innerHTML = hours + ":" + mins + ":" + secs + " " + mer;
    document.getElementById('IndDate').innerHTML = d.getDate() + " " + months[d.getMonth()] + "," + d.getFullYear();
    document.getElementById('IndDay').innerHTML = days[d.getDay()];
}, 1000)

// for GMT 
setInterval(() => {
    var d = new Date()

    // writing time in proper format 
    hours = d.getUTCHours()
    mins = d.getUTCMinutes()
    secs = d.getUTCSeconds()
        //making 12 hr format
    var mer;
    if (hours < 12) { mer = "AM" } else {
        hours -= 12;
        mer = "PM"
    }
    if (hours == 0) { hours = 12 }
    //adding zeros if hours,mins,secs is between 1-9
    if (hours < 10) { hours = "0" + hours }
    if (mins < 10) { mins = "0" + mins }
    if (secs < 10) { secs = "0" + secs }

    document.getElementById('UTCTime').innerHTML = hours + ":" + mins + ":" + secs + " " + mer;
    document.getElementById('UTCDate').innerHTML = d.getUTCDate() + " " + months[d.getUTCMonth()] + "," + d.getUTCFullYear();
    document.getElementById('UTCDay').innerHTML = days[d.getUTCDay()];
}, 1000)