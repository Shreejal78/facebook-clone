let profileBtn = document
    .getElementById("profile-btn")
let proMenu = document.getElementById(
    "profile-menu")

profileBtn.addEventListener('click',
    () => {
        if (proMenu.style.display ==
            'none') {
            proMenu.style.display =
                'block'
        } else {
            proMenu.style.display =
                'none'
        }
    })

let conf = document.getElementById(
    "confirmbtn");
let del = document.getElementById(
    "deletebtn")
let reqBox = document.getElementById(
    "reqbox")
conf.addEventListener("click", () => {
    conf.innerText = 'Friend'
    del.style.display = 'none'
})

del.addEventListener("click", () => {
    reqBox.style.display =
        'none'
    document.getElementById(
            "freindReqHR")
        .remove()
})


let toggleImg = document
    .querySelectorAll(".toggleImg")
let theme = localStorage.getItem(
        "theme") || localStorage
    .setItem("theme", "light")
let toggleBtn = document.getElementById(
    "theme")
toggleBtn.addEventListener("click",
() => {
        if (localStorage.getItem(
                "theme") ==
            "light") {
            toggleImg.forEach(
                t_img => {
                    t_img
                        .classList
                        .add(
                            "themeImg"
                        )
                })
            document.documentElement
                .classList.add(
                    "dark")
            localStorage.setItem(
                "theme", "dark")
            toggleBtn.innerText =
                'Theme [Dark]'
        } else {
            toggleImg.forEach(
                t_img => {
                    t_img
                        .classList
                        .remove(
                            "themeImg"
                        )
                })
            document.documentElement
                .classList.remove(
                    "dark")
            localStorage.setItem(
                "theme", "light"
            )
            toggleBtn.innerText =
                'Theme [Light]'
            
        }
    })

window.addEventListener("load", () => {
    if (localStorage.getItem(
            "theme") ==
        "dark") {
        toggleImg.forEach(
            t_img => {
                t_img
                    .classList
                    .add(
                        "themeImg"
                    )
            })
        document.documentElement
            .classList.add(
                "dark")
        toggleBtn.innerText =
            'Theme [Dark]'
    } else {
        toggleImg.forEach(
            t_img => {
                t_img
                    .classList
                    .remove(
                        "themeImg"
                    )
            })
        document.documentElement
            .classList.remove(
                "dark")
        toggleBtn.innerText =
            'Theme [Light]'
        
    }
})