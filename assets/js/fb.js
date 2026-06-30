

let toggleImg = document.querySelectorAll(".toggleImg");
let theme =
    localStorage.getItem("theme") || localStorage.setItem("theme", "light");
let toggleBtn = document.getElementById("theme");
let toggleIcon = document.querySelector(".toggleIcon");
toggleBtn.addEventListener("click", () => {
    if (localStorage.getItem("theme") == "light") {
        toggleImg.forEach(t_img => {
            t_img.classList.add("themeImg");
        });
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        toggleIcon.classList.add("darken");
    } else {
        toggleImg.forEach(t_img => {
            t_img.classList.remove("themeImg");
        });
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        toggleIcon.classList.remove("darken");
    }
});

window.addEventListener("load", () => {
    if (localStorage.getItem("theme") == "dark") {
        toggleImg.forEach(t_img => {
            t_img.classList.add("themeImg");
        });
        document.documentElement.classList.add("dark");
        toggleIcon.classList.add("darken");
    } else {
        toggleImg.forEach(t_img => {
            t_img.classList.remove("themeImg");
        });
        document.documentElement.classList.remove("dark");
        toggleIcon.classList.remove("darken");
    }
});

let profileBtn = document.getElementById("profile-btn");
let proMenu = document.getElementById("profile-menu");

profileBtn.addEventListener("click", () => {
    if (proMenu.style.display == "none") {
        proMenu.style.display = "block";
    } else {
        proMenu.style.display = "none";
    }
});

let conf = document.getElementById("confirmbtn");
let del = document.getElementById("deletebtn");
let reqBox = document.getElementById("reqbox");
conf.addEventListener("click", () => {
    conf.innerText = "Friend";
    del.style.display = "none";
});

del.addEventListener("click", () => {
    reqBox.style.display = "none";
    document.getElementById("freindReqHR").remove();
});


let friendContacts = document.querySelectorAll(".friendsContact");
let closeMsg = document.getElementById("closeMsg");
let msgBox = document.querySelector(".messageBox");
let pp = document.getElementById("msgProfilePic");
let msgUsrName = document.getElementById("usrName");

friendContacts.forEach(friend => {
    friend.addEventListener("click", () => {
        msgBox.style.display = "block";

        //Only here for frontEND --- Change in future From DB
        pp.src = friend.children[0].src;
        msgUsrName.innerText = friend.children[1].innerText;
    });
});

closeMsg.addEventListener("click", () => {
    msgBox.style.display = "none";
});

let likeBtns = document.querySelectorAll(".like");
likeBtns.forEach(likeBtn => {
    let likeImg = likeBtn.querySelector(".toggleImg");
    let likeText = likeBtn.querySelector(".like-text");
    likeBtn.addEventListener("click", e => {
        if (likeText.innerText == "Like") {
            likeImg.src = "./assets/img/liked.png";
            likeText.innerText = "Liked";
            likeImg.classList.remove("themeImg");
        } else {
            likeImg.src = "./assets/img/like.PNG";
            likeText.innerText = "Like";
            likeImg.classList.add("themeImg");
          //test push without repeat auth final check done
          
        }
    });
});

let comments = document.querySelectorAll('.comment')
comments.forEach( com => {
  com.addEventListener('click',()=>{
    console.log('come')
  })
})


console.log('sdfads')

