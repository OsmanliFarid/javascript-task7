const clockTitle = document.querySelector("#clockTitle")




setInterval(() => {
    const date = new Date()
let minutes = date.getMinutes()
let hours = date.getHours()
let second = date.getSeconds()
clockTitle.innerText = `${hours}:${minutes}:${second}`
if(second < 10){
    clockTitle.innerText = `${hours}:${minutes}:0${second}`
}

}, 1000);   

