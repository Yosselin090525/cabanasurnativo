document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("formContacto");
const mensajeExito = document.getElementById("mensaje-exito");
form.addEventListener("submit", function (e) {
e.preventDefault();
if (validarFormulario()) {
const nombre = document.getElementById("nombre").value.trim();
const correo = document.getElementById("correo").value.trim();
const mensaje = document.getElementById("mensaje").value.trim();
guardarDatos(nombre, correo, mensje);
mostrarMensajeExito("Gracias por tu mensaje! Te contactaremos pronto");
form.reset(); //Limpia los campos del formulario 
} else {
mostrarMensajeExito("Por favor completa correctamente todos los campos.");
}
});
});

//Validacion de formulario (nombre,correo,mensaje)
function validarFormulario(){
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje= document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
        return false;
    }

}