let inpLbl = document.querySelectorAll(
  ".inp-lbl")
let inpLogin = document
  .querySelectorAll(
    ".inp-login")

inpLogin.forEach((inp, i) => {
  inp.addEventListener("input",
  () => {
      if (inp.value != "") {
        inpLbl[i].classList.add(
          "translate")
      } else {
        inpLbl[i].classList
          .remove("translate")
      }
    })
  
})