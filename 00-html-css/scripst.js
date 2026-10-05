// const botons = document.querySelectorAll(".button-apply-job");

// botons.forEach((boton) => {
//   boton.addEventListener("click", function () {
//     boton.textContent = "!Aplicado¡";
//     boton.classList.add("ispplied");
//   });
// });

// console.log("hola");

const jobsListenSections = document.querySelector(".jobs-listings");
jobsListenSections?.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("button-apply-job")) {
    element.textContent = "!Aplicado¡";
    element.classList.add("ispplied");
    element.disabled = true;
  }
});
