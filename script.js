document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btnEvento");
    const mensaje = document.getElementById("mensaje");

    boton.addEventListener("click", () => {
        mensaje.classList.remove("d-none");
        mensaje.textContent = "¡Has hecho clic en el botón!";
    });
});
