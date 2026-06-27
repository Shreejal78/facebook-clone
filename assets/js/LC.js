
function updateLabelStates() {
    let inpLogin = document.querySelectorAll(".inp-login");

    inpLogin.forEach((inp) => {
        let lbl = inp.parentElement.querySelector(".inp-lbl");

        if (lbl) {
            if (inp.value != "" && inp.value !== "0") {
                lbl.classList.add("translate");
            } else {
                lbl.classList.remove("translate");
            }
        }
    });
}

let inputsAndSelects = document.querySelectorAll(".inp-login");
if (inputsAndSelects.length > 0) {
    inputsAndSelects.forEach((element) => {
        element.addEventListener("input", updateLabelStates);
        element.addEventListener("change", updateLabelStates);
        element.addEventListener("blur", updateLabelStates); 
    });
}

let day = document.getElementById('day');
let mon = document.getElementById("month");
let yrs = document.getElementById("year");

if (day && mon && yrs) {
    let selDay;
    let dayCount = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let j = 1930; j <= 2026; j++) {
        yrs.insertAdjacentHTML("beforeend", `<option value="${j}">${j}</option>`);
    }
    for (let i = 1; i <= 31; i++) {
        day.insertAdjacentHTML("beforeend", `<option value="${i}">${i}</option>`);
    }

    day.addEventListener("change", () => {
        selDay = day.value;
    });
    mon.addEventListener("change", () => {
        day.innerHTML = "";
        let a = mon.value;

        day.insertAdjacentHTML("beforeend", `<option value="" disabled selected></option>`);
        
        for (let i = 1; i <= dayCount[a]; i++) {
            if (selDay == i) {
                day.insertAdjacentHTML("beforeend", `<option value="${i}" selected>${i}</option>`);
                continue;
            }
            day.insertAdjacentHTML("beforeend", `<option value="${i}">${i}</option>`);
        }
        
        if (selDay > dayCount[a]) {
            day[dayCount[a]].selected = "true";
            selDay = dayCount[a];
        }
        updateLabelStates();
    });
}

window.addEventListener("DOMContentLoaded", () => {
    updateLabelStates();
});
//sometinidf
function validate() {
   return true;
}
