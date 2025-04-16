const imgBackColor = document.querySelector("#imgBackColor")
const nextBtn = document.querySelector("#nextBtn")
const arr = ["./images/photo1.jpg","./images/photo2.jpg","./images/photo3.jpg"]
    let index = 0;
    imgBackColor.style.backgroundImage = `url(${arr[index]})`

setInterval(() =>{
    if(index === arr.length - 1){
        index = 0
    }
    index++
    imgBackColor.style.backgroundImage = `url(${arr[index]})`

},3000)
nextBtn.addEventListener("click",(e) =>{
    index++
   if(index === arr.length - 1){
    e.target.setAttribute("disabled",true)
    imgBackColor.style.backgroundImage = `url(${arr[index]})`
   }
   
})
