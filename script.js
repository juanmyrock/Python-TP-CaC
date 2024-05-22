/******** Funcion de Like ********/
const likeButtons = document.querySelectorAll(".card__btn");

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__btn--like");
  });
});

const likeButtons2 = document.querySelectorAll(".card2_btn");

likeButtons2.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card2_btn--like");
  });
});

/********** Validaciones de Formulario Principal ***********/

/**** RadioButtons ****/

const idaVueltaRadio = document.querySelector('input[name="ida-vuelta"][value="ida-vuelta"]');
const soloIdaRadio = document.querySelector('input[name="ida-vuelta"][value="solo-ida"]');
const fechaVueltaInput = document.getElementById("vuelta");
// Función para deshabilitar o habilitar el input de fecha de vuelta
const toggleFechaVueltaInput = () => {
    fechaVueltaInput.disabled = soloIdaRadio.checked;
};
// Llamamos a la función al cargar la página para establecer el estado inicial
toggleFechaVueltaInput();
// Agregamos un evento de cambio a los radio buttons para llamar a la función toggleFechaVueltaInput
idaVueltaRadio.addEventListener('change', toggleFechaVueltaInput);
soloIdaRadio.addEventListener('change', toggleFechaVueltaInput);

/**** Validaciones del Formulario de Búsqueda de Vuelos ****/
const form = document.querySelector('.formulario');
const origenInput = document.getElementById('id_origen');
const destinoInput = document.getElementById('id_destino');
const idaInput = document.getElementById('ida');
const vueltaInput = document.getElementById('vuelta');
const radioButtonIdaVuelta = document.querySelector('input[value="ida-vuelta"]');
const btnBuscar = document.querySelector('.btnBuscar button');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Si el radio button de ida y vuelta está seleccionado, verifica la fecha de vuelta
    if (radioButtonIdaVuelta.checked && !vueltaInput.value) {
      alert('Por favor, seleccione una fecha de vuelta.');
      return;
    }
    // Verifica que los campos obligatorios estén completos
    if (!origenInput.value || !destinoInput.value || !idaInput.value) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    // Si todos los campos requeridos están completos, envía el formulario
    this.submit();
});