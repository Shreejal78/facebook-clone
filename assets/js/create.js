let day = document
    .getElementById('day')
let mon = document
    .getElementById("month")
let yrs = document.getElementById(
    "year")
let selDay;
let dayCount = [0, 31, 28, 31,
    30, 31, 30, 31, 31, 30,
    31, 30, 31
]



for (j = 1930; j <= 2026; j++) {
    yrs.insertAdjacentHTML(
        "beforeend",
        `<option value="${j}">${j}</option>`
    )
}
for (i = 1; i <= 31; i++) {
    day.insertAdjacentHTML(
        "beforeend",
        `<option value="${i}">${i}</option>`
    )
}

day.addEventListener("change",
    () => {
        selDay = day.value
    })
mon.addEventListener("change",
    () => {
        day.innerHTML = ""
        let a = mon.value
        day.insertAdjacentHTML(
            "beforeend",
            `<option value="0" disabled selected>Day</option>`
        )
        for (i = 1; i <=
            dayCount[a]; i++
        ) {
            if (selDay ==
                i) {
                day.insertAdjacentHTML(
                    "beforeend",
                    `<option value="${i}" selected>${i}</option>`
                )
                continue
            }
            day.insertAdjacentHTML(
                "beforeend",
                `<option value="${i}">${i}</option>`
            )
        }
        
        if(selDay > dayCount[a]){
            day[dayCount[a]].selected = "true"
            selDay = dayCount[a]
        }
    })

function validate() {
   return true 
}