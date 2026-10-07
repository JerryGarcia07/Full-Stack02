const filter = document.querySelector("#filter-location");
const mensaje = document.querySelector("#filter-selected-value");

filter.addEventListener("change", function () {
  const jobs = document.querySelectorAll(".job-listing-card");
  const selecvalue = filter.value;

  if (selecvalue) {
    mensaje.textContent = `has selecionado: ${selecvalue}`;
  } else {
    mensaje.textContent = ``;
  }
  jobs.forEach((job) => {
    const modalidad = job.getAttribute("data-modalidad");
    const isShow = selecvalue === "" || selecvalue === modalidad;
    job.classList.toggle("is-hidden", isShow === false);
  });
});
