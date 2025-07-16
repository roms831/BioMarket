// MENÚ RESPONSIVO
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");

if (header && navMenu) {
  const menuToggleBtn = document.createElement("button");
  menuToggleBtn.innerHTML = "☰";
  menuToggleBtn.classList.add("menu-toggle-btn");
  menuToggleBtn.setAttribute("aria-label", "Abrir menú");
  header.querySelector(".container").insertBefore(menuToggleBtn, header.querySelector("nav"));

  menuToggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("menu-visible");
  });
}

// MODALES PARA PRODUCTOS
document.querySelectorAll(".card").forEach((card) => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    const titulo = card.querySelector("h3").textContent;
    const mensaje = "Este es un producto ecológico ideal para tu día a día. ¡Conócelo más!";
    crearModal(titulo, mensaje);
  });
});

// FUNCIÓN PARA CREAR MODALES
function crearModal(titulo, mensaje) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <h3>${titulo}</h3>
      <p>${mensaje}</p>
      <button class="cerrar-modal">Cerrar</button>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector(".cerrar-modal").addEventListener("click", () => {
    modal.remove();
  });
}

// FORMULARIO: solo si existe
const formulario = document.querySelector("form");
if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    const confirmar = confirm(`¿Deseas enviar tu mensaje?\n\nNombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`);
    if (confirmar) {
      crearModal("Mensaje Enviado", `
        ¡Gracias por escribirnos, <strong>${nombre}</strong>!<br><br>
        Hemos recibido tu mensaje:<br><em>"${mensaje}"</em><br><br>
        Te responderemos pronto al correo: <strong>${correo}</strong>.
      `);
      this.reset();
    } else {
      alert("Envío cancelado.");
    }
  });
}

// MENSAJE DINÁMICO EN INICIO
const intro = document.querySelector("#inicio p");
if (intro) {
  intro.innerHTML += " 🌿 ¡Gracias por apoyar el consumo responsable!";
}



