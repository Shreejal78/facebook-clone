let profileBtn = document.getElementById("profile-btn")
let proMenu = document.getElementById("profile-menu")

profileBtn.addEventListener('click',()=>{
    if(proMenu.style.display == 'none'){
        proMenu.style.display = 'block'        
    }else{
        proMenu.style.display = 'none'
    }
})

let conf = document.getElementById("confirmbtn");
let del = document.getElementById("deletebtn")
let reqBox = document.getElementById("reqbox")
conf.addEventListener("click",()=>{
    conf.innerText = 'Friend'
    del.style.display = 'none'
})

del.addEventListener("click",()=>{
    reqBox.style.display = 'none'
    document.getElementById("freindReqHR").remove()
})


