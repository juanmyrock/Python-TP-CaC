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




/**** Función fecha actual ****/

// Obtiene la fecha actual
const today = new Date();
// Formatea la fecha actual para establecerla en #ida
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Suma 1 porque que los meses van de 0 a 11
const day = String(today.getDate()).padStart(2, '0');
const formattedToday = `${year}-${month}-${day}`;

// Establece el valor de #ida
document.getElementById('ida').value = formattedToday;

// Obtiene la fecha para el día siguiente
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

// Formatea la fecha del día siguiente para establecerla en #vuelta
const nextDay = String(tomorrow.getDate()).padStart(2, '0');
const formattedTomorrow = `${year}-${month}-${nextDay}`;

// Establece el valor de #vuelta
document.getElementById('vuelta').value = formattedTomorrow;




/**** Función para restringir la fecha de ida ****/

// Obtiene el elemento del campo #ida
const idaInput2 = document.getElementById('ida');
// Obtiene el elemento para mostrar mensajes de error
const errorMessages = document.getElementById('errorMessages');

// Función para manejar el evento de cambio en el campo #ida
function handleIdaDateChange() {
    // Obtiene la fecha seleccionada en el campo #ida
    const selectedDate = new Date(idaInput.value);
  
    // Obtiene la fecha actual
    const today = new Date();

    // Limpia mensajes de error previos
    errorMessages.innerHTML = '';

    // Compara si la fecha seleccionada es anterior a la fecha actual
    if (selectedDate < today) {
        // Si la fecha seleccionada es anterior, establece la fecha actual como valor del campo #ida
        idaInput.value = today.toISOString().slice(0, 10); // Establece el formato YYYY-MM-DD
        // Agrega un mensaje de error
        errorMessages.innerHTML = 'La fecha de ida no puede ser anterior a la fecha actual';
    }
}
// Agregar un evento de escucha al campo #ida para el evento de cambio
idaInput.addEventListener('change', handleIdaDateChange);


/** Función para restringir la fecha de vuelta **/

// Obtiene el elemento del campo #vuelta
const vueltaInput2 = document.getElementById('vuelta');

// Función para manejar el evento de cambio en el campo #vuelta
function handleVueltaDateChange() {
    // Obtiene las fechas seleccionadas en los campos #ida y #vuelta
    const idaDate = new Date(idaInput.value);
    const vueltaDate = new Date(vueltaInput.value);

    // Limpia mensajes de error previos
    errorMessages.innerHTML = '';

    // Verifica si la fecha de vuelta es igual o menor que la fecha de ida
    if (vueltaDate <= idaDate) {
        // Si la fecha de vuelta es igual o menor, muestra mensaje de error
        errorMessages.innerHTML = 'La fecha de vuelta debe ser posterior a la fecha de ida.';
        // Establece la fecha de vuelta como un día después de la fecha de ida
        vueltaInput.value = new Date(idaDate.getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10); // Añade un día (en milisegundos)
    }
}
// Agrega un evento de escucha al campo #vuelta para el evento de cambio
vueltaInput.addEventListener('change', handleVueltaDateChange);
// Función para manejar el evento blur en el campo #vuelta
function handleVueltaBlur() {
  // Limpia mensajes de error
  errorMessages.innerHTML = '';
}
// Agrega un evento de escucha al campo #vuelta para el evento blur
vueltaInput.addEventListener('blur', handleVueltaBlur);
